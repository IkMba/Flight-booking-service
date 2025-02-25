const express = require('express');

const { BookingController } = require('../../controllers');
const { BookingService } = require('../../services');

const router = express.Router();

router.post(
    '/',
    // BookingService.createBooking
    BookingController.createBooking
)

// router.post(
//     '/payments',
//     BookingController.makePayment
// );

module.exports = router;