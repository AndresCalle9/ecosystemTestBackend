import jwt from 'jsonwebtoken';
const userRepository = require('../repositories/user-repository');
const { Unauthorize, Conflict } = require("../entities/errors-entities");
const { Message } = require("../entities/message-entity");
const { config } = require("../config/environments/development");
const { User } = require("../entities/user-entity")


const create = async (dni: string, name: string, password: string) => {
  const userResponse = await userRepository.getByUserDni(dni);
  if (userResponse) throw new Conflict(Message.userExist(dni));
  const user = new User(name, dni, password);
  return userRepository.create(user);
};


const login = async (dni: string, password: string) => {
  const { jwtOptions } = config;
    const user = await userRepository.getByUserDni(dni);
    console.log("user",user)
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
    return { token }
} 

module.exports = { create, login }