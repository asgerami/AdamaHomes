// services/paymentService.js
const axios = require('axios').default;
const Payment = require('../models/payment.model');

const CHAPA_URL = process.env.CHAPA_URL || "https://api.chapa.co/v1/transaction/initialize";
const CHAPA_AUTH = process.env.CHAPA_AUTH;

const config = {
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${CHAPA_AUTH}`,
    },
};

class PaymentService {
    async initializePayment(data) {
        try {
            const response = await axios.post(CHAPA_URL, data, config);
            const checkoutUrl = response.data.data.checkout_url;

            // Save payment details to the database
            const payment = new Payment({
                amount: data.amount,
                currency: data.currency,
                email: data.email,
                firstName: data.firstName,
                lastName: data.lastName,
                tx_ref: data.tx_ref,
                status: 'pending',
                bookingId: data.bookingId,
                propertyId: data.propertyId,
                phone_number: data.phone_number, 
                paymentMethod: data.paymentMethod, 
                transactionType: data.transactionType 
            });

            await payment.save();  // Save to the database

        return checkoutUrl;
        } catch (error) {
            console.error('Chapa API Error:', error.response?.data || error.message);
            throw new Error('Payment initialization failed');
        }
    }

    async verifyPayment(txRef) {
        try {
            const response = await axios.get(`https://api.chapa.co/v1/transaction/verify/${txRef}`, config);
            const verificationResult = response.data;

            // Update payment status in the database
            const payment = await Payment.findOneAndUpdate(
                { tx_ref: txRef },
                { status: verificationResult.status },  // Update status based on verification result
                { new: true }
            );

            if (!payment) {
                throw new Error('Payment not found');
            }

            return payment;
        } catch (error) {
            console.error('Chapa API Error:', error.response?.data || error.message);
            throw new Error('Payment verification failed');
        }
    }

    // New method to get payment by ID
    async getPaymentById(paymentId) {
        try {
            const payment = await Payment.findById(paymentId)
            .populate('propertyId')
            .populate({
                path: 'bookingId',
                select: 'user',
                populate: {
                    path: 'user',
                    select: 'fullName email userAddress phone', 
                },         
            })
            .populate('user');
            if (!payment) {
                throw new Error('Payment not found');
            }
            return payment;
        } catch (error) {
            console.error('Error fetching payment:', error.message);
            throw new Error('Error fetching payment');
        }
    }
}

module.exports = new PaymentService();
