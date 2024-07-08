/* eslint-disable no-undef */
const Cadastro = require('../models/cadastrarViagemModel');
const CadastroAdmin = require('../models/cadastrarAdmin');
const CadastroUsuario = require('../models/cadastrarModel');
const transporter = require('../utils/mailer');

const registerViagem = async (data) => {

    try{ 
        const { idViagem, dataDeIda, dataDeVolta, cidade, objetivo, descricao, emailUsuario, emailAdmin } = data;
        
        // Log dos dados recebidos para depuração
        console.log('Dados recebidos para registro:', data);

        if ( !idViagem || !dataDeIda || !dataDeVolta || !cidade || !objetivo || !descricao || !emailUsuario || !emailAdmin) {
            throw new Error('Todos os campos são obrigatórios');
        }

        const usuario = await CadastroUsuario.findOne({ where: { email: emailUsuario } });
        if (!usuario) {
            throw new Error('Usuário não encontrado');
        }

        const adminUser = await CadastroAdmin.findOne({ where: { email: emailAdmin } });
        if (!adminUser) {
            throw new Error('Usuário não é um administrador');
        }

        if (adminUser.role !== 'admin') {
            throw new Error('Usuário não é um administrador');
        }

        const viagemExistente = await Cadastro.findOne({ where: { dataDeIda, cidade } });
        if (viagemExistente) {
            throw new Error('Viagem já cadastrada');
        }


        const dataLembrete = new Date(dataDeIda);
        dataLembrete.setDate(dataLembrete.getDate() - 1);

        const mailOptions = {
            from: 'jeffley.garcon@estudante.uffs.edu.br',
            to: emailUsuario, // Substituir pelo email do destinatário
            subject: 'Lembrete de viagem',
            text: `
    Olá,

    Este é um lembrete sobre a seguinte viagem que está prestes a acontecer:

    - **Cidade:** ${cidade}
    - **Data de Ida:** ${dataDeIda}
    - **Data de Volta:** ${dataDeVolta}
    - **Objetivo:** ${objetivo}
    - **Descrição:** ${descricao}

    Por favor, certifique-se de que todos os preparativos estejam em ordem e que você esteja pronto para a viagem.

    Se você tiver alguma dúvida ou precisar de mais informações, entre em contato conosco.

    Atenciosamente,
    [Sua Empresa/Seu Nome]
            `
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Erro ao enviar email:', error);
            } else {
                console.log('Email enviado:', info.response);
            }
        });

        const viagem = await Cadastro.create({idViagem, dataDeIda, dataDeVolta, cidade, objetivo, descricao, email: emailUsuario});

        return viagem;
    } catch (error) {
        console.error('Erro ao cadastrar viagem:', error);
        throw error;
    }
};


const listAllViagem = async () => {
    return Cadastro.findAll();
};

const getByIdViagem = async (id) => {
    return Cadastro.findByPk(id);
};

const editaViagem = async (idViagem, data) => {
    return Cadastro.update(data, { where: { idViagem } });
};

const updateViagem = async (idViagem, data, userEmail) => {
    const { dataDeIda, descricao, valor } = data;

    if (!dataDeIda) {
        throw new Error('Data de ida é obrigatória');
    }

    const dataLembrete = new Date(dataDeIda);
    dataLembrete.setDate(dataLembrete.getDate() - 1);

    const mailOptions = {
        from: 'jeffleygarcon007@gmail.com',
        to: userEmail, // Usar o email do usuário autenticado
        subject: 'Lembrete de Despesa',
        text: `
        Olá,
    
        Este é um lembrete sobre a seguinte despesa que está prestes a vencer:
    
        - **Descrição da Despesa:** ${descricao}
        - **Data de Vencimento:** ${dataDeIda}
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
            console.log('Email enviado:', info.response);
        }
    });

    return Cadastro.update(data, { where: { idViagem: idViagem }, returning: true });
};

const removeViagem = async (idViagem) => {
    return Cadastro.destroy({ where: { idViagem} });
};

const searchViagem = async ({ type, value }) => {
    if (!type || !value) {
        throw new Error('Parâmetros de busca inválidos');
    }

    try {
        let results;
        if (type === 'date') {
            const dateValue = new Date(value).toISOString().split('T')[0]; // Converte para apenas a data
            results = await Cadastro.findAll({
                where: {
                    dataDeIda: dateValue
                }
            });
        } else if (type === 'location') {
            results = await Cadastro.findAll({
                where: {
                    cidade: value
                }
            });
        } else {
            throw new Error('Tipo de busca inválido');
        }

        return results;
    } catch (error) {
        console.error('Erro ao buscar viagens:', error);
        throw error;
    }
};


const listViagensByUser = async (email) => {
    return Cadastro.findAll({ where: { email: email } });
};

const listViagensByDate = async (query) => {
    return Cadastro.findAll({ where: query });
};

module.exports = {
    registerViagem,
    listAllViagem,
    getByIdViagem,
    updateViagem,
    removeViagem,
    searchViagem,
    listViagensByUser,
    listViagensByDate,
    editaViagem
};
