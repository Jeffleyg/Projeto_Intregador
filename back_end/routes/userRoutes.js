/* eslint-disable no-undef */
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authenticateJWT = require('../middlewares/authenticateJWT');

router.post('/registerUsuario', userController.registerUsuario);
router.post('/registerAdmin', userController.registerAdmin);
router.get('/listUsuario', authenticateJWT, userController.listUsuarios);
router.get('/listUsuario/:id', authenticateJWT, userController.getUsuarioById);
router.put('/updateUsuario/:id', authenticateJWT, userController.updateUsuario);
router.delete('/deleteUsuario/:id',authenticateJWT, userController.deleteUsuario);
router.get('/searchUsuario', authenticateJWT, userController.searchUsuario);
router.post('/loginAdmin', userController.loginAdmin);
router.post('/loginUsuario', userController.loginUsuario);
router.post('/forgotPassword', userController.forgotPassword);
router.post('/resetPassword', userController.resetPassword);
router.post('/changePassword', userController.changePassword);
router.get('/getUsuarioProfile', userController.getUsuarioProfile);
router.put('/updateUsuarioProfile', userController.updateUsuarioProfile);

module.exports = router;
