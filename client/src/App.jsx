import { useAuthContext } from './context/authContext'
import { Routes, Route } from 'react-router-dom';
import Login from './pages/login'
import Admin from './pages/admin/admin';
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from './redux/userSlice';
import { setEmployee } from './redux/employeeSlice';
import { setTask } from './redux/taskSlice';
import { useEffect } from 'react';
import Employee from './pages/employee/employee';
import Signup from './pages/signup';
import AdminNavbar from './components/adminNavbar';
import EmployeeNavbar from './components/EmployeeNavbar';
import AddEmployee from './pages/admin/addEmployee';
import AddTask from './pages/admin/addTask';
import ViewTask from './pages/admin/viewTask';
import ViewOwnTask from './pages/employee/viewOwnTask';
import UpdateTask from './pages/employee/updateTask';

function App() {
  const {user, loading} = useAuthContext();
  // const role = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() =>{
    const handleFetch = async() =>{
      try{
        const response = await fetch("http://localhost:5000/api/me",{
          credentials : "include"
        });
        if(!response.ok)
        {
          throw new Error("Error in fetch");
        }
        const data = await response.json();
        dispatch(setUser(data.user));

        const employeeResponse = await fetch("http://localhost:5000/api/users?role=employee");
        if(!employeeResponse.ok)
        {
          throw new Error("Error in fetch");
        }
        const employeeData = await employeeResponse.json();
        // console.log(employeeData);
        dispatch(setEmployee(employeeData))

        const taskResponse = await fetch("http://localhost:5000/api/task");
        if(!taskResponse.ok)
        {
          throw new Error("Error in fetch");
        }
        const taskData = await taskResponse.json();
        dispatch(setTask(taskData))
        // console.log(taskData);
      }catch(err)
      {
        console.log(err);
      }
    }
    handleFetch();
  }, [dispatch])
  if(loading)
  {
    return <div>Loading...</div>
  }
  // console.log(user.role);
  return (
    <div>
      {/* <div>
        {
          role==="admin" ? <AdminNavbar/> : <EmployeeNavbar/>
        }
      </div> */}
      <Routes>
        {/* <Route path = "/" element = {user ? role === "admin" ? <Admin/> : <Employee/> : <Login/>}/> */}
        <Route path = "/admin/add/employee" element = {<div>
          <AdminNavbar/>
          <AddEmployee/>
        </div>}/>
        <Route path = "/admin/add/task" element = {<div>
          <AdminNavbar/>
          <AddTask/>
        </div>}/>
        <Route path = "/admin/view" element = {<div>
          <AdminNavbar/>
          <ViewTask/>
        </div>}/>
        <Route path = "/employee/view" element = {<div>
          <EmployeeNavbar/>
          <ViewOwnTask/>
        </div>}/>
        <Route path = "/employee/update" element = {<div>
          <EmployeeNavbar/>
          <UpdateTask/>
        </div>}/>
        
        <Route path = "/signup" element = {<Signup/>}/>
        <Route path = "/login" element = {<Login/>}/>
      </Routes>
    </div>
  )
}

export default App
