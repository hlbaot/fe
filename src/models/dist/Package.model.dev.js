"use strict";

var _require = require('sequelize'),
    DataTypes = _require.DataTypes;

var sequelize = require('../configs/database.config');

var Package = sequelize.define('Packages', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNullL: false
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  product_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  tableName: 'Packages',
  timestamps: true
});
module.exports = Package;