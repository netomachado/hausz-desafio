const { Data }= require('../database/models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;


exports.criarBd = (products) => {
  return Data.create(products);
};