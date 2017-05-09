const mongoose = require('mongoose');
const { Schema } = mongoose;

const DriverSchema = new Schema({
  email: { type: String, required: true },
  driving: { type: Boolean, default: false }
});

const Driver = mongoose.model('drver', DriverSchema);

module.exports = Driver;