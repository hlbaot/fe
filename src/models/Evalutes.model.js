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
    message: {
        type: DataTypes.STRING
    },
    rating: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min:1,
            max:5
        }
    }
},{
    tableName: 'Evalutes',
    timestamps: true
});

module.exports = Evalute;