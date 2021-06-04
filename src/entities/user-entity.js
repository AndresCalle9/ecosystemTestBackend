const mongoose = require("mongoose");

class User {
  constructor(name, dni, password, products, accounts, transactions) {
    this.Name = name;
    this.Dni = dni;
    this.Password = password;
    // this.Products = products;
    // this.Accounts = accounts;
    // this.Transactions = transactions;
  }
}

const UserDb = mongoose.model(
  "User",
  {
    Name: String,
    Dni: String,
    Password: String,
    Products: Array,
    Accounts: Array,
    Transactions: Array,

  },
  "User"
);

module.exports = { User, UserDb };
