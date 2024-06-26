const Cadastro = require('../models/cadastrarViagem');
const transporter = require('../utils/mailer');

const registerViagem = async (data) => {
    const { idFuncionario, dataDeIda, dataDeVolta, cidade, objetivo, descricao, email } = data;
    if (!idFuncionario || !dataDeIda || !dataDeVolta || !cidade || !objetivo || !descricao || !email) {
        throw new Error('Todos os campos são obrigatórios');
    }

    const dataLembrete = new Date(dataDeIda);
    dataLembrete.setDate(dataLembrete.getDate() - 1);

    const mailOptions = {
        from: 'jeffley.garcon@estudante.uffs.edu.br',
        to: email,
        subject: 'Lembrete de viagem',
        text: 'Lembrete de viagem'
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });

    return Cadastro.create(data);
};

const listAllViagem = async () => {
    return Cadastro.find();
};

const getByIdViagem = async (id) => {
    return Cadastro.findById(id);
};

const updateViagem = async (id, data) => {
    const { dataDeIda, email } = data;

    if (!dataDeIda) {
        throw new Error('Data de ida é obrigatória');
    }

    const dataLembrete = new Date(dataDeIda);
    dataLembrete.setDate(dataLembrete.getDate() - 1);

    const mailOptions = {
        from: 'jeffley.garcon@estudante.uffs.edu.br',
        to: email,
        subject: 'Lembrete de viagem',
        text: 'Lembrete de viagem'
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });

    return Cadastro.findByIdAndUpdate(id, data, { new: true });
};

const removeViagem = async (id) => {
    return Cadastro.findByIdAndDelete(id);
};

module.exports = {
    registerViagem,
    listAllViagem,
    getByIdViagem,
    updateViagem,
    removeViagem
};
