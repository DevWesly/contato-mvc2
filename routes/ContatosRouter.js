const express = require("express");

const ContatosController = require('../controllers/ContatosController')

const router = express.Router();
router.get('/contatos',ContatosController.listarContatos);

module.exports = router;