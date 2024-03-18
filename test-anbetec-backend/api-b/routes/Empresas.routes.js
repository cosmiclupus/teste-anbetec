const authenticateToken = require('../middlewares/auth');

const empresaController = require('../controllers/Empresas.controllers');

const express = require('express');
const router = express.Router();

/**
 * @swagger
 * /empresas:
 *   get:
 *     description: Retorna todas as empresas
 *     responses:
 *       200:
 *         description: Sucesso
 */
router.get('/empresas',authenticateToken ,empresaController.obterEmpresas);

/**
 * @swagger
 * /empresas/{id}:
 *   get:
 *     description: Retorna uma empresa pelo ID
 *     parameters:
 *       - name: id
 *         description: ID da empresa
 *         in: path
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: Sucesso
 */
router.get('/empresas/:id',authenticateToken ,empresaController.obterEmpresa);

/**
 * @swagger
 * /empresas:
 *   post:
 *     description: Cria uma nova empresa
 *     parameters:
 *       - name: empresa
 *         description: Objeto da empresa
 *         in: body
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             razaosocial:
 *               type: string
 *               example: "TO transporte"
 *             cnpj:
 *               type: string
 *               example: "86.443.203/0001-78"
 *             descricao:
 *               type: string
 *               example: "Alimenticia teste"
 *     responses:
 *       200:
 *         description: Sucesso
 */
router.post('/empresas',authenticateToken,empresaController.criarEmpresa);

/**
 * @swagger
 * /empresas/{id}:
 *   put:
 *     description: Atualiza uma empresa pelo ID
 *     parameters:
 *       - name: id
 *         description: ID da empresa
 *         in: path
 *         required: true
 *         type: integer
 *       - name: empresa
 *         description: Objeto da empresa
 *         in: body
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             razaosocial:
 *               type: string
 *               example: "Goias Poupas"
 *             cnpj:
 *               type: string
 *               example: "14.971.658/0001-55"
 *             descricao:
 *               type: string
 *               example: "Alimenticia GO"
 *             updatedAt:
 *               type: string
 *               format: date-time
 *               example: "2024-03-16T03:39:07.750Z"
 *             createdAt:
 *               type: string
 *               format: date-time
 *               example: "2024-03-16T03:39:07.750Z"
 *     responses:
 *       200:
 *         description: Sucesso
 */
router.put('/empresas/:id',authenticateToken, empresaController.atualizarEmpresa);

/**
 * @swagger
 * /empresas/{id}:
 *   delete:
 *     description: Exclui uma empresa pelo ID
 *     parameters:
 *       - name: id
 *         description: ID da empresa
 *         in: path
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: Sucesso
 */
router.delete('/empresas/:id',authenticateToken, empresaController.excluirEmpresa);

/**
 * @swagger
 * /empresas/{id}/usuarios:
 *   get:
 *     description: Retorna os usuários de uma empresa pelo ID da empresa
 *     parameters:
 *       - name: id
 *         description: ID da empresa
 *         in: path
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: Sucesso
 */
router.get('/empresas/:id/usuarios',authenticateToken, empresaController.obterUsuariosDaEmpresa);

module.exports = router;