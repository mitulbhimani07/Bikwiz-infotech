const express = require("express");
const router = express.Router();
const FreelancerSignUpController = require("../../controller/Authentication/FreelancerSignUp");
// Register client route
router.post('/signup', FreelancerSignUpController.SignUp);
// View all clients route
router.get('/view', FreelancerSignUpController.FreelancerView);
// View single client route
router.get('/view/:id', FreelancerSignUpController.SingleFreelancerView);

module.exports = router;
