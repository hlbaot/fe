"use strict";

// const express = require('express');
var adminRouter = require('./admin.router');

function router(app) {
  app.use('/admin', adminRouter);
}

module.exports = router;