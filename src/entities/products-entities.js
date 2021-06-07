const mongoose2 = require("mongoose");

class Product {
  
  constructor(userName, userDni, currency, tax, productName, status) {
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