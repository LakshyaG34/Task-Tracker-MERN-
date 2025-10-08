import { useState, useMemo } from "react";
import ViewCard from "./viewCard";
import { useSelector } from "react-redux";

const ViewTask = () => {
  const task = useSelector((state) => state.task);

  const [statusFilter, setStatusFilter] = useState("");
  const [assigneeFilter, setAssigneeFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const filteredTasks = useMemo(() => {
    let tasks = task?.tasks || [];
    if (statusFilter) {
      tasks = tasks.filter((t) => t.status === statusFilter);
    }
    if (assigneeFilter) {
      tasks = tasks.filter((t) =>
        t.assignedTo.name.toLowerCase().includes(assigneeFilter.toLowerCase())
      );
    }
    return tasks;
  }, [task, statusFilter, assigneeFilter]);

  const totalPages = Math.ceil(filteredTasks.length / itemsPerPage);
  const paginatedTasks = filteredTasks.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="p-6 min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <h2 className="text-2xl font-bold mb-4">All Tasks</h2>
      <div className="flex flex-wrap gap-4 mb-4">
        <select
          value={statusFilter}
          onChange={(e) => {
            setStatusFilter(e.target.value);
            setCurrentPage(1);
          }}
          className="p-2 border rounded"
        >
          <option value="">All Status</option>
          <option value="pending">Pending</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>

        <input
          type="text"
          placeholder="Filter by assignee"
          value={assigneeFilter}
          onChange={(e) => {
            setAssigneeFilter(e.target.value);
            setCurrentPage(1);
          }}
          className="p-2 border rounded"
        />
      </div>
      {paginatedTasks.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {paginatedTasks.map((t) => (
            <ViewCard
              key={t._id}
              status={t.status}
              assignedTo={t.assignedTo.name}
              title={t.title}
              description={t.description}
              dueDate={t.dueDate}
            />
          ))}
        </div>
      ) : (
        <p>No Task Found</p>
      )}
      {totalPages > 1 && (
        <div className="mt-4 flex gap-2 justify-center">
          <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
            className="px-3 py-1 border rounded disabled:opacity-50"
          >
            Prev
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-1 border rounded ${
                currentPage === i + 1 ? "bg-blue-500 text-white" : ""
              }`}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-3 py-1 border rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default ViewTask;
