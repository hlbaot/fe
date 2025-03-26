const {DataTypes} = require('sequelize');
const sequelize = require('../configs/database.config');
const Role = require('./Role.model');
const User = sequelize.define('Users', 
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        username: {
            type: DataTypes.STRING,
            allowNull: true,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: true,
            // unique: true
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },{
        tableName: 'Users',
        timestamps: true
    }
);

User.belongsToMany(Role, {through: "User_Role", foreignKey: "user_id"});
Role.belongsToMany(User, {through: "User_Role", foreignKey: "role_id"});
    
module.exports = User;