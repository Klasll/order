class OrderController {
    constructor(orderService) {
        this.orderService = orderService;
    }

    async createOrder(req, res) {
        try {
            const orderData = req.body;
            const newOrder = await this.orderService.createOrder(orderData);
            res.status(201).json(newOrder);
        } catch (error) {
            res.status(500).json({ message: 'Error creating order', error: error.message });
        }
    }

    async getOrder(req, res) {
        try {
            const orderId = req.params.id;
            const order = await this.orderService.getOrderById(orderId);
            if (!order) {
                return res.status(404).json({ message: 'Order not found' });
            }
            res.status(200).json(order);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving order', error: error.message });
        }
    }

    async getAllOrders(req, res) {
        try {
            const orders = await this.orderService.getAllOrders();
            res.status(200).json(orders);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving orders', error: error.message });
        }
    }
}

export default OrderController;