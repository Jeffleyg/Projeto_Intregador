const despesasService = require('../service/despesasService');
const transporter = require('../utils/mailer');
const CadastroViagem = require('../models/cadastrarViagemModel');

const registerDespesa = async (req, res) => {
    try {
        const {
            idViagem,
            emailFuncionario,
            dataNota,
            cidadeNota,
            tipoDespesa,
            valor,
            descricao
        } = req.body;
        

        if (!idViagem || !emailFuncionario || !dataNota || !cidadeNota || !tipoDespesa || !valor || !descricao ) {
            return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
        }

        const viagem = await CadastroViagem.findOne({ where: { idViagem } });
        if (!viagem) {
            return res.status(400).json({ error: 'Viagem não encontrada' });
        }

        // const userViagem = await CadastroViagem.findOne({ where: { email: emailFuncionario }});
        // if (!userViagem) {
        //     return res.status(400).json({ error: 'Usuário não encontrado' });
        // }

        // Verifique se o email do funcionário corresponde ao email do usuário logado
        // if (emailFuncionario !== req.user?.email) {
        //     return res.status(403).json({ error: 'Usuário não autorizado' });
        // }
const notaFiscal = req.file ? req.file.filename : null; 
        const data = {
            idViagem,
            emailFuncionario,
            dataNota,
            cidadeNota,
            tipoDespesa,
            valor,
            descricao,
            notaFiscal
        };

        const despesaRegistrada = await despesasService.registerDespesa(data);

        // Envio de email de lembrete
        const dataLembrete = new Date(dataNota);
        dataLembrete.setDate(dataLembrete.getDate() - 1);

        const mailOptions = {
            from: 'jeffleygarcon007@gmail.com',
            to: emailFuncionario, // Substituir pelo email do destinatário
            subject: 'Lembrete de Despesa',
            text: `
            Olá,
        
            Este é um lembrete sobre a seguinte despesa que está prestes a vencer:
        
            - **Descrição da Despesa:** ${req.body.descricao}
            - **Data de Vencimento:** ${req.body.dataDeVencimento}
            - **Valor:** R$${req.body.valor}
        
            Por favor, certifique-se de que esta despesa seja registrada e paga a tempo para evitar possíveis problemas.
        
            Se você tiver alguma dúvida ou precisar de mais informações, entre em contato conosco.
        
            Atenciosamente,
            FeliShop / Pierre Felix
            `
        };
        
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Erro ao enviar email:', error);
            } else {
                console.log('Email enviado com sucesso:', info.response);
            }
        });

        res.status(201).json({ message: 'Despesa cadastrada com sucesso', despesa: despesaRegistrada });
    } catch (error) {
        console.error('Erro ao cadastrar despesa:', error.message);
        res.status(500).json({ error: 'Erro interno ao cadastrar despesa' });
    }
};


const listAllDespesas = async (req, res, next) => {
    try {
        const despesas = await despesasService.listAllDespesas();
        res.status(200).json({ despesas });
    } catch (error) {
        console.error('Erro ao listar despesas:', error);
        res.status(500).json({ error: 'Erro interno ao listar despesas' });
    }
};

const listAllDespesasByUser = async (req, res, next) => {
    try {
        const email = req.user?.emailFuncionario; // Obtém o email do funcionário a partir do usuário autenticado

        if (!email) {
            return res.status(400).json({ error: 'email do funcionário não encontrado' });
        }

        const despesas = await despesasService.listAllDespesasByUser(email);
        res.status(200).json({ despesas });
    } catch (error) {
        console.error('Erro ao listar despesas por usuário:', error);
        res.status(500).json({ error: 'Erro interno ao listar despesas por usuário' });
    }
};
const getDespesaById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const despesa = await despesasService.getByIdDespesa(id);
        if (!despesa) {
            return res.status(404).json({ error: 'Despesa não encontrada' });
        }
        res.status(200).json({ despesa });
    } catch (error) {
        console.error('Erro ao buscar despesa por ID:', error);
        res.status(500).json({ error: 'Erro interno ao buscar despesa por ID' });
    }
};

const updateDespesa = async (req, res, next) => {
    try {
        const { email } = req.params;
        const { dataNota } = req.body;

        if (!dataNota) {
            return res.status(400).json({ error: 'Data da nota é obrigatória' });
        }

        const despesaAtualizada = await despesasService.updateDespesa(email, { dataNota });

        res.status(200).json({ message: 'Despesa atualizada com sucesso', despesa: despesaAtualizada });
    } catch (error) {
        console.error('Erro ao atualizar despesa:', error);
        res.status(500).json({ error: 'Erro interno ao atualizar despesa' });
    }
};

const deleteDespesa = async (req, res, next) => {
    try {
        const { id } = req.params;
        await despesasService.removeDespesa(id);
        res.status(200).json({ message: 'Despesa deletada com sucesso' });
    } catch (error) {
        console.error('Erro ao deletar despesa:', error);
        res.status(500).json({ error: 'Erro interno ao deletar despesa' });
    }
};

module.exports = {
    registerDespesa,
    listAllDespesas,
    getDespesaById,
    updateDespesa,
    deleteDespesa,
    listAllDespesasByUser
};
