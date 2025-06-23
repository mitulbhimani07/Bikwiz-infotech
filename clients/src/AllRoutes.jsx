import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Joinas from './Pages/Auth/Joinas'
import SignUp from './Pages/Auth/SingUp'
import SignIn from './Pages/Auth/SignIn'
import VerifyEmail from './Pages/Auth/ForgotPassword/VerifyEmail'
import VerifyOTP from './Pages/Auth/ForgotPassword/VerifyOTP'
import ResetPassword from './Pages/Auth/ForgotPassword/ResetPassword'
import ClientDashboard from './Pages/client/pages/ClientDashboard'
import FreelancerDashboard from './Pages/freelancer/Pages/FreelancerDashboard'
import GetInTouch from './Pages/GetInTouch'
import AboutUs from './Pages/AboutUs'
import Blog from './Pages/Blog'
import SingleBlog from './Pages/singleBlog'
import FAQs from './Pages/FAQ\'s'
import FindWork from './Pages/FindWork'
import FindTalent from './Pages/FindTalent'
import CompanyDetails from './Pages/CompanyDetails'
import FreelancerProfile from './Pages/FreelancerProfile'
import BlogForm from './Pages/Admin/BlogForm'
import JobpostForm from './Pages/client/pages/JobpostForm'
import AddBlogCategoryForm from './Pages/Admin/AddBlogCategoryForm'
import toast, { ToastBar, Toaster } from 'react-hot-toast'
import cross from './assets/images/icon-check.svg'
import check from './assets/images/icon-cross.svg'
import { RxCross2 } from 'react-icons/rx'
import ClientCompanyProfile from './Pages/client/pages/ClientCompanyProfile'
import ClientAllApplications from './Pages/client/pages/ClientAllApplications'
import ClientJobListing from './Pages/client/pages/ClientJobListing'
import ClientHelpCenter from './Pages/client/pages/ClientHelpCenter'
import ClientApplicationDetails from './Pages/client/pages/ClientApplicantDetails'
import ClientSettings from './Pages/client/pages/ClientSettings'
import ClientMessages from './Pages/client/pages/ClientMessages'
import ClientSchedule from './Pages/client/pages/ClientSchedule'
import FreelancerPublicProfile from './Pages/freelancer/Pages/FreelancerPublicProfile'
import FreelancerAllAplication from './Pages/freelancer/Pages/FreelancerAllApplication'
import FreelancerMessages from './Pages/freelancer/Pages/FreelancerMessages'
import FreelancerHelpCenter from './Pages/freelancer/Pages/FreelancerHelpCenter'

function AllRoutes() {
  return (
    <div>
      <Routes>
        {/* pages */}
        <Route path='/' element={<Home />} />
        <Route path='/getInTouch' element={<GetInTouch />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/singleBlog/:id' element={<SingleBlog />} />
        <Route path='/faqs' element={<FAQs />} />
        <Route path='/FindWork' element={<FindWork />} />
        <Route path='/findTalent' element={<FindTalent />} />
        <Route path="/companydetails/:id" element={<CompanyDetails />} />
        <Route path="/freelacerprofile/:id" element={<FreelancerProfile />} />
        <Route path="/blogform" element={<BlogForm />} />
        <Route path="/jobpostform" element={<JobpostForm />} />
        <Route path='/addBlogCategoryForm' element={<AddBlogCategoryForm />} />
        {/* signIng */}
        <Route path='/joinas' element={<Joinas />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<SignIn />} />
        {/* ForgotPassword  */}
        <Route path='/verifyemail' element={<VerifyEmail />} />
        <Route path='/verifyotp' element={<VerifyOTP />} />
        <Route path='/resetpassword' element={<ResetPassword />} />
        {/* Client Dashbord */}
        <Route path='/ClientDashboard/:id' element={<ClientDashboard />} />
        <Route path='/clientCompanyProfile' element={<ClientCompanyProfile />} />
        <Route path='/clientAllApplications' element={<ClientAllApplications />} />
        <Route path='/clientSchedule' element={<ClientSchedule />} />
        <Route path='/clientJobListing' element={<ClientJobListing />} />
        <Route path="/clientHelpCenter" element={<ClientHelpCenter />} />
        <Route path='/clientApplicationDetails' element={<ClientApplicationDetails />} />
        <Route path='/clientSettings' element={<ClientSettings />} />
        <Route path='/ClientMessages' element={<ClientMessages />} />
        {/* <Route path='/' element={<ClientDashboard />} /> */}
        {/* Freelancer Dashboard */}
        <Route path='/FreelancerDashboard' element={<FreelancerDashboard />} />
        <Route path='/freelancerPublicProfile' element={<FreelancerPublicProfile />} />
        <Route path='/FreelancerAllAplication' element={<FreelancerAllAplication />} />
        <Route path='/FreelancerMessages' element={<FreelancerMessages />} />
        <Route path='/FreelancerHelpCenter' element={<FreelancerHelpCenter />} />
        


      </Routes>

      <Toaster
        position="top-right"
        toastOptions={{
          duration: 1000,
          error: {
            className: "alert error",
            icon: "⚠",
          },
          success: {
            className: "alert success",
            icon: "✅",
          },
        }}
      >
        {(t) => (
          <ToastBar
            toast={t}
            style={{
              ...t.style,
              animation: t.visible ? "custom-enter 1s ease" : "custom-exit 1s ease",
            }}
          >
            {(props) => {
              return (
                <div className="w-full flex flex-col md:flex-row items-center justify-between px-4 py-2 gap-2">
                  <div className="flex items-center flex-1 gap-3">
                    {t?.type === "success" ? (
                      <img
                        width={50}
                        height={50}
                        className=""
                        src={cross}
                        alt="Success Icon"
                      />
                    ) : (
                      <img
                        width={35}
                        height={35}
                        className=""
                        src={check}
                        alt="Error Icon"
                      />
                    )}

                    <div>
                      <div>
                        <strong className="text-lg">{t?.type === "success" ? "Success" : "Error"}</strong>
                      </div>
                      <span className="text-gray-500">{props.message}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-end">
                    <span
                      className="text-gray-500 ml-6 cursor-pointer"
                      onClick={() => toast.remove(t.id)}
                    >
                      <RxCross2 className="text-3xl" />
                    </span>
                  </div>
                </div>

              );
            }}
          </ToastBar>
        )}
      </Toaster>

    </div>
  )
}

export default AllRoutes