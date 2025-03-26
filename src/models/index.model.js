const Package = require('./Package.model');
const Product = require('./Product.model');

Product.belongsTo(Package, { foreignKey: 'package_id' });
// Mối quan hệ one-to-many (Package hasMany Product)
Package.hasMany(Product, { foreignKey: 'package_id' });