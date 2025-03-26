const {DataTypes} = require('sequelize');
const sequelize = require('../configs/database.config');

const Evalute = sequelize.define('Evalutes', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    comment: {
        type: DataTypes.STRING
    }
},{
    tableName: 'Evalutes',
    timestamps: true
});

module.exports = Evalute;