import axios from 'axios';
import { setEmails, setotp } from '../Redux/ReduxSlice';

export const ClientSignup=async(payload)=>{
    try{
        const response=await axios.post("http://localhost:3000/client/signup",payload);

        console.log("clietsignup",response.data);
        return response.data;
    }catch(error){
        console.error("Error in signup API:", error);
        throw error;
    }
}

export const FreelancerSignup=async(payload)=>{
    try{
        const response=await axios.post("http://localhost:3000/freelancer/freelancersignup",payload);

        console.log("Freelancer",response.data);
        return response.data;
    }catch(error){
        console.error("Error in signup API:", error);
        throw error;
    }
}

export const Signin=async(payload)=>{
    try{
        const response=await axios.post("http://localhost:3000/client/signin",payload);

        console.log("user",response.data);
        return response.data;
    }catch(error){
        console.error("Error in Signin API:", error);
        throw error;
    }
}

export const verifyemail=async(payload,dispatch)=>{
    try{
        const response=await axios.post("http://localhost:3000/client/verifyEmail",payload);

        console.log("verifyemail",response.data.client.email);
        dispatch(setEmails(response.data.client.email))
        return response.data;
    }catch(error){
        console.error("Error in VerifyEmail API:", error);
        throw error;
    }
}

export const verifyotp=async(payload,dispatch)=>{
    try{
        const response=await axios.post("http://localhost:3000/client/verifyOtp",payload)

        console.log("verifyOTP",response)
        dispatch(setotp(response.data.user.otp))
        return response.data
    }catch(error){
        console.error("Error in VerifyOtp API:", error);
        throw error;
    }
}

export const Resetpassword=async(payload)=>{
    try{
        const response=await axios.post("http://localhost:3000/client/ResetPassword",payload)

        console.log("resetpassword",response)
        return response.data
    }catch(error){
        console.error("Error in Reset Passowrd API:", error);
        throw error;
    }
}