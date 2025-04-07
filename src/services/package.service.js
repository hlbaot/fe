const Packages = require("../models/Package.model");
const PackageDTO = require("../DTO/package.dto");
const Product = require('../models/Product.model');
const Package = require('../models/Package.model');
class PackageService {
  static async createPackage(data) {
    try {
      if (!data.name || !data.price || !data.description) {
        throw new Error("Thiếu thông tin cần thiết!!");
      }
      const newPackage = await Packages.create(data);
      return new PackageDTO(newPackage);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async getAllPackages() {
    try {
      const packages = await Packages.findAll({attributes: ['name', 'price', 'description']});
      return packages.map((pkg) => new PackageDTO(pkg));
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async getPackageById(packageId) {
    try {
      if (!packageId) throw new Error("Thiếu ID gói dịch vụ");

      const isAdmin = true;

      const attributes = isAdmin
        ? ["id", "name", "price", "description", "createdAt", "updatedAt"]
        : ["id", "name", "price", "description"];

      // 👇 Thêm thiết lập quan hệ thủ công
      Packages.hasMany(Product, { foreignKey: 'package_id' });
      Product.belongsTo(Packages, { foreignKey: 'package_id' });
      const foundPackage = await Packages.findByPk(packageId, { 
                          attributes, 
                          include: [{
                            model: Product,
                            attributes: ["img"]
                          }] 
      });
      if (!foundPackage) throw new Error("Không tìm thấy gói dịch vụ");

      return new PackageDTO(foundPackage);
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

module.exports = PackageService;
