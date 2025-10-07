import { useAuthContext } from './context/authContext'
import { Routes, Route } from 'react-router-dom';
import Login from './pages/login'
import Admin from './pages/admin/admin';

function App() {
  const {user, loading} = useAuthContext();
  if(loading)
  {
    return <div>Loading...</div>
  }
  return (
    <div>
      <Routes>
        <Route path = "/" element = {user ? <Admin/> : <Login/>}/>
      </Routes>
    </div>
  )
}

export default App
