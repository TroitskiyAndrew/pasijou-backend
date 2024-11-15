const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    posterApiUrl: process.env.POSTER_URL ?? '',
    posterApiToken: process.env.POSTER_TOKEN ?? '',
    port: process.env.PORT || 3000, 
    twilioSid: process.env.TWILIO_ACCOUNT_SID ?? '',
    twilioToken: process.env.TWILIO_ACCOUNT_TOKEN ?? '',
    twilioSender: process.env.TWILIO_ACCOUNT_SENDER ?? '',
};