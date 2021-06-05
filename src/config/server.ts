const express = require("express");
const cors = require("cors");
import { Request, Response, NextFunction } from "express";
const mongoDB = require("./database/database");
const userRoutes = require("../config/routes/user-routes");

// // Import routes
// import UserRoutes from '../config/routes/user-routes'

// Inicializations
const app = express();

// Setings
app.set("port", process.env.PORT || 5000);
app.use(function (req: Request, res: Response, next: NextFunction) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header(
    "Access-Control-Allow-Methods",
    "GET, OPTIONS, HEAD, POST, PUT, DELETE"
  );
  next();
});

app.connect = async () => {
  console.log("Connecting to MondoDB...");
  await mongoDB.connect();
};

// Midleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.get('/' , (req: Request,res: Response) => res.send("Ecosystem Test"))
app.use("/api", userRoutes.routes());


module.exports = app;
