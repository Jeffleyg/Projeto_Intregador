const registroComprasService = require('../service/comprasService');
const purchasesModel = require('../models/registroCompras');

const registerCompra = async (req, res) => {
    try {
        const { emailUsuario, codigoViagem, dataNota, cidadeNota, tipoDespesa, valor, descricao, notaFiscal } = req.body;

        // // Verificar se req.user está definido
        // if (!req.user || !req.user.email) {
        //     return res.status(400).json({ error: 'Usuário não autenticado' });
        // }

        // Verificar se um arquivo foi enviado
        // if (!req.file) {
        //     return res.status(400).json({ error: 'Arquivo de recibo é obrigatório' });
        // }

        const compraData = {
            codigoViagem,
            dataNota,
            cidadeNota,
            tipoDespesa,
            valor,
            descricao,
            notaFiscal,
           // reciboPdf: req.file.path, // Caminho do arquivo enviado
            emailUsuario: req.user.email
        };

        const despesaRegistrada = await registroComprasService.registerCompra(compraData);

        res.status(201).json({ message: 'Despesa cadastrada com sucesso', despesa: despesaRegistrada });
    } catch (error) {
        console.error('Erro ao cadastrar despesa:', error.message);
        res.status(500).json({ error: 'Erro interno ao cadastrar despesa' });
    }
};

const listCompras = async (req, res, next) => {
    try {
        const purchases = await registroComprasService.listAllCompras();
        res.status(200).json({ purchases });
    } catch (error) {
        next(error);
    }
}

const listComprasByUser = async (req, res, next) => {
    try {
        const id = req.user?.id; // Obtém o ID do funcionário a partir do usuário autenticado

        if (!id) {
            return res.status(400).json({ error: 'ID do funcionário não encontrado' });
        }

        const purchases = await registroComprasService.listAllComprasByUser(id);
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
    deleteCompra,
    listComprasByUser
}
