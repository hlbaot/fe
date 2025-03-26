const Evalutes = require('../services/evalute.service');


class EvaluteController{
    static async createComment(req, res){
        try {
            const comment = await Evalutes.writeComment(req.body.email, req.body.comment);
            if(comment) return res.status(400).json({success: false, message: 'Điền thiếu thông tin'});
            return res.status(201).json({success: true, message: 'Gửi đánh giá thành công!', data: comment});
        } catch (error) {
            return res.status(500).json({success: false, message: error.message});
        }
    };

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