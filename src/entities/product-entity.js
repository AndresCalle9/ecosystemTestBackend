const mongoose2 = require("mongoose");

class Product {
  
  constructor(currency, tax, productName, sku) {
    this.Currency = currency;
    this.ProductName = productName;
    this.Tax = tax;
    this.Sku = sku;

  }
}

const ProductDb = mongoose2.model(
  "Product",
  {
    Currency: String,
    Tax: Number,
    ProductName: String,
    Sku: String,

  },
  "Product"
);

module.exports = { Product, ProductDb };