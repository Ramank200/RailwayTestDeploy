const db = require("../../../Database/db");
const {
  InsertDataQuery,
  AddImagesToProductQuery,
  AddInventoryOfTheProductQuery,
  GetProductByIdQuery,
  GetProducts,
  AddProductToWishListQuery,
  RemoveProductFromWishlistQuery,
} = require("../../../Database/Queries/ProductQueries/ProductQueries");

const CreateProduct = (req, res) => {
  const {
    name,
    description,
    base_price,
    is_global,
    dimensions_of_product,
    tags,
  } = req.body;

  try {
    const ProductCreationQuery = InsertDataQuery();
    const tagsString = tags.length ? tags.join(",") : "";
    const DimensionString = dimensions_of_product.length
      ? dimensions_of_product.join(",")
      : "";
    db.query(
      ProductCreationQuery,
      [name, description, base_price, is_global, DimensionString, tagsString],
      (err, table) => {
        if (err) {
          console.log(err.stack);
          res.status(500).send("Error In Creating Product try again later");
        } else {
          console.log(table.rows);
          res.status(200).send("Product Created Successfully");
        }
      }
    );
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Error");
  }
};

const AddImageToProduct = async (req, res) => {
  const { product_id, product_images } = req.body;

  try {
    const AddImagesToProduct = AddImagesToProductQuery();
    try {
      product_images.forEach((image) => {
        const { image_url, alt_text, is_primary } = image;

        db.query(
          AddImagesToProduct,
          [product_id, image_url, alt_text, is_primary],
          (err, result) => {
            if (err) {
              if (err.stack.length) {
                console.log(err.stack);
              }
              return res
                .status(500)
                .send("Error In Creating Product try again later");
            } else {
              console.log(result.rows);
            }
          }
        );
      });
      return res.status(200).send("Image Added Successfully");
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .send("Image not Added successfully failed try again");
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send("Error In Creating Product try again later");
  }
};

const AddInventoryOfTheProduct = (req, res) => {
  const {
    product_id,
    is_available,
    availability_region_id,
    total_quantity,
    discount_percentage,
    discount_expiration_date,
  } = req.body;

  try {
    const AdditionOfInventoryOfProduct = AddInventoryOfTheProductQuery();

    db.query(
      AdditionOfInventoryOfProduct,
      [
        product_id,
        is_available,
        availability_region_id,
        total_quantity,
        discount_percentage,
        discount_expiration_date,
      ],
      (err, table) => {
        if (err) {
          console.log(err.stack);
          res.status(500).send("Error In Creating Product try again later");
        } else {
          console.log(table.rows);
          res.status(200).send("Product Created Successfully");
        }
      }
    );
  } catch (error) {
    console.log(error);
    res.status(500).send("Error In Creating Product try again later");
  }
};

const GetProductFromId = async (req, res) => {
  const { product_id } = req.query;

  const getProductQuery = GetProductByIdQuery();
  try {
    let productFetchedFromDb = [];
    productFetchedFromDb = await db.query(getProductQuery, [
      product_id,
      product_id,
    ]);
    productFetchedFromDb = productFetchedFromDb.rows;
    res.status(200).send({ success: 1, productFetchedFromDb });
  } catch (error) {
    console.log(error);
    return res.status(500).send("Internal Server Error and Try again");
  }
};

// const GetProduct = async (req, res) => {
//   let { imageLimit = 4, page = 1, size = 12 } = req.query;

//   const offset = page * size;

//   try {
//     let productFetchedFromDb = [];
//     const GetProducts = GetProducts();
//     productFetchedFromDb = await db.query();
//   } catch (error) {
//     console.log(error);
//     return res.status(500).send("Internal Server Error");
//   }
// };

const AddProductToWishList = async (req, res) => {
  const { user_id } = req.query;
  const { product_details } = req.body;

  const { product_id, quantity_of_product } = product_details;

  const QueryToAddProductToWishList = AddProductToWishListQuery();
  try {
    const AddingProductToWishlist = await db.query(
      QueryToAddProductToWishList,
      [user_id, product_id, quantity_of_product, true]
    );
    return res.status(200).send("Added Product To Wishlist");
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
};

const RemoveProductFromWishList = async (req, res) => {
  const { user_id } = req.query;
  const { product_id } = req.body;
  const QueryToRemoveProductFromWishList = RemoveProductFromWishlistQuery();
  try {
    const RemovingProductFromWishlist = await db.query(
      QueryToRemoveProductFromWishList,
      [user_id, product_id]
    );
    return res.status(200).send("Removed Product From Wishlist");
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
};

const AddProductToTheCart = async (req, res) => {
  const { user_id } = req.query;
  const { product_details } = req.body;
  const { product_id, quantity_of_product } = product_details;
  const QueryToAddProductToCart = AddProductToCartQuery();
  try {
    const AddingProductToCart = await db.query(QueryToAddProductToCart, [
      user_id,
      product_id,
      quantity_of_product,
      "added_to_cart",
    ]);
    return res.status(200).send("Added Product To Cart");
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = {
  CreateProduct,
  AddImageToProduct,
  AddInventoryOfTheProduct,
  GetProductFromId,
  AddProductToWishList,
  RemoveProductFromWishList,
};
