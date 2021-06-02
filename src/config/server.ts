const express = require("express");
const cors = require("cors");
import { Request, Response, NextFunction } from "express";
const mongoDB = require("./database/database");

//inicializations
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

app.run = async () => {
  console.log("Connecting to MondoDB...");
  await mongoDB.connect();
};

// Midleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
// app.use(require('./routes/order.routes'))

// Static files

// Error handlers

module.exports = app;
