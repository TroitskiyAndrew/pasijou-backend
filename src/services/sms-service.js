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

module.exports.sendCode = sendCode;