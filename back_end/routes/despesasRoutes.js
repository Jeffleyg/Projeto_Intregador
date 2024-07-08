const express = require('express');
const router = express.Router();
const multer = require('multer');
const despesasController = require('../controllers/despesasController');
const authenticateJWT = require('../middlewares/authenticateJWT');

const upload = multer({ dest: 'uploads/' });

router.post('/registerDespesa',upload.single('notaFiscal'), despesasController.registerDespesa);
router.get('/listAllDespesas',authenticateJWT, despesasController.listAllDespesas);
router.put('/updateDespesa/:id', despesasController.updateDespesa);
router.delete('/deleteDespesa/:id', despesasController.deleteDespesa);
router.get('/getDespesaById', despesasController.getDespesaById);
router.get('/listAllDespesasByUser', despesasController.listAllDespesasByUser);

module.exports = router;