import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

import allroutes from './routes/allroutes.js';

dotenv.config({
    path: './config/.env',
});

const app = express();

app.use(express.json());
app.use(express.urlencoded({
    extended: true,
}));

app.use("/api/" , allroutes);

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("Connected to db"))
.catch((error) => console.log(error));


app.listen(process.env.PORT , () => {
    console.log(`Listening on port ${process.env.PORT}`)
});