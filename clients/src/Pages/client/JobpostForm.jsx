import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaExclamationTriangle, FaPlus, FaTimes } from 'react-icons/fa';
import toast from 'react-hot-toast';
import logo from '../../assets/images/logo.png' // Adjust the path to your logo image
import logo2 from '../../assets/images/logo2.png' // Adjust the path to your logo ima

const JobpostForm = () => {
    const [theme, setTheme] = useState('light');
    const [currentStep, setCurrentStep] = useState(1);
    const [skills, setSkills] = useState([]);
    const [newSkill, setNewSkill] = useState('');

    const [jobData, setJobData] = useState({
        title: '',
        category: '',
        subcategory: '',
        description: '',
        projectType: '', // fixed-price or hourly
        duration: '',
        experienceLevel: '',
        budget: '',
        hourlyRateMin: '',
        hourlyRateMax: '',
        hoursPerWeek: '',
        visibility: 'public',
        location: 'worldwide',
        specificCountries: [],
        questions: [],
        attachments: [],
        workType:'',
    projectDuration: '',
    experienceLevel: '',
    uploadedFiles: [],
    });

    const [errors, setErrors] = useState({});
    const [customQuestions, setCustomQuestions] = useState(['']);

    // Add these handler functions to your component

// File upload handler
// Add these handler functions to your component

// File upload handler
const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    const maxSize = 10 * 1024 * 1024; // 10MB in bytes
    const allowedTypes = [
        'application/pdf',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'text/plain',
        'image/png',
        'image/jpeg',
        'image/jpg',
        'application/zip',
        'application/x-rar-compressed'
    ];

    const validFiles = files.filter(file => {
        if (file.size > maxSize) {
            alert(`File ${file.name} is too large. Maximum size is 10MB.`);
            return false;
        }
        if (!allowedTypes.includes(file.type)) {
            alert(`File ${file.name} has an unsupported format.`);
            return false;
        }
        return true;
    });

    setJobData(prev => ({
        ...prev,
        uploadedFiles: [...(prev.uploadedFiles || []), ...validFiles]
    }));
};

// File remove handler
const handleFileRemove = (indexToRemove) => {
    setJobData(prev => ({
        ...prev,
        uploadedFiles: prev.uploadedFiles.filter((_, index) => index !== indexToRemove)
    }));
};





// Update your initial jobData state to include the new fields


