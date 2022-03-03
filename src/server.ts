import 'reflect-metadata';
import { routes } from "./routes"
const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config()
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

import "./database"

app.use(routes);

app.listen(PORT,() =>{console.log(`Server is running on port:${PORT}`)});