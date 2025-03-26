const { body, validationResult } = require('express-validator');

exports.checkUser = [
  body('email').isEmail().withMessage('Invalid Email'),
];

module.exports = checkUser;
