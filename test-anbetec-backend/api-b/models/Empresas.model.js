const Sequelize = require('sequelize');
const sequelize = require('../utils/db');


  const Empresa = sequelize.define('empresas', {
    idempresa: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    razaosocial: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    cnpj: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    descricao: {
      type: Sequelize.STRING,
      allowNull: true,
    },
  });


 


module.exports = Empresa;