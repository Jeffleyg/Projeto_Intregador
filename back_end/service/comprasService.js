const Compras = require('../models/registroCompras');
const transporter = require('../utils/mailer');
const path = require('path');

const registerCompra = async (data) => {
    try {
        const { codigoViagem,emailUsuario, dataNota, cidadeNota, tipoDespesa, valor, descricao, notaFiscal } = data;
        // Verificar se todos os campos obrigatórios estão presentes
        if (!codigoViagem || !emailUsuario || !dataNota || !cidadeNota || !tipoDespesa || !valor || !descricao || !notaFiscal ) {
            throw new Error('Todos os campos são obrigatórios');
        }

        // Verificar se o arquivo é um PDF ou imagem válida
        // const allowedExtensions = ['.pdf', '.png', '.jpg', '.jpeg'];
        // const fileExtension = path.extname(reciboPdf).toLowerCase();

        // if (!allowedExtensions.includes(fileExtension)) {
        //     throw new Error('Arquivo de recibo deve ser PDF ou imagem (PNG, JPG, JPEG)');
        // }

        // Verificar se o usuário tem uma viagem ativa associada ao seu email
        const viagem = await CadastroViagem.findOne({ where: { email: emailUsuario } });

        if (!viagem) {
            throw new Error('Nenhuma viagem ativa encontrada para este usuário');
        }

        const despesaData = {
            codigoViagem,
            emailUsuario,
            dataNota,
            cidadeNota,
            tipoDespesa,
            valor,
            descricao,
            notaFiscal,
            //reciboPdf,
            idViagem: viagem.id // Adicionar a referência à viagem
        };

        const despesa = await ComprasViagem.create(despesaData);

        // Envio de email de lembrete
        const dataLembrete = new Date(dataNota);
        dataLembrete.setDate(dataLembrete.getDate() - 1);

        const mailOptions = {
            from: 'jeffleygarcon007@gmail.com',
            to: emailUsuario, // Substituir pelo email do destinatário
            subject: 'Lembrete de Despesa',
            text: `
            Olá,
        
            Este é um lembrete sobre a seguinte despesa que está prestes a vencer:
        
            - **Descrição da Despesa:** ${descricao}
            - **Data de Vencimento:** ${dataNota}
            - **Valor:** R$${valor}
        
            Por favor, certifique-se de que esta despesa seja registrada e paga a tempo para evitar possíveis problemas.
        
            Se você tiver alguma dúvida ou precisar de mais informações, entre em contato conosco.
        
            Atenciosamente,
            [Sua Empresa/Seu Nome]
            `
        };
        
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Erro ao enviar email:', error);
            } else {
                console.log('Email enviado com sucesso:', info.response);
            }
        });

        return despesa;
    } catch (error) {
        console.error('Erro ao cadastrar despesa no banco de dados:', error.message);
        throw new Error('Erro ao cadastrar despesa no banco de dados');
    }
};

const listAllCompras = async () => {
    return Compras.findAll();
};

const listAllComprasByUser = async (id) => {
    return Compras.findAll({ where: { idFuncionario: id } });
};

const getByIdCompra = async (id) => {
    return Compras.findById(id);
};

const updateCompra = async (id, data) => {
    const { dataNota, email } = data;

    if (!dataNota) {
        throw new Error('Data da nota é obrigatória');
    }

    const dataLembrete = new Date(dataNota);
    dataLembrete.setDate(dataLembrete.getDate() - 1);

    const mailOptions = {
        from: 'jeffley.garcon@estudante.uffs.edu.br',
        to: email,
        subject: 'Lembrete de despesa',
        text: 'Lembrete de despesa'
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });

    return Compras.findByIdAndUpdate(id, data, { new: true });
};

const removeCompra = async (id) => {
    return Compras.findByIdAndDelete(id);
};

module.exports = {
    registerCompra,
    listAllCompras,
    getByIdCompra,
    updateCompra,
    removeCompra,
    listAllComprasByUser
};
