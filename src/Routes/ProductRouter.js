const express = require("express");
const {
  CreateProduct,
  AddInventoryOfTheProduct,
  AddImageToProduct,
  GetProductFromId,
} = require("../Controllers/ProductController/ProductController");

const ProductRouter = express.Router();

ProductRouter.post("/createProduct", CreateProduct);
ProductRouter.post("/addImageToProduct", AddImageToProduct);
ProductRouter.post("/addInventoryOfProduct", AddInventoryOfTheProduct);
ProductRouter.get("/getProductById", GetProductFromId);
// ProductRouter.put("/addProductToCart",)
// ProductRouter.put("addProductToCart")
// ProductRouter.put("/removeProductFromCart")
// ProductRouter.put("/removItemFromWishList")

module.exports = ProductRouter;
