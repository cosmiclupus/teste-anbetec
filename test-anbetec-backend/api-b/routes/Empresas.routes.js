const authenticateToken = require('../middlewares/auth');

const empresaController = require('../controllers/Empresas.controllers');

const express = require('express');
const router = express.Router();


router.get('/empresas',authenticateToken ,empresaController.obterEmpresas);
router.get('/empresas/:id',authenticateToken ,empresaController.obterEmpresa);
router.post('/empresas',authenticateToken,empresaController.criarEmpresa);
router.put('/empresas/:id',authenticateToken, empresaController.atualizarEmpresa);
router.delete('/empresas/:id',authenticateToken, empresaController.excluirEmpresa);
router.get('/empresas/:id/usuarios',authenticateToken, empresaController.obterUsuariosDaEmpresa);

module.exports = router;