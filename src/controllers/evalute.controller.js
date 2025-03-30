const Evalutes = require('../services/evalute.service');


class EvaluteController{
    static async createComment(req, res) {
        try {
          const { email, message, rating } = req.body;
          const result = await Evalutes.writeComment(email, message, rating);
      
          // Kiểm tra nếu result là thông báo lỗi
          if (result.success === false) {
            return res.status(400).json(result);
          }
      
          // Trường hợp thành công
          return res.status(201).json({
            success: true,
            message: 'Gửi đánh giá thành công!',
            data: result
          });
        } catch (error) {
          return res.status(500).json({ success: false, message: error.message });
        }
      }

    static async getComment(){
        try {
            const comment = await Evalutes.getComment();
            if(!comment) return res.status(400).json({success: false, message: 'Chưa có dữ liệu!'});
            return res.status(200).json({success: false, data: comment})
        } catch (error) {
            return res.status(500).json({success: false, message: error.message});
        }
    };

    static async deleteComment(){
        try {
            const comment = await Evalutes.deleteComment(req.body.id);
            if(!comment) return res.status(400).json({success: false, message: 'Không tìm thấy comment này!'});
            return res.status(200).json({success: true, message: 'Xóa thành công'});
        } catch (error) {
            return res.status(500).json({success: false, message: error.message});
        }
    };
};

module.exports = EvaluteController;