const mongoose2 = require("mongoose");

class Product {
  UserName:string;
  UserDni:string;
  Currency:string;
  Tax:Number;
  ProductName:string;
  Status:string;
  
  constructor(userName:string, userDni:string, currency:string, tax:number, productName:string, status:string) {
    this.UserName = userName;
    this.UserDni = userDni;
    this.Currency = currency;
    this.ProductName = productName;
    this.Tax = tax;
    this.Status = status;

  }
}

const ProductDb = mongoose2.model(
  "Product",
  {
    UserName: String,
    UserDni: String,
    Currency: String,
    Tax: Number,
    ProductName: String,
    Status: String,

  },
  "Product"
);

module.exports = { Product, ProductDb };