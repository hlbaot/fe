const ProductService = require("../services/product.service");

class ProductController {
  static async createProduct(req, res) {
    try {
      const newProduct = await ProductService.createProduct(req.params.packageId, req.body.img);
      return res.status(201).json({
        success: true,
        message: "Tạo sản phẩm thành công",
        product: newProduct,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Lỗi khi tạo sản phẩm",
        error: error.message,
      });
    }
  }
};

module.exports = ProductController;
