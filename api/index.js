import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/userroute.js';
import authRoutes from './routes/authroute.js';
dotenv.config();

mongoose.connect(process.env.MONGO)
.then(() => {console.log("Connected to MongoDB");})
.catch((error) => {console.log(error);})

const app = express();

app.use(express.json());


app.listen(3000,() => {
    console.log('Server is running on 3000 port');
})


app.use("/api/user",userRoutes);
app.use("/api/auth",authRoutes);