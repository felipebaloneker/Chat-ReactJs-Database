import 'reflect-metadata';
import "./database"
import { routes } from "./routes"
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
require('dotenv').config()


app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(morgan('dev'));

app.use(routes);
const PORT = process.env.PORT || 3000;
app.listen(PORT,() =>{console.log('Server is running')});