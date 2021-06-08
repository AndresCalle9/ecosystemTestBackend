const productRepository = require('../repositories/product-repository');
const { Conflict } = require("../entities/errors-entities");
const { Message } = require("../entities/message-entity");
const { Product } = require("../entities/product-entity")


const create = async (currency, tax, productName, sku) => {
  const productResponse = await productRepository.getProductBySku(sku);
  if (productResponse) throw new Conflict(Message.productExits(sku));
  const product = new Product(currency, tax, productName, sku);
  return productRepository.create(product);
};

const getProducts = async () => {
    const products = await productRepository.getProducts();    
  if(!products){
    throw new Conflict(Message.generalError());
}
  return {products}
  };

module.exports = { create, getProducts}
