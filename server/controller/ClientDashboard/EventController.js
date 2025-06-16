const EventModel = require('../../Model/ClientDashboard/EventModel');
module.exports.CreateEvent = async (req, res) => {
    try {
        console.log("Creating event with data:", req.body);
        
    } catch (error) {
        console.error("Error creating event:", error);
        res.status(500).json({ message: "Internal server error" });
        
    }
}
module.exports.GetAllEvents = async (req, res) => {
    try {
        
    } catch (error) {
        console.error("Error fetching events:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}