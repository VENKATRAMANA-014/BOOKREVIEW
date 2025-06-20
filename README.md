# 📚 Book Review Platform

A full-stack web application where users can browse books, read and write reviews, and rate books. Built with **React**, **Node.js**, **Express**, and **MongoDB**.

---

## 🚀 Features

### 👨‍💻 User Functionality
- Register and login securely
- Browse all books with search and filter
- View book details with user reviews
- Submit your own reviews and ratings
- View and update user profile

### 🛠 Admin Functionality
- Add new books (via backend endpoint)

---

## 🧱 Tech Stack

| Layer       | Tech                             |
|-------------|----------------------------------|
| Frontend    | React, React Router, Bootstrap   |
| State Mgmt  | React Context API                |
| Backend     | Node.js, Express.js              |
| Database    | MongoDB + Mongoose               |
| Auth        | JWT, bcrypt                      |

---

## 🖥 Folder Structure

BookReview/
│
├── ReviewBackend/ # Express backend
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── .env
│ └── server.js
│
├── review-frontend/ # React frontend
│ ├── src/
│ │ ├── pages/
│ │ ├── components/
│ │ ├── context/
│ │ └── api/
│ └── public/
│
└── README.md

## ⚙️ Setup Instructions


### 1️⃣ Clone the repository

```bash
git clone https://github.com/VENKATRAMANA-014/BOOKREVIEW.git
cd BOOKREVIEW


2️⃣ Backend Setup (MongoDB + Express)
bash
cd ReviewBackend
npm install
Create a .env file:

env
PORT=5000
MONGO_URI=your_mongo_uri
JWT_SECRET=your_jwt_secret
Run the backend:

bash
node server.js


3️⃣ Frontend Setup (React)
bash
Copy code
cd ../review-frontend
npm install
Create .env in frontend:

env
Copy code
REACT_APP_API=http://localhost:5000
Run the React app:

bash
npm start


🤝 Author
VENKATRAMANA SONTE
GitHub: @VENKATRAMANA-014
