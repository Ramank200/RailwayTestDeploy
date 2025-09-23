const db = require("../../Database/db");

class WishlistService {
  // Create a new wishlist
  static async createWishlist(wishlistData) {
    const { wishlist_name, user_id } = wishlistData;
    const query = 
      INSERT INTO adishilp_wishlist (wishlist_name, user_id)
      VALUES (, )
      RETURNING *
    ;
    const values = [wishlist_name, user_id];
    
    try {
      const result = await db.query(query, values);
      return result.rows[0];
    } catch (error) {
      throw error;
    }
  }

  // Get wishlist by ID
  static async getWishlistById(id) {
    const query = SELECT * FROM adishilp_wishlist WHERE id = ;
    
    try {
      const result = await db.query(query, [id]);
      return result.rows[0];
    } catch (error) {
      throw error;
    }
  }

  // Get wishlist by user ID
  static async getWishlistByUserId(user_id) {
    const query = SELECT * FROM adishilp_wishlist WHERE user_id = ;
    
    try {
      const result = await db.query(query, [user_id]);
      return result.rows;
    } catch (error) {
      throw error;
    }
  }

  // Get all wishlists
  static async getAllWishlists() {
    const query = SELECT * FROM adishilp_wishlist;
    
    try {
      const result = await db.query(query);
      return result.rows;
    } catch (error) {
      throw error;
    }
  }

  // Update wishlist
  static async updateWishlist(id, wishlistData) {
    const { wishlist_name, user_id } = wishlistData;
    const query = 
      UPDATE adishilp_wishlist 
      SET wishlist_name = , user_id = 
      WHERE id = 
      RETURNING *
    ;
    const values = [wishlist_name, user_id, id];
    
    try {
      const result = await db.query(query, values);
      return result.rows[0];
    } catch (error) {
      throw error;
    }
  }

  // Delete wishlist
  static async deleteWishlist(id) {
    const query = DELETE FROM adishilp_wishlist WHERE id =  RETURNING *;
    
    try {
      const result = await db.query(query, [id]);
      return result.rows[0];
    } catch (error) {
      throw error;
    }
  }
}

module.exports = WishlistService;
