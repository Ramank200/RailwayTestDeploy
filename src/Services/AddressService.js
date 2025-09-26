// const db = require("../../Database/db");

// class AddressService {
//   // Create a new address
//   static async createAddress(addressData) {
//     const { address_line_1, address_line_2, city, landmark, postal_code, is_default } = addressData;
//     const query =
//       INSERT INTO adishilp_address (address_line_1, address_line_2, city, landmark, postal_code, is_default)
//       VALUES (, , , , , )
//       RETURNING *
//     ;
//     const values = [address_line_1, address_line_2, city, landmark, postal_code, is_default];

//     try {
//       const result = await db.query(query, values);
//       return result.rows[0];
//     } catch (error) {
//       throw error;
//     }
//   }

//   // Get address by ID
//   static async getAddressById(id) {
//     const query = SELECT * FROM adishilp_address WHERE id = ;

//     try {
//       const result = await db.query(query, [id]);
//       return result.rows[0];
//     } catch (error) {
//       throw error;
//     }
//   }

//   // Get all addresses
//   static async getAllAddresses() {
//     const query = SELECT * FROM adishilp_address;

//     try {
//       const result = await db.query(query);
//       return result.rows;
//     } catch (error) {
//       throw error;
//     }
//   }

//   // Get default address
//   static async getDefaultAddress() {
//     const query = SELECT * FROM adishilp_address WHERE is_default = true;

//     try {
//       const result = await db.query(query);
//       return result.rows[0];
//     } catch (error) {
//       throw error;
//     }
//   }

//   // Update address
//   static async updateAddress(id, addressData) {
//     const { address_line_1, address_line_2, city, landmark, postal_code, is_default } = addressData;
//     const query =
//       UPDATE adishilp_address
//       SET address_line_1 = , address_line_2 = , city = , landmark = , postal_code = , is_default =
//       WHERE id =
//       RETURNING *
//     ;
//     const values = [address_line_1, address_line_2, city, landmark, postal_code, is_default, id];

//     try {
//       const result = await db.query(query, values);
//       return result.rows[0];
//     } catch (error) {
//       throw error;
//     }
//   }

//   // Set default address
//   static async setDefaultAddress(id) {
//     // First, unset all default addresses
//     await db.query("UPDATE adishilp_address SET is_default = false");

//     // Then set the specified address as default
//     const query =
//       UPDATE adishilp_address
//       SET is_default = true
//       WHERE id =
//       RETURNING *
//     ;

//     try {
//       const result = await db.query(query, [id]);
//       return result.rows[0];
//     } catch (error) {
//       throw error;
//     }
//   }

//   // Delete address
//   static async deleteAddress(id) {
//     const query = DELETE FROM adishilp_address WHERE id =  RETURNING *;

//     try {
//       const result = await db.query(query, [id]);
//       return result.rows[0];
//     } catch (error) {
//       throw error;
//     }
//   }
// }

// module.exports = AddressService;
// 0
