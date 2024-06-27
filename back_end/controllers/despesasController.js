const despesasService = require('../service/despesasService');
const despesasModel = require('../models/despesasViagem');

const registerDespesa = async (req, res, next) => {
    try {
        const despesa = await despesasService.register(req.body);
        res.status(201).json({ despesa });
    } catch (error) {
        next(error);
    }
}

const listDespesas = async (req, res, next) => {
    try {
        const despesas = await despesasService.listAll();
        res.status(200).json({ despesas });
    } catch (error) {
        next(error);
    }
}

const getDespesaById = async (req, res, next) => {
    try {
        const despesa = await despesasService.getById(req.params.id);
        res.status(200).json({ despesa });
    } catch (error) {
        next(error);
    }
}

const updateDespesa = async (req, res, next) => {
    try {
        const despesa = await despesasService.update(req.params.id, req.body);
        res.status(200).json({ despesa });
    } catch (error) {
        next(error);
    }
}

const deleteDespesa = async (req, res, next) => {
    try {
        await despesasService.remove(req.params.id);
        res.status(200).json({ message: 'Deletado com sucesso' });
    } catch (error) {
        next(error);
    }
}

module.exports = {
    registerDespesa,
    listDespesas,
    getDespesaById,
    updateDespesa,
    deleteDespesa
}