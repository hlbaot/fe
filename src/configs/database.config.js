const {Sequelize} = require('sequelize');
require('dotenv').config();
const sequelize = new Sequelize('booking', 'root', '2805', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false,
});

(async()=>{
    try {
        await sequelize.authenticate();
        console.log(`Connect successfully!`);
    } catch (error) {
        console.error(`Disconnect database: ${error}`)
    }
});

module.exports = sequelize;

