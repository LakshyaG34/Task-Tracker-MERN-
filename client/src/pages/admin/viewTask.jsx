// import { useEffect, useState } from "react";
import ViewCard from "./viewCard";
import { useSelector } from "react-redux";

const ViewTask = () => {
  const task = useSelector((state) => state.task)
  console.log(task);
  return (
    <div>
      {
        task?.tasks?.length > 0 ? (
            <ul>
                {
                    task.tasks.map((e) => (
                        <li key = {e._id}>
                            <ViewCard
                            status={e.status}
                            assignedTo = {e.assignedTo.name}
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

export default ViewTask;
