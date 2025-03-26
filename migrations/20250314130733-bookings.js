'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Bookings', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      package_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      shoot_date: {
        type: DataTypes.DATE,
        allowNull: false
      },
      shoot_time: {
        type: DataTypes.TIME,
        allowNull: false
      },
      address:{
        type: DataTypes.STRING,
        allowNull: false
      },
      status:{
        type: DataTypes.ENUM('pending', 'confirmed', 'completed', 'cancelled'),
        allowNull: false,
        defaultValue: 'pending'
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Bookings');
  }
};
