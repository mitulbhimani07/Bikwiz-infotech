const express = require('express');
const route = express.Router();
const freelancerController = require('../../controller/Authentication/FreelancerAuthController');

// Create a new freelancer
route.post('/freelancersignup', freelancerController.freelancerSignUp);

// Get all freelancers
route.get('/freelancersignup', freelancerController.FreelancerView);

// // Get a single freelancer by ID
route.get('/freelancersignup/:id', freelancerController.SingleFreelancerView);
// // Delete a freelancer by ID
route.delete('/freelancersignup/:id', freelancerController.deleteFreelancer);
// // Update a freelancer by ID
route.put('/freelancerupdate/:id', freelancerController.updateFreelancer);
// // Login a freelancer
route.post('/freelancersignin', freelancerController.freelancerLogin);
route.post('/googlesignup',freelancerController.GoogleSignup)
module.exports = route;