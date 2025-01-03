const config = require('../config/config')
const axios = require('axios');


const url =  `${config.greenApiUrl}/waInstance${config.greenApiInstance}/sendMessage/${config.greenApiTokenInstance}`

const sendCode = (to, code) => {
    return axios.post(url, {
        chatId: to.replace('+', '') + '@c.us',
        message: `${config.smsTextStart}${code}${config.smsTextEnd}`
    }, {
        headers: {
            'Content-Type': 'application/json',
        }
    });
}

const sendWaiterRequest = (table) => {
    return axios.post(url, {
        chatId: "120363386202209285@g.us",
        message: `Table №${table} is waiting for a waiter`
    }, {
        headers: {
            'Content-Type': 'application/json',
        }
    });
}

module.exports.sendCode = sendCode;
module.exports.sendWaiterRequest = sendWaiterRequest;