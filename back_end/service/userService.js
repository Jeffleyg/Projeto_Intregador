/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const Cadastro = require('../models/cadastrarModel');
const CadastroAdmin = require('../models/cadastrarAdmin');
const transporter = require('../utils/mailer');


const register = async (data) => {
    const { password, confirmPassword } = data;
    if (password !== confirmPassword) {
        throw new Error('Senhas não coincidem');
    }

    const mailOptions = {
        from: 'jeffley.garcon@estudante.uffs.edu.br',
        to: email,
        subject: 'Cadastro realizado com sucesso',
        text: 'Cadastro realizado com sucesso'
    };

    return Cadastro.create(data);
};

const registerAdmin = async (data) => {
    return CadastroAdmin.create(data);
};

const listAll = async () => {
    return Cadastro.find();
};

const getById = async (id) => {
    return Cadastro.findById(id);
};

const update = async (id, data) => {
    return Cadastro.findByIdAndUpdate(id, data, { new: true });
};

const remove = async (id) => {
    return Cadastro.findByIdAndDelete(id);
};

const search = async (firstName) => {
    return Cadastro.find({ firstName });
};

const loginUsuario = async ({ email, password }) => {
    const user = await Cadastro.findOne({ email, password });
    if (!user) {
        throw new Error('Usuário não encontrado');
    }
    return user;
};

const loginAdmin = async ({ email, password }) => {
    const user = await CadastroAdmin.findOne({ email, password });
    if (!user) {
        throw new Error('Usuário não encontrado');
    }
    return user;
};



const forgotPassword = async (email) => {
    const user = await Cadastro.findOne({ email });
    if (!user) {
        throw new Error('Email não cadastrado');
    }

    // Lógica para enviar email de recuperação de senha
    const mailOptions = {
        from: 'jeffley.garcon@estudante.uffs.edu.br',
        to: email,
        subject: 'Recuperação de senha',
        text: 'Recuperação de senha'
    };


};

const resetPassword = async ({ email, password, confirmPassword }) => {
    if (password !== confirmPassword) {
        throw new Error('Senhas não coincidem');
    }
    const user = await Cadastro.findOneAndUpdate({ email }, { password });
    if (!user) {
        throw new Error('Email não cadastrado');
    }
};

const changePassword = async ({ email, oldPassword, newPassword, confirmPassword }) => {
    if (newPassword !== confirmPassword) {
        throw new Error('Senhas não coincidem');
    }
    const user = await Cadastro.findOne({ email, password: oldPassword });
    if (!user) {
        throw new Error('Usuário não encontrado');
    }
    user.password = newPassword;
    if (user){
        const mailOptions = {
            from: 'jeffley.garcon@estudante.uffs.edu.br',
            to: email,
            subject: 'Alteração de senha',
            text: 'Alteração de senha'
        };
    }
    await user.save();
};

module.exports = {
    register,
    registerAdmin,
    listAll,
    getById,
    update,
    remove,
    search,
    loginUsuario,
    loginAdmin,
    forgotPassword,
    resetPassword,
    changePassword
};
