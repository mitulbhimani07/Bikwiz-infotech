const EventModel = require('../../Model/ClientDashboard/EventModel');
module.exports.CreateEvent = async (req, res) => {
    try {
        // console.log("Creating event with data:", req.body);
        const EventData =await EventModel.create({
            title: req.body.title,
            startTime: req.body.startTime,
            endTime: req.body.endTime,
            date: req.body.date,
            location: req.body.location,
            guest: req.body.guest,
            category: req.body.category,
            color: req.body.color,
            clientId: req.user, // Assuming user ID is available in the request
            notifications: {
                twoDaysBefore: req.body.notifications.twoDaysBefore || true,
                dayOf: req.body.notifications.dayOf || true,
                oneHourBefore: req.body.notifications.oneHourBefore || true
            },
            notified: {
                twoDaysBefore: false,
                dayOf: false,
                oneHourBefore: false
            }
        });
        console.log("Event created successfully:", EventData);
        res.status(201).json({
             message: "Event created successfully", 
              EventData
             });
        
    } catch (error) {
        console.error("Error creating event:", error);
        res.status(500).json({ message: "Internal server error" });
        
    }
}
module.exports.GetAllEvents = async (req, res) => {
    try {
        const Events = await EventModel.find({ clientId: req.user });
        console.log("Fetched events:", Events);
        res.status(200).json({ message: "Events fetched successfully", events: Events });
        
    } catch (error) {
        console.error("Error fetching events:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}