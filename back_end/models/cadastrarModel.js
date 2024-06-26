const mongoose = require('mongoose');

const cadastroSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    cpf: { type: String, required: true },
    email: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
    zipCode: { type: String, required: true },
    address: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    password: { type: String, required: true },
    employeeId: { type: String, required: true },
});

module.exports = mongoose.model('Cadastro', cadastroSchema);
