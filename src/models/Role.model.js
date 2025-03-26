const {DataTypes} = require('sequelize');
const sequelize = require('../configs/database.config');

const Role = sequelize.define('Role', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    role_name: {
        type: DataTypes.STRING,
    }
},{
    tableName: 'Role',
});

module.exports = Role;