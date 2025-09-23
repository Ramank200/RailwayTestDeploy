// Export all services
const UserService = require('./UserService');
const ProductService = require('./ProductService');
const ProductInventoryService = require('./ProductInventoryService');
const ProductMediaService = require('./ProductMediaService');
const ProductDimensionsService = require('./ProductDimensionsService');
const CartService = require('./CartService');
const OrderService = require('./OrderService');
const AddressService = require('./AddressService');
const WishlistService = require('./WishlistService');
const ReviewService = require('./ReviewService');

module.exports = {
  UserService,
  ProductService,
  ProductInventoryService,
  ProductMediaService,
  ProductDimensionsService,
  CartService,
  OrderService,
  AddressService,
  WishlistService,
  ReviewService
};
