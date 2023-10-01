

const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  apikey: {
    type: String,
    required: true,
  },
  site_id: {
    type: String,
    required: true,
  },
  transaction_id: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  currency: {
    type: String,
    required: true,
  },
  alternative_currency: String,
  description: String,
  customer_id: String,
  customer_name: String,
  customer_surname: String,
  customer_email: String,
  customer_phone_number: String,
  customer_address: String,
  customer_city: String,
  customer_country: String,
  customer_state: String,
  customer_zip_code: String,
  notify_url: String,
  return_url: String,
  channels: String,
  metadata: String,
  lang: String,
  invoice_data: {
    Donnee1: String,
    Donnee2: String,
    Donnee3: String,
  },
});

const PaymentInfoModel = mongoose.model('payment_info', paymentSchema);

module.exports = PaymentInfoModel
