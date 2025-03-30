const Evalutes = require("../models/Evalutes.model");

class EvaluteService {
  static async writeComment(email, message, rating) {
    try {
      if (!email || !rating) {
        return { success: false, message: 'Điền thiếu thông tin (email và rating là bắt buộc)' };
      }
      const comments = await Evalutes.create({ email, message, rating });
      return comments;
    } catch (error) {
      console.error(error);
      throw new Error(error.message);
    }
  }

  static async getComment() {
    try {
      const comment = await Evalutes.findAll({attributes: ['email', 'comment']});
      return comment;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async deleteComment(id){
    try {
      const foundId = await Evalutes.findByPk(id);
      if(!foundId){
        throw new Error("Comment not found");
      }
      await Evalutes.destroy({where: {id}});
      return "Comment deleted successfully";
    } catch (error) {
      throw new Error(error.message);
    }
  }
};


module.exports = EvaluteService;
