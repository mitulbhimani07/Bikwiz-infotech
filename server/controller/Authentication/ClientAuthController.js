const ClientModel = require("../../Model/Authentication/ClientAuthModel");
const freelancermodel=require("../../Model/Authentication/FreelancerAuthModel")
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const nodemailer = require("nodemailer");

const JWT_SECRET = process.env.JWT_SECRET;

// Salt rounds for bcrypt (higher is more secure but slower)
const SALT_ROUNDS = 10;

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'mitulbhimani281@gmail.com',
      pass: 'ider cpmw znpp kdcc'
    }
  });

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

module.exports.VerifyEmail=async(req,res)=>{
    try{
        const {email}=req.body;

         let role = null;

        let client=await ClientModel.findOne({email});
        if (client) {
            role = 'client';
        } else {
            // Try finding in Freelancer collection
            client = await freelancermodel.findOne({ email });
            if (client) {
                role = 'freelancer';
            }
        }


        // If the email is not found in either collection, return an error
        if (!client) {
            return res.status(404).json({ message: "User with this email does not exist" });
        }

        // Generate OTP
        const otp = Math.floor(1000 + Math.random() * 9000).toString(); // 4-digit OTP
        const otpExpiration = new Date(Date.now() + 3600000); // OTP expires in 1 hour
        client.otp = otp;
        client.otpExpiration = otpExpiration;

        await client.save();

         console.log(`OTP for ${client.email}: ${otp}`);

        // Send OTP via email
        const mailOptions = {
            from: '<mitulbhimani281@gmail.com>',
            to: client.email,
            subject: "Password Reset OTP",
            html: `<p>Your OTP for password reset is <strong>${otp}</strong></p><p>This OTP is valid for 1 hour.</p>`,
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return res.status(500).json({ message: "Error sending email: " + error.message });
            } else {
                return res
                    .status(200)
                    .json({ message: "OTP sent to your email", otp,role }); // Include isAdmin in the response
            }
        });

    }catch(error){
        console.error("Error:", error.message);
      return res.status(500).json({ message: "An error occurred: " + error.message });
    }
}

module.exports.verifyOtp=async(req,res)=>{
    try{
        const {email,otp}=req.body;

        let role=null;
        let user=await ClientModel.findOne({email});
        if(user){
            role='client';
        }else {
            // Try finding in Freelancer collection
            user = await freelancermodel.findOne({ email });
            if (user) {
                role = 'freelancer';
            }
        }

        if (!user) {
            return res.status(404).json({ message: "User not found. Please sign up first." });
        }

        // Check if OTP matches
        if (user.otp !== otp) {
            return res.status(400).json({ message: "Invalid OTP. Please try again." });
        }
            
        // Check if OTP is expired
        if (user.otpExpiration < new Date()) {
            return res.status(400).json({ message: "OTP has expired. Please request a new one." });
        }

        // OTP is valid
        res.status(200).json({
            status: "Success",
            message: "OTP verified successfully.",
            role
        });

         await user.save();
    }catch(error){
        res.status(500).json({
            status: "Failure",
            message: "An error occurred during OTP verification.",
            error: error.message
        });
    }
}


module.exports.ResetPassword=async(req,res)=>{
    try{
        const { email, newPassword, otp } = req.body;
        let role=null;
        let user = await ClientModel.findOne({ email });
       if(user){
            role='client';
        }else {
            // Try finding in Freelancer collection
            user = await freelancermodel.findOne({ email });
            if (user) {
                role = 'freelancer';
            }
        }
        
        if (!user) {
            return res.status(404).json({
                status: "Failure",
                message: "User not found."
            });
        }

        if (user.otp !== otp) {
            return res.status(400).json({
                status: "Failure",
                message: "Invalid OTP. Please try again."
            });
        }

        if (user.otpExpiration < new Date()) {
            return res.status(400).json({
                status: "Failure",
                message: "OTP has expired. Please request a new one."
            });
        }

        const hashedNewPassword = await bcrypt.hash(newPassword, SALT_ROUNDS);
        user.password = hashedNewPassword;
        user.otp = null;
        user.otpExpiration = null;
        await user.save();

        res.status(200).json({
            status: "Success",
            message: "Password reset successfully."
        });

    }catch(error){
        res.status(500).json({
            status: "Failure",
            message: "An error occurred during password reset.",
            error: error.message
            
        });
    }
}

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


module.exports.ClientLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "Email and password are required" });
        }

        let user = null;
        let role = null;

        // Try finding user in Client collection
        user = await ClientModel.findOne({ email });
        if (user) {
            role = 'client';
        } else {
            // Try finding in Freelancer collection
            user = await freelancermodel.findOne({ email });
            if (user) {
                role = 'freelancer';
            }
        }

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        const userResponse = user.toObject();
        delete userResponse.password;

        // ✅ Create JWT token
        const token = jwt.sign(
            {
                userId: user._id,
                email: user.email,
                role: role, // Include role in token
            },
            process.env.JWT_SECRET, // Make sure this is defined in your .env
            { expiresIn: '1h' }
        );

        res.status(200).json({
            message: "Login successful",
            role,
            token,
            data: userResponse
        });

    } catch (error) {
        console.error("Error in Login:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};


