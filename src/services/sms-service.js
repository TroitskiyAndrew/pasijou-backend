const config = require('../config/config')
const client = require('twilio')(config.twilioSid, config.twilioToken);



const sendCode = (to, code) => {
    return client.messages
        .create({
            from: `whatsapp:${config.twilioSender}`,
            contentSid: 'HX229f5a04fd0510ce1b071852155d3e75',
            contentVariables: `{"1":"${code}"}`,
            to: `whatsapp:${to}`
        });
}

module.exports.sendCode = sendCode;