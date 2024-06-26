const errorHandler = (err, req, res, next) => {
    console.error(err);
    res.status(400).json({ error: err.message || 'Erro ao processar solicitação' });
};

module.exports = errorHandler;
