const express = require('express');
const loginController = require('../../controllers/login-controller')
const userController = require('../../controllers/user-controller')


const routes = () => {
    const router = express.Router();

    router.post("/user/login", loginController.login);
    router.post("/user/create", userController.create)
    router.get("/user/accounts/:key", userController.getAccounts)
    router.get("/user/accounts/transactions/:key/:dni", userController.getTransactions)




    return router;
}

module.exports = {routes}