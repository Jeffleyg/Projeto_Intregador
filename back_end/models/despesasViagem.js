const { DataTypes } = require('sequelize');
const sequelize = require('../database/database');

const DespesasViagem = sequelize.define('despesasviagem', {
    idViagem: {
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
        type: DataTypes.STRING, // Altere para STRING para armazenar o caminho ou URL do arquivo
        allowNull: false
    },
    opcoesAlimentacao: {
        type: DataTypes.JSON,
        allowNull: true
    },
    tipoHospedagem: {
        type: DataTypes.STRING,
        allowNull: true
    },
    preferenciaEstadia: {
        type: DataTypes.STRING,
        allowNull: true
    },
    meioTransporte: {
        type: DataTypes.STRING,
        allowNull: true
    },
    especificarOutroTransporte: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    tableName: 'despesasviagem',
    timestamps: false
});

module.exports = DespesasViagem;
