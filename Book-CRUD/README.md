# Advanced Book Management API with Authentication and RBAC

## 🚀 Project Overview
This API is an advanced book management system built with **Node.js** and **MongoDB**. It introduces **JWT-based authentication** and **Role-Based Access Control (RBAC)**, allowing users with different roles (e.g., `admin`, `user`) to access specific routes and perform certain actions. 

The API includes functionality for user signup, login, book management, and recommendations.

---

## 💻 Features and Routes

### **User Authentication**
- **JWT-based Authentication** implemented for secure access.
- Passwords are hashed using **bcrypt** before being stored.

#### Routes:
- `POST /auth/signup`: Sign up a new user.
- `POST /auth/login`: Login to generate a JWT token.

---

### **Role-Based Access Control (RBAC)**
- **Roles**: `admin`, `user`
- Role restrictions:
  - **Admin Only**:
    - `GET /books/all`: Fetch all books.
  - **User Accessible**:
    - `GET /books`: Fetch books based on user-specific criteria.
    - `POST /books`: Add a new book.
    - `PUT /books/:id`: Update a book.
    - `DELETE /books/:id`: Delete a book.
    - `PUT /books/:id/favorite`: Mark a book as a favorite.
    - `GET /books/recommendations`: Get book recommendations.
    - `GET /books/random`: Fetch a random book.

---

### **Custom Endpoints**
- `GET /books/recommendations`: Suggest books based on user preferences or roles.
- `GET /books/random`: Fetch a random book for the logged-in user.

---

## 🔒 Security
- **Password Hashing**: All passwords are hashed using `bcrypt` for secure storage.
- **JWT Authentication**: Protects sensitive routes. Tokens must be included in the request headers (`Authorization: Bearer <token>`).
- **Role Checks**: Sensitive routes are protected with role-based access control.

---

## 🔧 Installation and Setup

### Prerequisites
- [Node.js](https://nodejs.org/) installed on your system.
- [MongoDB](https://www.mongodb.com/) instance running.

### Installation Steps
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-directory>
2. Install dependencies:
    npm install

3. Install dependencies:
    PORT=5000
    MONGO_URI=<Your-MongoDB-URI>
    JWT_SECRET=<Your-JWT-Secret>

4. Install dependencies:
    npm start

Here’s a more polished and professional README.md version that you can copy in one go:

markdown
Copy code
# 📚 Advanced Book Management API with Authentication and RBAC

## 🛠️ Overview
This project is an advanced **Book Management API** built with **Node.js** and **MongoDB**, designed to demonstrate secure **JWT-based authentication** and **Role-Based Access Control (RBAC)**. The API supports user and admin roles, restricting access to routes based on roles and ensuring secure interactions.

---

## 🚀 Features

### 🔑 Authentication
- **JWT-based Authentication** for secure user access.
- Passwords are securely hashed using **bcrypt**.

### 👥 Role-Based Access Control (RBAC)
- **Roles**: `admin`, `user`
- Admin-exclusive functionality for managing all books.
- User-specific actions for personalized book management.

### 📚 Book Management
- Full CRUD operations on books.
- Additional endpoints for book recommendations and marking favorites.

### 🛡️ Security
- Passwords are hashed before storage.
- All sensitive routes are protected using JWT and role-based access.

---

## 📋 API Routes

### **Authentication**
1. `POST /auth/signup`: Create a new user account.
2. `POST /auth/login`: Authenticate user and return a JWT token.

### **Books**
- **User Accessible Routes**:
  - `GET /books`: Fetch user-specific books.
  - `POST /books`: Add a new book.
  - `PUT /books/:id`: Update an existing book.
  - `DELETE /books/:id`: Delete a book.
  - `PUT /books/:id/favorite`: Mark a book as a favorite.
  - `GET /books/recommendations`: Get personalized book recommendations.
  - `GET /books/random`: Fetch a random book.

- **Admin-Only Route**:
  - `GET /books/all`: Fetch all books.

---

## 🔧 Installation and Setup

### Prerequisites
1. Ensure **Node.js** and **MongoDB** are installed.
2. Set up a MongoDB database.

### Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-directory>
Install dependencies:
bash
Copy code
npm install
Configure environment variables by creating a .env file:
env
Copy code
PORT=3000
MONGO_URI=<Your-MongoDB-URI>
JWT_SECRET=<Your-JWT-Secret>

# Usage

## Testing the API

Include the JWT token in the Authorization header for protected routes:
text

Authorization: Bearer <JWT-Token>

# Deployment
The API is deployed and accessible at: Deployed API URL
Ensure all routes, authentication, and RBAC functionality are verified on the live version.

# Project Structure

Book-CRUD/
├── cmd/
├── config/
│   ├── database.js
│   ├── env.js
├── Database/
│   ├── DB.js
├── delivery/
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── BookController.js
│   ├── middleware/
│   │   ├── authMiddleware.js
│   │   ├── rbacMiddleware.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── bookRoutes.js
├── Domain models/
│   ├── Book.js
│   ├── User.js
├── internal_utils/
│   ├── tokenUtils.js
│   ├── userUtils.js
├── node_modules/
├── Repository/
│   ├── authRepository.js
│   ├── bookRepository.js
├── Usecase/
│   ├── authUsecase.js
│   ├── bookUsecase.js
├── validation/
├── .env
├── .gitignore
├── app.js
├── package-lock.json
├── package.json
├── README.md

