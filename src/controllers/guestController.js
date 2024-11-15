const apiService = require('../services/api-service')

const getGuestByPhone = async (req, res) => {
    try {
        const phone = req.params.phone;
        const response = await apiService.get(`clients.getClients?phone=${phone}`);
        res.status(200).send(response[0] || false);
    } catch (error) {
        res.status(500).send(error.message);
    }
}
const getGuestById = async (req, res) => {
    try {
        const id = req.params.id;
        const response = await apiService.get(`clients.getClient?client_id=${id}`);
        res.status(200).send(response[0] || false);
    } catch (error) {
        res.status(500).send(error.message);
    }
}
const createGuest = async (req, res) => {
    try {
        const response = await apiService.post(`clients.createClient`, req.body);
        res.status(200).send({client_id: response});
    } catch (error) {
        res.status(500).send(error.message);
    }
}

module.exports.getGuestByPhone = getGuestByPhone;
module.exports.getGuestById = getGuestById;
module.exports.createGuest = createGuest;