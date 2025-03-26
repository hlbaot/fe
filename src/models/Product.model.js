const { DataTypes } = require('sequelize');
const sequelize = require('../configs/database.config');
const Package = require('./Package.model');  // Đảm bảo bạn đã import đúng mô hình Package

const Product = sequelize.define('Product', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    img: {
        type: DataTypes.STRING,
        allowNull: false
    },
    package_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
}, {
    tableName: 'Products',
    timestamps: true
});

// Mối quan hệ one-to-many (Package hasMany Product)


module.exports = Product;
