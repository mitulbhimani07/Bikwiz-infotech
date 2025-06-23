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
import { GoogleSignin, Signin } from '../../API/Api';
import toast from 'react-hot-toast';
import { FaExclamationTriangle } from 'react-icons/fa';

export default function SignIn() {
  const [theme, setTheme] = useState('light');
  const [errors, setErrors] = useState({});


  // const [workEmail, setWorkEmail] = useState('');
  // const [password, setPassword] = useState('');
  const navigate = useNavigate()

  const [signin, setSignin] = useState({
    workEmail: '',
    password: ''
  })
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const validateForm = () => {
    const newErrors = {};

    // Email Validation
    if (!signin.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(signin.email)) {
      newErrors.email = "Email format is invalid.";
    }

    // Password Validation
    if (!signin.password) {
      newErrors.password = "Password is required.";
    }
    // else if (signin.password.length < 8) {
    //   newErrors.password = "Password must be at least 8 characters.";
    // }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // const handleGoogleLogin = async (data) => {
  //   try {
  //     const payload = {
  //       email: data.email,
  //       name: data.name,
  //       country: "", // optional, based on your data
  //     };

  //     const response = await GoogleSignin(payload);

  //     if (response?.data) {
  //       toast.success(`Login successful as ${response.role}`);
  //       // Do something like store in context/localStorage and redirect
  //       console.log("User Info:", response.data);
  //     } else {
  //       toast.error("Unexpected response from server.");
  //     }

  //   } catch (error) {
  //     if (error.response?.status === 404) {
  //       toast.error("User not found. Please sign up first.");
  //     } else {
  //       toast.error("Login failed. Please try again.");
  //     }
  //   }
  // };


  const handleChange = (e) => {
    setSignin({ ...signin, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const res = await Signin(signin);
      console.log("Response:", res.data._id);
      localStorage.setItem('token', res.token);
      toast.success("SignIn Successfully!!!")

      const role = res.role;

      if (role == 'client') {
        navigate("/ClientDashboard"); // Redirect to Client Dashboard with user ID
      } else {
        navigate('/FreelancerDashboard')
      }


    } catch (error) {
      console.log("Error submitting form:", error);
      toast.error("Invalid credentials!")
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
                className={`appearance-none block w-full px-3 py-3 border ${errors.email ? "border-red-700 focus:ring-red-600 focus:border-red-700" : "border-gray-300"
                  } ${inputBorderColor} rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 ${inputBgColor} transition-colors duration-200`}
                placeholder="john.doe@company.com"

              />
              {errors.email && (
                <div className="flex items-center mt-1 text-sm text-red-700">
                  <FaExclamationTriangle className="w-4 h-4 mr-1" />
                  <span>{errors.email}</span>
                </div>
              )}
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
                  className={`appearance-none block w-full px-3 py-3 border ${errors.email ? "border-red-700 focus:ring-red-600 focus:border-red-700" : "border-gray-300"
                    } ${inputBorderColor} rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 ${inputBgColor} transition-colors duration-200`}
                  placeholder="password"

                />
                {errors.password && (
                  <div className="flex items-center mt-1 text-sm text-red-700">
                    <FaExclamationTriangle className="w-4 h-4 mr-1" />
                    <span>{errors.password}</span>
                  </div>
                )}

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
              {/* <a href="#" className="text-orange-500 flex justify-end my-2 text-xs hover:underline">
                <Link to="/verifyemail">
                  Forgot password?
                </Link>
              </a> */}
            </div>
            <div className="flex flex-col md:flex-row justify-between md:items-center gap-2 md:gap-0">
              <div className="flex items-start">
                <div className="flex items-center h-5">
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

              <Link to="/verifyemail" className="text-orange-500 text-sm hover:underline mt-2 md:mt-0">
                Forgot password?
              </Link>
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


          <LoginSocialGoogle
            client_id='1045466982465-p8irl41k8jnmuiukbkjc1jt04ed82aja.apps.googleusercontent.com'
            // onLoginStart={onLoginStart}
            // redirect_uri={REDIRECT_URI}
            scope=" profile email"
            discoveryDocs="claims_supported"
            access_type="online"
            onResolve={async ({ provider, data }) => {
              setProvider(provider);
              setProfile(data);
              try {
                const payload = {
                  email: data.email,
                  name: data.name,
                  country: "IN", // or dynamically detect later
                };

                const res = await GoogleSignin(payload);
                console.log("Google Signin Response:", res.role);
                // Call your API function
                toast.success(res.message || "Google login success");

                if (res.role === 'client') {
                  toast.success("Login successful as Client");
                  navigate("/ClientDashboard"); // Or wherever you want to send them

                } else if (res.role === 'freelancer') {
                  toast.success("Login successful as Freelancer");
                  navigate("/FreelancerDashboard"); // Or wherever you want to send them

                }

              } catch (err) {
                console.error("Google signup error:", err);
                toast.error("Failed to save Google login");
              }
            }}
            onReject={err => {
              console.log(err);
            }}
          >
            <div className="flex items-center justify-center w-full gap-2 border border-gray-300 rounded-3xl p-3 text-xl cursor-pointer hover:bg-gray-50 mb-3">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              <span>Continue with Google</span>
            </div>
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
            <div className="flex items-center justify-center w-full gap-2 border border-gray-300 rounded-3xl p-3 text-xl cursor-pointer">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Facebook_icon.svg"
                alt="Facebook logo"
                className="w-5 h-5"
              />
              <span>Continue with Facebook</span>
            </div>
          </LoginSocialFacebook>

          <div className="text-center mt-6">
            <p className={`text-sm ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
              Don't have an account?{' '}
              <a href="#" className="text-orange-500 font-medium hover:underline">
                <Link to="/joinas">
                  Create an account
                </Link>
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}