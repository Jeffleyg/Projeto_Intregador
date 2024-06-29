/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const Cadastro = require('../models/cadastrarModel');
const CadastroAdmin = require('../models/cadastrarAdmin');
const transporter = require('../utils/mailer');


const register = async (data) => {
    const { password, confirmPassword } = data;
    const existingUser = await findByCPFOrEmail(data.cpf, data.email);
    if (password !== confirmPassword) {
        throw new Error('Senhas não coincidem');
    }

    const employeeId = generateEmployeeId();

    const userDataWithEmployeeId = { ...data, employeeId };

    const mailOptions = {
        from: 'jeffleygarcon007@gmail.com',
        to: data.email,
        subject: 'Cadastro de Usuário',
        text: ` olá, ${data.firstName} ${data.lastName} \n Seu cadastro foi realizado com sucesso! \n Seu ID de funcionário é: ${employeeId}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Erro ao enviar email:', error);
        } else {
            console.log('Email enviado:', info.response);
        }
    });

    return Cadastro.create(userDataWithEmployeeId);
};

const generateEmployeeId = () => {
    return Math.random().toString(36).substring(2, 10); // Gera um ID aleatório para exemplo
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
    changePassword,
    findByCPFOrEmail
};
