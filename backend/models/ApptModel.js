const mongoose = require('mongoose');

const ApptSchema = mongoose.Schema({
  provider: {
    type: String,
    required: true
  },
  datetime: {
    type: Date,
    required: true
  },
  booked: {
    type: Boolean,
    required: true
  },
  patient: {
    type: String,
    required: false
  }
});

module.exports = mongoose.model('Appt', ApptSchema);