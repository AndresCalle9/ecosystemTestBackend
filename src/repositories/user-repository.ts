const { UserDb } = require('../entities/user-entity')

const getByUserDni = async (dni: string) => {
    return UserDb.findOne({ Dni: dni });
};

const create = async (user: Object) => {
    const dbUser = UserDb(user);
    return dbUser.save();
  };

const getAccountByDni = async ( dni: string) => {
  const user = await UserDb.findOne({ Dni: dni })
  return user.Accounts
} ;

const getTransactionById = async (id:string, dni:string) => {
  const user = await UserDb.findOne({ Dni: dni })
  let account;
  for (let element of user.Accounts){
    if(element.id === id){
          account = element;
        } 
  }
  return account.transactions;
}



module.exports = {create, getByUserDni, getAccountByDni, getTransactionById}