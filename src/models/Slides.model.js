const {DataTypes} = require('sequelize');
const sequelize = require('../configs/database.config');

const Slide = sequelize.define('Slides', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    img: {
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    tableName: 'Slides',
    timestamps: true,
});

module.exports = Slide;