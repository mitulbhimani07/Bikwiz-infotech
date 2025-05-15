import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Joinas from './Pages/SignIn/Joinas'
import SignUp from './Pages/SignIn/SingUp'
function AllRoutes() {
  return (
    <div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          {/* signIng */}
          <Route path='/joinas' element={<Joinas/>}/>
          <Route path='/signup' element={<SignUp/>}/>
        </Routes>
    </div>
  )
}

export default AllRoutes