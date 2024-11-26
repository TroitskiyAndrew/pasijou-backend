const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    posterApiUrl: process.env.POSTER_URL ?? '',
    posterApiToken: process.env.POSTER_TOKEN ?? '',
    port: process.env.PORT || 3000, 
    greenApiUrl: process.env.GREEN_API_URL ?? '',
    greenApiInstance: process.env.GREEN_API_INSTANCE ?? '',
    greenApiTokenInstance: process.env.GREEN_API_TOKEN_INSTANCE ?? '',
    smsTextStart: process.env.SMS_TEXT_START ?? 'Verification code: ',
    smsTextEnd: process.env.SMS_TEXT_END ?? '',
};