import axios from 'axios';
import { setEmails, setotp } from '../Redux/ReduxSlice';

export const ClientSignup = async (payload) => {
    try {
        const response = await axios.post("http://localhost:3000/client/signup", payload);

        console.log("clietsignup", response.data);
        return response.data;
    } catch (error) {
        console.error("Error in signup API:", error);
        throw error;
    }
}

export const FreelancerSignup = async (payload) => {
    try {
        const response = await axios.post("http://localhost:3000/freelancer/freelancersignup", payload);

        console.log("Freelancer", response.data);
        return response.data;
    } catch (error) {
        console.error("Error in signup API:", error);
        throw error;
    }
}

export const Signin = async (payload) => {
    try {
        const response = await axios.post("http://localhost:3000/client/signin", payload);

        console.log("user", response.data);
        return response.data;
    } catch (error) {
        console.error("Error in Signin API:", error);
        throw error;
    }
}

export const verifyemail = async (payload, dispatch) => {
    try {
        const response = await axios.post("http://localhost:3000/client/verifyEmail", payload);

        console.log("verifyemail", response.data.client.email);
        dispatch(setEmails(response.data.client.email))
        return response.data;
    } catch (error) {
        console.error("Error in VerifyEmail API:", error);
        throw error;
    }
}

export const verifyotp = async (payload, dispatch) => {
    try {
        const response = await axios.post("http://localhost:3000/client/verifyOtp", payload)

        console.log("verifyOTP", response)
        dispatch(setotp(response.data.user.otp))
        return response.data
    } catch (error) {
        console.error("Error in VerifyOtp API:", error);
        throw error;
    }
}

export const Resetpassword = async (payload) => {
    try {
        const response = await axios.post("http://localhost:3000/client/ResetPassword", payload)

        console.log("resetpassword", response)
        return response.data
    } catch (error) {
        console.error("Error in Reset Passowrd API:", error);
        throw error;
    }
}

export const ContactUs = async (payload) => {
    try {
        const response = await axios.post("http://localhost:3000/contact/GetInTouch", payload)

        console.log("Contact Us", response);
        return response.data
    } catch (error) {
        console.error("Error in Reset Passowrd API:", error);
        throw error;
    }
}

export const GoogleSignup = async (payload) => {
    try {
        const response = await axios.post("http://localhost:3000/client/googlesignup", payload)

        return response.data
    } catch (error) {
        console.error("Error in Reset Passowrd API:", error);
        throw error;
    }
}

export const Googlesignup = async (payload) => {
    try {
        const response = await axios.post("http://localhost:3000/freelancer/googlesignup", payload)

        return response.data
    } catch (error) {
        console.error("Error in Reset Passowrd API:", error);
        throw error;
    }
}
export const GoogleSignin = async (payload) => {
    try {
        const response = await axios.post("http://localhost:3000/client/googlesignin", payload)

        return response.data
    } catch (error) {
        console.error("Error in signin:", error);
        throw error;
    }
}

export const AddBlogCategory = async (payload) => {
    try {
        const response = await axios.post("http://localhost:3000/category/AddCategory", payload)
        return response.data


    } catch (error) {
        console.error("Error in AddBlogCategory API:", error);
        throw error;

    }
}

export const AddBlog = async (payload) => {
    try {
        const response = await axios.post("http://localhost:3000/blog/AddBlog", payload)
        return response.data
    } catch (error) {
        console.error("Error in AddBlog API:", {
            message: error.message,
            status: error.response?.status,
            data: error.response?.data
        });
        
        // Throw a more manageable error
        throw new Error(error.response?.data?.message || error.message || "Failed to add blog");
    }
}

export const Getcategory=async()=>{
    try{
        const response=await axios.get('http://localhost:3000/category/GetCategory');
        return response.data;
    }catch(error){
        console.error("Error in Get Category API:", {
            message: error.message,
            status: error.response?.status,
            data: error.response?.data
        });
        
        // Throw a more manageable error
        throw new Error(error.response?.data?.message || error.message || "Failed to add blog");
    }
}

export const GetAllBlogs = async () => {
    try {
        const response = await axios.get("https://bikwiz-infotech-ryep.vercel.app/blog/getblog")
        return response.data
    } catch (error) {
        console.error("Error in GetAllBlogs API:", error);
        throw error;
    }
}

export const GetSingleID=async (id) => {
    try {
        const response = await axios.get(`http://localhost:3000/blog/GetSingleBlog/${id}`)
        return response.data
    } catch (error) {
        console.error("Error in GetSingleID API:", error);
        throw error;
    }
}

export const AddEventCategory=async(payload)=>{
    try{
        const response=await axios.post('http://localhost:3000/Eventcategory/eventCategory',payload)
        return response.data
    }catch(error){
         console.error("Error in AddEventCategory API:", error);
        throw error;
    }
}

export const GetEventCategory=async()=>{
    try{
        const response=await axios.get('http://localhost:3000/Eventcategory/Getevent')
        return response.data
    }catch(error){
         console.error("Error in GeteventCategory API:", error);
        throw error;
    }
}