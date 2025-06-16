const express = require("express");
const router = express.Router();
const eventController = require("../../controller/ClientDashboard/EventController");

router.post("/create-event", eventController.CreateEvent);
router.get("/get-all-events", eventController.GetAllEvents);

module.exports = router