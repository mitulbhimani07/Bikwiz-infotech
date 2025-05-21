import React, { useCallback, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  LoginSocialGoogle,
  LoginSocialFacebook
} from 'reactjs-social-login';

import {
  FacebookLoginButton,
  GoogleLoginButton
} from 'react-social-login-buttons';
import logo from '../../assets/images/logo.png'; // Adjust the path to your logo image
import logo2 from '../../assets/images/logo2.png'; // Adjust the path to your logo image
import { Signin } from '../../API/Api';
import toast from 'react-hot-toast';

export default function SignIn() {
  const [theme, setTheme] = useState('light');
  // const [workEmail, setWorkEmail] = useState('');
  // const [password, setPassword] = useState('');
  const navigate=useNavigate()

  const [signin,setSignin]=useState({
    workEmail:'',
    password:''
  })
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const handleChange = (e) => {
        setSignin({ ...signin, [e.target.name]: e.target.value });
    }

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
            const res = await Signin(signin);
            console.log("Response:", res);
            toast.success("SignIn Successfully!!!")

            const role=res.role;

            if(role=='client'){
              navigate('/ClientDashboard')
            }else{
              navigate('/FreelancerDashboard')
            }

            
        } catch (error) {
            console.log("Error submitting form:", error);
        }
    // Login logic would go here
  };

  // Dynamic style based on theme
  const bgColor = theme === 'light' ? 'bg-white' : 'bg-gray-900';
  const textColor = theme === 'light' ? 'text-gray-900' : 'text-white';
  const inputBgColor = theme === 'light' ? 'bg-white' : 'bg-gray-800';
  const inputBorderColor = theme === 'light' ? 'border-gray-300' : 'border-gray-700';
  const pageBgColor = theme === 'light' ? 'bg-white' : 'bg-gray-950';
  const borderColor = theme === 'light' ? 'border-gray-200' : 'border-gray-700';
  const headerBg = theme === 'light' ? 'bg-white' : 'bg-gray-950';
  const [provider, setProvider] = useState('');
  const [profile, setProfile] = useState();
  // const onLoginStart = useCallback(() => {
  //   alert('login start');
  // }, []);

  return (
    <>
      <header className={`${headerBg} ${textColor}  ${borderColor} transition-colors duration-300`}>
        <div className="container mx-auto px-24 py-5 flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/">
              {theme === 'light' ? (
                <img src={logo} alt="Bikwiz Infotech" width={130} height={130} />
              ) : (
                <img src={logo2} alt="Bikwiz Infotech" width={130} height={130} />
              )}
            </Link>
          </div>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors duration-200"
            aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
          >
            {theme === 'light' ? (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd"></path>
              </svg>
            )}
          </button>
        </div>
      </header>
      <div className={`min-h-screen flex items-center justify-center ${pageBgColor} px-4 sm:px-6 lg:px-8 transition-colors duration-300`}>
        <div className={`max-w-md w-full p-8 rounded-lg  ${textColor} transition-colors duration-300`}>
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold">Log In to your account</h2>
            <p className={`mt-2 ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
              Welcome back! Please enter your details.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <input
                id="workEmail"
                type="text"
                name="email"
                value={signin.email}
                onChange={handleChange}
                className={`appearance-none block w-full px-3 py-3 border ${inputBorderColor} rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 ${inputBgColor} transition-colors duration-200`}
                placeholder="john.doe@company.com"
                required
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-1">
                <label htmlFor="password" className="block text-sm font-medium">
                  Password
                </label>
              </div>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={signin.password}
                  name="password"
                  onChange={handleChange}
                  className={`appearance-none block w-full px-3 py-3 border ${inputBorderColor} rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 ${inputBgColor} transition-colors duration-200`}
                  placeholder="Min 8 character"
                  required
                />

                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                    </svg>
                  ) : (
                    <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  )}
                </button>
              </div>
              <a href="#" className="text-orange-500 flex justify-end my-2 text-xs hover:underline">
                <Link to="/verifyemail">
                  Forgot password?
                </Link>
              </a>
            </div>

            <div className="flex items-start">
              <div className="flex items-center h-5 mt-1">
                <input
                  id="remember-me"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-4 w-4 text-orange-500 focus:ring-orange-500 border-gray-300 rounded"
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="remember-me" className={theme === 'light' ? 'text-gray-600' : 'text-gray-400'}>
                  Remember me for 30 days
                </label>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors duration-200"
              >
                Log In
              </button>
            </div>
          </form>

          <div className="relative flex items-center justify-center my-6">
            <div className={`border-t ${inputBorderColor} absolute w-full`}></div>
            <div className={`${bgColor} px-3 relative text-sm ${theme === 'light' ? 'text-gray-500' : 'text-gray-400'}`}>OR</div>
          </div>

          {/* <div className="space-y-3">
            <button
              type="button"
              className={`w-full flex justify-center items-center py-3 px-4 border ${inputBorderColor} rounded-md shadow-sm ${inputBgColor} text-sm font-medium ${textColor} hover:bg-gray-50 dark:hover:bg-orange-500 hover:text-amber-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors duration-200`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 48 48">
                <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
                <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
                <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
                <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
              </svg>
              Log In with Google
            </button>

            <button
              type="button"
              className={`w-full flex justify-center items-center py-3 px-4 border ${inputBorderColor} rounded-md shadow-sm ${inputBgColor} text-sm font-medium ${textColor} hover:bg-gray-50 dark:hover:bg-orange-500 hover:text-amber-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors duration-200`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 48 48">
                <linearGradient id="Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1" x1="9.993" x2="40.615" y1="9.993" y2="40.615" gradientUnits="userSpaceOnUse">
                  <stop offset="0" stopColor="#2aa4f4"></stop>
                  <stop offset="1" stopColor="#007ad9"></stop>
                </linearGradient>
                <path fill="url(#Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1)" d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"></path>
                <path fill="#fff" d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"></path>
              </svg>
              Log In with Facebook
            </button>
          </div> */}

          <LoginSocialGoogle
            client_id='1045466982465-p8irl41k8jnmuiukbkjc1jt04ed82aja.apps.googleusercontent.com'
            // onLoginStart={onLoginStart}
            // redirect_uri={REDIRECT_URI}
            scope="openid profile email"
            discoveryDocs="claims_supported"
            access_type="offline"
            onResolve={({ provider, data }) => {
              setProvider(provider);
              setProfile(data);
            }}
            onReject={err => {
              console.log(err);
            }}
          >
            <GoogleLoginButton />
          </LoginSocialGoogle>

          <LoginSocialFacebook
            appId='1106598061210789'
            // fieldsProfile={
            //   'id,first_name,last_name,middle_name,name,name_format,picture,short_name,email,gender'
            // }
            // onLoginStart={onLoginStart}
            // onLogoutSuccess={onLogoutSuccess}
            // redirect_uri={REDIRECT_URI}
            onResolve={({ provider, data }) => {
              setProvider(provider);
              setProfile(data);
            }}
            onReject={err => {
              console.log(err);
            }}
          >
            <FacebookLoginButton />
          </LoginSocialFacebook>

          <div className="text-center mt-6">
            <p className={`text-sm ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
              Don't have an account?{' '}
              <a href="#" className="text-orange-500 font-medium hover:underline">
                <Link to="/joinas">
                  Sign Up
                </Link>
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}