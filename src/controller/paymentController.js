const PaymentService = require('../services/paymentService');

class PaymentController {
    static async initializePayment(req, res) {
        try {
            const CALLBACK_URL = "http://localhost:4000/api/verify-payment/";
            const RETURN_URL = "http://localhost:3000/paymentsuccess/";
            const TEXT_REF = "tx-myecommerce12345-" + Date.now();

            const data = {
                amount: req.body.amount,
                currency: 'ETB',
                email: req.body.email,
                pohen_number: req.body.phone_number,
                firstame: req.body.first_Name,
                last_name: req.body.last_Name,
                transactionType:req.body.transactionType,
                tx_ref: TEXT_REF,
                callback_url: CALLBACK_URL + TEXT_REF,
                return_url: RETURN_URL,
                bookingId: req.body.bookingId,
                propertyId: req.body.propertyId
            };

            console.log('Request received:', req.body);

            // Initialize payment and get the checkout URL
            const checkoutUrl = await PaymentService.initializePayment(data);

            res.status(201).send(checkoutUrl);
            console.log(checkoutUrl);
        } catch (error) {
            console.error(error.message);
            res.status(500).send("Error initializing payment");
        }
    }

    static async verifyPayment(req, res) {
        try {
            const txRef = req.params.id;

            // Verify payment and get updated payment info
            const payment = await PaymentService.verifyPayment(txRef);

            console.log("Payment successfully verified", payment);
            res.status(200).send(payment);
        } catch (error) {
            console.error(error.message);
            res.status(500).send("Error verifying payment");
        }
    }

    static async paymentSuccess(req, res) {
        res.render("success");
    }

    static async getPaymentById(req, res) {
        try {
            const paymentId = req.params.id;

            // Retrieve payment details by ID
            const payment = await PaymentService.getPaymentById(paymentId);

            if (!payment) {
                return res.status(404).send("Payment not found");
            }

            res.status(200).json(payment);
        } catch (error) {
            console.error(error.message);
            res.status(500).send("Error fetching payment");
        }
    }
}

module.exports = PaymentController;
