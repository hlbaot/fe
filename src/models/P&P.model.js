// models/relation.js
const Package = require('./Package.model');
const Product = require('./Product.model');

Package.hasMany(Product, { foreignKey: 'package_id' });
Product.belongsTo(Package, { foreignKey: 'package_id' });

module.exports = { Package, Product };
