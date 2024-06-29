// utils/mailer.js

const nodemailer = require('nodemailer');

// Configurar o transporte SMTP
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'jeffleygarcon007@gmail.com', 
        pass: 'qmyg ywci zhvo kito'
    }
});


module.exports = transporter;
