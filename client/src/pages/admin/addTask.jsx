import React, { useState } from "react";
import { useSelector } from "react-redux";

const AddTask = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [assignedTo, setAssignedTo] = useState("");
  const [date, setDate] = useState("");
  const employee = useSelector((state) => state.employee);
  console.log(employee);

  const handleFetch = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/task", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          title,
          description,
          userId: assignedTo,
          role: "admin",
          date,
        }),
      });
      if (!response.ok) throw new Error("Task Add failed");
      alert("Task Added successfully!");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-red-50 to-red-100">
      <form
        onSubmit={handleFetch}
        className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-sm border border-gray-100"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Add Task
        </h2>

        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Enter Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />

          <input
            type="text"
            placeholder="Enter description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
          <select
            value={assignedTo}
            onChange={(e) => setAssignedTo(e.target.value)}
          >
            <option value="">Select Employee</option>
            {employee &&
              employee.map((e) => (
                <option key={e._id} value={e._id}>
                  {e.name}
                </option>
              ))}
          </select>
          <input
            type="date"
            className="border rounded px-2 py-1"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition focus:ring-2 focus:ring-blue-400 focus:outline-none"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTask;
