const express = require('express');
const router = express.Router();
const despesasController = require('../controllers/registroComprasController');
const authenticateJWT = require('../middlewares/authenticateJWT');

router.post('/registerCompra', despesasController.registerCompra);
router.get('/listCompra', despesasController.listCompras);
router.get('/listCompra/:id', despesasController.getCompraById);
router.put('/updateCompra/:id', despesasController.updateCompra);
router.delete('/deleteCompra/:id', despesasController.deleteCompra);

module.exports = router;
