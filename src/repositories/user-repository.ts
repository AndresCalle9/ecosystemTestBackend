const { UserDb } = require('../entities/user-entity')
const {calculateAccountMean, getDatesBetweenRange} = require("../utils/functions")

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
  let details;
  for (let element of transactions){
    if(element.id === id){
          details = element;
        } 
  }
  return details
}

const getMeanTransactionsAccount = async (id:string, dni:string, initial:string, end:string) => {
  const transactions = await getTransactionById(id,dni)
  let ordersBetweenDates = getDatesBetweenRange(initial, end, transactions);
  const mean = await calculateAccountMean(ordersBetweenDates)
  const currency = transactions[0].currency;
  return {mean, currency}
}



module.exports = {create, getByUserDni, getAccountByDni, getTransactionById, getTransactionDetailsById, getMeanTransactionsAccount}