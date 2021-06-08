const jwt = require("jsonwebtoken");
const userRepository = require('../repositories/user-repository');
const { Unauthorize, Conflict } = require("../entities/errors-entities");
const { Message } = require("../entities/message-entity");
const { config } = require("../config/environments/development");
const { User } = require("../entities/user-entity")


const create = async (dni, name, password) => {
  const userResponse = await userRepository.getByUserDni(dni);
  if (userResponse) throw new Conflict(Message.userExist(dni));
  const user = new User(name, dni, password);
  return userRepository.create(user);
};


const login = async (dni, password) => {
  const { jwtOptions } = config;
    const user = await userRepository.getByUserDni(dni);
    if(!user || user.Password !== password){
        throw new Unauthorize(Message.loginInvalid());
    }
    const token = jwt.sign(
        { dni },
        jwtOptions.secret,
        {
          expiresIn: jwtOptions.expires,
        }
      );
    return { user, token }
} 

const getAccounts = async (dni) => {
  const accounts = await userRepository.getAccountByDni(dni);
  if(!accounts){
    throw new Conflict(Message.generalError());
}
  return {accounts}
}

const getTransactions = async (id, dni) => {
  const transactions = await userRepository.getTransactionById(id,dni);
  if(!transactions){
    throw new Conflict(Message.generalError());
}
  return {transactions}

}
const getTransactionDetails = async (id, dni, acc) => {
  const transactionDetails = await userRepository.getTransactionDetailsById(id,dni,acc);
  if(!transactionDetails){
    throw new Conflict(Message.generalError());
}
  return {transactionDetails}
}

const getMeanTransactionsAccount = async (id, dni,initial, end) =>{
  const {mean, currency} = await userRepository.getMeanTransactionsAccount(id,dni,initial, end);
  if(!mean){
    throw new Conflict(Message.generalError());
}
  return {mean, currency}
}

const newProduct = async (sku, dni) => {
    const {status} = await userRepository.newProduct(sku, dni);
    if(!status){
      throw new Conflict(Message.generalError());
  }
    return {status};
}

const getUserProducts = async (dni) => {
  const products = await userRepository.getUserProducts(dni);
  if(!products){
    throw new Conflict(Message.generalError());
}
  return {products}
}
module.exports = { create, login, getAccounts, getTransactions, getTransactionDetails, getMeanTransactionsAccount, newProduct, getUserProducts }