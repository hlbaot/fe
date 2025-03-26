'use strict';

const { STRING } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Evalutes', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false
      },
      comment: {
        type: STRING,
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Evalutes');
  }
};
