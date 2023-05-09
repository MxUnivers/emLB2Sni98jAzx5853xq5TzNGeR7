const mongoose = require('mongoose');
const { AlertContext } = require('twilio/lib/rest/monitor/v1/alert');

const alertSchema = new mongoose.Schema({
  titre: {
    type: String,
    required: false
  },
  description: {
    type: String,
    required: false
  },
  startDate: {
    type: Date,
    required: false
  },
  endDate: {
    type: Date,
    required: false
  },
  active: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const AlertModel = mongoose.model('Alert', alertSchema);
module.exports = AlertModel ;
