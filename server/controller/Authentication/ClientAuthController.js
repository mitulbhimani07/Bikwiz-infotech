const ClientModel = require("../../Model/Authentication/ClientAuth");
module.exports.SignUp = async (req, res) => {
    try {
        console.log(req.body );
        const ClientSignUp = await ClientModel.create(req.body);
        res.status(201).json({
            message: "Client signed up successfully",
            data:ClientSignUp
        });
    }
    catch (error) {
        console.error("Error in SignUp:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}
module.exports.Clientview = async (req, res) => {
    try {
        const client = await ClientModel.find();
        res.status(200).json({
            message: "Client data fetched successfully",
            data: client
        });
    }
    catch (error) {
        console.error("Error in Clientview:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}
module.exports.SingleClientview = async (req, res) => {
    try {
        const client = await ClientModel.findById(req.params.id);
        if (!client) {
            return res.status(404).json({ message: "Client not found" });
        }
        res.status(200).json({
            message: "Client data fetched successfully",
            data: client
        });
    }
    catch (error) {
        console.error("Error in SingleClientview:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}