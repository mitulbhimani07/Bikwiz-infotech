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

module.exports = router;
