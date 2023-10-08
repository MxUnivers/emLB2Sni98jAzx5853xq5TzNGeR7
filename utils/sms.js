// sms.js

const twilio = require('twilio');
const dotenv =  require("dotenv");
dotenv.config();



//TWILIO_ACCOUNT_SSID=
//TWILIO_PASSWORD=
// const accountSid = `${process.env.TWILIO_ACCOUNT_SSID}`;
// const authToken = `${process.env.TWILIO_PASSWORD}`;
const accountSid = 'AC0ac2e1c72b9b25dcdae2e346f59326c2';
const authToken = '[AuthToken]';
const client = twilio(accountSid, authToken);

function envoyerSMS(message, destinataire) {
  return client.messages.create({
    body: message,
    from: '+12564483104',
    to: destinataire,
  }).then(msg => console.log(msg.sid))
  .done();
}

module.exports = { envoyerSMS };
