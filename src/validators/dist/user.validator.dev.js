"use strict";

var _require = require('express-validator'),
    body = _require.body,
    validationResult = _require.validationResult;

exports.checkUser = [body('email').isEmail().withMessage('Invalid Email')];
module.exports = checkUser;