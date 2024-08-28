const feedbackService = require('../services/feedback.service')

// Create a new feedback
exports.createFeedback = async (req, res) => {
  try {
    const feedback = await feedbackService.createFeedback(req.body);
    res.status(201).json(feedback);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all feedbacks
exports.getFeedbacks = async (req, res) => {
  try {
    const feedbacks = await feedbackService.getAllFeedbacks();
    console.log(feedbacks)
    res.status(200).json(feedbacks);
   
  } catch (error) {
    console.log('not correct')
    res.status(400).json({ error: error.message });
  }
};

// Get feedback by ID
exports.getFeedbackById = async (req, res) => {
  try {
    const feedback = await feedbackService.getFeedbackById(req.params.id);
    res.status(200).json(feedback);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

// Update feedback by ID (if needed)
exports.updateFeedback = async (req, res) => {
  try {
    const feedback = await feedbackService.updateFeedback(req.params.id, req.body);
    res.status(200).json(feedback);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete feedback by ID (if needed)
exports.deleteFeedback = async (req, res) => {
  try {
    const feedback = await feedbackService.deleteFeedback(req.params.id);
    res.status(200).json(feedback);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
