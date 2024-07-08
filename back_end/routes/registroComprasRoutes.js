const express = require('express');
const router = express.Router();
const despesasController = require('../controllers/registroComprasController');
const authenticateJWT = require('../middlewares/authenticateJWT');
const { route } = require('./tripRoutes');
const upload = require('../upload');

router.post('/registerCompra',authenticateJWT, despesasController.registerCompra);
router.get('/listCompra', despesasController.listCompras);
router.get('/listCompra/:id', despesasController.getCompraById);
router.put('/updateCompra/:id', despesasController.updateCompra);
router.delete('/deleteCompra/:id', despesasController.deleteCompra);
router.get('/listCompraByUser', despesasController.listComprasByUser);

module.exports = router;
