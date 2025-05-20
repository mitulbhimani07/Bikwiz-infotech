const express = require('express');
const route = express.Router();
const freelancerController = require('../../controller/Authentication/FreelancerSignUp');

// Create a new freelancer
route.post('/freelancersignup', freelancerController.freelancerSignUp);

// Get all freelancers
route.get('/freelancersignup', freelancerController.FreelancerView);

// // Get a single freelancer by ID
route.get('/freelancersignup/:id', freelancerController.SingleFreelancerView);
// // Delete a freelancer by ID

module.exports = route;