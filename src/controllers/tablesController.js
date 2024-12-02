const apiService = require('../services/api-service')

const getTables = async (req, res) => {
    try {
        const tables = await apiService.get(`spots.getTableHallTables?spot_id=1&without_deleted=1`);
        res.status(200).send(tables || false);
    } catch (error) {
        res.status(500).send(error.message);
    }
}


module.exports.getTables = getTables;