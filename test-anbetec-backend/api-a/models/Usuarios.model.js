const Sequelize = require('sequelize');
const sequelize = require('../utils/db');

const Usuario = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING,
        primaryKey: true
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cpf: {
        type: Sequelize.STRING,
        allowNull: false
    },
    telefone: {
        type: Sequelize.STRING,
        allowNull: false
    },
    idempresa: {
        type: Sequelize.INTEGER,
        references: {
            model: 'empresas',
            key: 'idempresa'
        }
    },
    senha: {
        type: Sequelize.STRING,
        allowNull: false
    }

});

module.exports = Usuario;