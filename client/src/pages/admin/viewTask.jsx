// import { useEffect, useState } from "react";
import ViewCard from "./viewCard";
import { useSelector } from "react-redux";

const ViewTask = () => {
  const task = useSelector((state) => state.task)
  console.log(task);
  return (
    <div className="p-6 min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {
        task?.tasks?.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    task.tasks.map((e) => (
                        <ViewCard
                        key = {e._id}
                        status={e.status}
                        assignedTo = {e.assignedTo.name}
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

export default ViewTask;
