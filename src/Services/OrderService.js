// const db = require("../../Database/db");

// class OrderService {
//   // Create a new order
//   static async createOrder(orderData) {
//     const { user_id, region_id, amount_of_order, shipping_amount, shipping_date, shipping_status, is_amount_paid, adishilp_address_id, billing_address_id, ordered_product_id } = orderData;
//     const query =
//       INSERT INTO adishilp_order (user_id, region_id, amount_of_order, shipping_amount, shipping_date, shipping_status, is_amount_paid, adishilp_address_id, billing_address_id, ordered_product_id)
//       VALUES (, , , , , , , , , )
//       RETURNING *
//     ;
//     const values = [user_id, region_id, amount_of_order, shipping_amount, shipping_date, shipping_status, is_amount_paid, adishilp_address_id, billing_address_id, ordered_product_id];

//     try {
//       const result = await db.query(query, values);
//       return result.rows[0];
//     } catch (error) {
//       throw error;
//     }
//   }

//   // Get order by ID
//   static async getOrderById(id) {
//     const query = SELECT * FROM adishilp_order WHERE id = ;

//     try {
//       const result = await db.query(query, [id]);
//       return result.rows[0];
//     } catch (error) {
//       throw error;
//     }
//   }

//   // Get orders by user ID
//   static async getOrdersByUserId(user_id) {
//     const query = SELECT * FROM adishilp_order WHERE user_id =  ORDER BY id DESC;

//     try {
//       const result = await db.query(query, [user_id]);
//       return result.rows;
//     } catch (error) {
//       throw error;
//     }
//   }

//   // Get all orders
//   static async getAllOrders() {
//     const query = SELECT * FROM adishilp_order ORDER BY id DESC;

//     try {
//       const result = await db.query(query);
//       return result.rows;
//     } catch (error) {
//       throw error;
//     }
//   }

//   // Update order
//   static async updateOrder(id, orderData) {
//     const { region_id, amount_of_order, shipping_amount, shipping_date, shipping_status, is_amount_paid, adishilp_address_id, billing_address_id, ordered_product_id } = orderData;
//     const query =
//       UPDATE adishilp_order
//       SET region_id = , amount_of_order = , shipping_amount = , shipping_date = , shipping_status = , is_amount_paid = , adishilp_address_id = , billing_address_id = , ordered_product_id =
//       WHERE id =
//       RETURNING *
//     ;
//     const values = [region_id, amount_of_order, shipping_amount, shipping_date, shipping_status, is_amount_paid, adishilp_address_id, billing_address_id, ordered_product_id, id];

//     try {
//       const result = await db.query(query, values);
//       return result.rows[0];
//     } catch (error) {
//       throw error;
//     }
//   }

//   // Update shipping status
//   static async updateShippingStatus(id, shipping_status) {
//     const query =
//       UPDATE adishilp_order
//       SET shipping_status =
//       WHERE id =
//       RETURNING *
//     ;

//     try {
//       const result = await db.query(query, [shipping_status, id]);
//       return result.rows[0];
//     } catch (error) {
//       throw error;
//     }
//   }

//   // Update payment status
//   static async updatePaymentStatus(id, is_amount_paid) {
//     const query =
//       UPDATE adishilp_order
//       SET is_amount_paid =
//       WHERE id =
//       RETURNING *
//     ;

//     try {
//       const result = await db.query(query, [is_amount_paid, id]);
//       return result.rows[0];
//     } catch (error) {
//       throw error;
//     }
//   }

//   // Delete order
//   static async deleteOrder(id) {
//     const query = DELETE FROM adishilp_order WHERE id =  RETURNING *;

//     try {
//       const result = await db.query(query, [id]);
//       return result.rows[0];
//     } catch (error) {
//       throw error;
//     }
//   }
// }

// module.exports = OrderService;
