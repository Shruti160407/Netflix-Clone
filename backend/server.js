//const express = require('express'); commonJS
import express from 'express';


import authRoutes from "./routes/auth.route.js";
import { ENV_VARS } from './config/envVars.js';
import { connectDB } from './config/db.js';



const app = express(); 

const PORT = ENV_VARS.PORT

app.use(express.json()); //will alllow us to parse req.body obj

app.use("/api/v1/auth",authRoutes)

app.listen(PORT, () => {
    console.log('Server started at http://localhost:' + PORT);
    connectDB();
})

