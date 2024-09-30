module.exports = app => {
    const orders = require('../controller/order.controller.js');
    const router = require('express').Router();

    router.get('/user/:id', orders.findOrder)

    app.use('/api/orders', router)
}