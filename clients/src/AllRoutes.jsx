import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Joinas from './Pages/Auth/Joinas'
import SignUp from './Pages/Auth/SingUp'
import SignIn from './Pages/Auth/SignIn'
import VerifyEmail from './Pages/Auth/ForgotPassword/VerifyEmail'
import VerifyOTP from './Pages/Auth/ForgotPassword/VerifyOTP'
import ResetPassword from './Pages/Auth/ForgotPassword/ResetPassword'
import ClientDashboard from './Pages/client/ClientDashboard'
import FreelancerDashboard from './Pages/freelancer/FreelancerDashboard'
function AllRoutes() {
  return (
    <div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          {/* signIng */}
          <Route path='/joinas' element={<Joinas/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/login' element={<SignIn/>}/>
          {/* ForgotPassword  */}
          <Route path='/verifyemail' element={<VerifyEmail/>}/>
          <Route path='/verifyotp' element={<VerifyOTP/>}/>
          <Route path='/resetpassword' element={<ResetPassword/>}/>
          <Route path='/ClientDashboard' element={<ClientDashboard/>}/>
          <Route path='/FreelancerDashboard' element={<FreelancerDashboard/>}/>
        </Routes>
    </div>
  )
}

export default AllRoutes