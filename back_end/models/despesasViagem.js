const { DataTypes } = require('sequelize');
const sequelize = require('../database/database');

const DespesasViagem = sequelize.define('DespesasViagem', {
    idViagem: {
        type: DataTypes.STRING,
        allowNull: false
    },
    idFuncionario: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dataNota: {
        type: DataTypes.DATE,
        allowNull: false
    },
    cidadeNota: {
        type: DataTypes.STRING,
        allowNull: false
    },
    tipoDespesa: {
        type: DataTypes.STRING,
        allowNull: false
    },
    valor: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    descricao: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    notaFiscal: {
        type: DataTypes.BLOB('long'), // assuming you want to store the file as binary data
        allowNull: false
    },
    opcoesAlimentacao: {
        type: DataTypes.JSON,
        allowNull: true // Make this field optional
    },
    tipoHospedagem: {
        type: DataTypes.STRING,
        allowNull: true // Make this field optional
    },
    preferenciaEstadia: {
        type: DataTypes.STRING,
        allowNull: true // Make this field optional
    },
    meioTransporte: {
        type: DataTypes.STRING,
        allowNull: true // Make this field optional
    },
    especificarOutroTransporte: {
        type: DataTypes.STRING,
        allowNull: true // Make this field optional
    }
}, {
    tableName: 'despesasViagem',
    timestamps: false
});

module.exports = DespesasViagem;
