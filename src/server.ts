import 'reflect-metadata';
import "./database"
import express from 'express'
import cors from 'cors'
import { routes } from "./routes"
const app = express();
const port = process.env.PORT || 8080;

require('dotenv').config()

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(routes);

app.listen(port,() =>{console.log('Server is running')});