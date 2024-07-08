const DespesasViagem = require('../models/despesasViagem');
const transporter = require('../utils/mailer');

const registerDespesa = async (data) => {
    try {
        const { emailUsuario, dataNota, cidadeNota, tipoDespesa, valor, descricao, notaFiscal } = data;

        // Verificar se todos os campos obrigatórios estão presentes
        if (!emailUsuario || !dataNota || !cidadeNota || !tipoDespesa || !valor || !descricao || !notaFiscal) {
            throw new Error('Todos os campos são obrigatórios');
        }

        // Verificar se o usuário tem uma viagem ativa associada ao seu email
        const viagem = await CadastroViagem.findOne({ where: { email: emailUsuario } });

        if (!viagem) {
            throw new Error('Nenhuma viagem ativa encontrada para este usuário');
        }

        const despesaData = {
            dataNota,
            cidadeNota,
            tipoDespesa,
            valor,
            descricao,
            notaFiscal,
            idViagem: viagem.id // Adicionar a referência à viagem
        };

        const despesa = await DespesasViagem.create(despesaData);

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


const listAllDespesas = async () => {
    try {
        const despesas = await DespesasViagem.findAll();
        return despesas;
    } catch (error) {
        throw new Error('Erro ao listar despesas no banco de dados');
    }
};

const listAllDespesasByUser = async (id) => {
    try {
        const despesas = await DespesasViagem.findAll({ where: { email : email } });
        return despesas;
    } catch (error) {
        throw new Error('Erro ao listar despesas no banco de dados');
    }
};

const getByIdDespesa = async (email) => {
    try {
        const despesa = await DespesasViagem.findByPk(email);
        return despesa;
    } catch (error) {
        throw new Error('Erro ao buscar despesa por ID no banco de dados');
    }
};

const updateDespesa = async (email, data) => {
    try {
        const despesa = await DespesasViagem.findByPk(email);
        if (!despesa) {
            throw new Error('Despesa não encontrada');
        }

        // Atualiza os campos desejados
        const updatedDespesa = await despesa.update(data);
        return updatedDespesa;
    } catch (error) {
        throw new Error('Erro ao atualizar despesa no banco de dados');
    }
};

const removeDespesa = async (email) => {
    try {
        const despesa = await DespesasViagem.findByPk(email);
        if (!despesa) {
            throw new Error('Despesa não encontrada');
        }
        await despesa.destroy();
    } catch (error) {
        throw new Error('Erro ao deletar despesa no banco de dados');
    }
};

module.exports = {
    registerDespesa,
    listAllDespesas,
    getByIdDespesa,
    updateDespesa,
    removeDespesa,
    listAllDespesasByUser
};
