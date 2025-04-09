const Slides = require("../models/Slides.model");
const slideDTO = require("../DTO/Slides.dto");

class SlideService {
  async createdSlide(img) {
    try {
      // Log để debug
      // console.log("Input img from FE:", img);
  
      // Đảm bảo luôn lấy đúng URL
      const imgUrl = typeof img === "object" && img?.url ? img.url : img;
  
      if (!imgUrl) {
        throw new Error("img không hợp lệ hoặc thiếu URL ảnh.");
      }
  
      const newSlide = await Slides.create({ img: imgUrl });
      const result = new slideDTO(newSlide);
  
      return {
        message: "Successfully!",
        result,
      };
    } catch (error) {
      console.error("Lỗi tạo slide:", error);
      throw new Error(error.message || "Lỗi server");
    }
  }
  
  async getSlide() {
    try {
        const slides = await Slides.findAll({order: [["createdAt", "DESC"]]});
        return slides.map(slide=>slide.img);
    } catch (error) {
        throw new Error(error.message);
    }
  }
  async deletedSlide(id){
    try {
        await Slides.destroy({where: {id}});
        return {message: 'Xóa thành công!'};
    } catch (error) {
        throw new Error(error.message);
    }
  }
  
}

module.exports = new SlideService();
