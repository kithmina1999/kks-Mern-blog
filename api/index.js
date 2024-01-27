import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import userRoute from './routes/user.route.js';
import authRoute from './routes/auth.route.js';

dotenv.config();


mongoose.connect(process.env.MONGO)
.then( ()=>{
    console.log("Mongodb is connected");
})
.catch((err)=>{
    console.error(err);
});


const app = express();
app.use(express.json()); 


app.use('/api/user',userRoute );
app.use('/api/auth',authRoute );


app.listen(3000, ()=>{
    console.log('Server is running on port 3000!');
})

