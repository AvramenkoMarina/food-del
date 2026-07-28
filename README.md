# Food Delivery App

Full-stack food delivery application with customer frontend, admin panel, and Express API.

## Features

- Browse menu and manage cart
- User authentication (JWT)
- Place orders with Stripe payment
- Track order status
- Admin panel: add/remove food, manage orders

## Tech Stack

- **Frontend / Admin:** React, Vite, React Router, Axios
- **Backend:** Node.js, Express, MongoDB, Mongoose
- **Auth:** JWT, bcrypt
- **Payments:** Stripe


## Setup

### 1. Backend

```bash
cd backend
npm install

сreate a .env file:
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret_key

2. Frontend
cd frontend
npm install
npm run dev
3. Admin

cd admin
npm install
npm run dev
