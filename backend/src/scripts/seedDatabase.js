import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';

import User from '../models/User.js';
import Farmer from '../models/Farmer.js';
import Product from '../models/Product.js';

// Load environment variables
dotenv.config();

// Connect to database
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ MongoDB подключена');
  } catch (error) {
    console.error('❌ Ошибка подключения к MongoDB:', error);
    process.exit(1);
  }
};

// Sample data
const sampleUsers = [
  {
    firstName: 'Михаил',
    lastName: 'Иванов',
    email: 'mikhail.ivanov@example.com',
    password: await bcrypt.hash('password123', 12),
    phone: '+7-900-123-45-67',
    role: 'farmer',
    isVerified: true,
    isActive: true
  },
  {
    firstName: 'Анна',
    lastName: 'Петрова',
    email: 'anna.petrova@example.com',
    password: await bcrypt.hash('password123', 12),
    phone: '+7-900-234-56-78',
    role: 'farmer',
    isVerified: true,
    isActive: true
  },
  {
    firstName: 'Сергей',
    lastName: 'Козлов',
    email: 'sergey.kozlov@example.com',
    password: await bcrypt.hash('password123', 12),
    phone: '+7-900-345-67-89',
    role: 'farmer',
    isVerified: true,
    isActive: true
  },
  {
    firstName: 'Елена',
    lastName: 'Смирнова',
    email: 'elena.smirnova@example.com',
    password: await bcrypt.hash('password123', 12),
    phone: '+7-900-456-78-90',
    role: 'customer',
    isVerified: true,
    isActive: true
  }
];

const sampleFarmers = [
  {
    farmName: 'Эко-ферма Иванова',
    description: 'Семейная ферма, специализирующаяся на выращивании органических овощей и зелени. Работаем без химических удобрений и пестицидов.',
    specialties: ['vegetables', 'herbs'],
    isOrganic: true,
    isVerified: true,
    farmLocation: {
      address: 'д. Зеленая, ул. Полевая, 15',
      city: 'Подольск',
      region: 'Московская область',
      coordinates: {
        latitude: 55.4319,
        longitude: 37.5447
      }
    },
    deliveryRadius: 50,
    rating: {
      average: 4.9,
      count: 127
    },
    totalSales: 1250000
  },
  {
    farmName: 'Молочная ферма Петровых',
    description: 'Производим натуральные молочные продукты и мёд. Наши коровы пасутся на экологически чистых лугах.',
    specialties: ['dairy', 'honey'],
    isOrganic: true,
    isVerified: true,
    farmLocation: {
      address: 'с. Молочное, ул. Фермерская, 8',
      city: 'Тула',
      region: 'Тульская область',
      coordinates: {
        latitude: 54.1961,
        longitude: 37.6182
      }
    },
    deliveryRadius: 40,
    rating: {
      average: 4.8,
      count: 89
    },
    totalSales: 980000
  },
  {
    farmName: 'Фруктовый сад Козлова',
    description: 'Выращиваем сезонные фрукты, орехи и делаем домашние консервы. Большой выбор яблок, груш и слив.',
    specialties: ['fruits', 'nuts'],
    isOrganic: false,
    isVerified: true,
    farmLocation: {
      address: 'д. Садовая, ул. Яблоневая, 22',
      city: 'Калуга',
      region: 'Калужская область',
      coordinates: {
        latitude: 54.5293,
        longitude: 36.2754
      }
    },
    deliveryRadius: 60,
    rating: {
      average: 4.7,
      count: 156
    },
    totalSales: 750000
  }
];

