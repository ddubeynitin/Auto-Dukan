# Auto-Dukan

A full-stack e-commerce web application for automotive parts and accessories. Auto-Dukan is a feature-rich platform that allows users to browse, search, and purchase genuine car parts from multiple vehicle brands. The project includes both customer-facing features and an admin dashboard for managing products, orders, and users.

## 📋 Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Key Components](#key-components)
- [Supported Vehicle Brands](#supported-vehicle-brands)
- [Contributing](#contributing)

## 🎯 Project Overview

Auto-Dukan is a clone of [AutoDukan.com](https://www.autodukan.com), an online platform dedicated to providing genuine automotive parts and accessories. The application caters to car owners and mechanics who need reliable parts for vehicle maintenance and upgrades.

**Key Objectives:**
- Provide easy access to genuine automotive parts
- Ensure maximum product availability
- Offer competitive pricing
- Enable quick and reliable delivery
- Simplify the purchasing process with intuitive UI
- Provide admin tools for inventory and order management

## ✨ Features

### User Features
- **Product Browsing**: Browse products by categories and subcategories
- **Featured Products**: View special featured products and promotions
- **Product Search**: Search and filter products by various criteria
- **Product Details**: Comprehensive product information with images and specifications
- **Shopping Cart**: Add/remove items and manage cart
- **User Authentication**: Login and OTP verification system
- **Brand Filtering**: Filter products by popular automotive brands (Maruti, Hyundai, SKODA, VW, Honda, Nissan, Ford, Mahindra, Toyota, Tata)

### Admin Features
- **Admin Dashboard**: Comprehensive dashboard for administrators
- **Product Management**: Add, edit, and delete products
- **Order Management**: Track and manage customer orders
- **User Management**: View and manage user accounts
- **Admin Authentication**: Secure login for administrators

### Core Services
- ✅ Genuine automotive parts
- ✅ Maximum product availability
- ✅ Competitive pricing
- ✅ On-time delivery guarantee

## 🛠️ Tech Stack

### Frontend
- **Framework**: React 19.2.0
- **Build Tool**: Vite 7.2.4
- **Styling**: 
  - Tailwind CSS 4.1.18
  - @emotion/react & @emotion/styled
  - Material-UI (@mui/material)
- **Routing**: React Router DOM 7.12.0
- **HTTP Client**: Axios 1.13.2
- **UI Components**: 
  - @headlessui/react (Headless UI components)
  - @heroicons/react (Icon library)
  - react-icons 5.5.0
- **Others**: 
  - react-phone-input-2 (Phone input field)
  - flag-icons (Country flag icons)

### Backend
- **Runtime**: Node.js
- **Framework**: Express 5.2.1
- **Database**: MongoDB with Mongoose 9.1.6
- **Authentication**: bcryptjs 2.4.3 (password hashing)
- **Email Service**: Nodemailer 8.0.1 (OTP and email verification)
- **Middleware**: 
  - CORS (Cross-Origin Resource Sharing)
  - body-parser (Request body parsing)
- **Environment**: dotenv 17.2.4

### Development Tools
- **Linting**: ESLint 9.39.1
- **Task Runner**: Nodemon (auto-reload for dev)
- **Version Control**: Git

## 📁 Project Structure

```
Auto-Dukan/
├── frontend/                          # React frontend application
│   ├── public/                        # Static assets
│   │   ├── icon-img/                 # Icon images
│   │   └── images/                   # Product and brand images
│   │       ├── brands/               # OEM and OES brand logos
│   │       ├── categories/           # Category images
│   │       ├── featured_product/     # Featured product images
│   │       └── services/             # Service icons
│   ├── src/
│   │   ├── components/
│   │   │   ├── CategoriesComponent.jsx        # Category listing
│   │   │   ├── FeaturedProductComponent.jsx   # Featured products display
│   │   │   ├── OurServicesComponent.jsx       # Services showcase
│   │   │   ├── PromotionImageComponent.jsx    # Promotional content
│   │   │   ├── Header.jsx                     # Navigation header
│   │   │   ├── Footer.jsx                     # Footer component
│   │   │   ├── Cards/
│   │   │   │   └── ProductCardComponent.jsx   # Reusable product card
│   │   │   └── admin/
│   │   │       ├── OrderManagementComponent.jsx      # Admin order management
│   │   │       ├── ProductManagementComponent.jsx    # Admin product management
│   │   │       └── UserManagementComponent.jsx       # Admin user management
│   │   ├── pages/
│   │   │   ├── Home.jsx                       # Home page
│   │   │   ├── Login.jsx                      # User login
│   │   │   ├── VerifyOTP.jsx                  # OTP verification
│   │   │   ├── Category.jsx                   # Category page
│   │   │   ├── SubCategoryPage.jsx            # Subcategory page
│   │   │   ├── ProductDetailsPage.jsx         # Product details
│   │   │   ├── FeaturedProductPage.jsx        # Featured products page
│   │   │   ├── CartPage.jsx                   # Shopping cart
│   │   │   └── admin/
│   │   │       ├── AdminLoginPage.jsx         # Admin login
│   │   │       └── AdminDashboardPage.jsx     # Admin dashboard
│   │   ├── assets/
│   │   │   └── style/
│   │   │       └── ProductDetailsPage.css     # Product page styles
│   │   ├── App.jsx                            # Main app component with routes
│   │   ├── App.css                            # App styles
│   │   ├── Home.css                           # Home page styles
│   │   ├── index.css                          # Global styles
│   │   └── main.jsx                           # React entry point
│   ├── eslint.config.js                       # ESLint configuration
│   ├── vite.config.js                         # Vite configuration
│   ├── package.json                           # Frontend dependencies
│   ├── index.html                             # HTML template
│   └── README.md
│
├── server/                            # Express backend application
│   ├── src/
│   │   ├── config/
│   │   │   └── db.js                          # MongoDB connection setup
│   │   ├── models/
│   │   │   └── admin.model.js                 # Admin schema and model
│   │   ├── controllers/
│   │   │   ├── admin.controller.js            # Admin authentication and logic
│   │   │   └── otp.controller.js              # OTP generation and email sending
│   │   ├── routes/
│   │   │   └── admin.routes.js                # Admin API routes
│   │   └── middlewares/                       # Middleware functions (future)
│   ├── server.js                              # Express app setup and port configuration
│   ├── package.json                           # Backend dependencies
│   └── README.md
│
└── README.md                          # This file
```

## 🚀 Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager
- MongoDB instance (local or cloud Atlas)

### Step 1: Clone the Repository
```bash
git clone https://github.com/yourusername/Auto-Dukan.git
cd Auto-Dukan
```

### Step 2: Backend Setup
```bash
cd server
npm install
```

### Step 3: Frontend Setup
```bash
cd ../frontend
npm install
```

## ⚙️ Configuration

### Backend Configuration

Create a `.env` file in the `server` directory with the following environment variables:

```env
# Server Port
PORT=5000

# MongoDB Connection String
MONGO_URI=mongodb://localhost:27017/auto-dukan
# OR for MongoDB Atlas
# MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/auto-dukan

# Email Configuration (for OTP and notifications)
GMAIL_USER=your_email@gmail.com
GMAIL_PASSWORD=your_app_password

# JWT Secret (if using authentication)
JWT_SECRET=your_secret_key

# Node Environment
NODE_ENV=development
```

### Frontend Configuration

The frontend is configured to connect to the backend API at `http://localhost:5000/api` by default. Modify `src/config/api.js` or relevant axios instances if needed.

## 🏃 Running the Application

### Start Backend Server
```bash
cd server
npm start
```
The server will run on `http://localhost:5000` and watch for file changes with Nodemon.

### Start Frontend Development Server (in a new terminal)
```bash
cd frontend
npm run dev
```
The frontend will typically run on `http://localhost:5173` (Vite default port).

### Build for Production

**Frontend:**
```bash
cd frontend
npm run build
npm run preview
```

**Backend:** No build step needed, run directly with Node.js

## 🔌 API Endpoints

### Admin Routes
- `POST /api/admins/login` - Admin login with email and password
- `GET /api/admins/info/:id` - Get admin information by ID
- `POST /api/admins/create` - Create a new admin account

### OTP Routes
- `POST /api/otp` - Generate and send OTP via email

## 🧩 Key Components

### Frontend Components

**Header Component**
- Navigation bar with logo
- Search functionality
- Cart icon with item count
- User authentication menu
- Mobile responsive navigation

**CategoriesComponent**
- Display all product categories
- Category cards with images
- Links to category-specific pages

**FeaturedProductComponent**
- Showcase featured/promoted products
- Product cards with images, prices, and details
- Quick add to cart functionality

**ProductCardComponent**
- Reusable product card template
- Product image, name, price, rating
- Add to cart button
- Product details link

**OurServicesComponent**
- Display core service offerings
- Four main services with icons:
  - Genuine Parts
  - Maximum Availability
  - Best Rates
  - On-Time Delivery

**Admin Components**
- **ProductManagementComponent**: CRUD operations for products
- **OrderManagementComponent**: View and manage orders
- **UserManagementComponent**: Manage user accounts

### Backend Components

**Admin Controller**
- `adminLoginHandler()` - Validate credentials and authenticate
- `adminInfo()` - Retrieve admin profile information
- `createAdmin()` - Register new admin account

**OTP Controller**
- `sendOTP()` - Generate 6-digit OTP and send via email using Nodemailer
- Email service integration with Gmail

**Admin Model**
- Schema for admin users with name, email, password, and role
- Timestamps for creation and update tracking

## 🚗 Supported Vehicle Brands

The platform supports parts for the following vehicle brands:

1. **Maruti** - Maruti Suzuki India Limited vehicles
2. **Hyundai** - Hyundai automotive products
3. **SKODA** - SKODA vehicles
4. **Volkswagen (VW)** - VW automotive products
5. **HONDA** - Honda vehicles
6. **Nissan** - Nissan automotive products
7. **Ford** - Ford vehicles
8. **Mahindra** - Mahindra vehicles
9. **Toyota** - Toyota automotive products
10. **Tata** - Tata Motors vehicles

## 📋 Pages and Routes

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | Home | Landing page with featured products, categories, and services |
| `/login` | Login | User authentication page |
| `/verify-otp` | VerifyOTP | OTP verification for account security |
| `/product/:product_name` | ProductDetailsPage | Detailed product information and reviews |
| `/featured-product` | FeaturedProductPage | Page showcasing all featured products |
| `/category` | Category | Display all product categories |
| `/subcategory/:category_name` | SubCategoryPage | Products within a specific category |
| `/cart` | CartPage | Shopping cart with checkout options |
| `/admin/login` | AdminLoginPage | Administrator login portal |
| `/admin/admin-dashboard` | AdminDashboardPage | Main admin control panel |

## 🔐 Security Features

- Email-based OTP verification for user authentication
- Password validation for admin accounts
- CORS enabled for secure cross-origin requests
- Environment variables for sensitive credentials
- Admin role-based access control

## 🎨 UI/UX Features

- Responsive design with Tailwind CSS
- Material-UI components for consistency
- Icon library for visual enhancement
- Emotion for styling React components
- Mobile-friendly interface using Tailwind breakpoints

## 📝 Future Enhancements

- [ ] Payment gateway integration (Razorpay, Stripe)
- [ ] Real-time order tracking
- [ ] Product reviews and ratings system
- [ ] Wishlist functionality
- [ ] Advanced search and filtering
- [ ] Email notifications for order updates
- [ ] User profile and order history
- [ ] Inventory management dashboard
- [ ] Analytics and reporting
- [ ] Product recommendations engine
- [ ] Multiple payment method support
- [ ] Return and refund management

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License - see the LICENSE file for details.

## 👥 Authors

- Development Team: Internship Project

## 📞 Support

For issues, questions, or suggestions, please open an issue in the repository.

---

**Last Updated**: February 2026
**Version**: 1.0.0
**Status**: In Development
