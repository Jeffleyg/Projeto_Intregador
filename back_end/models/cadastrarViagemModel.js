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
  tableName: 'CadastrarViagem',
  timestamps: false,
  hooks: {
    beforeCreate: (user) => {
        // Aqui você pode gerar um employeeId único automaticamente
        user.idFuncionario = generateEmployeeId(); // função para gerar o employeeId
    }
}
});

// Função para gerar um employeeId único
function generateEmployeeId() {
// Lógica para gerar o employeeId, por exemplo, um UUID, ou baseado em timestamp, etc.
return 'EMP-' + Math.random().toString(36).substr(2, 9); // Exemplo simples
}

 
module.exports = CadastrarViagem;
