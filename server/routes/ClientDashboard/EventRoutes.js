const express = require("express");
const router = express.Router();
const eventController = require("../../controller/ClientDashboard/EventController");
const authenticateToken = require("../../MiddleWare/jwt");
router.post("/create-event", authenticateToken , eventController.CreateEvent);
router.get("/get-all-events/:id", authenticateToken ,eventController.GetAllEvents);

module.exports = router