const ClientModel = require("../../Model/Authentication/ClientAuthModel");
const bcrypt = require('bcrypt');

// Salt rounds for bcrypt (higher is more secure but slower)
const SALT_ROUNDS = 10;

module.exports.SignUp = async (req, res) => {
    try {
        console.log(req.body);

        // Hash the password before saving
        if (req.body.password) {
            req.body.password = await bcrypt.hash(req.body.password, SALT_ROUNDS);
        }

        req.body.name = req.body.fname + " " + req.body.lname;
        const ClientSignUp = await ClientModel.create(req.body);
        
        // Don't send password back in response
        const clientResponse = ClientSignUp.toObject();
        delete clientResponse.password;
        
        res.status(201).json({
            message: "Client signed up successfully",
            data: clientResponse
        });
    }
    catch (error) {
        console.error("Error in SignUp:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

module.exports.Clientview = async (req, res) => {
    try {
        const clients = await ClientModel.find().select('-password'); // Exclude password
        res.status(200).json({
            message: "Client data fetched successfully",
            data: clients
        });
    }
    catch (error) {
        console.error("Error in Clientview:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

module.exports.SingleClientview = async (req, res) => {
    try {
        const client = await ClientModel.findById(req.params.id).select('-password'); // Exclude password
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
};

module.exports.ClientDelete = async (req, res) => {
    try {
        const client = await ClientModel.findByIdAndDelete(req.params.id);
        if (!client) {
            return res.status(404).json({ message: "Client not found" });
        }
        
        // Don't send password back in response
        const clientResponse = client.toObject();
        delete clientResponse.password;
        
        res.status(200).json({
            message: "Client deleted successfully",
            data: clientResponse
        });
    }
    catch (error) {
        console.error("Error in ClientDelete:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

module.exports.ClientUpdate = async (req, res) => {
    try {
        // If password is being updated, hash it
        if (req.body.password) {
            req.body.password = await bcrypt.hash(req.body.password, SALT_ROUNDS);
        }
        
        // Update name if fname and lname are provided
        if (req.body.fname && req.body.lname) {
            req.body.name = req.body.fname + " " + req.body.lname;
        }

        const client = await ClientModel.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        ).select('-password'); // Exclude password from response

        if (!client) {
            return res.status(404).json({ message: "Client not found" });
        }

        res.status(200).json({
            message: "Client updated successfully",
            data: client
        });
    }
    catch (error) {
        console.error("Error in ClientUpdate:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

// Add a login method
module.exports.ClientLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        
        // Find client by email
        const client = await ClientModel.findOne({ email });
        
        if (!client) {
            return res.status(404).json({ message: "Client not found" });
        }
        
        // Compare provided password with stored hash
        const isPasswordValid = await bcrypt.compare(password, client.password);
        
        if (!isPasswordValid) {
            return res.status(401).json({ message: "Invalid credentials" });
        }
        
        // Don't send password back in response
        const clientResponse = client.toObject();
        delete clientResponse.password;
        
        res.status(200).json({
            message: "Login successful",
            data: clientResponse
        });
    }
    catch (error) {
        console.error("Error in Login:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};