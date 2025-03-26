// const express = require('express');
const adminRouter = require('./admin.router');
const clientRouter = require('./client.router');

function router(app) {
    app.use('/admin', adminRouter);
    app.use('/booking', clientRouter);
}

module.exports = router;