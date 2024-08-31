import mongoose from "mongoose";
import { DBNAME } from "../constants.js";

const connectDB=async ()=>{
    try {
        const connectionInstance=await mongoose.connect("mongodb+srv://nihal:Nihal%40123@cluster0.ucbrc.mongodb.net/")
        
        console.log(`\n Database connected !! ConnectionInstance is ${connectionInstance.connection.host} `)
    } catch (error) {

        console.log("MondgoDB connection error",error)
        process.exit(1)
        
    }
}


export default connectDB