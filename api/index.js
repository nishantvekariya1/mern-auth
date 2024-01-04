import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/userroute.js';
dotenv.config();

mongoose.connect(process.env.MONGO)
.then(() => {console.log("Connected to MongoDB");})
.catch((error) => {console.log(error);})

const app = express();


app.listen(3000,() => {
    console.log('Server is running on 3000 port');
})


app.use("/api/user",userRoutes);