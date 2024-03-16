const UsuarioService = require('../services/Usuarios.service');
const { validationResult } = require('express-validator');

class UsuarioController {

    constructor() {
        this.usuarioService = new UsuarioService();
        this.criarUsuario = this.criarUsuario.bind(this);
        this.obterUsuario = this.obterUsuario.bind(this);
        this.obterUsuarios = this.obterUsuarios.bind(this);
        this.atualizarUsuario = this.atualizarUsuario.bind(this);
        this.excluirUsuario = this.excluirUsuario.bind(this);
    }

    async obterUsuarios(req, res) {
        try {
            const usuarios = await this.usuarioService.findAll();
            res.json(usuarios);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Erro ao buscar usuários' });
        }
    }

    async obterUsuario(req, res) {

        const nome = req.params.nome;

        try {
            const usuario = await this.usuarioService.findById(nome);

            if (!usuario) {
                return res.status(404).json({ error: 'Usuário não encontrado' });
            }

            res.json(usuario);

        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Erro ao buscar usuário' });
        }
    }

    async criarUsuario(req, res) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { nome, email,cpf,telefone,idempresa, senha } = req.body;

        try {
            const novoUsuario = await this.usuarioService.create({
                nome,
                email,
                cpf,
                telefone,
                idempresa,
                senha,
            });
            res.status(201).json(novoUsuario);
        } catch (error) {
            console.error(error);
            res.status(400).json({ error: 'Erro ao criar usuário' });
        }
    }

    async atualizarUsuario(req, res) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { nome } = req.params;
        const { email,cpf,telefone, senha } = req.body;

       try{
            const usuario = await this.usuarioService.update(nome, {
                email,
                cpf,
                telefone,
                senha,
            });
            res.json(usuario);
        
       }

         catch (error) {
            console.error(error);
            res.status(400).json({ error: 'Erro ao atualizar usuário' });
        }
    }

    async excluirUsuario(req, res) {
        const { nome} = req.params;

        try {
            const usuario = await this.usuarioService.delete(nome);
            console.log(`${nome} deletado com sucesso!`);
            res.status(200).json({ mensagem: 'Usuário excluído com sucesso' });
            res.json(usuario);
        } catch (error) {
            console.error(error);
            if (error.message === 'Usuário não encontrado') {
                res.status(404).json({ error: 'Usuário não encontrado' });
            } else {
                res.status(400).json({ error: 'Erro ao excluir usuário' });
            }
        }
    }

    
 } 

 module.exports =  new UsuarioController();
