const express = require("express");

const ContatosController = require('../controllers/ContatosController');

const adimplencia = require('../middlewares/adimplencia');

const verificaLogado = require('../middlewares/verificaLogado')

const router = express.Router();

router.get('/contatos',verificaLogado, adimplencia, ContatosController.listarContatos);

router.get('/contatos/:id',verificaLogado, adimplencia, ContatosController.capturarContato);

module.exports = router;