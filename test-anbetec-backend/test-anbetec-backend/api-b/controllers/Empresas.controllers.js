const EmpresaService = require('../services/Empresas.service');
const { validationResult } = require('express-validator');

class EmpresaController {
  constructor() {
    this.empresaService = new EmpresaService();
    this.criarEmpresa = this.criarEmpresa.bind(this);
    this.obterEmpresa = this.obterEmpresa.bind(this);
    this.obterEmpresas = this.obterEmpresas.bind(this);
    this.atualizarEmpresa = this.atualizarEmpresa.bind(this);
    this.excluirEmpresa = this.excluirEmpresa.bind(this);
    this.obterUsuariosDaEmpresa = this.obterUsuariosDaEmpresa.bind(this);
  }

  async obterEmpresas(req, res) {
    try {
      const empresas = await this.empresaService.findAll();
      res.json(empresas);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao buscar empresas' });
    }
  }

  async obterEmpresa(req, res) {
    const { id } = req.params;

    try {
      const empresa = await this.empresaService.findById(id);
      if (!empresa) {
        return res.status(404).json({ error: 'Empresa não encontrada' });
      }
      res.json(empresa);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao buscar empresa' });
    }
  }

  async criarEmpresa(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
  
    const { razaosocial, cnpj, descricao } = req.body;
  
    try {
      const novaEmpresa = await this.empresaService.create({
        razaosocial,
        cnpj,
        descricao,
      });
      res.status(201).json(novaEmpresa);
    } catch (error) {
      console.error(error);
      res.status(400).json({ error: 'Erro ao criar empresa' });
    }
  }

  async atualizarEmpresa(req, res) {
    const { id } = req.params;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { razaosocial, cnpj, descricao } = req.body;

    try {
      const empresa = await this.empresaService.update(id, {
        razaosocial,
        cnpj,
        descricao,
      });
      res.json(empresa);
    } catch (error) {
      console.error(error);
      if (error.message === 'Empresa não encontrada') {
        res.status(404).json({ error: 'Empresa não encontrada' });
      } else {
        res.status(400).json({ error: 'Erro ao atualizar empresa' });
      }
    }
  }

  async excluirEmpresa(req, res) {
    const { id } = req.params;

    try {
      const empresa = await this.empresaService.delete(id);
      if (!empresa) {
        return res.status(404).json({ error: 'Empresa não encontrada' });
      }
      res.json({ mensagem: 'Empresa excluída com sucesso' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao excluir empresa' });
    }
  }

  async obterUsuariosDaEmpresa(req, res) {
    const { id } = req.params;
    console.log(`Buscando usuários para a empresa com id ${id}`)
    try {
      const usuarios = await this.empresaService.findUsuariosByEmpresa(id);
      if (!usuarios) {
        return res.status(404).json({ error: 'Empresa não encontrada' });
      }
      res.json(usuarios);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao buscar usuários' });
    }
  }

}

module.exports = new EmpresaController();