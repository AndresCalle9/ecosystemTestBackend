const mongoose1 = require("mongoose");

class User {

  constructor(name, dni, password, products, accounts) {
    this.Name = name;
    this.Dni = dni;
    this.Password = password;
    this.Products = products;
    this.Accounts = accounts;
  }
}

const UserDb = mongoose1.model(
  "User",
  {
    Name: String,
    Dni: String,
    Password: String,
    Products: Array,
    Accounts: Array,

  },
  "User"
);

module.exports = { User, UserDb };
