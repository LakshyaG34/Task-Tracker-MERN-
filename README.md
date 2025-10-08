# 📝 Task Tracker (MERN Stack)

An advanced **Task Tracker Web Application** built using the **MERN Stack (MongoDB, Express.js, React.js, Node.js)**.  
This app helps admins **create employees and tasks**, and **track tasks** and employees can view and update their tasks — perfect for team project management.
---

## 🚀 Features

- 👤 Admin can **add employees**
- 📝 Admin can **create tasks** and assign them to employees  
- 📊 Admin can view all tasks with **filters** for status and assignee
- ✅ Employees can view their **own tasks and update task status**
- 🔒 Authentication using **JWT** with cookies
- 🎨 Responsive UI built with **React + Tailwind CSS**

---

## 🛠️ Tech Stack

| Layer        | Technology Used                        |
|---------------|---------------------------------------|
| Frontend      | React.js, Redux Toolkit, Tailwind CSS |
| Backend       | Node.js, Express.js                   |
| Database      | MongoDB (Mongoose)                    |
| Authentication| JWT + Cookies                         |

---

## ⚙️ Setup Instructions

Follow these steps to run the project locally 👇

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/LakshyaG34/ExpenseTracker-Frido-Assignment.git
```

### 2️⃣ Backend Setup
```bash
cd server
npm install
Create a .env file inside the backend folder and add:

env.example
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
NODE_ENV


npm run dev
Backend should now be running on 👉 http://localhost:5000
```


### 3️⃣ Frontend Setup
```bash
cd client
npm install
Start the frontend:


npm run dev
```
Frontend runs on 👉 http://localhost:5173

4️⃣ Folder Structure
```bash
expense-tracker-mern/
│
├── server/
│   ├── controller/
│   ├── model/
│   ├── routes/
│   ├── lib/
│   ├── middleware/
│   ├── utils/
│   ├── server.js
│   └── .env
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── assets/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── redux/
│   │   └── App.jsx
│   └── package.json
│
└── README.md

```
🧩 API Endpoints Overview
```bash
Method	Endpoint	                 Description
POST    /api/auth/register           Register user (admin only)
POST    /api/auth/login              Login
POST    /api/auth/logout             Logout
GET     /api/auth/me                 Get logged-in user info (protected)
GET     /api/auth/users?role=role    Get all users filtered by role
POST    /api/task                    Create a new task (admin only)
GET     /api/task                    Get all tasks (admin) or tasks assigned to employee
PUT     /api/task/:taskId            Update task (employee)

```

📸 Screenshots



