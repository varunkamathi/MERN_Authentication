import express from 'express';
import mongooes from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

mongooes.connect(process.env.MONGO.then(()=>{
console.log('Connected to mongoDB');
})).catch((err) => {
console.log(err);
});

const app = express();

app.listen(3000 ,()  =>{
console.log("Server listening on port 3000")
});