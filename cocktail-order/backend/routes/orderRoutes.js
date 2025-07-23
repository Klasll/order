const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

// Use orderController directly, not as a constructor
router.post('/order', orderController.createOrder);
router.get('/orders', orderController.getOrders);

module.exports = router;