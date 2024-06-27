const { DataTypes } = require('sequelize');
const sequelize = require('../database/database');

const Cadastro = sequelize.define('Cadastro', {
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cpf: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    dateOfBirth: {
        type: DataTypes.DATE,
        allowNull: false
    },
    zipCode: {
        type: DataTypes.STRING,
        allowNull: false
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phoneNumber: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    employeeId: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'cadastros',
    timestamps: false,
    hooks: {
        beforeCreate: (user) => {
            // Aqui você pode gerar um employeeId único automaticamente
            user.employeeId = generateEmployeeId(); // função para gerar o employeeId
        }
    }
});

// Função para gerar um employeeId único
function generateEmployeeId() {
    // Lógica para gerar o employeeId, por exemplo, um UUID, ou baseado em timestamp, etc.
    return 'EMP-' + Math.random().toString(36).substr(2, 9); // Exemplo simples
}

module.exports = Cadastro;
