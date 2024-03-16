const Sequelize = require('sequelize');
const EmpresaModel = require('../models/Empresas.model');
const axios = require('axios');

class EmpresaService {
  constructor() {
    this.Empresa = EmpresaModel;
}

  async findAll() {
    return await this.Empresa.findAll();
  }

  async findById(id) {
    return await this.Empresa.findByPk(id);
  }

  async create(empresa) {
    return await this.Empresa.create(empresa);
  }

  async update(id, empresa) {
    const empresaToUpdate = await this.Empresa.findByPk(id);
    if (!empresaToUpdate) throw new Error('Empresa não encontrada');
    return await empresaToUpdate.update(empresa);
  }

  async delete(id) {
    const empresaToDelete = await this.Empresa.findByPk(id);
    if (!empresaToDelete) throw new Error('Empresa não encontrada');
    return await empresaToDelete.destroy();
  }

  // Funcionalidade adicional: buscar usuários por empresa
  async findUsuariosByEmpresa(id) {

    try {
      const response = await axios.get('http://localhost:3001/usuarios');
      const usuarios = response.data;

      console.log(usuarios);

      const usuariosDaEmpresa = usuarios.filter(usuario => Number (usuario.idempresa) === Number(id));

      console.log(usuariosDaEmpresa);

      if (!usuariosDaEmpresa.length) {
          throw new Error('Usuários não encontrados para a empresa');
      }

      return usuariosDaEmpresa;
  } catch (error) {
      console.error(error);
      throw new Error('Erro ao buscar usuários');
  }
  

  }
}

module.exports = EmpresaService;