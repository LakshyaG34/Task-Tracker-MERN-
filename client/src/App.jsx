import { useAuthContext } from "./context/authContext";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "./redux/userSlice";
import { setEmployee } from "./redux/employeeSlice";
import { setTask } from "./redux/taskSlice";
import { useEffect } from "react";
import Signup from "./pages/signup";
import AdminNavbar from "./components/adminNavbar";
import EmployeeNavbar from "./components/EmployeeNavbar";
import AddEmployee from "./pages/admin/addEmployee";
import AddTask from "./pages/admin/addTask";
import ViewTask from "./pages/admin/viewTask";
import ViewOwnTask from "./pages/employee/viewOwnTask";
import UpdateTask from "./pages/employee/updateTask";
import ProtectedRoute from "./protectedRoute";

function App() {
  const { user, loading } = useAuthContext();
  const userRole = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    const handleFetch = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/auth/me", {
          credentials: "include",
        });
        if (!response.ok) {
          throw new Error("Error in fetch");
        }
        const data = await response.json();
        dispatch(setUser(data.user));

        const employeeResponse = await fetch(
          "http://localhost:5000/api/auth/users/?role=employee"
        );
        if (!employeeResponse.ok) {
          throw new Error("Error in fetch");
        }
        const employeeData = await employeeResponse.json();
        // console.log(employeeData);
        dispatch(setEmployee(employeeData));

        const taskResponse = await fetch("http://localhost:5000/api/task");
        if (!taskResponse.ok) {
          throw new Error("Error in fetch");
        }
        const taskData = await taskResponse.json();
        dispatch(setTask(taskData));
        // console.log(taskData);
      } catch (err) {
        console.log(err);
      }
    };
    handleFetch();
  }, [dispatch]);
  if (loading) {
    return <div>Loading...</div>;
  }
  // console.log(user.role);
  return (
    <div>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/admin/add/employee"
          element={
            <ProtectedRoute user = {user} role = {userRole.role} allowedRoles={["admin"]}>
            <>
              <AdminNavbar />
              <AddEmployee />
            </>
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/add/task"
          element={
            <ProtectedRoute user = {user} role = {userRole.role} allowedRoles={["admin"]}>
            <>
              <AdminNavbar />
              <AddTask />
            </>
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/view"
          element={
            <ProtectedRoute user = {user} role = {userRole.role} allowedRoles={["admin"]}>
            <>
              <AdminNavbar />
              <ViewTask />
            </>
            </ProtectedRoute>
          }
        />
        <Route
          path="/employee/view"
          element={
            <ProtectedRoute user = {user} role = {userRole.role} allowedRoles={["employee"]}>
            <>
              <EmployeeNavbar/>
              <ViewOwnTask/>
            </>
            </ProtectedRoute>
          }
        />
        <Route
          path="/employee/update"
          element={
            <ProtectedRoute user = {user} role = {userRole.role} allowedRoles={["employee"]}>
            <>
              <EmployeeNavbar />
              <UpdateTask />
            </>
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
