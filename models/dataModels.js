const { Data }= require('../database/models');
const Sequelize = require('sequelize');



exports.criarBd = async (products) => await Data.bulkCreate(products);
;