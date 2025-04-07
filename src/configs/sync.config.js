const User = require('../models/User.model');
const Role = require('../models/Role.model');
const User_Role = require('../models/User_Role.model');
const Package = require('../models/Package.model');
const Product = require('../models/Product.model');
const Booking = require('../models/Booking.model');
const Evalute = require('../models/Evalutes.model');
const Slide = require('../models/Slides.model');
const syncDatabase =  async () =>{
    try {
        await User.sync({force: false});
        await Role.sync({force: false});
        await User_Role.sync({force: false});
        await Package.sync({alter: true});
        await Product.sync({alter: true});
        await Booking.sync({alter: true});
        await Evalute.sync({alter: true});
        await Slide.sync({alter: true});
    } catch (error) {
        console.error('❌ Lỗi đồng bộ bảng:', error);
        console.error('Chi tiết lỗi:', error);
    }
};

module.exports = syncDatabase;