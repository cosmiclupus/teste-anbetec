const Sequelize = require('sequelize');
const  UsuarioModel = require('../models/Usuarios.model');

class UsuarioService {

    constructor(){
        this.Usuario = UsuarioModel;
    }


    async findAll(){
        return await this.Usuario.findAll();

    }

    async findByName(id){
        return await this.Usuario.findByPk(id);
    }

    async create(usuarioData) {
        try {
            const usuario = await this.Usuario.create(usuarioData);
            return usuario;
        } catch (error) {
            throw error;
        }
    }

    async update(id, usuario){
        const usuarioToUpdate = await this.Usuario.findByPk(id);
        if (!usuarioToUpdate) throw new Error('Usuario não encontrado');
        return await usuarioToUpdate.update(usuario);
    }

    async delete(id){
        const usuarioToDelete = await this.Usuario.findByPk(id);
        if (!usuarioToDelete) throw new Error('Usuario não encontrado');
        return await usuarioToDelete.destroy();
    }

}

module.exports = UsuarioService;