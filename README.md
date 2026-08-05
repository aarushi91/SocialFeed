# 🌐 SocialFeed - MERN Social Media Platform

SocialFeed is a full-stack social media web application built using the **MERN Stack (MongoDB, Express.js, React.js, Node.js)**. It provides a modern platform where users can securely register, log in, create posts with images, interact through likes and comments, search content, and manage their own posts.

The project was developed incrementally as part of an internship evaluation, with each phase introducing new features and improvements in functionality, user experience, and interface design.

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
- Responsive Modern UI

---

## ✅ Evaluation 2 Completed

### Backend

- Express Server
- MongoDB Atlas Integration
- Mongoose Configuration
- REST APIs
- Environment Variables

### Authentication

- User Registration
- User Login
- Password Hashing (bcryptjs)
- JWT Authentication
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
- Delete Posts
- Like / Unlike Posts
- Comment System
- Toast Notifications
- Live Feed Refresh
- Responsive Feed

---

## ✅ Evaluation 4 Completed

### Advanced Features

- Edit Posts
- Image Upload Support
- Image Preview Before Posting
- Fullscreen Image Viewer
- Delete Comments
- Search Posts
- Profile Statistics
- Better Delete Confirmation Modal
- Loading States
- Improved UI Animations
- Empty Search & Feed States

---

# ✨ Features

## 🏠 Landing Page

- Responsive Navigation
- Hero Section
- Features Section
- Professional Footer
- Mobile Friendly Design

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

- JWT Authentication
- Protected Routes
- Local Storage Token
- Secure Login
- Automatic Redirect

---

## 👤 Dashboard

- Protected Dashboard
- User Profile Card
- Avatar
- Username
- Email
- Bio
- Online Status
- Logout
- Responsive Layout

---

# 📝 Post Management

## Create Posts

- Text Posts
- Image Posts
- Text + Image Posts
- Image Preview Before Posting
- Empty Validation
- Instant Feed Refresh

---

## Read Posts

- Recent Posts First
- Relative Time Display
- Author Details
- Responsive Feed
- Image Preview

---

## Update Posts

- Edit Existing Posts
- Inline Editing
- Live Feed Update

---

## Delete Posts

- Delete Own Posts
- Confirmation Modal
- Automatic Feed Refresh

---

## Like System

- Like / Unlike Posts
- Live Like Counter
- Animated Like Button

---

## Comment System

- Add Comments
- Delete Own Comments
- Live Comment Count
- Instant Updates
- Empty Comment Validation

---

## Image Features

- Upload Images
- Image Preview
- Fullscreen Image Modal
- Support for:
  - Text Only Posts
  - Image Only Posts
  - Text + Image Posts

---

## Search

- Search Posts by Caption
- Search by Username
- Search by Author Name
- Empty Search State

---

## Profile Statistics

Dynamic profile statistics including:

- Total Posts
- Total Likes Received
- Total Comments Received

---

## User Experience

- React Toastify Notifications
- Loading States
- Hover Animations
- Responsive Cards
- Responsive Dashboard
- Empty Feed Illustration
- Smooth Transitions
- Better Button Interactions

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
- Multer
- dotenv
- CORS

---

# 📂 Project Structure

```text
SocialFeed/

├── client/
│
│── src/
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
    │   ├── config/
    │   ├── controllers/
    │   ├── middleware/
    │   ├── models/
    │   ├── routes/
    │   └── utils/
    │
    ├── uploads/
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

### Update Post

```
PUT /api/posts/:id
```

### Delete Post

```
DELETE /api/posts/:id
```

### Like / Unlike Post

```
PUT /api/posts/:id/like
```

### Add Comment

```
POST /api/posts/:id/comment
```

### Delete Comment

```
DELETE /api/posts/:postId/comment/:commentId
```

---

# 📌 Completed Modules

## Frontend

- Landing Page
- Signup
- Login
- Protected Dashboard
- Profile Card
- Create Post
- Feed
- Image Upload
- Image Preview
- Fullscreen Image Modal
- Edit Posts
- Delete Posts
- Like System
- Comment System
- Delete Comments
- Search Posts
- Profile Statistics
- Toast Notifications
- Responsive UI

---

## Backend

- Express Server
- MongoDB Atlas
- JWT Authentication
- Authentication Middleware
- REST APIs
- Multer Image Upload
- CRUD Operations
- Like APIs
- Comment APIs
- Delete Comment API
- Search Support
- Protected Routes

---

# 📊 Project Progress

| Module | Status |
|---------|--------|
| Authentication | ✅ Completed |
| Dashboard | ✅ Completed |
| CRUD Operations | ✅ Completed |
| Image Upload | ✅ Completed |
| Like System | ✅ Completed |
| Comment System | ✅ Completed |
| Search | ✅ Completed |
| Profile Statistics | ✅ Completed |
| Responsive Design | ✅ Completed |

---

# 🚀 Future Scope

- Friend Requests
- Real-time Chat (Socket.IO)
- Notifications
- Profile Editing
- Dark / Light Theme
- Stories
- Video Uploads
- Cloudinary Image Storage
- Infinite Scrolling Feed
- Deployment Enhancements

---

# 📷 Application Screens

- Landing Page
- Signup Page
- Login Page
- Dashboard
- User Profile
- Create Post
- Image Upload
- Feed
- Like & Comment
- Search
- Image Preview
- Fullscreen Image Modal

---

# 👩‍💻 Developer

**Aarushi Jain**

B.Tech Computer Science & Engineering

Assam down town University

---

# 📄 License

This project is developed for learning purposes, internship evaluation, and academic use.