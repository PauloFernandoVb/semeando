const express = require('express');
const UsuarioController = require('../controllers/usuarioController');

let router = express.Router();

let ctrl = new UsuarioController();


router.get('/cadastrar',ctrl.cadastroView);
router.post('/cadastrar',ctrl.cadastrar);

module.exports = router;