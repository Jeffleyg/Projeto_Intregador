// utils/mailer.js

const nodemailer = require('nodemailer');

// Configurar o transporte SMTP
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'jeffley.garcon@estudante.uffs.edu.br', 
        pass: 'Jhonsley1998@'
    }
});

module.exports = transporter;
