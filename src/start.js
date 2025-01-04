const express = require('express');
const cors = require('cors');
const config = require('./config/config');
const guestController = require('./controllers/guestController');
const menuController = require('./controllers/menuController');
const orderController = require('./controllers/orderController');
const authController = require('./controllers/authController');
const tableController = require('./controllers/tablesController');

const app = express();
app.use(express.json());
app.use(cors());

app.get('/guests/id/:id', guestController.getGuestById);  
app.get('/guests/phone/:phone', guestController.getGuestByPhone);  
app.post('/guests/create', guestController.createGuest);  

app.get('/menu', menuController.getMenu);
app.post('/order', orderController.createOrder);
app.get('/order/:id', orderController.getOrder);
app.get('/waiter/:table', orderController.callWaiter);
app.get('/rate', orderController.getRate);
app.post('/updateOrder', orderController.updateOrder);
app.get('/auth/:phone', authController.sendCode);
app.post('/auth', authController.checkCode);
app.get('/tables', tableController.getTables);

app.listen(config.port, () => {
    console.log(`Server running on port ${config.port}`);
});