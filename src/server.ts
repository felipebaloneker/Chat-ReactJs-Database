import 'reflect-metadata';
import { routes } from "./routes"
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;
const corsOptions = {
    origin: 'http://localhost:3001',
    optionsSuccessStatus: 200 
}

app.use(cors(corsOptions));
require('dotenv').config()
app.use(express.json());
app.use(express.urlencoded({extended:true}));

import "./database"

app.use(routes);

app.listen(PORT,() =>{console.log(`Server is running on port:${PORT}`)});