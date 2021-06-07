const mongoose1 = require("mongoose");

class User {
  Name:string;
  Dni:string;
  Password:string;
  Products:Array<any>;
  Accounts: Array<any>;

  constructor(name:string, dni:string, password:string, products:Array<any>, accounts:Array<any>) {
    this.Name = name;
    this.Dni = dni;
    this.Password = password;
    this.Products = products;
    this.Accounts = accounts;
  }
}

export const UserDb = mongoose1.model(
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
