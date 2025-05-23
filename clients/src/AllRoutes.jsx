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
import GetInTouch from './Pages/GetInTouch'
import AboutUs from './Pages/AboutUs'
import Blog from './Pages/Blog'
import SingleBlog from './Pages/singleBlog'
import FAQs from './Pages/FAQ\'s'
import FindWork from './Pages/FindWork'
import FindTalent from './Pages/FindTalent'
function AllRoutes() {
  return (
    <div>
        <Routes>
          {/* pages */}
          <Route path='/' element={<Home/>}/>
          <Route path='/getInTouch' element={<GetInTouch/>}/>
          <Route path='/about' element={<AboutUs/>}/>
          <Route path='/blog' element={<Blog/>}/>
          <Route path='singleBlog/:id' element={<SingleBlog/>}/>
          <Route path='faqs' element={<FAQs/>}/>
          <Route path='/FindWork' element={<FindWork/>}/>
          <Route path='/findTalent' element={<FindTalent/>}/>
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