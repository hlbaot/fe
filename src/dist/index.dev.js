"use strict";

var express = require('express');

require('dotenv').config();

var port = process.env.PORT;

var syncDatabase = require('./configs/sync.config');

var cors = require('cors');

var session = require('express-session');

var sequelize = require('./configs/database.config');

var router = require('./routers/index.router');

var app = express();
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cors({
  origin: '*',
  methods: "GET, POST, PUT, DELETE",
  credentials: true,
  allowedHeaders: "Content-Type,Authorization"
}));
app.use(session({
  secret: process.env.SESSION_SECRET || "superkey",
  resave: false,
  saveUninitialized: true,
  cookie: {
    secure: false,
    httpOnly: true,
    maxAge: 3600000
  }
}));
router(app);

(function _callee() {
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(sequelize.authenticate());

        case 3:
          console.log("Connect SQL successfully!!"); // Dong bo database

          _context.next = 6;
          return regeneratorRuntime.awrap(syncDatabase());

        case 6:
          // Start server after DB connection is successful
          app.listen(port, '0.0.0.0', function () {
            console.log("\uD83D\uDE80Server running at http://0.0.0.0:".concat(port));
          });
          _context.next = 12;
          break;

        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](0);
          console.error("\u274C Kh\xF4ng th\u1EC3 k\u1EBFt n\u1ED1i MySQL: ".concat(_context.t0.message));

        case 12:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 9]]);
})();