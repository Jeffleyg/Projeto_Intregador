const despesasService = require('../service/despesasService');
const transporter = require('../utils/mailer');
const CadastroViagem = require('../models/cadastrarViagemModel');

const registerDespesa = async (req, res) => {
    try {
        const { dataNota, cidadeNota, tipoDespesa, valor, descricao, notaFiscal } = req.body;

        // // Verificar se req.user está definido
        if (!req.user || !req.user.email) {
            return res.status(400).json({ error: 'Usuário não autenticado' });
        }

        const despesaData = {
            dataNota,
            cidadeNota,
            tipoDespesa,
            valor,
            descricao,
            notaFiscal,
            emailUsuario: req.user.email
        };

        const despesaRegistrada = await despesasService.registerDespesa(despesaData);

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
        const email = req.user?.email; // Obtém o ID do funcionário a partir do usuário autenticado

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
        const { email } = req.params;
        await despesasService.removeDespesa(email);
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
