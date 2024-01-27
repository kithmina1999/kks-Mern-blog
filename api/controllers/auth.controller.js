import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";

export const signup = async (res,req , next) =>{
    
    

    const {username,email,password} = req.body;
     if(
      !username || 
      !email|| 
      !password || 
      username=== '' || 
      email ==='' || 
      password === ''
      ){
        next(errorHandler(400,"All feilds are Required"));

     }
     const hashedPassword = bcryptjs.hashSync(password, 10);

     const newUser = new User({ 
        username,
        email,
        password:hashedPassword,
     });
     try {
      await newUser.save(); 
     res.json({message:"Signup successful"})
     } catch (error) {
      next(error);
     }
     
}