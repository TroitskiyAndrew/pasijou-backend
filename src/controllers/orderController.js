const apiService = require('../services/api-service');
const smsService = require('../services/sms-service');

const rateMap = new Map();

function getCurrentDate() {
    const now = new Date();
    return `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`;
}

const createOrder = async (req, res) => {
    try {
        const response = await apiService.post(`orders`, req.body);
        res.status(200).send(response);
    } catch (error) {
        res.status(500).send(error);
    }
}
const getOrder = async (req, res) => {
    const id = req.params.id;
    const now = new Date();
    try {
        const currentDate = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`;
        const yesterday = new Date(now.getTime() - 48 * 60 * 60 *1000);
        const yesterdayDate = `${yesterday.getFullYear()}-${yesterday.getMonth() + 1}-${now.getDate()}`;
        const response = await apiService.get(`transactions.getTransactions?date_from=${yesterdayDate}&date_to=${currentDate}&per_page=1000`);
        const orders = response.data.find(({ transaction_id }) => transaction_id === Number(id));
        res.status(200).send(orders);
    } catch (error) {
        res.status(500).send(error);
    }
}
const updateOrder = async (req, res) => {
    try {
        const response = await apiService.post(`transactions.addTransactionProduct`, req.body);
        res.status(200).send(response);
    } catch (error) {
        res.status(500).send(error);
    }
}

const callWaiter = async (req, res) => {
    try {
        const table = req.params.table;
        await smsService.sendWaiterRequest(table)
        res.status(200).send(true);
    } catch (error) {
        console.log(error)
        res.status(500).send(error.message);
    }
}

const getRate = async (req, res) => {
    const now = getCurrentDate();
    const storedRate = rateMap.get(now); 
    if (storedRate){
        res.status(200).send(storedRate);
        return
    }
    try {
        const rate = await apiService.simpleGet('https://v6.exchangerate-api.com/v6/68d7a930409e6133d123f962/pair/USD/LKR').then(result => result.data.conversion_rate);
        rateMap.set(now, String(rate));
        res.status(200).send(String(rate));
    } catch (error) {
        console.log(error)
        res.status(500).send(error.message);
    }
}

module.exports.createOrder = createOrder;
module.exports.getOrder = getOrder;
module.exports.updateOrder = updateOrder;
module.exports.callWaiter = callWaiter;
module.exports.getRate = getRate;