// utils/mailer.js

const nodemailer = require('nodemailer');

// Configurar o transporte SMTP
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'jeffleygarcon007@gmail.com', 
        pass: 'Jhonsley1998@'
    }
});

module.exports = transporter;
