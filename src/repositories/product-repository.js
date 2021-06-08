const { ProductDb } = require('../entities/product-entity')

const getProductBySku = async (sku) => {
    return ProductDb.findOne({ Sku: sku });
};

const create = async (currency, tax, productName, sku) => {
    const dbProduct = ProductDb(currency, tax, productName, sku);
    return dbProduct.save();
  };

const getProducts = async () => {
    return ProductDb.find();

  } ;

module.exports = {create, getProductBySku, getProducts}
