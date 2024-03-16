const usuarioController = require('../controllers/Usuarios.controller');

const express = require('express');
const router = express.Router();

router.get('/usuarios', usuarioController.obterUsuarios);
router.get('/usuarios/:nome', usuarioController.obterUsuario);
router.post('/usuarios', usuarioController.criarUsuario);
router.put('/usuarios/:nome', usuarioController.atualizarUsuario);
router.delete('/usuarios/:nome', usuarioController.excluirUsuario);

module.exports = router;