const sampleProducts = [
  // Продукты от фермера Иванова
  {
    name: 'Помидоры черри',
    description: 'Сладкие органические помидоры черри, выращенные в теплице. Идеальны для салатов и закусок.',
    category: 'vegetables',
    subcategory: 'томаты',
    price: {
      amount: 350,
      unit: 'kg'
    },
    images: [
      {
        url: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=400&h=300&fit=crop',
        alt: 'Помидоры черри',
        isPrimary: true
      }
    ],
    availability: {
      inStock: true,
      quantity: 50,
      minOrderQuantity: 1,
      maxOrderQuantity: 10
    },
    characteristics: {
      isOrganic: true,
      isLocal: true,
      isGMOFree: true,
      shelfLife: '7 дней',
      storageConditions: 'Хранить в прохладном месте'
    },
    rating: {
      average: 4.9,
      count: 45
    },
    totalSold: 120,
    tags: ['органик', 'свежие', 'местные']
  },
  {
    name: 'Салат руккола',
    description: 'Свежая руккола с пикантным вкусом. Выращена без химических удобрений.',
    category: 'herbs',
    subcategory: 'салатная зелень',
    price: {
      amount: 180,
      unit: 'bunch'
    },
    images: [
      {
        url: 'https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?w=400&h=300&fit=crop',
        alt: 'Салат руккола',
        isPrimary: true
      }
    ],
    availability: {
      inStock: true,
      quantity: 30,
      minOrderQuantity: 1,
      maxOrderQuantity: 5
    },
    characteristics: {
      isOrganic: true,
      isLocal: true,
      isGMOFree: true,
      shelfLife: '5 дней',
      storageConditions: 'Хранить в холодильнике'
    },
    rating: {
      average: 4.8,
      count: 32
    },
    totalSold: 85,
    tags: ['органик', 'зелень', 'салат']
  },

  // Продукты от фермера Петровой
  {
    name: 'Молоко коровье',
    description: 'Свежее цельное молоко от коров, пасущихся на экологически чистых лугах.',
    category: 'dairy',
    subcategory: 'молоко',
    price: {
      amount: 80,
      unit: 'l'
    },
    images: [
      {
        url: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&h=300&fit=crop',
        alt: 'Молоко коровье',
        isPrimary: true
      }
    ],
    availability: {
      inStock: true,
      quantity: 100,
      minOrderQuantity: 1,
      maxOrderQuantity: 20
    },
    characteristics: {
      isOrganic: true,
      isLocal: true,
      isGMOFree: true,
      shelfLife: '3 дня',
      storageConditions: 'Хранить в холодильнике при +4°C'
    },
    rating: {
      average: 4.9,
      count: 78
    },
    totalSold: 450,
    tags: ['органик', 'свежее', 'натуральное']
  },
  {
    name: 'Мёд цветочный',
    description: 'Натуральный цветочный мёд, собранный с лугов Тульской области.',
    category: 'honey',
    subcategory: 'цветочный мёд',
    price: {
      amount: 800,
      unit: 'kg'
    },
    images: [
      {
        url: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=400&h=300&fit=crop',
        alt: 'Мёд цветочный',
        isPrimary: true
      }
    ],
    availability: {
      inStock: true,
      quantity: 25,
      minOrderQuantity: 1,
      maxOrderQuantity: 5
    },
    characteristics: {
      isOrganic: true,
      isLocal: true,
      isGMOFree: true,
      shelfLife: '2 года',
      storageConditions: 'Хранить в сухом месте'
    },
    rating: {
      average: 5.0,
      count: 23
    },
    totalSold: 67,
    tags: ['натуральный', 'цветочный', 'полезный']
  },

  // Продукты от фермера Козлова
  {
    name: 'Яблоки Антоновка',
    description: 'Классические русские яблоки сорта Антоновка. Кисло-сладкие, ароматные.',
    category: 'fruits',
    subcategory: 'яблоки',
    price: {
      amount: 120,
      unit: 'kg'
    },
    images: [
      {
        url: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400&h=300&fit=crop',
        alt: 'Яблоки Антоновка',
        isPrimary: true
      }
    ],
    availability: {
      inStock: true,
      quantity: 200,
      minOrderQuantity: 2,
      maxOrderQuantity: 50
    },
    seasonality: {
      isSeasonalProduct: true,
      availableMonths: [8, 9, 10, 11, 12, 1, 2]
    },
    characteristics: {
      isOrganic: false,
      isLocal: true,
      isGMOFree: true,
      shelfLife: '3 месяца',
      storageConditions: 'Хранить в прохладном месте'
    },
    rating: {
      average: 4.6,
      count: 89
    },
    totalSold: 340,
    tags: ['сезонные', 'антоновка', 'русские']
  },
  {
    name: 'Грецкие орехи',
    description: 'Свежие грецкие орехи урожая этого года. Очищенные, готовые к употреблению.',
    category: 'nuts',
    subcategory: 'грецкие орехи',
    price: {
      amount: 1200,
      unit: 'kg'
    },
    images: [
      {
        url: 'https://images.unsplash.com/photo-1553909489-cd47e0ef937f?w=400&h=300&fit=crop',
        alt: 'Грецкие орехи',
        isPrimary: true
      }
    ],
    availability: {
      inStock: true,
      quantity: 15,
      minOrderQuantity: 1,
      maxOrderQuantity: 5
    },
    seasonality: {
      isSeasonalProduct: true,
      availableMonths: [9, 10, 11, 12, 1, 2, 3]
    },
    characteristics: {
      isOrganic: false,
      isLocal: true,
      isGMOFree: true,
      shelfLife: '6 месяцев',
      storageConditions: 'Хранить в сухом месте'
    },
    nutritionalInfo: {
      calories: 654,
      protein: 15.2,
      carbs: 7.0,
      fat: 65.2,
      fiber: 6.7
    },
    rating: {
      average: 4.8,
      count: 34
    },
    totalSold: 78,
    tags: ['орехи', 'полезные', 'питательные']
  }
];

// Seed function
const seedDatabase = async () => {
  try {
    console.log('🌱 Начинаем заполнение базы данных...');

    // Clear existing data
    await User.deleteMany({});
    await Farmer.deleteMany({});
    await Product.deleteMany({});
    console.log('🗑️ Очистили существующие данные');

    // Create users
    const users = await User.create(sampleUsers);
    console.log('👥 Создали пользователей:', users.length);

    // Create farmers (link to users)
    const farmersData = sampleFarmers.map((farmer, index) => ({
      ...farmer,
      user: users[index]._id // Link to corresponding user
    }));

    const farmers = await Farmer.create(farmersData);
    console.log('🚜 Создали фермеров:', farmers.length);

    // Create products (link to farmers)
    const productsData = sampleProducts.map((product, index) => ({
      ...product,
      farmer: farmers[Math.floor(index / 2)]._id // Distribute products among farmers
    }));

    const products = await Product.create(productsData);
    console.log('🥕 Создали продукты:', products.length);

    console.log('✅ База данных успешно заполнена!');
    console.log('\n📊 Статистика:');
    console.log(`- Пользователей: ${users.length}`);
    console.log(`- Фермеров: ${farmers.length}`);
    console.log(`- Продуктов: ${products.length}`);

    console.log('\n🔐 Тестовые аккаунты:');
    console.log('Фермеры:');
    console.log('- mikhail.ivanov@example.com / password123');
    console.log('- anna.petrova@example.com / password123');
    console.log('- sergey.kozlov@example.com / password123');
    console.log('Покупатель:');
    console.log('- elena.smirnova@example.com / password123');

  } catch (error) {
    console.error('❌ Ошибка заполнения базы данных:', error);
  } finally {
    mongoose.connection.close();
    console.log('🔌 Подключение к базе данных закрыто');
  }
};

// Run seeding
connectDB().then(seedDatabase);