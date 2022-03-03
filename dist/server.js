"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const routes_1 = require("./routes");
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;
const corsOptions = {
    origin: 'http://localhost:3001',
    optionsSuccessStatus: 200
};
app.use(cors(corsOptions));
require('dotenv').config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require("./database");
app.use(routes_1.routes);
app.listen(PORT, () => { console.log(`Server is running on port:${PORT}`); });