// Update your handleInputChange function if needed to handle the new fields


    // Categories and subcategories (simplified)
    const categories = {
        'web-dev': {
            name: 'Web Development',
            subcategories: ['Frontend Development', 'Backend Development', 'Full Stack Development', 'WordPress', 'Shopify']
        },
        'mobile-dev': {
            name: 'Mobile Development',
            subcategories: ['iOS Development', 'Android Development', 'React Native', 'Flutter', 'Hybrid Apps']
        },
        'design': {
            name: 'Design & Creative',
            subcategories: ['UI/UX Design', 'Graphic Design', 'Logo Design', 'Web Design', 'Brand Identity']
        },
        'writing': {
            name: 'Writing & Translation',
            subcategories: ['Content Writing', 'Copywriting', 'Technical Writing', 'Translation', 'Proofreading']
        },
        'marketing': {
            name: 'Sales & Marketing',
            subcategories: ['Digital Marketing', 'SEO', 'Social Media Marketing', 'Email Marketing', 'Content Marketing']
        }
    };

    const experienceLevels = [
        { value: 'entry', label: 'Entry Level', description: 'Looking for someone relatively new to this field' },
        { value: 'intermediate', label: 'Intermediate', description: 'Looking for substantial experience in this field' },
        { value: 'expert', label: 'Expert', description: 'Looking for comprehensive and deep expertise in this field' }
    ];

    const projectDurations = [
        { value: 'less-than-1-month', label: 'Less than 1 month' },
        { value: '1-3-months', label: '1 to 3 months' },
        { value: '3-6-months', label: '3 to 6 months' },
        { value: 'more-than-6-months', label: 'More than 6 months' }
    ];

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setJobData(prev => ({
            ...prev,
            [name]: value
        }));

        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const addSkill = () => {
        if (newSkill.trim() && !skills.includes(newSkill.trim())) {
            setSkills([...skills, newSkill.trim()]);
            setNewSkill('');
        }
    };

    const removeSkill = (skillToRemove) => {
        setSkills(skills.filter(skill => skill !== skillToRemove));
    };

    const addCustomQuestion = () => {
        setCustomQuestions([...customQuestions, '']);
    };

    const updateCustomQuestion = (index, value) => {
        const updated = [...customQuestions];
        updated[index] = value;
        setCustomQuestions(updated);
    };

    const removeCustomQuestion = (index) => {
        setCustomQuestions(customQuestions.filter((_, i) => i !== index));
    };

    const validateStep = (step) => {
        const newErrors = {};

        if (step === 1) {
            if (!jobData.title.trim()) {
                newErrors.title = 'Job title is required';
            }
            if (!jobData.category) {
                newErrors.category = 'Please select a category';
            }
            if (!jobData.subcategory) {
                newErrors.subcategory = 'Please select a subcategory';
            }
            if (!jobData.description.trim()) {
                newErrors.description = 'Job description is required';
            } else if (jobData.description.length < 50) {
                newErrors.description = 'Description should be at least 50 characters long';
            }
            if (skills.length === 0) {
                newErrors.skills = 'Please add at least one skill';
            }
        }

        if (step === 2) {
            if (!jobData.projectType) {
                newErrors.projectType = 'Please select project type';
            }
            if (!jobData.duration) {
                newErrors.duration = 'Please select project duration';
            }
            if (!jobData.experienceLevel) {
                newErrors.experienceLevel = 'Please select experience level';
            }

            if (jobData.projectType === 'fixed-price') {
                if (!jobData.budget || jobData.budget <= 0) {
                    newErrors.budget = 'Please enter a valid budget';
                }
            } else if (jobData.projectType === 'hourly') {
                if (!jobData.hourlyRateMin || jobData.hourlyRateMin <= 0) {
                    newErrors.hourlyRateMin = 'Please enter minimum hourly rate';
                }
                if (!jobData.hourlyRateMax || jobData.hourlyRateMax <= 0) {
                    newErrors.hourlyRateMax = 'Please enter maximum hourly rate';
                }
                if (jobData.hourlyRateMin && jobData.hourlyRateMax && parseFloat(jobData.hourlyRateMin) >= parseFloat(jobData.hourlyRateMax)) {
                    newErrors.hourlyRateMax = 'Maximum rate should be higher than minimum rate';
                }
            }
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const nextStep = () => {
        if (validateStep(currentStep)) {
            setCurrentStep(currentStep + 1);
        }
    };

    const prevStep = () => {
        setCurrentStep(currentStep - 1);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateStep(currentStep)) {
            return;
        }

        try {
            const formData = {
                ...jobData,
                skills,
                customQuestions: customQuestions.filter(q => q.trim())
            };

            console.log('Job post data:', formData);
            toast.success('Job posted successfully!');

            // Reset form
            setJobData({
                title: '',
                category: '',
                subcategory: '',
                description: '',
                projectType: '',
                duration: '',
                experienceLevel: '',
                budget: '',
                hourlyRateMin: '',
                hourlyRateMax: '',
                hoursPerWeek: '',
                visibility: 'public',
                location: 'worldwide',
                specificCountries: [],
                questions: [],
                attachments: []
            });
            setSkills([]);
            setCustomQuestions(['']);
            setCurrentStep(1);

        } catch (error) {
            console.error('Error posting job:', error);
            toast.error('Failed to post job. Please try again.');
        }
    };

    const goToStep = (targetStep) => {
        // Only allow going to previous steps or the next step if current step is valid
        if (targetStep < currentStep) {
            // Allow going back to any previous step
            setCurrentStep(targetStep);
        } else if (targetStep === currentStep + 1) {
            // Allow going to next step only if current step is valid
            if (validateStep(currentStep)) {
                setCurrentStep(targetStep);
            }
        }
        // Don't allow skipping steps ahead
    };

    // Dynamic styling based on theme
    const bgColor = theme === 'light' ? 'bg-white' : 'bg-gray-950';
    const textColor = theme === 'light' ? 'text-gray-900' : 'text-white';
    const inputBgColor = theme === 'light' ? 'bg-white' : 'bg-gray-800';
    const inputBorderColor = theme === 'light' ? 'border-gray-300' : 'border-gray-700';
    const pageBgColor = theme === 'light' ? 'bg-white' : 'bg-gray-900';
    const borderColor = theme === 'light' ? 'border-gray-200' : 'border-gray-700';
    const headerBg = theme === 'light' ? 'bg-white' : 'bg-gray-950';

    return (
        <>
            {/* Header */}
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

            <div className={`min-h-screen ${pageBgColor} px-4 py-8 transition-colors duration-300`}>
                <div className="max-w-4xl mx-auto">
                    {/* Progress Steps */}
                    <div className="mb-8">
                        <div className="flex items-center justify-center">
                            {[1, 2, 3].map((step, index) => (
                                <React.Fragment key={step}>
                                    <div
                                        className={`flex items-center justify-center w-10 h-10 rounded-full ${currentStep >= step
                                            ? 'bg-orange-500 text-white'
                                            : theme === 'light'
                                                ? 'bg-gray-200 text-gray-600'
                                                : 'bg-gray-700 text-gray-400'
                                            } font-semibold transition-all duration-200 cursor-pointer hover:scale-110 ${step < currentStep ? 'hover:bg-orange-600' : ''
                                            }`}
                                        onClick={() => goToStep(step)}
                                        role="button"
                                        tabIndex={0}
                                        onKeyDown={(e) => {
                                            if (e.key === 'Enter' || e.key === ' ') {
                                                e.preventDefault();
                                                goToStep(step);
                                            }
                                        }}
                                        aria-label={`Go to step ${step}`}
                                    >
                                        {step}
                                    </div>
                                    {index < 2 && (
                                        <div className={`w-20 h-1 mx-2 ${currentStep > step
                                            ? 'bg-orange-500'
                                            : theme === 'light'
                                                ? 'bg-gray-200'
                                                : 'bg-gray-700'
                                            }`}></div>
                                    )}
                                </React.Fragment>
                            ))}
                        </div>
                        <div className="flex justify-center mt-4">
                            <div className="text-center">
                                <p className={`text-sm font-medium ${textColor}`}>
                                    Step {currentStep} of 3
                                </p>
                                <p className={`text-xs ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
                                    {currentStep === 1 && 'Job Details'}
                                    {currentStep === 2 && 'Budget & Timeline'}
                                    {currentStep === 3 && 'Review & Post'}
                                </p>
                            </div>
                        </div>
                    </div>

                    

                    {/* Form Container */}
                    <div className={`${bgColor} rounded-lg  p-8 ${textColor} transition-colors duration-300`}>
                        <form onSubmit={handleSubmit}>
                            {/* Step 1: Job Details */}
                            {currentStep === 1 && (
                                <div className="space-y-6">
                                    <div className="text-center mb-8">
                                        <h2 className="text-3xl font-bold">Tell us about your project</h2>
                                        <p className={`mt-2 ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
                                            Start by describing what you need done
                                        </p>
                                    </div>

                                    {/* Job Title */}
                                    <div>
                                        <label htmlFor="title" className="block text-sm font-medium mb-2">
                                            Job Title *
                                        </label>
                                        <input
                                            id="title"
                                            type="text"
                                            name="title"
                                            value={jobData.title}
                                            onChange={handleInputChange}
                                            className={`w-full px-4 py-3 border ${errors.title ? 'border-red-500' : inputBorderColor} rounded-md ${inputBgColor} placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-200`}
                                            placeholder="e.g. Build a responsive WordPress website"
                                        />
                                        {errors.title && (
                                            <div className="flex items-center mt-2 text-sm text-red-500">
                                                <FaExclamationTriangle className="w-4 h-4 mr-1" />
                                                <span>{errors.title}</span>
                                            </div>
                                        )}
                                    </div>

                                    {/* Category Selection */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label htmlFor="category" className="block text-sm font-medium mb-2">
                                                Category *
                                            </label>
                                            <select
                                                id="category"
                                                name="category"
                                                value={jobData.category}
                                                onChange={handleInputChange}
                                                className={`w-full px-4 py-3 border ${errors.category ? 'border-red-500' : inputBorderColor} rounded-md ${inputBgColor} focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-200`}
                                            >
                                                <option value="">Select a category</option>
                                                {Object.entries(categories).map(([key, category]) => (
                                                    <option key={key} value={key}>
                                                        {category.name}
                                                    </option>
                                                ))}
                                            </select>
                                            {errors.category && (
                                                <div className="flex items-center mt-2 text-sm text-red-500">
                                                    <FaExclamationTriangle className="w-4 h-4 mr-1" />
                                                    <span>{errors.category}</span>
                                                </div>
                                            )}
                                        </div>

                                        <div>
                                            <label htmlFor="subcategory" className="block text-sm font-medium mb-2">
                                                Subcategory *
                                            </label>
                                            <select
                                                id="subcategory"
                                                name="subcategory"
                                                value={jobData.subcategory}
                                                onChange={handleInputChange}
                                                disabled={!jobData.category}
                                                className={`w-full px-4 py-3 border ${errors.subcategory ? 'border-red-500' : inputBorderColor} rounded-md ${inputBgColor} focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-200 ${!jobData.category ? 'opacity-50 cursor-not-allowed' : ''}`}
                                            >
                                                <option value="">Select a subcategory</option>
                                                {jobData.category && categories[jobData.category]?.subcategories.map((sub) => (
                                                    <option key={sub} value={sub}>
                                                        {sub}
                                                    </option>
                                                ))}
                                            </select>
                                            {errors.subcategory && (
                                                <div className="flex items-center mt-2 text-sm text-red-500">
                                                    <FaExclamationTriangle className="w-4 h-4 mr-1" />
                                                    <span>{errors.subcategory}</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Job Description */}
                                    <div>
                                        <label htmlFor="description" className="block text-sm font-medium mb-2">
                                            Project Description *
                                        </label>
                                        <textarea
                                            id="description"
                                            name="description"
                                            value={jobData.description}
                                            onChange={handleInputChange}
                                            rows={6}
                                            className={`w-full px-4 py-3 border ${errors.description ? 'border-red-500' : inputBorderColor} rounded-md ${inputBgColor} placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-200`}
                                            placeholder="Describe your project in detail. What are you looking to accomplish? What skills are required? Be as specific as possible."
                                        />
                                        <div className="flex justify-between mt-1">
                                            <div>
                                                {errors.description && (
                                                    <div className="flex items-center text-sm text-red-500">
                                                        <FaExclamationTriangle className="w-4 h-4 mr-1" />
                                                        <span>{errors.description}</span>
                                                    </div>
                                                )}
                                            </div>
                                            <span className={`text-sm ${theme === 'light' ? 'text-gray-500' : 'text-gray-400'}`}>
                                                {jobData.description.length} characters
                                            </span>
                                        </div>
                                    </div>

                                    {/* Skills */}
                                    <div>
                                        <label className="block text-sm font-medium mb-2">
                                            Required Skills *
                                        </label>
                                        <div className="flex flex-wrap gap-2 mb-3">
                                            {skills.map((skill, index) => (
                                                <span
                                                    key={index}
                                                    className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-orange-100 text-orange-800"
                                                >
                                                    {skill}
                                                    <button
                                                        type="button"
                                                        onClick={() => removeSkill(skill)}
                                                        className="ml-2 text-orange-600 hover:text-orange-800"
                                                    >
                                                        <FaTimes className="w-3 h-3" />
                                                    </button>
                                                </span>
                                            ))}
                                        </div>
                                        <div className="flex gap-2">
                                            <input
                                                type="text"
                                                value={newSkill}
                                                onChange={(e) => setNewSkill(e.target.value)}
                                                onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addSkill())}
                                                className={`flex-1 px-4 py-2 border ${inputBorderColor} rounded-md ${inputBgColor} placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-200`}
                                                placeholder="Add a skill (e.g. JavaScript, React, Node.js)"
                                            />
                                            <button
                                                type="button"
                                                onClick={addSkill}
                                                className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors duration-200"
                                            >
                                                Add
                                            </button>
                                        </div>
                                        {errors.skills && (
                                            <div className="flex items-center mt-2 text-sm text-red-500">
                                                <FaExclamationTriangle className="w-4 h-4 mr-1" />
                                                <span>{errors.skills}</span>
                                            </div>
                                        )}
                                    </div>

                                    <div className="flex justify-between mt-8">
                        {currentStep > 1 && (
                            <button
                                type="button"
                                onClick={prevStep}
                                className="px-6 py-2 border border-gray-300 text-gray-700 dark:text-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
                            >
                                Previous
                            </button>
                        )}
                        {currentStep < 3 ? (
                            <button
                                type="button"
                                onClick={nextStep}
                                className="ml-auto px-6 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors duration-200"
                            >
                                Next
                            </button>
                        ) : (
                            <button
                                type="submit"
                                className="ml-auto px-6 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors duration-200"
                            >
                                Post Job
                            </button>
                        )}
                    </div>
                                </div>
                            )}

                            {/* Step 2: Budget & Timeline */}
         {currentStep === 2 && (
    <div className="space-y-6">
        <div className="text-center mb-8">
            <h2 className="text-3xl font-bold">Budget and Timeline</h2>
            <p className={`mt-2 ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
                Tell us about your budget, timeline, and project requirements
            </p>
        </div>

      

        {/* Project Work Type */}
        <div>
            <label className="block text-sm font-medium mb-3">
                Project Work Type *
            </label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div
                    className={`p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 ${jobData.workType === 'one-time'
                        ? 'border-orange-500 bg-orange-50 dark:bg-orange-900/20'
                        : `${inputBorderColor} hover:border-orange-300`
                        }`}
                    onClick={() => handleInputChange({ target: { name: 'workType', value: 'one-time' } })}
                >
                    <div className="text-center">
                        <input
                            type="radio"
                            name="workType"
                            value="one-time"
                            checked={jobData.workType === 'one-time'}
                            onChange={handleInputChange}
                            className="sr-only"
                        />
                        <div className="mb-2">
                            <svg className="w-8 h-8 mx-auto text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                        </div>
                        <h3 className="font-semibold text-sm">One-time Project</h3>
                        <p className={`text-xs mt-1 ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
                            Single project with defined scope and deliverables
                        </p>
                    </div>
                </div>

                <div
                    className={`p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 ${jobData.workType === 'ongoing'
                        ? 'border-orange-500 bg-orange-50 dark:bg-orange-900/20'
                        : `${inputBorderColor} hover:border-orange-300`
                        }`}
                    onClick={() => handleInputChange({ target: { name: 'workType', value: 'ongoing' } })}
                >
                    <div className="text-center">
                        <input
                            type="radio"
                            name="workType"
                            value="ongoing"
                            checked={jobData.workType === 'ongoing'}
                            onChange={handleInputChange}
                            className="sr-only"
                        />
                        <div className="mb-2">
                            <svg className="w-8 h-8 mx-auto text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                            </svg>
                        </div>
                        <h3 className="font-semibold text-sm">Ongoing Work</h3>
                        <p className={`text-xs mt-1 ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
                            Long-term partnership with recurring tasks
                        </p>
                    </div>
                </div>

                <div
                    className={`p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 ${jobData.workType === 'intermediate'
                        ? 'border-orange-500 bg-orange-50 dark:bg-orange-900/20'
                        : `${inputBorderColor} hover:border-orange-300`
                        }`}
                    onClick={() => handleInputChange({ target: { name: 'workType', value: 'intermediate' } })}
                >
                    <div className="text-center">
                        <input
                            type="radio"
                            name="workType"
                            value="intermediate"
                            checked={jobData.workType === 'intermediate'}
                            onChange={handleInputChange}
                            className="sr-only"
                        />
                        <div className="mb-2">
                            <svg className="w-8 h-8 mx-auto text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="font-semibold text-sm">Short-term Project</h3>
                        <p className={`text-xs mt-1 ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
                            Medium duration project with specific timeline
                        </p>
                    </div>
                </div>
            </div>
            {errors.workType && (
                <div className="flex items-center mt-2 text-sm text-red-500">
                    <FaExclamationTriangle className="w-4 h-4 mr-1" />
                    <span>{errors.workType}</span>
                </div>
            )}
        </div>

        {/* Payment Type */}
        <div>
            <label className="block text-sm font-medium mb-3">
                How do you want to pay? *
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div
                    className={`p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 ${jobData.projectType === 'hourly'
                        ? 'border-orange-500 bg-orange-50 dark:bg-orange-900/20'
                        : `${inputBorderColor} hover:border-orange-300`
                        }`}
                    onClick={() => handleInputChange({ target: { name: 'projectType', value: 'hourly' } })}
                >
                    <div className="flex items-center">
                        <input
                            type="radio"
                            name="projectType"
                            value="hourly"
                            checked={jobData.projectType === 'hourly'}
                            onChange={handleInputChange}
                            className="mr-3 text-orange-500"
                        />
                        <div>
                            <h3 className="font-semibold">Hourly rate</h3>
                            <p className={`text-sm ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
                                Best for ongoing work
                            </p>
                        </div>
                    </div>
                </div>
                <div
                    className={`p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 ${jobData.projectType === 'fixed-price'
                        ? 'border-orange-500 bg-orange-50 dark:bg-orange-900/20'
                        : `${inputBorderColor} hover:border-orange-300`
                        }`}
                    onClick={() => handleInputChange({ target: { name: 'projectType', value: 'fixed-price' } })}
                >
                    <div className="flex items-center">
                        <input
                            type="radio"
                            name="projectType"
                            value="fixed-price"
                            checked={jobData.projectType === 'fixed-price'}
                            onChange={handleInputChange}
                            className="mr-3 text-orange-500"
                        />
                        <div>
                            <h3 className="font-semibold">Fixed price</h3>
                            <p className={`text-sm ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
                                Best for one-time projects
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {errors.projectType && (
                <div className="flex items-center mt-2 text-sm text-red-500">
                    <FaExclamationTriangle className="w-4 h-4 mr-1" />
                    <span>{errors.projectType}</span>
                </div>
            )}
        </div>

        {/* Budget/Rate Fields */}
        {jobData.projectType === 'fixed-price' && (
            <div>
                <label htmlFor="budget" className="block text-sm font-medium mb-2">
                    Project Budget (USD) *
                </label>
                <input
                    id="budget"
                    type="number"
                    name="budget"
                    value={jobData.budget}
                    onChange={handleInputChange}
                    min="0"
                    className={`w-full px-4 py-3 border ${errors.budget ? 'border-red-500' : inputBorderColor} rounded-md ${inputBgColor} placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-200`}
                    placeholder="e.g. 1000"
                />
                {errors.budget && (
                    <div className="flex items-center mt-2 text-sm text-red-500">
                        <FaExclamationTriangle className="w-4 h-4 mr-1" />
                        <span>{errors.budget}</span>
                    </div>
                )}
            </div>
        )}

        {jobData.projectType === 'hourly' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label htmlFor="hourlyRateMin" className="block text-sm font-medium mb-2">
                        Minimum Hourly Rate (USD) *
                    </label>
                    <input
                        id="hourlyRateMin"
                        type="number"
                        name="hourlyRateMin"
                        value={jobData.hourlyRateMin}
                        onChange={handleInputChange}
                        min="0"
                        className={`w-full px-4 py-3 border ${errors.hourlyRateMin ? 'border-red-500' : inputBorderColor} rounded-md ${inputBgColor} placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-200`}
                        placeholder="e.g. 15"
                    />
                    {errors.hourlyRateMin && (
                        <div className="flex items-center mt-2 text-sm text-red-500">
                            <FaExclamationTriangle className="w-4 h-4 mr-1" />
                            <span>{errors.hourlyRateMin}</span>
                        </div>
                    )}
                </div>
                <div>
                    <label htmlFor="hourlyRateMax" className="block text-sm font-medium mb-2">
                        Maximum Hourly Rate (USD) *
                    </label>
                    <input
                        id="hourlyRateMax"
                        type="number"
                        name="hourlyRateMax"
                        value={jobData.hourlyRateMax}
                        onChange={handleInputChange}
                        min="0"
                        className={`w-full px-4 py-3 border ${errors.hourlyRateMax ? 'border-red-500' : inputBorderColor} rounded-md ${inputBgColor} placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-200`}
                        placeholder="e.g. 50"
                    />
                    {errors.hourlyRateMax && (
                        <div className="flex items-center mt-2 text-sm text-red-500">
                            <FaExclamationTriangle className="w-4 h-4 mr-1" />
                            <span>{errors.hourlyRateMax}</span>
                        </div>
                    )}
                </div>
            </div>
        )}

        {/* Project Duration */}
        <div>
            <label className="block text-sm font-medium mb-3">
                Expected Project Duration *
            </label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                    { value: 'less-than-1-month', label: 'Less than 1 month' },
        { value: '1-3-months', label: '1 to 3 months' },
        { value: '3-6-months', label: '3 to 6 months' },
        { value: 'more-than-6-months', label: 'More than 6 months' }
                ].map((duration) => (
                    <div
                        key={duration.value}
                        className={`p-3 border-2 rounded-lg cursor-pointer transition-all duration-200 text-center ${jobData.projectDuration === duration.value
                            ? 'border-orange-500 bg-orange-50 dark:bg-orange-900/20'
                            : `${inputBorderColor} hover:border-orange-300`
                            }`}
                        onClick={() => handleInputChange({ target: { name: 'projectDuration', value: duration.value } })}
                    >
                        <input
                            type="radio"
                            name="projectDuration"
                            value={duration.value}
                            checked={jobData.projectDuration === duration.value}
                            onChange={handleInputChange}
                            className="sr-only"
                        />
                        <span className="text-sm font-medium">{duration.label}</span>
                    </div>
                ))}
            </div>
            {errors.projectDuration && (
                <div className="flex items-center mt-2 text-sm text-red-500">
                    <FaExclamationTriangle className="w-4 h-4 mr-1" />
                    <span>{errors.projectDuration}</span>
                </div>
            )}
        </div>

        {/* Experience Level */}
        <div>
            <label className="block text-sm font-medium mb-3">
                Required Experience Level *
            </label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                    {
                        value: 'entry-level',
                        title: 'Entry Level',
                        description: 'Looking for someone relatively new to this field',
                        rate: '$10-25/hr'
                    },
                    {
                        value: 'intermediate',
                        title: 'Intermediate',
                        description: 'Looking for substantial experience in this field',
                        rate: '$25-50/hr'
                    },
                    {
                        value: 'expert',
                        title: 'Expert',
                        description: 'Looking for comprehensive and deep expertise',
                        rate: '$50+/hr'
                    }
                ].map((level) => (
                    <div
                        key={level.value}
                        className={`p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 ${jobData.experienceLevel === level.value
                            ? 'border-orange-500 bg-orange-50 dark:bg-orange-900/20'
                            : `${inputBorderColor} hover:border-orange-300`
                            }`}
                        onClick={() => handleInputChange({ target: { name: 'experienceLevel', value: level.value } })}
                    >
                        <input
                            type="radio"
                            name="experienceLevel"
                            value={level.value}
                            checked={jobData.experienceLevel === level.value}
                            onChange={handleInputChange}
                            className="sr-only"
                        />
                        <div>
                            <h3 className="font-semibold text-sm">{level.title}</h3>
                            <p className={`text-xs mt-1 ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
                                {level.description}
                            </p>
                            <span className="text-xs font-medium text-orange-600 dark:text-orange-400">
                                {level.rate}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
            {errors.experienceLevel && (
                <div className="flex items-center mt-2 text-sm text-red-500">
                    <FaExclamationTriangle className="w-4 h-4 mr-1" />
                    <span>{errors.experienceLevel}</span>
                </div>
            )}
        </div>

        {/* File Upload */}
        <div>
            <label className="block text-sm font-medium mb-3">
                Project Files (Optional)
            </label>
            <div className={`border-2 border-dashed ${inputBorderColor} rounded-lg p-6 text-center hover:border-orange-300 transition-colors duration-200`}>
                <input
                    type="file"
                    name="projectFiles"
                    multiple
                    accept=".pdf,.doc,.docx,.txt,.png,.jpg,.jpeg,.zip,.rar"
                    onChange={handleFileUpload}
                    className="hidden"
                    id="file-upload"
                />
                <label htmlFor="file-upload" className="cursor-pointer">
                    <div className="space-y-2">
                        <div className="mx-auto w-12 h-12 text-gray-400">
                            <svg fill="none" stroke="currentColor" viewBox="0 0 48 48">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" />
                            </svg>
                        </div>
                        <div>
                            <p className="text-sm font-medium">Click to upload files</p>
                            <p className={`text-xs ${theme === 'light' ? 'text-gray-500' : 'text-gray-400'}`}>
                                or drag and drop
                            </p>
                        </div>
                        <p className={`text-xs ${theme === 'light' ? 'text-gray-500' : 'text-gray-400'}`}>
                            PDF, DOC, TXT, Images, ZIP up to 10MB each
                        </p>
                    </div>
                </label>
            </div>
            
            {/* Display uploaded files */}
            {jobData.uploadedFiles && jobData.uploadedFiles.length > 0 && (
                <div className="mt-3 space-y-2">
                    <p className="text-sm font-medium">Uploaded Files:</p>
                    {jobData.uploadedFiles.map((file, index) => (
                        <div key={index} className={`flex items-center justify-between p-2 ${theme === 'light' ? 'bg-gray-50' : 'bg-gray-800'} rounded-md`}>
                            <div className="flex items-center space-x-2">
                                <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                                </svg>
                                <span className="text-sm">{file.name}</span>
                                <span className="text-xs text-gray-500">({Math.round(file.size / 1024)}KB)</span>
                            </div>
                            <button
                                type="button"
                                onClick={() => handleFileRemove(index)}
                                className="text-red-500 hover:text-red-700 text-sm"
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>

        {/* Navigation Buttons */}
         <div className="flex flex-col sm:flex-row gap-4 pt-6">
                                        <button
                                            type="button"
                                            onClick={() => setCurrentStep(1)}
                                            className={`px-6 py-3 border border-gray-300 ${theme === 'light' ? 'text-gray-700 hover:bg-gray-50' : 'text-gray-300 border-gray-600 hover:bg-gray-800'} rounded-md transition-colors duration-200 font-medium`}
                                        >
                                            Previous
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => {
                                                // Validate Step 2 before proceeding
                                               const newErrors = {};

                    
                    // Validate work type
                    if (!jobData.workType) {
                        newErrors.workType = 'Please select a project work type';
                    }

                    // Validate payment type
                    if (!jobData.projectType) {
                        newErrors.projectType = 'Please select a payment type';
                    }

                    // Validate budget/rates
                    if (jobData.projectType === 'fixed-price' && (!jobData.budget || jobData.budget <= 0)) {
                        newErrors.budget = 'Please enter a valid budget amount';
                    }

                    if (jobData.projectType === 'hourly') {
                        if (!jobData.hourlyRateMin || jobData.hourlyRateMin <= 0) {
                            newErrors.hourlyRateMin = 'Please enter a valid minimum rate';
                        }
                        if (!jobData.hourlyRateMax || jobData.hourlyRateMax <= 0) {
                            newErrors.hourlyRateMax = 'Please enter a valid maximum rate';
                        }
                        if (jobData.hourlyRateMin && jobData.hourlyRateMax &&
                            parseFloat(jobData.hourlyRateMin) > parseFloat(jobData.hourlyRateMax)) {
                            newErrors.hourlyRateMax = 'Maximum rate must be greater than minimum rate';
                        }
                    }

                    // Validate project duration
                    if (!jobData.projectDuration) {
                        newErrors.projectDuration = 'Please select expected project duration';
                    }

                    // Validate experience level
                    if (!jobData.experienceLevel) {
                        newErrors.experienceLevel = 'Please select required experience level';
                    }

                    setErrors(newErrors);

                    // If no errors, proceed to next step
                    if (Object.keys(newErrors).length === 0) {
                        setCurrentStep(3);
                    }
                                            }}
                                            className="flex-1 px-6 py-3 bg-orange-500 text-white rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-all duration-200 font-medium shadow-sm"
                                        >
                                            Next: Review & Post
                                        </button>
                                    </div>
    </div>
)}

                            {/* Step 3: Review & Post */}
                            {currentStep === 3 &&(
                                                  <div className="space-y-10">
  {/* Header */}
  <div className="text-center">
    <h2 className="text-3xl font-bold text-orange-500">Review Your Job Post</h2>
    <p className={`mt-2 ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
      Double-check everything before publishing your job.
    </p>
  </div>

  {/* Summary Card */}
  <div className="rounded-xl p-6 shadow-md bg-white space-y-6 relative">
  {/* Header with Title and Edit */}
  <div className="flex justify-between items-start">
    <div>
      <h3 className="text-2xl font-bold text-gray-900">{jobData.title}</h3>
      <p className="text-sm text-gray-500">
        {categories[jobData.category]?.name} • {jobData.subcategory}
      </p>
    </div>
    <button
      onClick={() => setCurrentStep(1)}
      className="text-orange-500 hover:text-orange-600 text-sm font-semibold"
    >
      Edit
    </button>
  </div>

  {/* Project Description */}
  <div>
    <h4 className="font-semibold text-lg text-gray-800 mb-2">Project Description</h4>
    <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-line">
      {jobData.description}
    </p>
  </div>

  {/* Required Skills */}
  <div>
    <h4 className="font-semibold text-lg text-gray-800 mb-2">Required Skills</h4>
    <div className="flex flex-wrap gap-2">
      {skills.length > 0 ? (
        skills.map((skill, i) => (
          <span
            key={i}
            className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs font-medium"
          >
            {skill}
          </span>
        ))
      ) : (
        <p className="text-sm text-gray-500">No skills listed</p>
      )}
    </div>
  </div>
</div>



  {/* Budget & Timeline */}
  <div className={`rounded-xl p-6 shadow-md ${theme === 'light' ? 'bg-white' : 'bg-gray-800'} space-y-4`}>
    <div className="flex justify-between items-center">
      <h3 className="text-xl font-semibold">Budget & Timeline</h3>
      <button
        onClick={() => setCurrentStep(2)}
        className="text-orange-500 hover:text-orange-600 text-sm font-medium"
      >
        Edit
      </button>
    </div>

    <div className="grid md:grid-cols-3 gap-6 pt-2 text-sm text-gray-600">
      <div>
        <h4 className="font-medium">Payment Type</h4>
        <p>{jobData.projectType === 'hourly' ? 'Hourly Rate' : 'Fixed Price'}</p>
      </div>
      <div>
        <h4 className="font-medium">Budget</h4>
        <p>
          {jobData.projectType === 'hourly'
            ? `$${jobData.hourlyRateMin} - $${jobData.hourlyRateMax}/hr`
            : `$${jobData.budget}`}
        </p>
      </div>
      <div>
        <h4 className="font-medium">Duration</h4>
        <p>
          {
            projectDurations.find(d => d.value === jobData.projectDuration)?.label ||
            'Not specified'
          }
        </p>
      </div>
      <div>
        <h4 className="font-medium">Experience Level</h4>
        <p>{experienceLevels.find(e => e.value === jobData.experienceLevel)?.label}</p>
      </div>
      <div>
        <h4 className="font-medium">Work Type</h4>
        <p>{jobData.workType}</p>
      </div>
    </div>

    {/* Uploaded Files */}
    {jobData.uploadedFiles?.length > 0 && (
      <div>
        <h4 className="font-medium mb-1">Uploaded Files</h4>
        <ul className="space-y-2">
          {jobData.uploadedFiles.map((file, i) => (
            <li key={i} className={`flex justify-between p-2 rounded-md ${theme === 'light' ? 'bg-gray-50' : 'bg-gray-700'}`}>
              <div className="flex items-center gap-2">
                📄 <span>{file.name}</span>
              </div>
              <span className="text-xs text-gray-500">{Math.round(file.size / 1024)} KB</span>
            </li>
          ))}
        </ul>
      </div>
    )}
  </div>

  {/* Additional Settings */}
  <div className={`rounded-xl p-6 shadow-md ${theme === 'light' ? 'bg-white' : 'bg-gray-800'} space-y-6`}>
    <h3 className="text-xl font-semibold">Additional Settings</h3>

    <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600">
      <div>
        <h4 className="font-medium">Visibility</h4>
        <p>{jobData.visibility === 'public' ? 'Public - All freelancers' : 'Private - Invite only'}</p>
      </div>
      <div>
        <h4 className="font-medium">Location</h4>
        <p>{jobData.location === 'worldwide' ? 'Worldwide' : 'Specific Countries'}</p>
      </div>
    </div>

    {customQuestions.filter(q => q.trim()).length > 0 && (
      <div>
        <h4 className="font-medium">Screening Questions</h4>
        <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
          {customQuestions.map((q, i) => (
            <li key={i}>{q}</li>
          ))}
        </ul>
      </div>
    )}
  </div>

  {/* Terms */}
  <div className={`p-6 rounded-xl border ${theme === 'light' ? 'bg-gray-50' : 'bg-gray-800/60'}`}>
    <div className="flex items-start gap-3">
      <input type="checkbox" id="terms" required className="mt-1" />
      <label htmlFor="terms" className="text-sm text-gray-600">
        I agree to the{' '}
        <a href="#" className="text-orange-500 hover:underline">Terms of Service</a> and{' '}
        <a href="#" className="text-orange-500 hover:underline">Privacy Policy</a>.
        This job post will be reviewed before publication.
      </label>
    </div>
  </div>

  {/* Preview */}
  <div className={`p-6 rounded-xl shadow-md ${theme === 'light' ? 'bg-white' : 'bg-gray-800'}`}>
    <h3 className="text-xl font-semibold mb-4">Job Post Preview</h3>
    <div className="border rounded-md p-4">
      <div className="flex justify-between">
        <div>
          <h4 className="font-semibold text-lg">{jobData.title}</h4>
          <p className="text-xs text-gray-500">Posted now • {jobData.projectType === 'hourly' ? 'Hourly' : 'Fixed Price'}</p>
        </div>
        <div className="text-right">
          <p className="font-semibold">
            {jobData.projectType === 'hourly'
              ? `$${jobData.hourlyRateMin}-${jobData.hourlyRateMax}/hr`
              : `$${jobData.budget}`}
          </p>
          <p className="text-sm text-gray-500">
            {experienceLevels.find(e => e.value === jobData.experienceLevel)?.label}
          </p>
        </div>
      </div>

      <p className="text-sm mt-3 text-gray-600 line-clamp-3">
        {jobData.description.substring(0, 200)}
        {jobData.description.length > 200 && '...'}
      </p>

      <div className="flex flex-wrap gap-1 mt-3">
        {skills.slice(0, 5).map((skill, i) => (
          <span key={i} className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs">
            {skill}
          </span>
        ))}
        {skills.length > 5 && (
          <span className="text-xs text-gray-500">+{skills.length - 5} more</span>
        )}
      </div>
    </div>
  </div>

  {/* Buttons */}
  <div className="flex flex-col sm:flex-row gap-4 pt-6">
    <button
      type="button"
      onClick={() => setCurrentStep(2)}
      className={`px-6 py-3 border ${theme === 'light' ? 'border-gray-300 text-gray-700 hover:bg-gray-50' : 'border-gray-600 text-gray-300 hover:bg-gray-800'} rounded-md font-medium`}
    >
      Go Back
    </button>
    <button
      type="submit"
      onClick={handleSubmit}
      className="flex-1 px-6 py-3 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-all font-medium shadow-md"
    >
      Post Job - Ready to Hire
    </button>
  </div>
</div>
                            )}
          


                        </form>
                    </div>
                </div>
            </div>


        </>
    );
};

export default JobpostForm;