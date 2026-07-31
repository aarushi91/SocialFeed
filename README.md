# 🌐 SocialFeed - MERN Social Media Platform

SocialFeed is a full-stack social media web application built using the **MERN Stack (MongoDB, Express.js, React.js, Node.js)**. It allows users to register, securely log in, create posts, interact with other posts through likes and comments, and manage their own content.

This project is being developed incrementally as part of an internship evaluation, with each phase introducing new features and improving the overall user experience.

---

# 🚀 Project Status

## ✅ Evaluation 1 Completed

### Frontend

- Responsive Landing Page
- Login Page
- Signup Page
- React Router Navigation
- Form Validation
- Password Visibility Toggle
- Modern Responsive UI

---

## ✅ Evaluation 2 Completed

### Backend

- Express Server
- MongoDB Atlas Integration
- Mongoose Configuration
- Environment Variables
- REST APIs

### Authentication

- User Registration
- User Login
- Password Hashing using bcryptjs
- JWT Token Generation
- Authentication Middleware
- Protected Routes

### Dashboard

- Protected Dashboard
- Dynamic User Profile
- Logout Functionality
- Responsive Dashboard Layout

---

## ✅ Evaluation 3 Completed

### Feed System

- Create Posts
- Display Posts
- Delete Own Posts
- Like / Unlike Posts
- Comment on Posts
- Live Feed Refresh
- Empty Feed UI

### User Experience

- Toast Notifications
- Relative Time Display
- Hover Animations
- Better Feed Layout
- Responsive Post Cards

---

# ✨ Features

## 🏠 Landing Page

- Responsive Navigation
- Hero Section
- Features Section
- Modern Footer
- Responsive Design

---

## 🔐 Authentication

### Signup

- Full Name
- Username
- Email Validation
- Password Validation
- Confirm Password
- Duplicate Email Check
- Duplicate Username Check
- Password Hashing
- MongoDB Storage

### Login

- Secure JWT Authentication
- Email Validation
- Password Validation
- Local Storage Token
- Protected Navigation

---

## 👤 Dashboard

- Protected Route
- User Profile Card
- Avatar
- Username
- Email
- Bio
- Online Status
- Logout
- Responsive Layout

---

## 📝 Post Management

### Create Post

- Create text posts
- Instant feed refresh
- Empty post validation

### Read Posts

- View all posts
- Newest posts first
- Author details
- Relative timestamp

### Like Posts

- Like / Unlike
- Live like count update

### Comments

- Add comments
- Instant comment update
- Comment count
- Display all comments

### Delete Posts

- Delete only your own posts
- Confirmation before deletion
- Automatic feed refresh

---

## 🔔 User Experience

- Toast Notifications
- Loading States
- Smooth Hover Animations
- Empty Feed Illustration
- Responsive UI
- Modern Dashboard Design

---

# 🛠 Tech Stack

## Frontend

- React.js
- React Router DOM
- Axios
- CSS3
- React Icons
- React Toastify
- date-fns

---

## Backend

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT
- bcryptjs
- dotenv
- CORS

---

# 📂 Project Structure

```text
SocialFeed/

├── client/
│
│   ├── src/
│   │
│   ├── api/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   ├── App.jsx
│   └── main.jsx
│
└── server/
    │
    ├── src/
    │
    ├── config/
    ├── controllers/
    ├── middleware/
    ├── models/
    ├── routes/
    ├── server.js
    └── .env
```

---

# ⚙ Installation

## Clone Repository

```bash
git clone https://github.com/aarushi91/socialfeed.git
```

---

## Install Client

```bash
cd client
npm install
npm run dev
```

Runs on

```
http://localhost:5173
```

---

## Install Server

```bash
cd server
npm install
npm run dev
```

Runs on

```
http://localhost:5000
```

---

# 🔐 API Endpoints

## Authentication

### Register

```
POST /api/auth/register
```

### Login

```
POST /api/auth/login
```

### Get Profile

```
GET /api/auth/profile
```

---

## Posts

### Create Post

```
POST /api/posts/create
```

### Get All Posts

```
GET /api/posts
```

### Like / Unlike Post

```
PUT /api/posts/like/:id
```

### Add Comment

```
POST /api/posts/comment/:id
```

### Delete Post

```
DELETE /api/posts/:id
```

---

# 📌 Completed Modules

## Frontend

- Landing Page
- Login Page
- Signup Page
- Protected Dashboard
- Profile Card
- Create Post
- Feed
- Like System
- Comment System
- Delete Post
- Toast Notifications
- Responsive Design

---

## Backend

- Express Server
- MongoDB Atlas
- Authentication APIs
- JWT Authentication
- Password Encryption
- Authentication Middleware
- Profile API
- Create Post API
- Get Posts API
- Like API
- Comment API
- Delete Post API

---

# 📊 Current Progress

### Authentication

✅ Complete

### Dashboard

✅ Complete

### Feed

✅ Complete

### CRUD Operations

- ✅ Create
- ✅ Read
- ⏳ Update (Next Evaluation)
- ✅ Delete

### Like System

✅ Complete

### Comment System

✅ Complete

---

# 🚧 Upcoming Features (Evaluation 4)

- Edit Post
- Image Upload
- User Profile Editing
- Friend Requests
- Real-time Chat (Socket.IO)
- Notifications
- Search Users
- Dark / Light Theme
- Deployment
- Infinite Feed Scroll

---

# 📷 Screens

- Landing Page
- Signup Page
- Login Page
- Dashboard
- User Profile
- Feed
- Create Post
- Comments
- Delete Post

---

# 👩‍💻 Developer

**Aarushi Jain**

B.Tech Computer Science & Engineering

Assam down town University

---

# 📄 License

This project is developed for learning purposes, internship evaluation, and academic use.