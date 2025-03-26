const jwt = require('jsonwebtoken');
require('dotenv').config();
exports.authenticate = (req, res, next) => {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(401).json({ message: "Token không tồn tại!" });
    }

    const bearerToken = token.split(' ')[1]; // Tách Bearer khỏi token

    // Lấy secret từ biến môi trường
    const secretKey = process.env.JWT;
    //adnasndmsan has hdan been dassd 
    // Giải mã token
    jwt.verify(bearerToken, secretKey, (err, user) => {
        if (err) {
            return res.status(403).json({ message: "Token không hợp lệ!" });
        }
        req.user = user;
        // console.log("User Info:", req.user); 
        next();
    });
};  

exports.checkAdmin = (req, res, next) => {
    // console.log("Role Info:", req.user.role);

    // Kiểm tra xem mảng role có chứa quyền 'ADMIN'
    if (req.user && req.user.role && req.user.role.some(r => r.authority === 'ADMIN')) {
        // console.log("Quyền ADMIN đã được xác nhận.");
        next();
    } else {
        console.log("Không có quyền ADMIN.");
        return res.status(403).json({ message: "Bạn không có quyền truy cập!" });
    }
};
