import 'reflect-metadata';
import "./database"
import express from 'express'
import cors from 'cors'
import { routes } from "./routes"
const app = express();
const PORT = process.env.PORT || 3000;
require('dotenv').config()

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.use(routes);

app.listen(PORT,() =>{console.log(`Server is running on port:${PORT}`)});