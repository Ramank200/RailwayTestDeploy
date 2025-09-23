const InsertDataQuery = () => {
  const query = `INSERT INTO adishilp_product (name,description,base_price,is_global,dimensions_of_product,tags) values ($1,$2,$3,$4,$5,$6);`;

  return query;
};

const AddImagesToProductQuery = () => {
  const query = `INSERT INTO adishilp_media (product_id,image_url,alt_text,is_primary) values ($1,$2,$3,$4);`;

  return query;
};

const AddInventoryOfTheProductQuery = () => {
  const query = `INSERT INTO adishilp_product_inventory (product_id,is_available,availability_region_id,total_quantity,discount_percentage,discount_expiration_date) values ($1,$2,$3,$4,$5,$6);`;
  return query;
};

const UpdateAmountInInventoryQuery = () => {
  const query = `UPDATE adishilp_product_inventory SET total_quantity = total_quantity - $2 WHERE product_id = $1;`;
  return query;
};

const GetProductByIdQuery = () => {
  const query = `Select *, (select JSON_AGG(json_build_object('image_url',image_url,'alt_text',alt_text,'is_primary',is_primary))from adishilp_media am where am.product_id=$2) as medias from adishilp_product where id=$1 `;
  return query;
};

const GetProducts = () => {
  const query = `Select *, (select JSON_AGG(json_build_object('image_url',image_url,'alt_text',alt_text,'is_primary',is_primary))from adishilp_media am where am.product_id=ap.id limit $3) as medias from adishilp_product ap limit $1 offset $2;`;
  return query;
};

// const GetProductFromId = () => {
//   const query = `Select *,() select * from  from adishilp_product ap join adishilp_media am on am.prodict_id = ap.id where ap.id = $1;`;
// };

const AddProductToWishListQuery = () => {
  const query = `INSERT INTO adishilp_wishlist (user_id,product_id,quantity_of_product,is_active) values ($1,$2,$3,$4);`;
  return query;
};

const RemoveProductFromWishlistQuery = () => {
  const query = `UPDATE adishilp_wishlist SET is_active = false WHERE user_id = $1 and product_id = $2;`;
  return query;
};

const AddProductToCartQuery = () => {
  const query = `INSERT INTO adishilp_cart (user_id,product_id,quantity_of_product,status_of_product) values ($1,$2,$3,$4);`;
  return query;
};

module.exports = {
  InsertDataQuery,
  AddImagesToProductQuery,
  AddInventoryOfTheProductQuery,
  UpdateAmountInInventoryQuery,
  GetProductByIdQuery,
  GetProducts,
  AddProductToWishListQuery,
  RemoveProductFromWishlistQuery,
  AddProductToCartQuery,
};
