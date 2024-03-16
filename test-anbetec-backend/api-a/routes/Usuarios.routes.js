const usuarioController = require('../controllers/Usuarios.controller');

const express = require('express');
const router = express.Router();

/**
 * @swagger
 * /usuarios:
 *   get:
 *     description: Retorna todos os usuários
 *     responses:
 *       200:
 *         description: Sucesso
 */
router.get('/usuarios', usuarioController.obterUsuarios);


/**
 * @swagger
 * /usuarios/{nome}:
 *   get:
 *     description: Retorna um usuário pelo nome
 *     parameters:
 *        - name: nome
 *         description: Nome do usuário
 *         in: path
 *         required: true
 *         type: string
 *         example: "lemon%20Pepper"
 *     responses:
 *       200:
 *         description: Sucesso
 */
router.get('/usuarios/:nome', usuarioController.obterUsuario);

/**
 * @swagger
 * /usuarios:
 *   post:
 *     description: Cria um novo usuário
 *     parameters:
 *       - name: usuario
 *         description: Objeto do usuário
 *         in: body
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             nome:
 *               type: string
 *               example: "Joao Piments"
 *             email:
 *               type: string
 *               example: "joaopimets@gmail.com"
 *             cpf:
 *               type: string
 *               example: "3294892348943"
 *             telefone:
 *               type: string
 *               example: "62994991949"
 *             idempresa:
 *               type: integer
 *               example: 2
 *             senha:
 *               type: string
 *               example: "123456"
 *     responses:
 *       200:
 *         description: Sucesso
 */
router.post('/usuarios', usuarioController.criarUsuario);

/**
 * @swagger
 * /usuarios/{nome}:
 *   put:
 *     description: Atualiza um usuário pelo nome
 *     parameters:
 *       - name: nome
 *         description: Nome do usuário
 *         in: path
 *         required: true
 *         type: string
 *         example: "Joao%20Piments"
 *       - name: usuario
 *         description: Objeto do usuário
 *         in: body
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             nome:
 *               type: string
 *               example: "Joao Piments"
 *             email:
 *               type: string
 *               example: "joaopimets@gmail.com"
 *             cpf:
 *               type: string
 *               example: "3294892348943"
 *             telefone:
 *               type: string
 *               example: "62994991949"
 *             idempresa:
 *               type: integer
 *               example: 2
 *             senha:
 *               type: string
 *               example: "123456"
 *             createdAt:
 *               type: string
 *               format: date-time
 *               example: "2024-03-16T04:07:34.456Z"
 *             updatedAt:
 *               type: string
 *               format: date-time
 *               example: "2024-03-16T04:07:34.456Z"
 *     responses:
 *       200:
 *         description: Sucesso
 */
router.put('/usuarios/:nome', usuarioController.atualizarUsuario);

/**
 * @swagger
 * /usuarios/{nome}:
 *   delete:
 *     description: Exclui um usuário pelo nome
 *     parameters:
 *       - name: nome
 *         description: Nome do usuário
 *         in: path
 *         required: true
 *         type: string
 *         example: "Joao%20Piments"
 *     responses:
 *       200:
 *         description: Sucesso
 */
router.delete('/usuarios/:nome', usuarioController.excluirUsuario);

module.exports = router;
