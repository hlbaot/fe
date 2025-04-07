'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.createTable('Slides', {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true
        },
        img: {
          type: Sequelize.STRING,
          allowNull: false
        }
     })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Slides');
  }
};
