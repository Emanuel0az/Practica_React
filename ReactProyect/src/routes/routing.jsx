
import { BrowserRouter as Router,Routes,Route } from "react-router-dom"


import Login from '../pages/login'
import Users from '../pages/users'
import Register from '../pages/register'
import { Home } from "../pages/home"

function routing() {
  return (
    <div>

        <Router>
            <Routes>
                     <Route path='/register' element={<Register/>}   />
                     <Route path='/login' element={<Login/>}   />
                     <Route path='/users' element={<Users/>}   />
                     <Route path='' element={<Home/>}   />
                     <Route path="dashboard" element={<Users/>} />

                
            </Routes>
        </Router>
      
    </div>
  )
}

export default routing