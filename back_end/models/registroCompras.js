/* eslint-disable no-undef */
const { DataTypes } = require('sequelize');
const sequelize = require('../database/database');

const RegistroCompras = sequelize.define('RegistroCompras', {   
    idFuncionario: {
        type: DataTypes.STRING,
        allowNull: false
    },
    codigoViagem: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dataCompra: {
        type: DataTypes.DATE,
        allowNull: false
    },
    local: {
        type: DataTypes.STRING,
        allowNull: true // Este campo é preenchido automaticamente, então pode ser null inicialmente
    },
    tipoDespesa: {
        type: DataTypes.STRING,
        allowNull: false
    },
    valor: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    descricao: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    notaFiscal: {
        type: DataTypes.STRING,
        allowNull: false
    },
    itensComprados: {
        type: DataTypes.JSON,
        allowNull: false
    }
}, {
    tableName: 'compras',
    timestamps: false
});

module.exports = RegistroCompras;
