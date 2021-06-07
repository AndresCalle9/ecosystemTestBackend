"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const cors = require("cors");
const mongoDB = require("./database/database");
const userRoutes = require("../config/routes/user-routes");
// // Import routes
// import UserRoutes from '../config/routes/user-routes'
// Inicializations
const app = express();
// Setings
app.set("port", process.env.PORT || 5000);
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, OPTIONS, HEAD, POST, PUT, DELETE");
    next();
});
app.connect = () => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Connecting to MondoDB...");
    yield mongoDB.connect();
});
// Midleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// Routes
app.get('/', (req, res) => res.send("Ecosystem Test"));
app.use("/api", userRoutes.routes());
module.exports = app;
