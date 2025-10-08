import { useEffect, useState } from "react";
import ViewOwnCard from "./viewOwnCard";
import { useSelector } from "react-redux";

const ViewOwnTask = () => {
  const user = useSelector((state) => state.user);
  const userId = user._id;
//   let total = 0;
//   let page = 0;
//   let limit = 0;
//   let totalPage = 0;
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
        // total = data.total;
        // page = data.page;
        // limit = data.limit;
        // totalPage = data.totalPage;
        setTaskData(data.tasks);
      } catch (err) {
        console.log(err);
      }
    };
    handleFetch();
  }, []);
  return (
    <div>
      {
        taskData.length > 0 ? (
            <ul>
                {
                    taskData.map((e) => (
                        <li key = {e._id}>
                            <ViewOwnCard
                            status={e.status}
                            title={e.title}
                            description={e.description}
                            dueDate={e.dueDate}
                            />
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

export default ViewOwnTask;
