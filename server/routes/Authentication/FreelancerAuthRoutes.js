const express = require('express');
const router = express.Router();
const freelancerController = require('../controller/Authentication/FreelancerSignUp');

// Create a new freelancer
router.post('/freelancersignup', freelancerController.SignUp);

// Get all freelancers
router.get('/freelancersignup', freelancerController.FreelancerView);

// Get a single freelancer by ID
router.get('/freelancersignup/:id', freelancerController.SingleFreelancerView);

module.exports = router;