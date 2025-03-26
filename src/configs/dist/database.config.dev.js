"use strict";

var _require = require('sequelize'),
    Sequelize = _require.Sequelize;

require('dotenv').config();

var sequelize = new Sequelize('booking', 'root', '2805', {
  host: 'localhost',
  dialect: 'mysql',
  logging: console.log
});

(function _callee() {
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(sequelize.authenticate());

        case 3:
          console.log("Connect successfully!");
          _context.next = 9;
          break;

        case 6:
          _context.prev = 6;
          _context.t0 = _context["catch"](0);
          console.error("Disconnect database: ".concat(_context.t0));

        case 9:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 6]]);
});

module.exports = sequelize;