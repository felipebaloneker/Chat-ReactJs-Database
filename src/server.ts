import 'reflect-metadata';
import "./database"
import { routes } from "./routes"
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const path = require('path')
require('dotenv').config()


app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(morgan('dev'));

app.use(routes);

app.listen(3000,() =>{console.log('Server is running')});