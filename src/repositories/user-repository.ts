const { UserDb } = require('../entities/user-entity')
const {calculateAccountMean} = require("../utils/functions.js")

const getByUserDni = async (dni: string) => {
    return UserDb.findOne({ Dni: dni });
};

const create = async (user: Object) => {
    const dbUser = UserDb(user);
    return dbUser.save();
  };

const getAccountByDni = async ( dni: string) => {
  const user = await getByUserDni(dni)
  return user.Accounts
} ;

const getTransactionById = async (id:string, dni:string) => {
  const user = await getByUserDni(dni)
  let account;
  for (let element of user.Accounts){
    if(element.id === id){
          account = element;
        } 
  }
  return account.transactions;
}

const getTransactionDetailsById = async (id:string, dni:string, acc:string) => {
  const transactions = await getTransactionById(acc,dni)
  // const mean = await calculateAccountMean(transactions)
  let details;
  for (let element of transactions){
    if(element.id === id){
          details = element;
        } 
  }
  return details
}



module.exports = {create, getByUserDni, getAccountByDni, getTransactionById, getTransactionDetailsById}