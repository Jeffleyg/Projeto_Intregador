/* eslint-disable no-undef */
const tripService = require('../service/tripService');

const registerViagem = async (req, res, next) => {
    try {
        const trip = await tripService.registerViagem(req.body);
        res.status(201).json({ trip });
    } catch (error) {
        next(error);
    }
};

const listViagens = async (req, res, next) => {
    try {
        const trips = await tripService.listAllViagem();
        res.status(200).json({ trips });
    } catch (error) {
        next(error);
    }
};

const getViagemById = async (req, res, next) => {
    try {
        const trip = await tripService.getByIdViagem(req.params.id);
        res.status(200).json({ trip });
    } catch (error) {
        next(error);
    }
};

const updateViagem = async (req, res, next) => {
    try {
        const [rowsUpdated, [updatedTrip]] = await tripService.updateViagem(req.params.id, req.body);
        res.status(200).json({ trip: updatedTrip });
    } catch (error) {
        next(error);
    }
};

const deleteViagem = async (req, res, next) => {
    try {
        await tripService.removeViagem(req.params.id);
        res.status(200).json({ message: 'Deletado com sucesso' });
    } catch (error) {
        next(error);
    }
};

const searchViagem = async (req, res, next) => {
    try {
        const { type, value } = req.query;
        if (!type || !value) {
            return res.status(400).json({ message: 'Parâmetros de busca inválidos' });
        }

        const trips = await tripService.searchViagem({ type, value });
        res.status(200).json({ trips });
    } catch (error) {
        console.error('Erro ao buscar viagens:', error);
        next(error);
    }
};

const listViagensByUser = async (req, res, next) => {
    try {
        const trips = await tripService.listViagensByUser(req.params.id);
        res.status(200).json({ trips });
    } catch (error) {
        next(error);
    }
};

const listViagensByDate = async (req, res, next) => {
    try {
        const trips = await tripService.listViagensByDate(req.query);
        res.status(200).json({ trips });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    registerViagem,
    listViagens,
    getViagemById,
    updateViagem,
    deleteViagem,
    searchViagem,
    listViagensByUser,
    listViagensByDate
};
