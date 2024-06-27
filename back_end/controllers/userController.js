/* eslint-disable no-undef */
const userModel = require('../models/cadastrarModel'); // Atualizado o nome da variável para evitar conflito
const admModel = require('../models/cadastrarAdmin');
const userServices = require('../service/userService');
const jwt = require('jsonwebtoken');
const SECRET_KEY = 'Jeffley2024';

const registerUsuario = async (req, res, next) => {
    try {
        const { firstName, lastName, cpf, email, dateOfBirth, zipCode, address, phoneNumber, password, confirmPassword, employeeId } = req.body;
        if (password !== confirmPassword) {
            return res.status(400).json({ error: 'Senhas não coincidem' });
        }

        const user = await userServices.register(req.body);
        res.status(201).json({ user });
    } catch (error) {
        console.error('Erro ao cadastrar usuário:', error);
        next(error);
    }
};

const registerAdmin = async (req, res, next) => {
    try {
        const { firstName, lastName, email, password } = req.body;
        const user = await userServices.registerAdmin(req.body);
        res.status(201).json({ user });
    } catch (error) {
        console.error('Erro ao cadastrar usuário:', error);
        next(error);
    }
};

const listUsuarios = async (req, res, next) => {
    try {
        const users = await userServices.listAll();
        res.status(200).json({ users });
    } catch (error) {
        console.error('Erro ao listar usuários:', error);
        next(error);
    }
};

const getUsuarioById = async (req, res, next) => {
    try {
        const user = await userServices.getById(req.params.id);
        res.status(200).json({ user });
    } catch (error) {
        console.error('Erro ao listar usuário por ID:', error);
        next(error);
    }
};

const updateUsuario = async (req, res, next) => {
    try {
        const user = await userServices.update(req.params.id, req.body);
        res.status(200).json({ user });
    } catch (error) {
        console.error('Erro ao atualizar usuário:', error);
        next(error);
    }
};

const deleteUsuario = async (req, res, next) => {
    try {
        await userServices.remove(req.params.id);
        res.status(200).json({ message: 'Deletado com sucesso' });
    } catch (error) {
        console.error('Erro ao deletar usuário:', error);
        next(error);
    }
};

const searchUsuario = async (req, res, next) => {
    try {
        const { firstName } = req.query;
        const users = await userServices.search(firstName);
        res.status(200).json({ users });
    } catch (error) {
        console.error('Erro ao buscar usuário:', error);
        next(error);
    }
};

const loginUsuario = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await userServices.loginUsuario({ email, password });
        if (user) {
            const token = jwt.sign({ email, role: 'usuario' }, SECRET_KEY, { expiresIn: 3600 });
            res.status(200).json({ auth: true, message: "login realizado com sucesso",token});
          } else {
            res.status(401).json({ erro: 'Credenciais inválidas' });
          }
    } catch (error) {
        console.error('Erro ao logar usuário:', error);
        next(error);
    }
};

const loginAdmin = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await userServices.loginAdmin({ email, password });
        if (user) {
            const token = jwt.sign({ email, role: 'admin' }, SECRET_KEY, { expiresIn: 3600 });
            res.status(200).json({ auth: true, message: "login realizado com sucesso",token});
          } else {
            res.status(401).json({ erro: 'Credenciais inválidas' });
          }
    } catch (error) {
        console.error('Erro ao logar usuário:', error);
        next(error);
    }
};


const forgotPassword = async (req, res, next) => {
    try {
        const { email } = req.body;
        const message = await userServices.forgotPassword(email);
        res.status(200).json({ message });
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

        const message = await userServices.resetPassword({ email, password });
        res.status(200).json({ message });
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

        const message = await userServices.changePassword({ email, oldPassword, newPassword });
        res.status(200).json({ message });
    } catch (error) {
        console.error('Erro ao alterar senha:', error);
        next(error);
    }
};

module.exports = {
    registerUsuario,
    registerAdmin,
    listUsuarios,
    getUsuarioById,
    updateUsuario,
    deleteUsuario,
    searchUsuario,
    loginUsuario,
    loginAdmin,
    forgotPassword,
    resetPassword,
    changePassword
};
