const Cadastro = require('../models/cadastrarModel');

const register = async (data) => {
    const { password, confirmPassword } = data;
    if (password !== confirmPassword) {
        throw new Error('Senhas não coincidem');
    }

    return Cadastro.create(data);
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

const login = async ({ email, password }) => {
    const user = await Cadastro.findOne({ email, password });
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
    await user.save();
};

module.exports = {
    register,
    listAll,
    getById,
    update,
    remove,
    search,
    login,
    forgotPassword,
    resetPassword,
    changePassword
};
