import express from 'express';
import authRoutes from './authRoutes.js';
import userRoutes from './userRoutes.js';
import farmerRoutes from './farmerRoutes.js';
import productRoutes from './productRoutes.js';
import categoryRoutes from './categoryRoutes.js';
import orderRoutes from './orderRoutes.js';
import reviewRoutes from './reviewRoutes.js';
import cartRoutes from './cartRoutes.js';
import wishlistRoutes from './wishlistRoutes.js';
import paymentRoutes from './paymentRoutes.js';
import deliveryRoutes from './deliveryRoutes.js';
import notificationRoutes from './notificationRoutes.js';
import promoCodeRoutes from './promoCodeRoutes.js';
import pickupRoutes from './pickupRoutes.js';

const router = express.Router();

// API version
router.use('/v1/auth', authRoutes);
router.use('/v1/users', userRoutes);
router.use('/v1/farmers', farmerRoutes);
router.use('/v1/products', productRoutes);
router.use('/v1/categories', categoryRoutes);
router.use('/v1/orders', orderRoutes);
router.use('/v1/reviews', reviewRoutes);
router.use('/v1/cart', cartRoutes);
router.use('/v1/wishlist', wishlistRoutes);
router.use('/v1/payments', paymentRoutes);
router.use('/v1/deliveries', deliveryRoutes);
router.use('/v1/notifications', notificationRoutes);
router.use('/v1/promo-codes', promoCodeRoutes);
router.use('/v1/pickup-points', pickupRoutes);

// API info endpoint
router.get('/', (req, res) => {
  res.json({
    status: 'success',
    message: 'Farm Marketplace API v1.0',
    version: '1.0.0',
    endpoints: {
      auth: '/api/v1/auth',
      users: '/api/v1/users',
      farmers: '/api/v1/farmers',
      products: '/api/v1/products',
      categories: '/api/v1/categories',
      orders: '/api/v1/orders',
      reviews: '/api/v1/reviews',
      cart: '/api/v1/cart',
      wishlist: '/api/v1/wishlist',
      payments: '/api/v1/payments',
      deliveries: '/api/v1/deliveries',
      notifications: '/api/v1/notifications',
      promoCodes: '/api/v1/promo-codes',
      pickupPoints: '/api/v1/pickup-points'
    },
    documentation: 'https://github.com/farm-marketplace/api-docs'
  });
});

export default router;