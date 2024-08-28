const express = require('express');
const PaymentController = require('../controller/paymentController');
const authenticate = require('../middleWare/authenticate');
const router = express.Router();

// Route for initializing the payment
router.post('/pay', authenticate(), PaymentController.initializePayment);

// Route for verifying the payment
router.get('/verify-payment/:id', PaymentController.verifyPayment);
router.get('/:id', PaymentController.getPaymentById);
// // Route for successful payment
// router.get('/payment-success', PaymentController.paymentSuccess);

module.exports = router;
