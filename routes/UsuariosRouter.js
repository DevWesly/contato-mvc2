const express = require('express');

const UsuariosController = require('../controllers/UsuariosController');

const router = express.Router();

router.get('/registrar', UsuariosController.showRegistrar);

router.get('/login', UsuariosController.mostrarLogin);

module.exports = router;