const DespesasViagem = require('../models/despesasViagem');

const registerDespesa = async (data) => {
    try {
        console.log('Dados recebidos para cadastro:', data); // Log dos dados

        const despesa = await DespesasViagem.create(data);

        console.log('Despesa cadastrada com sucesso:', despesa); // Log do resultado
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

const listAllDespesasByUser = async (id) => {
    try {
        const despesas = await DespesasViagem.findAll({ where: { idFuncionario: id } });
        return despesas;
    } catch (error) {
        throw new Error('Erro ao listar despesas no banco de dados');
    }
};

const getByIdDespesa = async (id) => {
    try {
        const despesa = await DespesasViagem.findByPk(id);
        return despesa;
    } catch (error) {
        throw new Error('Erro ao buscar despesa por ID no banco de dados');
    }
};

const updateDespesa = async (id, data) => {
    try {
        const despesa = await DespesasViagem.findByPk(id);
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
