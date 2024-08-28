const Feedback = require('../models/feedback.model');

module.exports = {
  // Create a new feedback
  async createFeedback(feedbackData) {
    try {
      const feedback = new Feedback(feedbackData);
      await feedback.save();
      return feedback;
    } catch (error) {
      throw new Error(`Error creating feedback: ${error.message}`);
    }
  },

  // Get all feedbacks
  async getAllFeedbacks() {
    try {
      const feedbacks = await Feedback.find().populate('userId');
      return feedbacks;
    } catch (error) {
      throw new Error(`Error fetching feedbacks: ${error.message}`);
    }
  },

  // Get feedback by ID
  async getFeedbackById(id) {
    try {
      const feedback = await Feedback.findById(id).populate('userId');
      if (!feedback) {
        throw new Error('Feedback not found');
      }
      return feedback;
    } catch (error) {
      throw new Error(`Error fetching feedback by ID: ${error.message}`);
    }
  },

  // Update feedback by ID (if needed)
  async updateFeedback(id, updateData) {
    try {
      const feedback = await Feedback.findByIdAndUpdate(id, updateData, { new: true });
      if (!feedback) {
        throw new Error('Feedback not found');
      }
      return feedback;
    } catch (error) {
      throw new Error(`Error updating feedback: ${error.message}`);
    }
  },

  // Delete feedback by ID (if needed)
  async deleteFeedback(id) {
    try {
      const feedback = await Feedback.findByIdAndDelete(id);
      if (!feedback) {
        throw new Error('Feedback not found');
      }
      return feedback;
    } catch (error) {
      throw new Error(`Error deleting feedback: ${error.message}`);
    }
  },
};
