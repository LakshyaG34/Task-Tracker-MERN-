import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "./models/User.js";
import Task from "./models/Task.js";

dotenv.config();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const seed = async () => {
  try {
    await User.deleteMany();
    await Task.deleteMany();

    // Create admin
    const hashedAdmin = await bcrypt.hash("admin123", 10);
    const admin = await User.create({
      name: "Admin",
      email: "admin@example.com",
      password: hashedAdmin,
      role: "admin",
    });

    // Create employees
    const hashedEmp1 = await bcrypt.hash("emp123", 10);
    const emp1 = await User.create({
      name: "Employee1",
      email: "emp1@example.com",
      password: hashedEmp1,
      role: "employee",
    });

    const hashedEmp2 = await bcrypt.hash("emp123", 10);
    const emp2 = await User.create({
      name: "Employee2",
      email: "emp2@example.com",
      password: hashedEmp2,
      role: "employee",
    });

    // Create tasks
    await Task.create([
      {
        title: "Task 1",
        description: "Demo task 1",
        assignedTo: emp1._id,
        status: "pending",
        dueDate: new Date(),
      },
      {
        title: "Task 2",
        description: "Demo task 2",
        assignedTo: emp2._id,
        status: "pending",
        dueDate: new Date(),
      },
    ]);

    console.log("Seeding complete!");
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seed();
