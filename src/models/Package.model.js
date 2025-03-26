const { DataTypes } = require('sequelize');
const sequelize = require('../configs/database.config');
const Product = require('./Product.model');  // Đảm bảo bạn đã import đúng mô hình Product

const Package = sequelize.define('Package', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'Packages',
    timestamps: true
});



module.exports = Package;
