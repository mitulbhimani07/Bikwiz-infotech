var Contactus=require('../Model/GetInTouchModel')


module.exports.Contact=async(req,res)=>{
    try{
        console.log(req.body)
        const data=await Contactus.create(req.body);
        res.status(201).json({
            message: "Message sent successfully",
            data
        });
    }catch(error){
        console.error("Error in message:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}