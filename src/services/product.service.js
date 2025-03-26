const Products = require("../models/Product.model");
const ProductDTO = require("../DTO/product.dto");

class ProductService {
  static async createProduct(packageId, img) {
    try {
      if (!img || !packageId) {
        throw new Error("Thiếu thông tin cần thiết!");
      }
      const newProduct = await Products.create({
        img: img,
        package_id: packageId,
      });
      return new ProductDTO(newProduct);
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

module.exports = ProductService;
