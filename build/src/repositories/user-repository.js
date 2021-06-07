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
const { UserDb } = require('../entities/user-entity');
const { calculateAccountMean, getDatesBetweenRange } = require("../utils/functions.js");
const getByUserDni = (dni) => __awaiter(void 0, void 0, void 0, function* () {
    return UserDb.findOne({ Dni: dni });
});
const create = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const dbUser = UserDb(user);
    return dbUser.save();
});
const getAccountByDni = (dni) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield getByUserDni(dni);
    return user.Accounts;
});
const getTransactionById = (id, dni) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield getByUserDni(dni);
    let account;
    for (let element of user.Accounts) {
        if (element.id === id) {
            account = element;
        }
    }
    return account.transactions;
});
const getTransactionDetailsById = (id, dni, acc) => __awaiter(void 0, void 0, void 0, function* () {
    const transactions = yield getTransactionById(acc, dni);
    let details;
    for (let element of transactions) {
        if (element.id === id) {
            details = element;
        }
    }
    return details;
});
const getMeanTransactionsAccount = (id, dni, initial, end) => __awaiter(void 0, void 0, void 0, function* () {
    const transactions = yield getTransactionById(id, dni);
    let ordersBetweenDates = getDatesBetweenRange(initial, end, transactions);
    const mean = yield calculateAccountMean(ordersBetweenDates);
    const currency = transactions[0].currency;
    return { mean, currency };
});
module.exports = { create, getByUserDni, getAccountByDni, getTransactionById, getTransactionDetailsById, getMeanTransactionsAccount };
