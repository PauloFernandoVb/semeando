const express = require('express');
const UsuarioController = require('../controllers/usuarioController');

let ctrl = new UsuarioController();

let router = express.Router();

router.get('/cadastrar',ctrl.cadastroView);
router.post('/cadastrar',ctrl.cadastrar);

module.exports = router;