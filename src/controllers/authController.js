const smsService = require('../services/sms-service');
const authMap = new Map();

const sendCode = async (req, res) => {
    try {
        const phone = req.params.phone;
        const code = String(Math.floor(100000 + Math.random() * 900000));
        authMap.set(phone, code);
        await smsService.sendCode(phone, code);
        res.status(200).send(true);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

const checkCode = async (req, res) => {
    try {
        const {phone, code} = req.body;
        if(code === authMap.get(phone)){
            authMap.delete(phone);
            res.status(200).send(true);
        }else {
            res.status(200).send(false);
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
}


module.exports.sendCode = sendCode;
module.exports.checkCode = checkCode;