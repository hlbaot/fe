const Users = require('../models/User.model');
// const Admins = require('../models/Admin.model');
const bcrypt = require('bcryptjs');
const Role = require('../models/Role.model');
const jwt = require('jsonwebtoken');
class User {

    static async logined(username, password){
        try {
            const admin = await Users.findOne({
                where: {username},
                include: [{
                    model: Role,
                    attributes: ['role_name'],
                    through: {attributes: []}
                }]
            });
            if(!admin) throw new Error('Không tìm thấy username!!');
            const isPassword = await bcrypt.compare(password, admin.password);
            if(!isPassword) throw new Error('Mật khẩu không đúng!!');

            const roles = admin.Roles.map(role => ({ authority: role.role_name }));


            const token =  jwt.sign({id: admin.id, username: admin.username, role: roles}, process.env.JWT, {expiresIn: '1h'});
            return {roles, token};
        } catch (error) {
            throw new Error(error.message);
        }
    }

    
}

module.exports = User;
