var Contactus=require('../Model/GetInTouchModel')


module.exports.ContactUs=async(req,res)=>{
    try{
        const Contact=await Contactus(req.body);

        res.status(201).json({
            message: "Client signed up successfully",
            data: Contact
        });
    }catch(error){
        console.error("Error in SignUp:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}