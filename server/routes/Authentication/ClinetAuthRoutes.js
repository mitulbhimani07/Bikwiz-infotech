const express = require("express");
const router = express.Router();
const clientSignUpController = require("../../controller/Authentication/ClientAuthController");
// Register client route
router.post('/signup', clientSignUpController.SignUp);
// View all clients route
router.get('/view', clientSignUpController.Clientview);
// View single client route
router.get('/view/:id', clientSignUpController.SingleClientview);
// Delete client route
router.delete('/delete/:id', clientSignUpController.ClientDelete);
// Update client route
router.put('/update/:id', clientSignUpController.ClientUpdate);
// Login client route
router.post('/signin', clientSignUpController.ClientLogin);

router.post('/verifyEmail',clientSignUpController.VerifyEmail)
router.post('/verifyOtp',clientSignUpController.verifyOtp)
router.post('/ResetPassword',clientSignUpController.ResetPassword)
router.post('/ChangePassword',clientSignUpController.ChangePassword)

module.exports = router;
