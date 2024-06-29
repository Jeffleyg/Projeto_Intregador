const Despesas = require('../models/registroCompras');
const transporter = require('../utils/mailer');

const registerCompra = async (data) => {
    const { idViagem, idFuncionario, dataNota, cidadeNota, tipoDespesa, valor, descricao, notaFiscal, opcoesAlimentacao, tipoHospedagem, preferenciaEstadia, meioTransporte, especificarOutroTransporte } = data;
    
    if (!idViagem || !idFuncionario || !dataNota || !cidadeNota || !tipoDespesa || !valor || !descricao || !notaFiscal) {
        throw new Error('Todos os campos são obrigatórios');
    }

    const dataLembrete = new Date(dataNota);
    dataLembrete.setDate(dataLembrete.getDate() - 1);

    const mailOptions = {
        from: 'jeffleygarcon007@gmail.com',
        to: 'jeffleygarcon0@gmail.com',
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
};

const listAllCompras = async () => {
    return Despesas.findAll();
};

const getByIdCompra = async (id) => {
    return Despesas.findById(id);
};

const updateCompra = async (id, data) => {
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

    return Despesas.findByIdAndUpdate(id, data, { new: true });
};

const removeCompra = async (id) => {
    return Despesas.findByIdAndDelete(id);
};

module.exports = {
    registerCompra,
    listAllCompras,
    getByIdCompra,
    updateCompra,
    removeCompra
};
