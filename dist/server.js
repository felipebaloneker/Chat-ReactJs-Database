"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("reflect-metadata");
const dotenv_1 = __importDefault(require("dotenv"));
const routes_1 = require("./routes");
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
require("./database");
dotenv_1.default.config();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
//tratando errors
app.use(routes_1.routes);
app.use((err, request, response, next) => {
    if (err instanceof Error) {
        return response.status(400).json({
            error: err.message
        });
    }
    return response.status(500).json({
        status: 'error',
        message: 'Internal Server Error'
    });
});
app.listen(PORT, () => { console.log(`Server is running`); });
