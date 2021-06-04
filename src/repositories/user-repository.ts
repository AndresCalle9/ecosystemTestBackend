const { UserDb } = require('../entities/user-entity')

const getByUserDni = async (dni: string) => {
    return UserDb.findOne({ Dni: dni });
};

const create = async (user: Object) => {
    const dbUser = UserDb(user);
    return dbUser.save();
  };

module.exports = {create, getByUserDni}