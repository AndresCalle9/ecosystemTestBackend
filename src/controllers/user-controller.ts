import { Request, Response, NextFunction, response } from "express";
import { getNameOfJSDocTypedef, isNotEmittedStatement } from "typescript";

const userService = require("../services/user-service");

const create = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = req.body;
    const { dni, name, password } = data;
    await userService.create(dni, name, password);
    return res.status(201).json({message: "User created successfully"});
  } catch (error) {
    next(error);
  }
};

const getAccounts = async  (req:Request, res: Response, next: NextFunction) => {
  try {
    const { key } = req.params;
    const {accounts} = await userService.getAccounts(key);
    return res.status(201).json({accounts});
  } catch (error) {
    next(error);
  }
}

const getTransactions = async (req:Request, res: Response, next: NextFunction) => {
try {
  const { key, dni } = req.params;
  const {transactions} = await userService.getTransactions(key,dni);
  return res.status(201).json({transactions});
}catch(error) {
  next(error)
}
}

const getTransactionDetails = async (req:Request, res:Response, next: NextFunction) => {
  try {
  const { key, dni, acc } = req.params;
  const {transactionDetails} = await userService.getTransactionDetails(key,dni,acc);
  return res.status(201).json({transactionDetails});
  }catch (error){
    next(error)
  }
}

const getMeanTransactionsAccount = async (req:Request, res: Response, next: NextFunction) => {
  try {

    const dates = req.body;
    const { key, dni } = req.params;
    const { initial, end } = dates;
    const {mean} = await userService.getMeanTransactionsAccount(key,dni,initial,end);
    return res.status(201).json({mean});
  } catch(error){
    next(error)
  }

}

module.exports = { create, getAccounts, getTransactions, getTransactionDetails, getMeanTransactionsAccount};
