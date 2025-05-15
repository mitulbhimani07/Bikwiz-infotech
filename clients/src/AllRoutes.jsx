import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Joinas from './Pages/Auth/Joinas'
import SignUp from './Pages/Auth/SingUp'
import SignIn from './Pages/Auth/SignIn'
function AllRoutes() {
  return (
    <div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          {/* signIng */}
          <Route path='/joinas' element={<Joinas/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/login' element={<SignIn/>}/>
        </Routes>
    </div>
  )
}

export default AllRoutes