/* eslint-disable no-undef */
const { DataTypes } = require('sequelize');
const sequelize = require('../database/database');

const CadastrarViagem = sequelize.define('cadastrarviagem', {
  idViagem: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: 'cadastros',
      key: 'email'
    } 
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
  tableName: 'cadastrarviagem',
  timestamps: false,
});

 
module.exports = CadastrarViagem;
