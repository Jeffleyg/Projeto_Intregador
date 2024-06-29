/* eslint-disable no-undef */
const Cadastro = require('../models/cadastrarViagemModel');
const transporter = require('../utils/mailer');

const registerViagem = async (data) => {
    const { idFuncionario, dataDeIda, dataDeVolta, cidade, objetivo, descricao, email } = data;
    
    // Log dos dados recebidos para depuração
    console.log('Dados recebidos para registro:', data);

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
            console.error('Erro ao enviar email:', error);
        } else {
            console.log('Email enviado:', info.response);
        }
    });

    return Cadastro.create(data);
};

const listAllViagem = async () => {
    return Cadastro.findAll();
};

const getByIdViagem = async (id) => {
    return Cadastro.findByPk(id);
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
            console.error('Erro ao enviar email:', error);
        } else {
            console.log('Email enviado:', info.response);
        }
    });

    return Cadastro.update(data, { where: { id: id }, returning: true });
};

const removeViagem = async (id) => {
    return Cadastro.destroy({ where: { id: id } });
};

const searchViagem = async ({ type, value }) => {
    if (!type || !value) {
        throw new Error('Parâmetros de busca inválidos');
    }

    try {
        let results;
        if (type === 'date') {
            const dateValue = new Date(value).toISOString().split('T')[0]; // Converte para apenas a data
            results = await Cadastro.findAll({
                where: {
                    dataDeIda: dateValue
                }
            });
        } else if (type === 'location') {
            results = await Cadastro.findAll({
                where: {
                    cidade: value
                }
            });
        } else {
            throw new Error('Tipo de busca inválido');
        }

        return results;
    } catch (error) {
        console.error('Erro ao buscar viagens:', error);
        throw error;
    }
};


const listViagensByUser = async (id) => {
    return Cadastro.findAll({ where: { idFuncionario: id } });
};

const listViagensByDate = async (query) => {
    return Cadastro.findAll({ where: query });
};

module.exports = {
    registerViagem,
    listAllViagem,
    getByIdViagem,
    updateViagem,
    removeViagem,
    searchViagem,
    listViagensByUser,
    listViagensByDate
};
