import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-purple-200">
      <div className="bg-white p-10 rounded-3xl shadow-2xl flex flex-col items-center gap-8 max-w-md text-center">
        <h1 className="text-4xl font-bold text-gray-800">Welcome, {user.name || user.role}!</h1>
        <p className="text-gray-600 text-lg">
          You are logged in as <span className="font-semibold">{user.role}</span>.
        </p>
        <button
          onClick={() => navigate(user.role === "admin" ? "/admin/view" : "/employee/view")}
          className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold text-lg hover:bg-blue-700 transition shadow-md hover:shadow-lg"
        >
          Go to Dashboard
        </button>
      </div>
    </div>
  );
};

export default Welcome;
