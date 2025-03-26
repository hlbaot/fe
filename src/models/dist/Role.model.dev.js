"use strict";

var _require = require('sequelize'),
    DataTypes = _require.DataTypes;

var sequelize = require('../configs/database.config');

var Role = sequelize.define('Role', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  role_name: {
    type: DataTypes.STRING
  }
}, {
  tableName: 'Role'
});
module.exports = Role;