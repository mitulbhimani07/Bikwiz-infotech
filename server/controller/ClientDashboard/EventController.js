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
       const clientId = req.params.id; // Assuming client ID is passed as a URL parameter
        console.log("Fetching events for client ID:", clientId);
        
        const events = await EventModel.find({ clientId: clientId });
        
        if (!events || events.length === 0) {
            return res.status(404).json({ message: "No events found for this client" });
        }
        
        console.log("Events fetched successfully:", events);
        res.status(200).json(events);
        
    } catch (error) {
        console.error("Error fetching events:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}