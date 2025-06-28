import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

import connectDB from './config/database.js';
import errorHandler from './middleware/errorHandler.js';
import { accessLogger, errorLogger, consoleLogger } from './middleware/logger.js';
import routes from './routes/index.js';

// Load environment variables
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

// Trust proxy (for deployment behind reverse proxy)
app.set('trust proxy', 1);

// Security middleware
app.use(helmet({
  crossOriginResourcePolicy: { policy: "cross-origin" }
}));
app.use(compression());

// Rate limiting
const limiter = rateLimit({
  windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS) || 15 * 60 * 1000, // 15 minutes
  max: parseInt(process.env.RATE_LIMIT_MAX_REQUESTS) || 100,
  message: {
    status: 'error',
    message: 'Слишком много запросов с этого IP, попробуйте позже.'
  },
  standardHeaders: true,
  legacyHeaders: false,
});

// Apply rate limiting to API routes
app.use('/api/', limiter);

// CORS configuration
const corsOptions = {
  origin: function (origin, callback) {
    const allowedOrigins = [
      process.env.FRONTEND_URL,
      'http://localhost:3000',
      'http://localhost:5173',
      'http://127.0.0.1:5173'
    ].filter(Boolean);

    // Allow requests with no origin (mobile apps, etc.)
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
  exposedHeaders: ['X-Total-Count']
};

app.use(cors(corsOptions));

// Body parsing middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Logging middleware
app.use(accessLogger);
app.use(errorLogger);
app.use(consoleLogger);

// Serve static files
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'Server is running',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV,
    uptime: process.uptime(),
    memory: process.memoryUsage()
  });
});

// API routes
app.use('/api', routes);

// Serve API documentation (if available)
app.get('/docs', (req, res) => {
  res.json({
    status: 'success',
    message: 'API Documentation',
    version: '1.0.0',
    baseUrl: `${req.protocol}://${req.get('host')}/api/v1`,
    endpoints: {
      authentication: {
        register: 'POST /auth/register',
        login: 'POST /auth/login',
        verifyEmail: 'GET /auth/verify-email/:token',
        forgotPassword: 'POST /auth/forgot-password',
        resetPassword: 'PATCH /auth/reset-password/:token',
        getCurrentUser: 'GET /auth/me'
      },
      users: {
        getProfile: 'GET /users/profile',
        updateProfile: 'PATCH /users/profile',
        changePassword: 'PATCH /users/change-password',
        uploadAvatar: 'POST /users/avatar',
        getUserStats: 'GET /users/stats'
      },
      farmers: {
        getFarmers: 'GET /farmers',
        getFarmer: 'GET /farmers/:id',
        createProfile: 'POST /farmers/profile',
        updateProfile: 'PATCH /farmers/profile',
        getDashboard: 'GET /farmers/dashboard/stats'
      },
      products: {
        getProducts: 'GET /products',
        getProduct: 'GET /products/:id',
        createProduct: 'POST /products',
        updateProduct: 'PATCH /products/:id',
        deleteProduct: 'DELETE /products/:id'
      },
      orders: {
        createOrder: 'POST /orders',
        getUserOrders: 'GET /orders/my-orders',
        getOrder: 'GET /orders/:id',
        updateStatus: 'PATCH /orders/:id/status',
        cancelOrder: 'PATCH /orders/:id/cancel'
      },
      reviews: {
        createReview: 'POST /reviews',
        getProductReviews: 'GET /reviews/product/:productId',
        getFarmerReviews: 'GET /reviews/farmer/:farmerId'
      }
    }
  });
});

// 404 handler
app.all('*', (req, res) => {
  res.status(404).json({
    status: 'error',
    message: `Маршрут ${req.originalUrl} не найден`,
    availableEndpoints: '/docs'
  });
});

// Global error handler
app.use(errorHandler);

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('🛑 SIGTERM получен. Завершение работы сервера...');
  server.close(() => {
    console.log('🔌 HTTP сервер закрыт');
    process.exit(0);
  });
});

process.on('SIGINT', () => {
  console.log('🛑 SIGINT получен. Завершение работы сервера...');
  server.close(() => {
    console.log('🔌 HTTP сервер закрыт');
    process.exit(0);
  });
});

// Start server
const server = app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Сервер запущен на порту ${PORT}`);
  console.log(`🌍 Окружение: ${process.env.NODE_ENV}`);
  console.log(`📊 Health check: http://localhost:${PORT}/health`);
  console.log(`📚 API docs: http://localhost:${PORT}/docs`);
  console.log(`🔗 API base URL: http://localhost:${PORT}/api/v1`);
});

export default app;