const db = require("../../Database/db");

class CartService {
  // Create a new cart
  static async createCart(user_id) {
    const query = 
      INSERT INTO adishilp_cart (user_id)
      VALUES ()
      RETURNING *
    ;
    
    try {
      const result = await db.query(query, [user_id]);
      return result.rows[0];
    } catch (error) {
      throw error;
    }
  }

  // Get cart by user ID
  static async getCartByUserId(user_id) {
    const query = SELECT * FROM adishilp_cart WHERE user_id = ;
    
    try {
      const result = await db.query(query, [user_id]);
      return result.rows[0];
    } catch (error) {
      throw error;
    }
  }

  // Get cart with products
  static async getCartWithProducts(user_id) {
    const query = 
      SELECT c.*, p.name, p.description, p.base_price, pi.total_quantity, pi.discount_percentage
      FROM adishilp_cart c
      LEFT JOIN adishilp_cart_products cp ON c.id = cp.cart_id
      LEFT JOIN adishilp_product p ON cp.product_id = p.id
      LEFT JOIN adishilp_product_inventory pi ON p.id = pi.product_id
      WHERE c.user_id = 
    ;
    
    try {
      const result = await db.query(query, [user_id]);
      return result.rows;
    } catch (error) {
      throw error;
    }
  }

  // Add product to cart
  static async addProductToCart(cart_id, product_id) {
    const query = 
      INSERT INTO adishilp_cart_products (cart_id, product_id)
      VALUES (, )
      RETURNING *
    ;
    
    try {
      const result = await db.query(query, [cart_id, product_id]);
      return result.rows[0];
    } catch (error) {
      throw error;
    }
  }

  // Remove product from cart
  static async removeProductFromCart(cart_id, product_id) {
    const query = 
      DELETE FROM adishilp_cart_products 
      WHERE cart_id =  AND product_id = 
      RETURNING *
    ;
    
    try {
      const result = await db.query(query, [cart_id, product_id]);
      return result.rows[0];
    } catch (error) {
      throw error;
    }
  }

  // Clear cart
  static async clearCart(cart_id) {
    const query = DELETE FROM adishilp_cart_products WHERE cart_id =  RETURNING *;
    
    try {
      const result = await db.query(query, [cart_id]);
      return result.rows;
    } catch (error) {
      throw error;
    }
  }

  // Delete cart
  static async deleteCart(id) {
    const query = DELETE FROM adishilp_cart WHERE id =  RETURNING *;
    
    try {
      const result = await db.query(query, [id]);
      return result.rows[0];
    } catch (error) {
      throw error;
    }
  }
}

module.exports = CartService;
