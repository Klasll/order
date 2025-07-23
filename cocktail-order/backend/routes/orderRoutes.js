const express = require('express');
const router = express.Router();
const OrderController = require('../controllers/orderController');

const orderController = new OrderController();

// Route to create a new order
router.post('/orders', orderController.createOrder);

// Route to get all orders
router.get('/orders', orderController.getAllOrders);

// Route to get a specific order by ID
router.get('/orders/:id', orderController.getOrderById);

// Route to update an order by ID
router.put('/orders/:id', orderController.updateOrder);

// Route to delete an order by ID
router.delete('/orders/:id', orderController.deleteOrder);

module.exports = router;