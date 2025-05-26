const express = require("express");
const router = express.Router();

const ContactUs=require('../controller/GetInTouchController')

router.post('/GetInTouch',ContactUs.ContactUs)

module.exports=router;