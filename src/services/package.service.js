const Packages = require("../models/Package.model");
const PackageDTO = require("../DTO/package.dto");

class PackageService {
  static async createPackage(params) {
    try {
      if (!params.name || !params.price || !params.description) {
        throw new Error("Thiếu thông tin cần thiết!!");
      }
      const newPackage = await Packages.create(params);
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

      const foundPackage = await Packages.findByPk(packageId, { attributes });
      if (!foundPackage) throw new Error("Không tìm thấy gói dịch vụ");

      return new PackageDTO(foundPackage);
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

module.exports = PackageService;
