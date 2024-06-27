const {DataTypes} = require('sequelize');
const sequelize = require('../database/database');

const CadastroAdmin = sequelize.define('cadastroadmin', {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = CadastroAdmin;