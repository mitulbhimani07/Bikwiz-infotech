const express = require("express");
const router = express.Router();
const eventCategoryController = require("../../controller/ClientDashboard/EventCategoryController");

router.post("/eventCategory" , eventCategoryController.CreateEventCategory);
router.get("/Getevent",eventCategoryController.GetEventCategory)

module.exports = router