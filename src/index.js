import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './db/db.js';

dotenv.config(); // Automatically loads .env file

const app = express();

// Your express routes and middleware go here

const PORT = process.env.PORT || 8000;


    connectDB()
    .then(() => {app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);})})
        .catch(()=>{
        console.log("mongodb connection failed ",err);
    })


















// (async ()=> {
//     try {
//         mongoose.connnect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error",(error) => {
//             console.error("ERROR:",error)
//             throw error
            
//         })
//         app.listen(process.env.PORT, ()=>{
//             console.log(`app is running on port no ${process.env.PORT}`)
//         })
//         throw error 
//     } catch (error) {
//         console.error("ERROR:",error)
//         throw error
        
//     }
// })()











