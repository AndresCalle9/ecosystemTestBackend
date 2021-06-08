const express = require('express');
const loginController = require('../../controllers/login-controller');
const userController = require('../../controllers/user-controller');
const productController = require('../../controllers/product-controller');


const routes = () => {
    const router = express.Router();

    router.post("/user/login", loginController.login);
    router.post("/user/create", userController.create);
    router.get("/user/accounts/:key", userController.getAccounts);
    router.get("/user/accounts/transactions/:key/:dni", userController.getTransactions);
    router.get("/user/accounts/transaction/:key/:dni/:acc", userController.getTransactionDetails);
    router.post("/user/accounts/transaction/mean/:key/:dni", userController.getMeanTransactionsAccount);
    router.post("/newproduct/create", productController.create);
    router.get("/products", productController.getProducts);
    router.post("/user/requestnewproduct/:key", userController.newProduct)
    router.get("/user/products/:key", userController.getUserProducts)



    return router;
}

module.exports = {routes}
