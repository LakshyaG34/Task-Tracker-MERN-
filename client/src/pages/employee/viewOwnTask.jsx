import { useEffect, useState } from "react";
import ViewOwnCard from "./viewOwnCard";
import { useSelector } from "react-redux";

const ViewOwnTask = () => {
  const user = useSelector((state) => state.user);
  const userId = user._id;
  const [taskData, setTaskData] = useState([]);
  useEffect(() => {
    const handleFetch = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/task?assignedTo=${userId}`
        );
        if (!response.ok) {
          throw new Error("Error caught");
        }
        const data = await response.json();
        setTaskData(data.tasks);
      } catch (err) {
        console.log(err);
      }
    };
    handleFetch();
  }, []);
  return (
    <div className="p-6 min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {
        taskData.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    taskData.map((e) => (
                        <ViewOwnCard
                        key = {e._id}
                        status={e.status}
                        title={e.title}
                        description={e.description}
                        dueDate={e.dueDate}
                        />
                    ))
                }
            </div>
        ) : (
            <p>"No Task Found"</p>
        )
      }
    </div>
  );
};

export default ViewOwnTask;
