'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        notNull: true,
        autoIncrement: true
      },
      nome: {
        type: Sequelize.STRING(100),
        notNull: true
      },
      senha: {
        type: Sequelize.CHAR(60),
        notNull: true
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('usuarios');
  }
};
