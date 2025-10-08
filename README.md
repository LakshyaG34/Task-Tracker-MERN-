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
git clone https://github.com/LakshyaG34/fx-mern-task-tracker.git
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
![3](https://github.com/user-attachments/assets/743d8236-c6eb-4967-a2f5-f2bef67b1888)
![2](https://github.com/user-attachments/assets/04020021-bbbc-4880-92e6-50e75bee9c3a)
![1](https://github.com/user-attachments/assets/a76c270d-2cd4-45ab-8e30-37569b7fbea7)
![8](https://github.com/user-attachments/assets/d2b35617-b944-42ff-8718-f124471f3ea8)
![7](https://github.com/user-attachments/assets/e14fc2b8-6249-410e-876a-34f25728b055)
![6](https://github.com/user-attachments/assets/56b7d464-6c3c-4e4f-857b-d927c2568a97)
![5](https://github.com/user-attachments/assets/e9014bff-eae4-4b49-8fb0-6c7580dc31a8)
![4](https://github.com/user-attachments/assets/aadf3d95-137b-4302-bcda-d097294dfd5f)




