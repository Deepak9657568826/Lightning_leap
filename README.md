
## Project Description
# Full Stack  Project

## Project Description
Bog Application
## Features
- User Authentication (Sign Up, Login, Logout)
- CRUD operations for blog posts
- See multiple user blog

## Backend deployed link
https://lightning-leap-10.onrender.com

## Frontend deployed link
https://lightning-leap.vercel.app/

## Technologies Used
## For backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (JSON Web Token) for authentication
- Bcrypt for password hashing
- CORS middleware for cross-origin resource sharing
- 
 ## For frontend
- react
- redux
- react-router-dom
- axios

## Frontend library
- FlowBite
- Tailwind CSS

## Getting Started
frontend 
npm run dev

backend
npm run server


Here's the comprehensive README file for your backend application in a single document:

markdown
Copy code
# Backend Project

## Project Description

This project is a backend application built with Node.js and Express. It provides various APIs for managing data and supports user authentication.

## Features

- User Authentication (Sign Up, Login, Logout)
- CRUD operations for blog posts

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (JSON Web Token) for authentication
- Bcrypt for password hashing
- CORS middleware for cross-origin resource sharing



## Folder Structure backend
backend/
│
├── controller/
│   ├── blog.controller.js
│   └── user.controller.js
│
├── db/
│   └── connection.db.js
│
├── middleware/
│   └── auth.middleware.js
│
├── model/
│   ├── blog.model.js
│   └── user.model.js
│
├── route/
│   ├── blog.route.js
│   └── userAuth.route.js
│
├── blacklist/
│   └── blacklist.js
│
├── .env
├── package.json
└── server.js


## Getting Started
Frontend
npm run dev

Backend
npm run server

## API Endpoints
# User Authentication

Register
POST /register

Login
POST /login

Logout
GET /logout

# Blog Operations
Add Blog
POST /blog

Get All Blogs
GET /blog

Get Individual Blog
GET /individualblog

Update Blog
PUT /blog/:id

Delete Blog
DELETE /blog/:id

## Frontend page images
 SignUp page
![Screenshot 2024-07-26 222511](https://github.com/user-attachments/assets/0e1a219d-2df7-4b88-af32-23fef823a6cc)

Login page
![Screenshot 2024-07-26 222318](https://github.com/user-attachments/assets/b498e89f-c6fd-416d-b21b-749699131886)

HomePage
![Screenshot 2024-07-26 222332](https://github.com/user-attachments/assets/c82b2f20-ffad-4ef3-bcdd-0ba14214be1c)

Personal blog page
![Screenshot 2024-07-26 222340](https://github.com/user-attachments/assets/545bfe91-1eb8-46b5-99a8-eb0677936f13)

Add new blog page
![Screenshot 2024-07-26 222346](https://github.com/user-attachments/assets/4891c1b5-0ac7-4d7d-a387-085c77a60b63)

UserDetails page
![Screenshot 2024-07-26 222351](https://github.com/user-attachments/assets/6ee62fc6-d27f-42f9-853b-c7df1d093b4e)

Logout page
![Screenshot 2024-07-26 222307](https://github.com/user-attachments/assets/a39f0d3c-ecb4-4b11-9f9d-dbe34f92db39)
