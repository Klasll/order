const express = require('express');
const bodyParser = require('body-parser');
const orderRoutes = require('./routes/orderRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/orders', orderRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});