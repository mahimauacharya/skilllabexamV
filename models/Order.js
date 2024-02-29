// models/Order.js
const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  foodId: { type: mongoose.Schema.Types.ObjectId, ref: 'Food', required: true },
  addressId: { type: String, required: true }, // Add an Address model if needed
  paymentMode: { type: String, enum: ['cash', 'card', 'upi'], required: true },
  status: { type: String, default: 'placed' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Order', orderSchema);
