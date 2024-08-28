const express = require('express');
const router = express.Router();
const feedbackController = require('../controller/feedbackController');
const authenticate = require('../middleWare/authenticate');

router.post('/', authenticate(),feedbackController.createFeedback);
router.get('/ed', authenticate(), feedbackController.getFeedbacks);
router.get('/:id', feedbackController.getFeedbackById);

module.exports = router;
