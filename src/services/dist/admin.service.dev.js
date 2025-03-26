"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Users = require('../models/User.model'); // const Admins = require('../models/Admin.model');


var bcrypt = require('bcryptjs');

var Role = require('../models/Role.model');

var jwt = require('jsonwebtoken');

var User =
/*#__PURE__*/
function () {
  function User() {
    _classCallCheck(this, User);
  }

  _createClass(User, null, [{
    key: "logined",
    value: function logined(username, password) {
      var admin, isPassword, roles, token;
      return regeneratorRuntime.async(function logined$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return regeneratorRuntime.awrap(Users.findOne({
                where: {
                  username: username
                },
                include: [{
                  model: Role,
                  attributes: ['role_name'],
                  through: {
                    attributes: []
                  }
                }]
              }));

            case 3:
              admin = _context.sent;

              if (admin) {
                _context.next = 6;
                break;
              }

              throw new Error('Không tìm thấy username!!');

            case 6:
              _context.next = 8;
              return regeneratorRuntime.awrap(bcrypt.compare(password, admin.password));

            case 8:
              isPassword = _context.sent;

              if (isPassword) {
                _context.next = 11;
                break;
              }

              throw new Error('Mật khẩu không đúng!!');

            case 11:
              roles = admin.Roles.map(function (role) {
                return {
                  authority: role.role_name
                };
              });
              token = jwt.sign({
                id: admin.id,
                username: admin.username,
                role: roles
              }, process.env.JWT, {
                expiresIn: '1h'
              });
              return _context.abrupt("return", {
                roles: roles,
                token: token
              });

            case 16:
              _context.prev = 16;
              _context.t0 = _context["catch"](0);
              throw new Error(_context.t0.message);

            case 19:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, [[0, 16]]);
    }
  }]);

  return User;
}();

module.exports = User;