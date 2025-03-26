"use strict";

var User = require('../models/User.model');

var Role = require('../models/Role.model');

var User_Role = require('../models/User_Role.model');

var Package = require('../models/Package.model');

var syncDatabase = function syncDatabase() {
  return regeneratorRuntime.async(function syncDatabase$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(User.sync({
            force: false
          }));

        case 3:
          _context.next = 5;
          return regeneratorRuntime.awrap(Role.sync({
            force: false
          }));

        case 5:
          _context.next = 7;
          return regeneratorRuntime.awrap(User_Role.sync({
            force: false
          }));

        case 7:
          _context.next = 9;
          return regeneratorRuntime.awrap(Package.sync({
            force: false
          }));

        case 9:
          _context.next = 14;
          break;

        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](0);
          console.error('❌ Lỗi đồng bộ bảng:', _context.t0);

        case 14:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 11]]);
};

module.exports = syncDatabase;