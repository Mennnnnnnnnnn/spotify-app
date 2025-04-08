import mongoose from "mongoose";

import dotenv from 'dotenv';
dotenv.config();

const connectDB = async() => {

    mongoose.connection.on('connected',()=>{
        console.log("connection eshaaff")
    })

    console.log("URI đang dùng:", process.env.MONGODB_URI);

    await mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      
}
export default connectDB;