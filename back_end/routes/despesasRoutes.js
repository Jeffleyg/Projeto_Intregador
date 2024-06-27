const express = require('express');
const router = express.Router();
const despesasController = require('../controllers/despesasController');
const authenticateJWT = require('../middlewares/authenticateJWT');

router.post('/registerDespesa', authenticateJWT, despesasController.registerDespesa);
router.get('/listDespesa', despesasController.listDespesas);
router.get('/listDespesa/:id', despesasController.getDespesaById);
router.put('/updateDespesa/:id', despesasController.updateDespesa);
router.delete('/deleteDespesa/:id', despesasController.deleteDespesa);

module.exports = router;