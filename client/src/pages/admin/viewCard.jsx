const ViewCard = ({ status, assignedTo, title, description, dueDate }) => {
  const getStatusColor = (status) => {
    if (status === "pending") {
      return "bg-red-100 text-red-700 border-red-400";
    } else if (status === "in-progress") {
      return "bg-yellow-100 text-yellow-700 border-yellow-400";
    } else {
      return "bg-green-100 text-green-700 border-green-400";
    }
  };
  return (
    <div className="w-full max-w-md bg-white shadow-md hover:shadow-lg transition-shadow duration-300 rounded-2xl border border-gray-200 p-5 flex flex-col gap-3">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold text-gray-800 truncate">
          {title}
        </h2>
        <span
          className={`text-sm font-medium px-3 py-1 rounded-full border ${getStatusColor(
            status
          )}`}
        >
          {status}
        </span>
      </div>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      <p className="text-gray-600 text-sm leading-relaxed">{assignedTo}</p>
      <div className="flex justify-end text-sm text-gray-500">
        <span>Due: {new Date(dueDate).toLocaleDateString()}</span>
      </div>
    </div>
  );
};
export default ViewCard;
