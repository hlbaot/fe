const PackageService = require("../services/package.service");

class PackageController {
  // Admin Controllers
  static async createPackage(req, res) {
    try {
      const newPackage = await PackageService.createPackage(req.body);
      return res.status(201).json({
        success: true,
        message: "Tạo gói dịch vụ thành công",
        package: newPackage,
      });
    } catch (error) {
      return res.status(500).json({ 
        success: false, 
        message: "Lỗi khi tạo gói dịch vụ",
        error: error.message 
      });
    }
  }

  static async getAllPackages(req, res) {
    try {
      const packages = await PackageService.getAllPackages(true);
      return res.status(200).json({
        success: true,
        message: "Lấy danh sách gói dịch vụ thành công",
        packages,
      });
    } catch (error) {
      return res.status(500).json({ 
        success: false, 
        message: "Lỗi khi lấy danh sách gói dịch vụ",
        error: error.message 
      });
    }
  }

  static async getPackageById(req, res) {
    try {
      const packageData = await PackageService.getPackageById(req.params.id, true);
      return res.status(200).json({
        success: true,
        message: "Lấy gói dịch vụ thành công",
        package: packageData,
      });
    } catch (error) {
      return res.status(500).json({ 
        success: false, 
        message: "Lỗi khi lấy thông tin gói dịch vụ",
        error: error.message 
      });
    }
  }
  
}

module.exports = PackageController;