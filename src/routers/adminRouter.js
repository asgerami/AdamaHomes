const express = require('express');
const router = express.Router();
const bookingController = require('../controller/bookingController');
const authenticate = require('../middleWare/authenticate');


router.get('/', authenticate('ROLE_ADMIN'), bookingController.getAllBookings); 
router.get('/:id',  bookingController.getBookingById); 
router.put('/:id', authenticate(), bookingController.updateBooking); 
router.delete('/:id', authenticate(), bookingController.deleteBooking);

module.exports = router;
