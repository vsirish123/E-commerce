# ShoppyGlobe Backend - Node.js + Express + MongoDB

## Project Overview
This project is the backend for ShoppyGlobe E-commerce App.
It includes Products API, Cart API, Authentication, JWT, MongoDB integration,
Error Handling and ThunderClient Testing.

---

##  Tech Stack
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication

---

## clone the repo using below command 
git clone https://github.com/vsirish123/E-commerce.git

## Installation & Setup
npm init -y (for node.js)

###  Install Dependencies
npm i express (for express)

npm i mongoose (for database)

npm i jsonwebtoken (for authentication using jwt token)

npm i --save-dev nodemon

## changes to do in package.json
"type":"module"

In scripts{
"start":"nodemon server.js"
}

###  Start Server
npm start

Server runs on:
http://localhost:3000

---

## API Routes

### Products
GET /products  
GET /products/:id  
POST /products  
PUT /products/:id  
DELETE /products/:id  

---

### Cart (Protected)
POST /cart  
GET /cart  
PUT /cart/:id  
DELETE /cart/:id  

Requires Bearer Token

---

### Authentication
POST /register  
POST /login  

Login returns token:
Use token in ThunderClient
Authorization → JWT Token

---

##  MongoDB Collections
- users
- products
- carts

---

##  ThunderClient Testing
All APIs tested in ThunderClient.

Screenshots Included:
- Successful API responses
- JWT token test
- CRUD proof

---

## Required Screenshots for Submission
1. MongoDB `products` collection
2. MongoDB `cart` collection
3. MongoDB `users` collection
4. ThunderClient test results
5. Terminal showing "MongoDB Connected"

---

## Result
Fully working Backend  
No Errors  
MongoDB Integrated  
JWT Protected Cart  
Meets Submission PDF Requirements
