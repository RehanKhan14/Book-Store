import express, { request } from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookmodel.js";
import booksRoute from "./routes/booksRoute.js"
import cors from 'cors';

const app = express();

//Middleware for parsing request body
app.use(express.json())
//Allow all origin with default for cors(*)
//Middleware for handling cors (cross origin resource sharing) policy
app.use(cors());
//option 1: Allow Custom Origins
// app.use(
//     cors({
//         origin: 'http://localhost:3000',
//         methods: ['GET','POST','PUT','DELETE'],
//         allowedHeaders: ['Content-Type'],
//     })
// );
app.get('/',(request,response) =>{
    console.log(request)
    response.status(234).send("Trying to Learn MERN STACK")

})

app.use('/books', booksRoute);

mongoose.connect(mongoDBURL).then(() =>{
    console.log('App is Connected to DataBase');
    app.listen(PORT, () =>{
        console.log(`App is listening to PORT: ${PORT}`);
    })

}).catch((error)=>{
    console.log(error);
})