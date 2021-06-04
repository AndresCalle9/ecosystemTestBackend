import { Request, Response, NextFunction } from "express";

const userService = require('../services/user-service')

const login = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {dni, password} = req.body;
        const response = await userService.login(dni, password);
        return res.status(200).json(response)
    } catch (error) {
        next(error)
    }
}

module.exports = { login }