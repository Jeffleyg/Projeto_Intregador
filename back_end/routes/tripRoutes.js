/* eslint-disable no-undef */
const express = require('express');
const router = express.Router();
const tripController = require('../controllers/tripController');
const authenticateJWT = require('../middlewares/authenticateJWT');

router.post('/registerViagem', authenticateJWT, tripController.registerViagem);
router.get('/listViagem', tripController.listViagens);
router.get('/listViagem/:id', tripController.getViagemById);
router.put('/updateViagem/:id', tripController.updateViagem);
router.delete('/deleteViagem/:id', tripController.deleteViagem);

module.exports = router;
