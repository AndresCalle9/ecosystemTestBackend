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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const userRepository = require('../repositories/user-repository');
const { Unauthorize, Conflict } = require("../entities/errors-entities");
const { Message } = require("../entities/message-entity");
const { config } = require("../config/environments/development");
const { User } = require("../entities/user-entity");
const create = (dni, name, password) => __awaiter(void 0, void 0, void 0, function* () {
    const userResponse = yield userRepository.getByUserDni(dni);
    if (userResponse)
        throw new Conflict(Message.userExist(dni));
    const user = new User(name, dni, password);
    return userRepository.create(user);
});
const login = (dni, password) => __awaiter(void 0, void 0, void 0, function* () {
    const { jwtOptions } = config;
    const user = yield userRepository.getByUserDni(dni);
    if (!user || user.Password !== password) {
        throw new Unauthorize(Message.loginInvalid());
    }
    const token = jsonwebtoken_1.default.sign({ dni }, jwtOptions.secret, {
        expiresIn: jwtOptions.expires,
    });
    return { user, token };
});
const getAccounts = (dni) => __awaiter(void 0, void 0, void 0, function* () {
    const accounts = yield userRepository.getAccountByDni(dni);
    if (!accounts) {
        throw new Conflict(Message.generalError());
    }
    return { accounts };
});
const getTransactions = (id, dni) => __awaiter(void 0, void 0, void 0, function* () {
    const transactions = yield userRepository.getTransactionById(id, dni);
    if (!transactions) {
        throw new Conflict(Message.generalError());
    }
    return { transactions };
});
const getTransactionDetails = (id, dni, acc) => __awaiter(void 0, void 0, void 0, function* () {
    const transactionDetails = yield userRepository.getTransactionDetailsById(id, dni, acc);
    if (!transactionDetails) {
        throw new Conflict(Message.generalError());
    }
    return { transactionDetails };
});
const getMeanTransactionsAccount = (id, dni, initial, end) => __awaiter(void 0, void 0, void 0, function* () {
    const { mean, currency } = yield userRepository.getMeanTransactionsAccount(id, dni, initial, end);
    if (!mean) {
        throw new Conflict(Message.generalError());
    }
    return { mean, currency };
});
module.exports = { create, login, getAccounts, getTransactions, getTransactionDetails, getMeanTransactionsAccount };
