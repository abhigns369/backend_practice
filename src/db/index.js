// require('dotenv').config({path: './env'})
import mongoose from "mongoose";
import {DB_NAME} from "../constants.js";
import dotenv from 'dotenv';

dotenv.config(
    {
        path: './env'
    }
);

const connectDB = async ()=>{
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log("connected");
        console.log(connectionInstance);
    } catch (error) {
        console.error("Error: ", error);
        process.exit(1);
        // throw error;

    }
}

export default connectDB;