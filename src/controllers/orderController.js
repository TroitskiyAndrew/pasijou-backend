const apiService = require('../services/api-service')

const createOrder = async (req, res) => {
    try {        
        const response = await apiService.post(`orders`, req.body);
        res.status(200).send(response);
    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports.createOrder = createOrder;