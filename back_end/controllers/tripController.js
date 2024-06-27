/* eslint-disable no-undef */
const tripService = require('../service/tripService');
const tripModel = require('../models/cadastrarViagemModel');

const registerViagem = async (req, res, next) => {
    try {
        const trip = await tripService.register(req.body);
        res.status(201).json({ trip });
    } catch (error) {
        next(error);
    }
};

const listViagens = async (req, res, next) => {
    try {
        const trips = await tripService.listAll();
        res.status(200).json({ trips });
    } catch (error) {
        next(error);
    }
};

const getViagemById = async (req, res, next) => {
    try {
        const trip = await tripService.getById(req.params.id);
        res.status(200).json({ trip });
    } catch (error) {
        next(error);
    }
};

const updateViagem = async (req, res, next) => {
    try {
        const trip = await tripService.update(req.params.id, req.body);
        res.status(200).json({ trip });
    } catch (error) {
        next(error);
    }
};

const deleteViagem = async (req, res, next) => {
    try {
        await tripService.remove(req.params.id);
        res.status(200).json({ message: 'Deletado com sucesso' });
    } catch (error) {
        next(error);
    }
};

const searchViagem = async (req, res, next) => {
    try {
        const trip = await tripService.search(req.query);
        res.status(200).json({ trip });
    } catch (error) {
        next(error);
    }
};

const listViagensByUser = async (req, res, next) => {
    try {
        const trips = await tripService.listByUser(req.params.id);
        res.status(200).json({ trips });
    } catch (error) {
        next(error);
    }
};

const listViagensByDate = async (req, res, next) => {
    try {
        const trips = await tripService.listByDate(req.query);
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
