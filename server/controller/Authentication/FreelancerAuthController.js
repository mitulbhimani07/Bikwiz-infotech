<<<<<<< HEAD:server/controller/Authentication/FreelancerSignUp.js
const FreelancerModel = require('../../Model/Authentication/FreelancerSignUp');
=======
const ClientModel = require("../../Model/Authentication/ClientAuthModel");
const FreelancerModel = require("../../Model/Authentication/FreelancerAuthModel");
>>>>>>> f317155aa232a66a2a82e3eb2575ad446e5cd753:server/controller/Authentication/FreelancerAuthController.js

module.exports.freelancerSignUp = async (req, res) => {
    try {
        console.log(req.body);
        const FreelancerData = await FreelancerModel.create(req.body);
        res.status(201).json({
            message: 'Freelancer signed up successfully',
            data: FreelancerData
        });
        
    } catch (error) {
        console.error('Error in freelancerSignUp:', error);
        res.status(500).json({ message: 'Internal server error' });
        
    }
}
module.exports.FreelancerView = async (req, res) => {
    try {
        const freelancer = await FreelancerModel.find();
        res.status(200).json({
            message: 'Freelancer data fetched successfully',
            data: freelancer
        });
        
    } catch (error) {
        console.error('Error in FreelancerView:', error);
        res.status(500).json({ message: 'Internal server error' });
        
    }
}
module.exports.SingleFreelancerView = async (req, res) => {
    try {
        const freelancer = await FreelancerModel.findById(req.params.id);
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
}