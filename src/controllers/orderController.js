const apiService = require('../services/api-service')

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
        const response = await apiService.get(`transactions.getTransactions?date_from=${currentDate}&date_to=${currentDate}&per_page=1000`);
        const orders = response.data.find(({transaction_id}) => transaction_id === Number(id));
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

module.exports.createOrder = createOrder;
module.exports.getOrder = getOrder;
module.exports.updateOrder = updateOrder;