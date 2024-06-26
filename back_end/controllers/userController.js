const Cadastro = require('../models/cadastrarModel');

const registerUsuario = async (req, res, next) => {
    try {
        const { firstName, lastName, cpf, email, dateOfBirth, zipCode, address, phoneNumber, password, confirmPassword, employeeId } = req.body;
        if (password !== confirmPassword) {
            return res.status(400).json({ error: 'Senhas não coincidem' });
        }

        const cadastro = await Cadastro.create(req.body);
        res.status(201).json({ cadastro });
    } catch (error) {
        console.error('Erro ao cadastrar usuário:', error);
        next(error);
    }
};

const listUsuarios = async (req, res, next) => {
    try {
        const cadastros = await Cadastro.find();
        res.status(200).json({ cadastros });
    } catch (error) {
        console.error('Erro ao listar usuários:', error);
        next(error);
    }
};

const getUsuarioById = async (req, res, next) => {
    try {
        const cadastro = await Cadastro.findById(req.params.id);
        res.status(200).json({ cadastro });
    } catch (error) {
        console.error('Erro ao listar usuário por ID:', error);
        next(error);
    }
};

const updateUsuario = async (req, res, next) => {
    try {
        const cadastro = await Cadastro.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json({ cadastro });
    } catch (error) {
        console.error('Erro ao atualizar usuário:', error);
        next(error);
    }
};

const deleteUsuario = async (req, res, next) => {
    try {
        await Cadastro.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Deletado com sucesso' });
    } catch (error) {
        console.error('Erro ao deletar usuário:', error);
        next(error);
    }
};

const searchUsuario = async (req, res, next) => {
    try {
        const { firstName } = req.query;
        const cadastros = await Cadastro.find({ firstName });
        res.status(200).json({ cadastros });
    } catch (error) {
        console.error('Erro ao buscar usuário:', error);
        next(error);
    }
};

const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const cadastro = await Cadastro.findOne({ email, password });
        if (cadastro) {
            res.status(200).json({ cadastro });
        } else {
            res.status(400).json({ error: 'Usuário não encontrado' });
        }
    } catch (error) {
        console.error('Erro ao logar usuário:', error);
        next(error);
    }
};

const forgotPassword = async (req, res, next) => {
    try {
        const { email } = req.body;
        const cadastro = await Cadastro.findOne({ email });
        if (cadastro) {
            // Lógica para enviar email de recuperação de senha
            res.status(200).json({ message: 'Email enviado para recuperação de senha' });
        } else {
            res.status(400).json({ error: 'Email não cadastrado' });
        }
    } catch (error) {
        console.error('Erro ao recuperar senha:', error);
        next(error);
    }
};

const resetPassword = async (req, res, next) => {
    try {
        const { email, password, confirmPassword } = req.body;
        if (password !== confirmPassword) {
            return res.status(400).json({ error: 'Senhas não coincidem' });
        }

        const cadastro = await Cadastro.findOneAndUpdate({ email }, { password });
        if (cadastro) {
            res.status(200).json({ message: 'Senha alterada com sucesso' });
        } else {
            res.status(400).json({ error: 'Email não cadastrado' });
        }
    } catch (error) {
        console.error('Erro ao resetar senha:', error);
        next(error);
    }
};

const changePassword = async (req, res, next) => {
    try {
        const { email, oldPassword, newPassword, confirmPassword } = req.body;
        if (newPassword !== confirmPassword) {
            return res.status(400).json({ error: 'Senhas não coincidem' });
        }

        const cadastro = await Cadastro.findOne({ email, password: oldPassword });
        if (cadastro) {
            cadastro.password = newPassword;
            await cadastro.save();
            res.status(200).json({ message: 'Senha alterada com sucesso' });
        } else {
            res.status(400).json({ error: 'Usuário não encontrado' });
        }
    } catch (error) {
        console.error('Erro ao alterar senha:', error);
        next(error);
    }
};

module.exports = {
    registerUsuario,
    listUsuarios,
    getUsuarioById,
    updateUsuario,
    deleteUsuario,
    searchUsuario,
    login,
    forgotPassword,
    resetPassword,
    changePassword
};
