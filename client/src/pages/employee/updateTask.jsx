import { useEffect, useState } from "react";
import ViewOwnCard from "./viewOwnCard";
import { useSelector } from "react-redux";

const UpdateTask = () => {
  const user = useSelector((state) => state.user);
  const userId = user._id;
  const [taskData, setTaskData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null)
  useEffect(() => {
    const handleFetch = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/task?assignedTo=${userId}`,{
            credentials:"include"
          }
        );
        if (!response.ok) {
          throw new Error("Error caught");
        }
        const data = await response.json();
        setTaskData(data.tasks);
      } catch (err) {
        setError(err.message)
      }finally{
        setLoading(false);
      }
    };
    if(userId)
    {

        handleFetch();
    }
  }, [userId]);

  const handleStatusChange = async(taskId, newStatus) =>{
    try{
      const response = await fetch(`http://localhost:5000/api/task/${taskId}`,{
        method : "PUT",
        headers : {
          "Content-type" : "application/json"
        },
        credentials : "include",
        body : JSON.stringify({status : newStatus})
      })
      if (!response.ok) throw new Error("Failed to update task");
      alert("Task status updated successfully!");
      setTaskData((prevTasks) =>
        prevTasks.map((t) =>
          t._id === taskId ? { ...t, status: newStatus } : t
        )
      );
    }catch(err)
    {
      console.log(err);
      alert(err.message);
    }
  }
    if(loading)
    return (
      <div className="flex justify-center items-center h-screen text-lg text-gray-600">
        Loading tasks...
      </div>
    );

    if (error)
    return (
      <div className="flex justify-center items-center h-screen text-red-500 font-semibold">
        {error}
      </div>
    );

  return (
    <div className="p-6 min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {
        taskData.length > 0 ? (
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    taskData.map((t) => (
                        <li key = {t._id} className="bg-white shadow-md rounded-xl p-5 border border-gray-200 hover:shadow-lg transition">
                            <ViewOwnCard
                            status={t.status}
                            title={t.title}
                            description={t.description}
                            dueDate={t.dueDate}
                            />
                            <select value = {t.status} onChange = {(e)=>handleStatusChange(t._id, e.target.value)} className="mt-4 w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-700 focus:ring-2 focus:ring-blue-400 outline-none transition">
                                <option value = "pending">pending</option>
                                <option value = "in-progress">in-progress</option>
                                <option value = "completed">completed</option>
                            </select>
                        </li>
                    ))
                }
            </ul>
        ) : (
            <p>"No Task Found"</p>
        )
      }
    </div>
  );
};

export default UpdateTask;
