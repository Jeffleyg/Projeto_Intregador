/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const Cadastro = require('../models/cadastrarModel');
const CadastroAdmin = require('../models/cadastrarAdmin');
const CadastrarViagem = require('../models/cadastrarViagemModel');
const DespesasViagem = require('../models/despesasViagem');
const transporter = require('../utils/mailer');
const jwt = require('jsonwebtoken');
const SECRET_KEY = 'Jeffley2024';

const register = async (data) => {
    const { password, confirmPassword } = data;
    const existingUser = await findByCPFOrEmail(data.cpf, data.email);
    if (password !== confirmPassword) {
        throw new Error('Senhas não coincidem');
    }


    const mailOptions = {
        from: 'jeffleygarcon007@gmail.com',
        to: data.email,
        subject: 'Cadastro de Usuário',
        text: ` olá, ${data.firstName} ${data.lastName} \n Seu cadastro foi realizado com sucesso! \n seu password é ${data.password}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Erro ao enviar email:', error);
        } else {
            console.log('Email enviado:', info.response);
        }
    });

    return Cadastro.create(data);
};


const findByCPFOrEmail = async (cpf, email) => {
    const userByCPF = await Cadastro.findOne({ cpf });
    const userByEmail = await Cadastro.findOne({ email });

    if (userByCPF || userByEmail) {
        return true; // Retorna true se encontrar usuário com CPF ou email
    }

    return false; // Retorna false se não encontrar nenhum usuário
};


const registerAdmin = async (data) => {

    const existingAdmin = await CadastroAdmin.findOne({ where: { email: data.email } });

    if (existingAdmin) {
        throw new Error('Email já cadastrado');
    }
    
    const admin = await CadastroAdmin.create(data);

    const mailOptions = {
        from: 'jeffleygarcon007@gmail.com',
        to: data.email,
        subject: 'Cadastro de Administrador',
        text: `Olá, ${data.firstName} ${data.lastName} \n Seu cadastro como administrador foi realizado com sucesso! \n seu password é ${data.password}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Erro ao enviar email:', error);
        } else {
            console.log('Email enviado:', info.response);
        }
    });

    return admin;
};

const listAll = async () => {
    return Cadastro.findAll();
};



const update = async (email, data) => {
    return Cadastro.update(data, { where: { email } });
};

const remove = async (email) => {
    return Cadastro.destroy({ where: { email } });
};

const search = async (email) => {
    return Cadastro.findOne({ where: { email } });
};


const loginUsuario = async ({ email, password }) => {
    const user = await Cadastro.findOne({where:{ email, password }});

    const viagem = await CadastrarViagem.findOne({where : {email: email}});

    const despesas = await DespesasViagem.findAll({where : {emailFuncionario: email}});


    if (!user) {
        throw new Error('Usuário não encontrado');
    }
    return {user, viagem, despesas};
};

const loginAdmin = async ({ email, password }) => {
    const user = await CadastroAdmin.findOne({where:{ email, password }});
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
    update,
    remove,
    search,
    loginUsuario,
    loginAdmin,
    forgotPassword,
    resetPassword,
    changePassword,
    findByCPFOrEmail
};
