const registroComprasService = require('../service/comprasService');
const purchasesModel = require('../models/registroCompras');

const registerCompra = async (req, res, next) => {
    try {
        const { idFuncionario } = req.user; // Supondo que o idFuncionario está disponível em req.user
        const purchaseData = { ...req.body, idFuncionario};
        const purchase = await registroComprasService.registerCompra(purchaseData);
        res.status(201).json({ purchase });
    } catch (error) {
        next(error);
    }
}

const listCompras = async (req, res, next) => {
    try {
        const purchases = await registroComprasService.listAllCompras();
        res.status(200).json({ purchases });
    } catch (error) {
        next(error);
    }
}

const getCompraById = async (req, res, next) => {
    try {
        const purchase = await registroComprasService.getById(req.params.id);
        res.status(200).json({ purchase });
    } catch (error) {
        next(error);
    }
}

const updateCompra = async (req, res, next) => {
    try {
        const purchase = await registroComprasService.update(req.params.id, req.body);
        res.status(200).json({ purchase });
    } catch (error) {
        next(error);
    }
}

const deleteCompra = async (req, res, next) => {
    try {
        await registroComprasService.remove(req.params.id);
        res.status(200).json({ message: 'Deletado com sucesso' });
    } catch (error) {
        next(error);
    }
}

module.exports = {
    registerCompra,
    listCompras,
    getCompraById,
    updateCompra,
    deleteCompra
}
