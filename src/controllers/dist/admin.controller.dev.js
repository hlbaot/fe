"use strict";

var Users = require('../services/admin.service');

exports.login = function _callee(req, res) {
  var _req$body, username, password, admin;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _req$body = req.body, username = _req$body.username, password = _req$body.password;

          if (!(!username || !password)) {
            _context.next = 4;
            break;
          }

          return _context.abrupt("return", res.status(400).json({
            messsage: 'Vui lòng điền đầy đủ!!'
          }));

        case 4:
          _context.next = 6;
          return regeneratorRuntime.awrap(Users.logined(username, password));

        case 6:
          admin = _context.sent;
          return _context.abrupt("return", res.status(200).json({
            messsage: 'Đăng nhập thành công!',
            roleList: admin.roles,
            token: admin.token
          }));

        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](0);
          console.error(_context.t0);
          return _context.abrupt("return", res.status(500).json({
            messsage: _context.t0.message
          }));

        case 14:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 10]]);
};