const DespesasViagem = require('../models/despesasViagem');
const transporter = require('../utils/mailer');

const registerDespesa = async (data) => {
    try {
        console.log('Dados recebidos para cadastro:', data); // Log dos dados

        const despesa = await DespesasViagem.create(data);

        console.log( despesa); // Log do resultado
        return despesa;
    } catch (error) {
        console.error('Erro ao cadastrar despesa no banco de dados:', error.message); // Log do erro
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

const listAllDespesasByUser = async (email) => {
    try {
        const despesas = await DespesasViagem.findByPk({ where: { email : email } });
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

const removeDespesa = async (id) => {
    try {
        const despesa = await DespesasViagem.findByPk(id);
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
