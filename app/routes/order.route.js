module.exports = app => {
    const orders = require('../controller/order.controller.js');
    const router = require('express').Router();

    router.get('/user/:id', orders.findOrder)
    router.post('/user/:id/add', orders.addToCart)
    router.delete('/user/:id/product/:product', orders.RemoveFromCart)

    app.use('/api/orders', router)
}