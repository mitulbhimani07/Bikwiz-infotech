import axios from 'axios';

export const ClientSignup=async(payload)=>{
    try{
        const response=await axios.post("http://localhost:3000/signup",payload);

        console.log("clietsignup",response.data);
        return response.data.data;
    }catch(error){
        console.error("Error in signup API:", error);
        throw error;
    }
}