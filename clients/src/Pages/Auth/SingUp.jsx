import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import {
    LoginSocialGoogle,
    LoginSocialFacebook
} from 'reactjs-social-login';

import {
    FacebookLoginButton,
    GoogleLoginButton
} from 'react-social-login-buttons';
import { ClientSignup, FreelancerSignup, Googlesignup, GoogleSignup } from '../../API/Api';
import logo from '../../assets/images/logo.png'; // Adjust the path to your logo image
import toast from 'react-hot-toast';
import { FaExclamationTriangle } from 'react-icons/fa';
import logo2 from '../../assets/images/logo2.png'; // Adjust the path to your logo image


export default function SignUp() {
    const [provider, setProvider] = useState('');
    const [profile, setProfile] = useState();
    const navigate = useNavigate();
    const { search } = useLocation();
    const params = new URLSearchParams(search);
    const selected = params.get('selected') || '';

    useEffect(() => {
        if (!selected || (selected !== 'client' && selected !== 'freelencer')) {
            navigate('/joinas'); // Redirect if invalid or missing
        }
    }, [selected, navigate]);
    // const [data,setdata]=useState({})
    const [errors, setErrors] = useState({
        client: {
            fname: '',
            lname: '',
            email: '',
            password: '',
            country: ''
        },
        freelancer: {
            fname: '',
            lname: '',
            email: '',
            password: '',
            country: ''
        }
    });


    const [theme, setTheme] = useState('light');
    const [clientAgreedToTerms, setClientAgreedToTerms] = useState(false);
    const [clientReceiveEmails, setClientReceiveEmails] = useState(false);

    const [client, setclient] = useState({
        fname: '',
        lname: '',
        email: '',
        password: '',
        country: ''
    })

    const [freelancer, setFreelancer] = useState({
        fname: '',
        lname: '',
        email: '',
        password: '',
        country: ''
    })

    const [freelancerAgreedToTerms, setFreelancerAgreedToTerms] = useState(false);
    const [freelancerReceiveEmails, setFreelancerReceiveEmails] = useState(false);

    // Password visibility state
    const [showClientPassword, setShowClientPassword] = useState(false);
    const [showFreelancerPassword, setShowFreelancerPassword] = useState(false);




    const validateForm = () => {
        let valid = true;
        const newErrors = {
            fname: '',
            lname: '',
            email: '',
            password: '',
            country: ''
        };

        // First name validation
        if (!client.fname.trim()) {
            newErrors.fname = 'First name is required ';
            valid = false;
        }

        // Last name validation
        if (!client.lname.trim()) {
            newErrors.lname = 'Last name is required';
            valid = false;
        }

        // Email validation
        if (!client.email.trim()) {
            newErrors.email = 'Email is required';
            valid = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(client.email)) {
            newErrors.email = 'Please enter a valid email address';
            valid = false;
        }

        // Password validation
        if (!client.password) {
            newErrors.password = 'Password is required';
            valid = false;
        } else if (client.password.length < 8) {
            newErrors.password = 'Password must be at least 8 characters';
            valid = false;
        }

        // Country validation
        if (!client.country) {
            newErrors.country = 'Please select a country';
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };

    const validateFreelancerForm = () => {
        let valid = true;
        const newErrors = {
            fname: '',
            lname: '',
            email: '',
            password: '',
            country: ''
        };

        if (!freelancer.fname.trim()) {
            newErrors.fname = 'First name is required';
            valid = false;
        }

        if (!freelancer.lname.trim()) {
            newErrors.lname = 'Last name is required';
            valid = false;
        }

        if (!freelancer.email.trim()) {
            newErrors.email = 'Email is required';
            valid = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(freelancer.email)) {
            newErrors.email = 'Please enter a valid email address';
            valid = false;
        }

        if (!freelancer.password) {
            newErrors.password = 'Password is required';
            valid = false;
        } else if (freelancer.password.length < 8) {
            newErrors.password = 'Password must be at least 8 characters';
            valid = false;
        }

        if (!freelancer.country) {
            newErrors.country = 'Please select a country';
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };


    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    const clientOnChange = (e) => {
        setclient({ ...client, [e.target.name]: e.target.value });
    }

    const FreelancerOnChange = (e) => {
        setFreelancer({ ...freelancer, [e.target.name]: e.target.value });
    }

    const handleClientSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) {
            return;
        }

        if (!clientAgreedToTerms) {
            alert('You must agree to the terms and conditions');
            return;
        }
        try {
            const res = await ClientSignup(client);
            console.log("Response:", res);
            toast.success("Sigup Successfully!!!")
            navigate('/login')
        } catch (error) {
            console.log("Error submitting form:", error);
        }
        setclient({})
        setFreelancerAgreedToTerms(false);
        setFreelancerReceiveEmails(false);

    };





    const handleFreelancerSubmit = async (e) => {
        e.preventDefault();
        if (!validateFreelancerForm()) {
            return;
        }

        if (!freelancerAgreedToTerms) {
            toast.error('You must agree to the terms and conditions');
            return;
        }
        try {
            const res = await FreelancerSignup(freelancer);
            console.log("Response:", res);
            toast.success("Sigup Successfully!!!")
        } catch (error) {
            console.log("Error submitting form:", error);
        }
        setFreelancer({})
        setFreelancerAgreedToTerms(false);
        setFreelancerReceiveEmails(false);
        // Freelancer form submission logic would go here
    };


    // Dynamic style based on theme
    const bgColor = theme === 'light' ? 'bg-white' : 'bg-gray-950';
    const textColor = theme === 'light' ? 'text-gray-900' : 'text-white';
    const inputBgColor = theme === 'light' ? 'bg-white' : 'bg-gray-800';
    const inputBorderColor = theme === 'light' ? 'border-black' : 'border-gray-700';
    const pageBgColor = theme === 'light' ? 'bg-white' : 'bg-gray-950';
    const borderColor = theme === 'light' ? 'border-gray-200' : 'border-gray-700';
    const headerBg = theme === 'light' ? 'bg-white' : 'bg-gray-950';

    return (
        <>
            <header className={`${headerBg} ${textColor} ${borderColor} transition-colors duration-300`}>
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
                <div className={`max-w-3xl w-full p-8 rounded-lg ${bgColor}  ${textColor} transition-colors duration-300`}>
                    <div className="text-center mb-6">
                        <h2 className="text-3xl font-bold">Create Your Account</h2>
                        <p className={`mt-2 ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
                            {selected === 'client'
                                ? 'Join Bikwiz as a Client and find the talent you need'
                                : 'Join Bikwiz as a Freelancer and showcase your skills'}
                        </p>
                    </div>

                    {/* Client Form */}
                    {selected === 'client' && (
                        <form onSubmit={handleClientSubmit} className="space-y-5">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="clientFirstName" className="block text-sm font-medium mb-1">
                                        First Name
                                    </label>
                                    <input
                                        id="clientFirstName"
                                        type="text"
                                        name='fname'
                                        value={client.fname ? client.fname : ""}
                                        onChange={clientOnChange}
                                        className={`appearance-none block w-full px-3 py-3 border ${inputBorderColor} ${errors.email ? "border-red-700 focus:ring-red-600 focus:border-red-700" : "border-gray-300"
                                            } rounded-md  placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 ${inputBgColor} transition-colors duration-200`}
                                        placeholder="John"

                                    />
                                    {errors.fname && (
                                        <div className="flex items-center mt-1 text-sm text-red-700">
                                            <FaExclamationTriangle className="w-4 h-4 mr-1" />
                                            <span>{errors.fname}</span>
                                        </div>
                                    )}
                                </div>
                                <div>
                                    <label htmlFor="clientLastName" className="block text-sm font-medium mb-1">
                                        Last Name
                                    </label>
                                    <input
                                        id="clientLastName"
                                        type="text"
                                        name='lname'
                                        value={client.lname ? client.lname : ""}
                                        onChange={clientOnChange}
                                        className={`appearance-none block w-full px-3 py-3 border ${inputBorderColor} ${errors.email ? "border-red-700 focus:ring-red-600 focus:border-red-700" : "border-gray-300"
                                            } rounded-md  placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 ${inputBgColor} transition-colors duration-200`}
                                        placeholder="Doe"

                                    />
                                    {errors.lname && (
                                        <div className="flex items-center mt-1 text-sm text-red-700">
                                            <FaExclamationTriangle className="w-4 h-4 mr-1" />
                                            <span>{errors.lname}</span>
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div>
                                <label htmlFor="clientWorkEmail" className="block text-sm font-medium mb-1">
                                    Work Email
                                </label>

                                <input
                                    id="clientWorkEmail"
                                    type="text"
                                    name="email"
                                    value={client.email || ""}
                                    onChange={clientOnChange}
                                    className={`appearance-none block w-full px-3 py-3 border ${errors.email ? "border-red-700 focus:ring-red-600 focus:border-red-700" : "border-gray-300"
                                        } rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 transition-colors duration-200`}
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
                                    <label htmlFor="clientPassword" className="block text-sm font-medium">
                                        Password
                                    </label>
                                    <a href="#" className="text-orange-500 text-xs hover:underline">
                                        Password requirements
                                    </a>
                                </div>
                                <div className="relative">
                                    <input
                                        id="clientPassword"
                                        type={showClientPassword ? "text" : "password"}
                                        value={client.password ? client.password : ""}
                                        name='password'
                                        onChange={clientOnChange}
                                        className={`appearance-none block w-full px-3 py-3 border ${inputBorderColor} ${errors.email ? "border-red-700 focus:ring-red-600 focus:border-red-700" : "border-gray-300"
                                            } rounded-md  placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 ${inputBgColor} transition-colors duration-200`}
                                        placeholder="Minimum 8 characters"
                                        minLength="8"

                                    />
                                    <button
                                        type="button"
                                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                        onClick={() => setShowClientPassword(!showClientPassword)}
                                        aria-label={showClientPassword ? "Hide password" : "Show password"}
                                    >
                                        {showClientPassword ? (
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
                                {errors.password && (
                                    <div className="flex items-center mt-1 text-sm text-red-700">
                                        <FaExclamationTriangle className="w-4 h-4 mr-1" />
                                        <span>{errors.password}</span>
                                    </div>
                                )}
                            </div>

                            <div>
                                <label htmlFor="clientCountry" className="block text-sm font-medium mb-1">
                                    Country
                                </label>
                                <select
                                    id="clientCountry"
                                    value={client.country ? client.country : ""}
                                    name='country'
                                    onChange={clientOnChange}
                                    className={`appearance-none block w-full px-3 py-3 border ${inputBorderColor} ${errors.email ? "border-red-700 focus:ring-red-600 focus:border-red-700" : "border-gray-300"
                                        } rounded-md  placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 ${inputBgColor} transition-colors duration-200`}

                                >
                                    <option value="">Select a country</option>
                                    <option value="US">United States</option>
                                    <option value="CA">Canada</option>
                                    <option value="UK">United Kingdom</option>
                                    <option value="AU">Australia</option>
                                    <option value="IN">India</option>
                                    <option value="DE">Germany</option>
                                    <option value="FR">France</option>
                                    <option value="JP">Japan</option>
                                    <option value="BR">Brazil</option>
                                    <option value="ZA">South Africa</option>
                                </select>
                                {errors.country && (
                                    <div className="flex items-center mt-1 text-sm text-red-700">
                                        <FaExclamationTriangle className="w-4 h-4 mr-1" />
                                        <span>{errors.country}</span>
                                    </div>
                                )}
                            </div>

                            <div className="flex items-start">
                                <div className="flex items-center h-5 mt-1">
                                    <input
                                        id="clientMarketing"
                                        type="checkbox"
                                        checked={clientReceiveEmails}
                                        onChange={(e) => setClientReceiveEmails(e.target.checked)}
                                        className={`h-4 w-4 text-orange-500 focus:ring-orange-500 border-gray-300 rounded ${errors.email ? "border-red-700 focus:ring-red-600 focus:border-red-700" : "border-gray-300"
                                            }`}
                                    />
                                </div>
                                <div className="ml-3 text-sm">
                                    <label htmlFor="clientMarketing" className={theme === 'light' ? 'text-gray-600' : 'text-gray-400'}>
                                        Send me emails with tips on how to find talent that fits my needs.
                                    </label>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="flex items-center h-5 mt-1">
                                    <input
                                        id="clientTerms"
                                        type="checkbox"
                                        checked={clientAgreedToTerms}
                                        onChange={(e) => setClientAgreedToTerms(e.target.checked)}
                                        className={`h-4 w-4 text-orange-500 focus:ring-orange-500 border-gray-300 rounded ${errors.email ? "border-red-700 focus:ring-red-600 focus:border-red-700" : "border-gray-300"
                                            }`}

                                    />
                                </div>
                                <div className="ml-3 text-sm">
                                    <label htmlFor="clientTerms" className={theme === 'light' ? 'text-gray-600' : 'text-gray-400'}>
                                        Yes, I understand and agree to the <a href="#" className="text-orange-500 font-medium hover:underline">Bikwiz Terms of Service</a>, including the <a href="#" className="text-orange-500 font-medium hover:underline">User Agreement</a> and <a href="#" className="text-orange-500 font-medium hover:underline">Privacy Policy</a>.
                                    </label>
                                </div>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    disabled={!clientAgreedToTerms}
                                    className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md  text-sm font-medium text-white ${clientAgreedToTerms ? 'bg-orange-500 hover:bg-orange-600' : 'bg-gray-400 cursor-not-allowed'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors duration-200`}
                                >
                                    Create Client Account
                                </button>
                            </div>

                            <div className="relative flex items-center justify-center my-6">
                                <div className={`border-t ${inputBorderColor} absolute w-full`}></div>
                                <div className={`${bgColor} px-3 relative text-sm ${theme === 'light' ? 'text-gray-500' : 'text-gray-400'}`}>OR</div>
                            </div>

                            <div className="gap-6 flex">

                                <LoginSocialGoogle className={`w-[50%] flex justify-center items-center py-3 rounded-md  ${inputBgColor} text-sm font-medium ${textColor}   focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors duration-200`}
                                    client_id="1045466982465-p8irl41k8jnmuiukbkjc1jt04ed82aja.apps.googleusercontent.com"
                                    scope="profile email"
                                    access_type="online"
                                    onResolve={async ({ provider, data }) => {
                                        setProvider(provider);
                                        setProfile(data);
                                        console.log("data", data)
                                        try {
                                            const payload = {
                                                email: data.email,
                                                name: data.name,
                                                country: "IN", // or dynamically detect later
                                            };

                                            const res = await GoogleSignup(payload); // Call your API function
                                            toast.success(res.message || "Google login success");

                                            navigate("/ClientDashboard"); // Or wherever you want to send them
                                        } catch (err) {
                                            console.error("Google signup error:", err);
                                            toast.error("Failed to save Google login");
                                        }
                                    }}
                                    onReject={(err) => {
                                        console.log("Google Login Error", err);
                                    }}
                                >
                                    <div className="flex items-center justify-center w-full gap-2 border border-gray-300 rounded-3xl p-3 text-xl cursor-pointer hover:bg-gray-50">
                                        <svg className="w-5 h-5" viewBox="0 0 24 24">
                                            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                                        </svg>
                                        <span>Continue with Google</span>
                                    </div>
                                </LoginSocialGoogle>

                                <LoginSocialFacebook className={`w-[50%] flex justify-center items-center py-3 rounded-md  ${inputBgColor} text-sm font-medium ${textColor}   focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors duration-200`}
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
                            </div>
                        </form>

                    )}

                    {/* Freelancer Form */}
                    {selected !== 'client' && (
                        <form onSubmit={handleFreelancerSubmit} className="space-y-5">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="freelancerFirstName" className="block text-sm font-medium mb-1">
                                        First Name
                                    </label>
                                    <input
                                        id="freelancerFirstName"
                                        type="text"
                                        name='fname'
                                        value={freelancer.fname ? freelancer.fname : ""}
                                        onChange={FreelancerOnChange}
                                        className={`appearance-none block w-full px-3 py-3 border ${inputBorderColor} ${errors.email ? "border-red-700 focus:ring-red-600 focus:border-red-700" : "border-gray-300"
                                            } rounded-md  placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 ${inputBgColor} transition-colors duration-200`}
                                        placeholder="John"

                                    />
                                    {errors.fname && (
                                        <div className="flex items-center mt-1 text-sm text-red-700">
                                            <FaExclamationTriangle className="w-4 h-4 mr-1" />
                                            <span>{errors.fname}</span>
                                        </div>
                                    )}
                                </div>
                                <div>
                                    <label htmlFor="freelancerLastName" className="block text-sm font-medium mb-1">
                                        Last Name
                                    </label>
                                    <input
                                        id="freelancerLastName"
                                        type="text"
                                        name='lname'
                                        value={freelancer.lname ? freelancer.lname : ""}
                                        onChange={FreelancerOnChange}
                                        className={`appearance-none block w-full px-3 py-3 border ${inputBorderColor} ${errors.email ? "border-red-700 focus:ring-red-600 focus:border-red-700" : "border-gray-300"
                                            } rounded-md  placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 ${inputBgColor} transition-colors duration-200`}
                                        placeholder="Doe"

                                    />
                                    {errors.lname && (
                                        <div className="flex items-center mt-1 text-sm text-red-700">
                                            <FaExclamationTriangle className="w-4 h-4 mr-1" />
                                            <span>{errors.lname}</span>
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div>
                                <label htmlFor="freelancerEmail" className="block text-sm font-medium mb-1">
                                    Email
                                </label>
                                <input
                                    id="freelancerEmail"
                                    type="text"
                                    name='email'
                                    value={freelancer.email ? freelancer.email : ""}
                                    onChange={FreelancerOnChange}
                                    className={`appearance-none block w-full px-3 py-3 border ${inputBorderColor} ${errors.email ? "border-red-700 focus:ring-red-600 focus:border-red-700" : "border-gray-300"
                                        } rounded-md  placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 ${inputBgColor} transition-colors duration-200`}
                                    placeholder="johndoe@example.com"

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
                                    <label htmlFor="freelancerPassword" className="block text-sm font-medium">
                                        Password
                                    </label>
                                    <a href="#" className="text-orange-500 text-xs hover:underline">
                                        Password requirements
                                    </a>
                                </div>
                                <div className="relative">
                                    <input
                                        id="freelancerPassword"
                                        type={showFreelancerPassword ? "text" : "password"}
                                        name='password'
                                        value={freelancer.password ? freelancer.password : ""}
                                        onChange={FreelancerOnChange}
                                        className={`appearance-none block w-full px-3 py-3 border ${inputBorderColor} ${errors.email ? "border-red-700 focus:ring-red-600 focus:border-red-700" : "border-gray-300"
                                            } rounded-md  placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 ${inputBgColor} transition-colors duration-200`}
                                        placeholder="Minimum 8 characters"
                                        minLength="8"

                                    />
                                    <button
                                        type="button"
                                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                        onClick={() => setShowFreelancerPassword(!showFreelancerPassword)}
                                        aria-label={showFreelancerPassword ? "Hide password" : "Show password"}
                                    >
                                        {showFreelancerPassword ? (
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
                                {errors.password && (
                                    <div className="flex items-center mt-1 text-sm text-red-700">
                                        <FaExclamationTriangle className="w-4 h-4 mr-1" />
                                        <span>{errors.password}</span>
                                    </div>
                                )}
                            </div>

                            <div>
                                <label htmlFor="freelancerCountry" className="block text-sm font-medium mb-1">
                                    Country
                                </label>
                                <select
                                    id="freelancerCountry"
                                    value={freelancer.country ? freelancer.country : ""}
                                    name='country'
                                    onChange={FreelancerOnChange}
                                    className={`appearance-none block w-full px-3 py-3 border ${inputBorderColor} ${errors.email ? "border-red-700 focus:ring-red-600 focus:border-red-700" : "border-gray-300"
                                        } rounded-md  placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 ${inputBgColor} transition-colors duration-200`}

                                >
                                    <option value="">Select a country</option>
                                    <option value="US">United States</option>
                                    <option value="CA">Canada</option>
                                    <option value="UK">United Kingdom</option>
                                    <option value="AU">Australia</option>
                                    <option value="IN">India</option>
                                    <option value="DE">Germany</option>
                                    <option value="FR">France</option>
                                    <option value="JP">Japan</option>
                                    <option value="BR">Brazil</option>
                                    <option value="ZA">South Africa</option>
                                </select>
                                {errors.country && (
                                    <div className="flex items-center mt-1 text-sm text-red-700">
                                        <FaExclamationTriangle className="w-4 h-4 mr-1" />
                                        <span>{errors.country}</span>
                                    </div>
                                )}
                            </div>

                            <div className="flex items-start">
                                <div className="flex items-center h-5 mt-1">
                                    <input
                                        id="freelancerMarketing"
                                        type="checkbox"
                                        checked={freelancerReceiveEmails}
                                        onChange={(e) => setFreelancerReceiveEmails(e.target.checked)}
                                        className="h-4 w-4 text-orange-500 focus:ring-orange-500 border-gray-300 rounded"
                                    />
                                </div>
                                <div className="ml-3 text-sm">
                                    <label htmlFor="freelancerMarketing" className={theme === 'light' ? 'text-gray-600' : 'text-gray-400'}>
                                        Send me emails with tips on improving my profile and finding work.
                                    </label>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="flex items-center h-5 mt-1">
                                    <input
                                        id="freelancerTerms"
                                        type="checkbox"
                                        checked={freelancerAgreedToTerms}
                                        onChange={(e) => setFreelancerAgreedToTerms(e.target.checked)}
                                        className="h-4 w-4 text-orange-500 focus:ring-orange-500 border-gray-300 rounded"

                                    />
                                </div>
                                <div className="ml-3 text-sm">
                                    <label htmlFor="freelancerTerms" className={theme === 'light' ? 'text-gray-600' : 'text-gray-400'}>
                                        Yes, I understand and agree to the <a href="#" className="text-orange-500 font-medium hover:underline">Bikwiz Terms of Service</a>, including the <a href="#" className="text-orange-500 font-medium hover:underline">User Agreement</a> and <a href="#" className="text-orange-500 font-medium hover:underline">Privacy Policy</a>.
                                    </label>
                                </div>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    disabled={!freelancerAgreedToTerms}
                                    className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md  text-sm font-medium text-white ${freelancerAgreedToTerms ? 'bg-orange-500 hover:bg-orange-600' : 'bg-gray-400 cursor-not-allowed'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors duration-200`}
                                >
                                    Create Freelancer Account
                                </button>
                            </div>

                            <div className="relative flex items-center justify-center my-6">
                                <div className={`border-t ${inputBorderColor} absolute w-full`}></div>
                                <div className={`${bgColor} px-3 relative text-sm ${theme === 'light' ? 'text-gray-500' : 'text-gray-400'}`}>OR</div>
                            </div>

                            <div className="gap-6 flex">


                                <LoginSocialGoogle className={`w-[50%] flex justify-center items-center py-3 rounded-md  ${inputBgColor} text-sm font-medium ${textColor}   focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors duration-200`}
                                    client_id="1045466982465-p8irl41k8jnmuiukbkjc1jt04ed82aja.apps.googleusercontent.com"
                                    scope="profile email"
                                    access_type="online"
                                    onResolve={async ({ provider, data }) => {
                                        setProvider(provider);
                                        setProfile(data);
                                        console.log("data", data)
                                        try {
                                            const payload = {
                                                email: data.email,
                                                name: data.name,
                                                country: "IN", // or dynamically detect later
                                            };

                                            const res = await Googlesignup(payload); // Call your API function
                                            toast.success(res.message);

                                            navigate("/FreelancerDashboard"); // Or wherever you want to send them
                                        } catch (err) {
                                            console.error("Google signup error:", err);
                                            toast.error("Failed to save Google login");
                                        }
                                    }}
                                    onReject={(err) => {
                                        console.log("Google Login Error", err);
                                    }}
                                >
                                    <div className="flex items-center justify-center w-full gap-2 border border-gray-300 rounded-3xl p-3 text-xl cursor-pointer hover:bg-gray-50">
                                        <img src="https://developers.google.com/identity/images/g-logo.png" alt="Google logo" className="w-5 h-5" />
                                        <span>Continue with Google</span>
                                    </div>
                                </LoginSocialGoogle>


                                <LoginSocialFacebook className={`w-[50%] flex justify-center items-center py-3 rounded-md  ${inputBgColor} text-sm font-medium ${textColor}   focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors duration-200`}
                                    appId='1106598061210789'
                                    // fieldsProfile={
                                    //   'id,first_name,last_name,middle_name,name,name_format,picture,short_name,email,gender'
                                    // }
                                    // onLoginStart={onLoginStart}
                                    // onLogoutSuccess={onLogoutSuccess}
                                    // redirect_uri={REDIRECT_URI}
                                    onResolve={async ({ provider, data }) => {
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
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </>

    )
}