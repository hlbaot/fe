const Slides = require("../models/Slides.model");
const slideDTO = require("../DTO/Slides.dto");

class SlideService {
  async createdSlide(img) {
    try {
      const imgUrl = typeof  img === "object" && img.url ? img.url : img;
      const newSlide = await Slides.create({img: imgUrl });
      const result = new slideDTO(newSlide);
      return {
        message: "Successfully!",
        result,
      };
    } catch (error) {
      throw new Error(error.message);
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
