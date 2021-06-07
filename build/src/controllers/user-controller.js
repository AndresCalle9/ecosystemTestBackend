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
const userService = require("../services/user-service");
const create = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const { dni, name, password } = data;
        yield userService.create(dni, name, password);
        return res.status(201).json({ message: "User created successfully" });
    }
    catch (error) {
        next(error);
    }
});
const getAccounts = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { key } = req.params;
        const { accounts } = yield userService.getAccounts(key);
        return res.status(201).json({ accounts });
    }
    catch (error) {
        next(error);
    }
});
const getTransactions = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { key, dni } = req.params;
        const { transactions } = yield userService.getTransactions(key, dni);
        return res.status(201).json({ transactions });
    }
    catch (error) {
        next(error);
    }
});
const getTransactionDetails = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { key, dni, acc } = req.params;
        const { transactionDetails } = yield userService.getTransactionDetails(key, dni, acc);
        return res.status(201).json({ transactionDetails });
    }
    catch (error) {
        next(error);
    }
});
const getMeanTransactionsAccount = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const dates = req.body;
        const { key, dni } = req.params;
        const { initial, end } = dates;
        const { mean, currency } = yield userService.getMeanTransactionsAccount(key, dni, initial, end);
        return res.status(201).json({ mean, currency });
    }
    catch (error) {
        next(error);
    }
});
module.exports = { create, getAccounts, getTransactions, getTransactionDetails, getMeanTransactionsAccount };
