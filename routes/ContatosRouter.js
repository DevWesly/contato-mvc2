const express = require("express");

const ContatosController = require('../controllers/ContatosController');

const adimplencia = require('../middlewares/adimplencia');

const router = express.Router();
router.get('/contatos',ContatosController.listarContatos);

router.get('/contatos/:id', ContatosController.capturarContato);

module.exports = router;