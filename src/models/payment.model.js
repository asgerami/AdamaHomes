// models/payment.model.js
const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
    amount: Number,
    currency: String,
    phone_number:String,
    firstName:String,
    lastName:String,
    transactionType:String,
    email: String,
    tx_ref: String,
    status: String,
    paymentMethod: String,
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
  },
    bookingId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Booking',
    },
    propertyId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Property',
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Payment = mongoose.model('Payment', paymentSchema);

module.exports = Payment;
