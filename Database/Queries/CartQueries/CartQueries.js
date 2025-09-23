const getCartOfUserQuery = () => {
  const query = `SELECT * FROM adishilp_cart WHERE user_id = $1;`;

  return query;
};

const getCartWithProductsQuery = () => {
  const query = `SELECT * from adishilp_cart_product acp join product prd on acp.product_id = prd.id where acp.user_id=$1 and acp.status_of_product='added_to_cart'`;
  return query;
};

const removeProductFromCartQuery = () => {
  const query = `Update adishilp_cart_product set status_of_product='removed_from_cart' where user_id=$1 and product_id=$2;`;
  return query;
};

const clearTheCartQuery = () => {
  const query = `Update adishilp_cart_product set status_of_product = 'removed_from_cart' where user_id = $1 `;
  return query;
};
