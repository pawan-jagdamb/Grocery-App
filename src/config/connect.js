import mongoose from "mongoose";

export const connectDB= async(uri)=>{
    try {
    const response=    await mongoose.connect(uri);
        console.log("DB connected");
    } catch (error) {
        console.log("Errorn in connecting Db",error)
        
    } 
}