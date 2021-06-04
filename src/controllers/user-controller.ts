import { Request, Response, NextFunction } from "express";

const userService = require("../services/user-service");

const create = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = req.body;
    const { dni, name, password } = data;
    await userService.create(dni, name, password);
    return res.status(201).json();
  } catch (error) {
    next(error);
  }
};

module.exports = { create };
