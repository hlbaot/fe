const {DataTypes} = require('sequelize');
const sequelize = require('../configs/database.config');
const Role = require('./Role.model');
const User = require('./User.model');
const User_Role = sequelize.define('User_Role', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User,
            key: 'id'
        }
    },
    role_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Role,
            key: 'id'
        }
    }
},{
    tableName: 'User_Role',
    timestamps: false
});

module.exports = User_Role;