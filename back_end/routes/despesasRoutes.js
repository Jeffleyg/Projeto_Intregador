const express = require('express');
const router = express.Router();
const despesasController = require('../controllers/despesasController');
const authenticateJWT = require('../middlewares/authenticateJWT');

router.post('/registerDespesa',authenticateJWT, despesasController.registerDespesa);
router.get('listAllDespesas', despesasController.listAllDespesas);
router.put('/updateDespesa/:id', despesasController.updateDespesa);
router.delete('/deleteDespesa/:id', despesasController.deleteDespesa);
router.get('/getDespesaById', despesasController.getDespesaById);

module.exports = router;