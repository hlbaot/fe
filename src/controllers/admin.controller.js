const Users = require('../services/admin.service');

exports.login = async(req, res)=>{
    try {
        const {username, password} = req.body;
        if(!username || !password) return res.status(400).json({messsage: 'Vui lòng điền đầy đủ!!'});
        const admin = await Users.logined(username, password);
        return res.status(200).json({messsage: 'Đăng nhập thành công!', roleList: admin.roles, token: admin.token});
    } catch (error) {
        console.error(error);
        return res.status(500).json({messsage: error.message});
    }
}

exports.logout = async(req, res)=>{
    try {
        const response = await Users.logout(req.session);
        res.clearCookie("connect.sid"); // Xóa cookie session nếu có
        return res.json(response);
    } catch (error) {
        return res.status(500).json({success: false, message: error.message});
    }
};



