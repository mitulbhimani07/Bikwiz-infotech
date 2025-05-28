const FreelancerModel = require("../../Model/Authentication/FreelancerAuthModel");
const bcrypt = require('bcrypt');

// Salt rounds for bcrypt (higher is more secure but slower)
const SALT_ROUNDS = 10;

module.exports.freelancerSignUp = async (req, res) => {
    try {
        console.log(req.body);
        
        // Hash the password before saving
        if (req.body.password) {
            req.body.password = await bcrypt.hash(req.body.password, SALT_ROUNDS);
        }
        
        req.body.name = req.body.fname + " " + req.body.lname;
        
        // Create new freelancer in database
        const FreelancerData = await FreelancerModel.create(req.body);
        
        // Don't send password back in response
        const freelancerResponse = FreelancerData.toObject();
        delete freelancerResponse.password;
        
        res.status(201).json({
            message: 'Freelancer signed up successfully',
            data: freelancerResponse
        });
        
    } catch (error) {
        console.error('Error in freelancerSignUp:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports.FreelancerView = async (req, res) => {
    try {
        const freelancers = await FreelancerModel.find().select('-password'); // Exclude password
        res.status(200).json({
            message: 'Freelancer data fetched successfully',
            data: freelancers
        });
        
    } catch (error) {
        console.error('Error in FreelancerView:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports.GoogleSignup = async (req, res) => {
  try {
    const { email, name = "", country = "" } = req.body;

    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    // Check if user already exists (in client or freelancer collection)
    let user = await FreelancerModel.findOne({ email });

    if (!user) {
      // Create new client (default role)
      const newUser = await FreelancerModel.create({
        email,
        name,
        fname: name.split(" ")[0] || "",
        lname: name.split(" ")[1] || "",
        password: "", // No password for social login
        country,
        signupMethod: "google"
      });

      const userResponse = newUser.toObject();
      delete userResponse.password;

      return res.status(201).json({
        message: "Google user created",
        role: "freelancer",
        data: userResponse
      });
    } else {
      const userResponse = user.toObject();
      delete userResponse.password;

      return res.status(200).json({
        message: "User already exists",
        role,
        data: userResponse
      });
    }

  } catch (error) {
    console.error("Google Signup Error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports.SingleFreelancerView = async (req, res) => {
    try {
        const freelancer = await FreelancerModel.findById(req.params.id).select('-password'); // Exclude password
        if (!freelancer) {
            return res.status(404).json({ message: 'Freelancer not found' });
        }
        res.status(200).json({
            message: 'Freelancer data fetched successfully',
            data: freelancer
        });
        
    } catch (error) {
        console.error('Error in SingleFreelancerView:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports.updateFreelancer = async (req, res) => {
    try {
        // If password is being updated, hash it
        if (req.body.password) {
            req.body.password = await bcrypt.hash(req.body.password, SALT_ROUNDS);
        }
        
        // Combine first name and last name into full name
        if (req.body.fname && req.body.lname) {
            req.body.name = req.body.fname + " " + req.body.lname;
        }

        const freelancer = await FreelancerModel.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        ).select('-password'); // Exclude password from response

        if (!freelancer) {
            return res.status(404).json({ message: 'Freelancer not found' });
        }

        res.status(200).json({
            message: 'Freelancer updated successfully',
            data: freelancer
        });
    } catch (error) {
        console.error('Error in updateFreelancer:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports.deleteFreelancer = async (req, res) => {
    try {
        const freelancer = await FreelancerModel.findByIdAndDelete(req.params.id);
        if (!freelancer) {
            return res.status(404).json({ message: 'Freelancer not found' });
        }
        
        // Don't send password back in response
        const freelancerResponse = freelancer.toObject();
        delete freelancerResponse.password;
        
        res.status(200).json({
            message: 'Freelancer deleted successfully',
            data: freelancerResponse
        });
    }
    catch (error) {
        console.error('Error in deleteFreelancer:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Add login method for freelancers
module.exports.freelancerLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        
        // Find freelancer by email
        const freelancer = await FreelancerModel.findOne({ email });
        
        if (!freelancer) {
            return res.status(404).json({ message: "Freelancer not found" });
        }
        
        // Compare provided password with stored hash
        const isPasswordValid = await bcrypt.compare(password, freelancer.password);
        
        if (!isPasswordValid) {
            return res.status(401).json({ message: "Invalid credentials" });
        }
        
        // Don't send password back in response
        const freelancerResponse = freelancer.toObject();
        delete freelancerResponse.password;
        
        res.status(200).json({
            message: "Login successful",
            data: freelancerResponse
        });
    }
    catch (error) {
        console.error("Error in freelancerLogin:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};