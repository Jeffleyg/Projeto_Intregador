const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/registerUsuario', userController.registerUsuario);
router.get('/listUsuario', userController.listUsuarios);
router.get('/listUsuario/:id', userController.getUsuarioById);
router.put('/updateUsuario/:id', userController.updateUsuario);
router.delete('/deleteUsuario/:id', userController.deleteUsuario);
router.get('/searchUsuario', userController.searchUsuario);
router.post('/login', userController.login);
router.post('/forgotPassword', userController.forgotPassword);
router.post('/resetPassword', userController.resetPassword);
router.post('/changePassword', userController.changePassword);

module.exports = router;
