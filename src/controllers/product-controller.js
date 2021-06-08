const productService = require("../services/product-service");

const create = async (req, res, next) => {
    try {
      const data = req.body;
      const { currency, tax, productName, sku } = data;
      await productService.create(currency, tax, productName, sku);
      return res.status(201).json({message: "Product created successfully"});
    } catch (error) {
      next(error);
    }
  };

  const getProducts = async (req, res, next) => {
    try {
      const {products} = await productService.getProducts();
      return res.status(201).json({products});
    } catch (error) {
      next(error);
    }
  };

module.exports = { create, getProducts};
