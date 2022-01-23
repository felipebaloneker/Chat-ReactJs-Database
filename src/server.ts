import 'reflect-metadata';
import "./database"
import { routes } from "./routes"
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
require('dotenv').config()

app.use(express.json());

app.use(routes);
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(morgan('dev'));

app.listen(3000,() =>{console.log('Server is running')});