import 'reflect-metadata';
import "./database"
import express from 'express'
import cors from 'cors'
import { routes } from "./routes"
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
require('dotenv').config()

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(routes);

app.listen(PORT,() =>{console.log(`Server is running on port:${PORT}`)});