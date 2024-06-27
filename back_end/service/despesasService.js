
const Despesas = require('../models/despesasViagem');
const transporter = require('../utils/mailer');

const registerDespesa = async (data) => {
    const { idViagem, idFuncionario, dataNota, cidadeNota, tipoDespesa, valor, descricao, notaFiscal, opcoesAlimentacao, tipoHospedagem, preferenciaEstadia, meioTransporte, especificarOutroTransporte } = data;
    if (!idViagem || !idFuncionario || !dataNota || !cidadeNota || !tipoDespesa || !valor || !descricao || !notaFiscal) {
        throw new Error('Todos os campos são obrigatórios');
    }

    const dataLembrete = new Date(dataNota);
    dataLembrete.setDate(dataLembrete.getDate() - 1);

    const mailOptions = {
        from: 'jeffley.garcon@estuante.uffs.edu.br',
        to: email,
        subject: 'Lembrete de despesa',
        text: 'Lembrete de despesa'
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });

    return Despesas.create(data);
}

const listAllDespesas = async () => {
    return Despesas.find();
};

const getByIdDespesa = async (id) => {
    return Despesas.findById(id);
};

const updateDespesa = async (id, data) => {
    const { dataNota, email } = data;

    if (!dataNota) {
        throw new Error('Data da nota é obrigatória');
    }

    const dataLembrete = new Date(dataNota);
    dataLembrete.setDate(dataLembrete.getDate() - 1);

    const mailOptions = {
        from: 'jeffley.garcon@estudante.uffs.edu.br',
        to: email,
        subject: 'Lembrete de despesa',
        text: 'Lembrete de despesa'
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });

    return Despesas.findByIdAndUpdate
}

const removeDespesa = async (id) => {
    return Despesas.findByIdAndDelete(id);
};

module.exports = {
    registerDespesa,
    listAllDespesas,
    getByIdDespesa,
    updateDespesa,
    removeDespesa
};