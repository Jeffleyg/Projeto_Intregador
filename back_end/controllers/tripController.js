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
        const { descricao, valor, dataDeIda } = req.body;

        if (!req.user) {
            return res.status(400).json({ error: 'Usuário não autenticado' });
        }

        if (!descricao || !dataDeIda || !valor) {
            return res.status(400).json({ error: 'Dados incompletos' });
        }

        const [rowsUpdated, [updatedTrip]] = await tripService.updateViagem(
            req.params.idViagem,
            req.body,
            req.user.email
        );

        res.status(200).json({ trip: updatedTrip });
    } catch (error) {
        next(error);
    }
};

const deleteViagem = async (req, res, next) => {
    try {
        await tripService.removeViagem(req.params.idViagem);
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
        const trips = await tripService.listViagensByUser(req.params.email);
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

const editaViagem = async (req, res, next) => {
    try {
        const trip = await tripService.editaViagem(req.params.idViagem, req.body);
        res.status(200).json({ trip });
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
    listViagensByDate,
    editaViagem
};
