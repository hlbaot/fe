"use strict";

var Evalutes = require('../services/evalute.service');

exports.createComment = function _callee(req, res) {
  var _req$body, email, comment, evalute;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _req$body = req.body, email = _req$body.email, comment = _req$body.comment;

          if (!(!email || !comment)) {
            _context.next = 4;
            break;
          }

          return _context.abrupt("return", res.status(400).json({
            success: false,
            message: 'Vui long dien day du!!'
          }));

        case 4:
          _context.next = 6;
          return regeneratorRuntime.awrap(Evalutes.writeComment(email, comment));

        case 6:
          evalute = _context.sent;
          return _context.abrupt("return", res.status(201).json({
            success: true,
            message: 'Danh gia thanh cong!!',
            data: evalute
          }));

        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](0);
          console.error(_context.t0);
          return _context.abrupt("return", res.status(500).json({
            success: false,
            message: _context.t0.message
          }));

        case 14:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 10]]);
};

exports.getComment = function _callee2(req, res) {
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
        case "end":
          return _context2.stop();
      }
    }
  });
};