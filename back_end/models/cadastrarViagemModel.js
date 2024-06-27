/* eslint-disable no-undef */
const { DataTypes } = require('sequelize');
const sequelize = require('../database/database');

const CadastrarViagem = sequelize.define('CadastrarViagem', {
  idFuncionario: {
    type: DataTypes.STRING,
    allowNull: false
  },
  dataDeIda: {
    type: DataTypes.DATE,
    allowNull: false
  },
  dataDeVolta: {
    type: DataTypes.DATE,
    allowNull: false
  },
  cidade: {
    type: DataTypes.STRING,
    allowNull: false
  },
  objetivo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  descricao: {
    type: DataTypes.TEXT,
    allowNull: false
  }
}, {
  tableName: 'viagens',
  timestamps: false
});

module.exports = CadastrarViagem;
