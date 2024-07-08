/* eslint-disable no-undef */
const express = require('express');
const router = express.Router();
const tripController = require('../controllers/tripController');
const authenticateJWT = require('../middlewares/authenticateJWT');

router.post('/registerViagem', tripController.registerViagem);
router.get('/listViagem', tripController.listViagens);
router.get('/listViagem/:id', tripController.getViagemById);
router.put('/updateViagem/:idViagem', tripController.updateViagem);
router.delete('/deleteViagem/:idViagem', tripController.deleteViagem);
router.get('/searchViagem', tripController.searchViagem);
router.get('/listViagemByUser/:email', tripController.listViagensByUser);
router.get('editViagem/:idViagem', tripController.editaViagem);
module.exports = router;
