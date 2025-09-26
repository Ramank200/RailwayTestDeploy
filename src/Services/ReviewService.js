// const db = require("../../Database/db");

// class ReviewService {
//   // Create a new review
//   static async createReview(reviewData) {
//     const { product_id, review_text, star_rating, user_name, date_of_review } = reviewData;
//     const query =
//       INSERT INTO product_reviews (product_id, review_text, star_rating, user_name, date_of_review)
//       VALUES (, , , , )
//       RETURNING *
//     ;
//     const values = [product_id, review_text, star_rating, user_name, date_of_review];

//     try {
//       const result = await db.query(query, values);
//       return result.rows[0];
//     } catch (error) {
//       throw error;
//     }
//   }

//   // Get review by ID
//   static async getReviewById(id) {
//     const query = SELECT * FROM product_reviews WHERE id = ;

//     try {
//       const result = await db.query(query, [id]);
//       return result.rows[0];
//     } catch (error) {
//       throw error;
//     }
//   }

//   // Get reviews by product ID
//   static async getReviewsByProductId(product_id) {
//     const query = SELECT * FROM product_reviews WHERE product_id =  ORDER BY id DESC;

//     try {
//       const result = await db.query(query, [product_id]);
//       return result.rows;
//     } catch (error) {
//       throw error;
//     }
//   }

//   // Get all reviews
//   static async getAllReviews() {
//     const query = SELECT * FROM product_reviews ORDER BY id DESC;

//     try {
//       const result = await db.query(query);
//       return result.rows;
//     } catch (error) {
//       throw error;
//     }
//   }

//   // Get average rating for a product
//   static async getAverageRating(product_id) {
//     const query =
//       SELECT AVG(star_rating) as average_rating, COUNT(*) as total_reviews
//       FROM product_reviews
//       WHERE product_id =
//     ;

//     try {
//       const result = await db.query(query, [product_id]);
//       return result.rows[0];
//     } catch (error) {
//       throw error;
//     }
//   }

//   // Update review
//   static async updateReview(id, reviewData) {
//     const { review_text, star_rating, user_name, date_of_review } = reviewData;
//     const query =
//       UPDATE product_reviews
//       SET review_text = , star_rating = , user_name = , date_of_review =
//       WHERE id =
//       RETURNING *
//     ;
//     const values = [review_text, star_rating, user_name, date_of_review, id];

//     try {
//       const result = await db.query(query, values);
//       return result.rows[0];
//     } catch (error) {
//       throw error;
//     }
//   }

//   // Delete review
//   static async deleteReview(id) {
//     const query = DELETE FROM product_reviews WHERE id =  RETURNING *;

//     try {
//       const result = await db.query(query, [id]);
//       return result.rows[0];
//     } catch (error) {
//       throw error;
//     }
//   }

//   // Delete all reviews for a product
//   static async deleteReviewsForProduct(product_id) {
//     const query = DELETE FROM product_reviews WHERE product_id =  RETURNING *;

//     try {
//       const result = await db.query(query, [product_id]);
//       return result.rows;
//     } catch (error) {
//       throw error;
//     }
//   }
// }

// module.exports = ReviewService;
