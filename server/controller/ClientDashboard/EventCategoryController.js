const EventCategory=require('../../Model/ClientDashboard/EventCategory')

module.exports.CreateEventCategory=async(req,res)=>{
    try{
        const data=await EventCategory.create(req.body)
        res.status(201).json({
             message: "Event Category created successfully", 
              data
             });
    }catch(error){
        console.error("Error creating event:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}


module.exports.GetEventCategory=async(req,res)=>{
    try{
        const data=await EventCategory.find();
         res.status(201).json({
             message: "Event Category successfully", 
              data
             });
    }catch(error){
        console.error("Error Get event:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}