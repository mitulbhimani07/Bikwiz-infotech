import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaExclamationTriangle, FaPlus, FaTimes } from 'react-icons/fa';
import toast from 'react-hot-toast';

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
        attachments: []
    });

    const [errors, setErrors] = useState({});
    const [customQuestions, setCustomQuestions] = useState(['']);

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
    const pageBgColor = theme === 'light' ? 'bg-gray-50' : 'bg-gray-900';
    const borderColor = theme === 'light' ? 'border-gray-200' : 'border-gray-700';
    const headerBg = theme === 'light' ? 'bg-white' : 'bg-gray-950';

    return (
        <>
            {/* Header */}
            <header className={`${headerBg} ${textColor} border-b ${borderColor} transition-colors duration-300`}>
                <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <div className="flex items-center">
                        <Link to="/" className="text-2xl font-bold text-orange-500">
                            Bikwiz
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

                    {/* Form Container */}
                    <div className={`${bgColor} rounded-lg shadow-lg p-8 ${textColor} transition-colors duration-300`}>
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
                                </div>
                            )}

                            {/* Step 2: Budget & Timeline */}
                            {currentStep === 2 && (
                                <div className="space-y-6">
                                    <div className="text-center mb-8">
                                        <h2 className="text-3xl font-bold">Budget and Timeline</h2>
                                        <p className={`mt-2 ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
                                            Tell us about your budget and project timeline
                                        </p>
                                    </div>

                                    {/* Project Type */}
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
                                        <>
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
                                        </>
                                    )}

                                    {/* MISSING NAVIGATION BUTTONS - ADDED HERE */}
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

                                                if (!jobData.projectType) {
                                                    newErrors.projectType = 'Please select a payment type';
                                                }

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
                            {currentStep === 3 && (
                                <div className="space-y-6">
                                    <div className="text-center mb-8">
                                        <h2 className="text-3xl font-bold">Review Your Job Post</h2>
                                        <p className={`mt-2 ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
                                            Review all details before posting your job
                                        </p>
                                    </div>

                                    {/* Job Summary Card */}
                                    <div className={`border ${borderColor} rounded-lg p-6 space-y-4`}>
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <h3 className="text-xl font-semibold">{jobData.title}</h3>
                                                <p className={`text-sm ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
                                                    {categories[jobData.category]?.name} • {jobData.subcategory}
                                                </p>
                                            </div>
                                            <button
                                                type="button"
                                                onClick={() => setCurrentStep(1)}
                                                className="text-orange-500 hover:text-orange-600 text-sm font-medium"
                                            >
                                                Edit
                                            </button>
                                        </div>

                                        <div>
                                            <h4 className="font-medium mb-2">Project Description</h4>
                                            <p className={`text-sm ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'} leading-relaxed`}>
                                                {jobData.description}
                                            </p>
                                        </div>

                                        <div>
                                            <h4 className="font-medium mb-2">Required Skills</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {skills.map((skill, index) => (
                                                    <span
                                                        key={index}
                                                        className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300"
                                                    >
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Budget & Timeline Card */}
                                    <div className={`border ${borderColor} rounded-lg p-6 space-y-4`}>
                                        <div className="flex justify-between items-center">
                                            <h3 className="text-lg font-semibold">Budget & Timeline</h3>
                                            <button
                                                type="button"
                                                onClick={() => setCurrentStep(2)}
                                                className="text-orange-500 hover:text-orange-600 text-sm font-medium"
                                            >
                                                Edit
                                            </button>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div>
                                                <h4 className="font-medium mb-1">Payment Type</h4>
                                                <p className={`text-sm ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
                                                    {jobData.projectType === 'hourly' ? 'Hourly Rate' : 'Fixed Price'}
                                                </p>
                                            </div>

                                            <div>
                                                <h4 className="font-medium mb-1">Budget</h4>
                                                <p className={`text-sm ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
                                                    {jobData.projectType === 'hourly'
                                                        ? `$${jobData.hourlyRateMin} - $${jobData.hourlyRateMax}/hour`
                                                        : `$${jobData.budget}`
                                                    }
                                                </p>
                                            </div>

                                            <div>
                                                <h4 className="font-medium mb-1">Project Duration</h4>
                                                <p className={`text-sm ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
                                                    {projectDurations.find(d => d.value === jobData.duration)?.label || 'Not specified'}
                                                </p>
                                            </div>

                                            <div>
                                                <h4 className="font-medium mb-1">Experience Level</h4>
                                                <p className={`text-sm ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
                                                    {experienceLevels.find(e => e.value === jobData.experienceLevel)?.label || 'Not specified'}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Additional Settings Card */}
                                    <div className={`border ${borderColor} rounded-lg p-6 space-y-4`}>
                                        <h3 className="text-lg font-semibold">Additional Settings</h3>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div>
                                                <h4 className="font-medium mb-1">Job Visibility</h4>
                                                <p className={`text-sm ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
                                                    {jobData.visibility === 'public' ? 'Public - Visible to all freelancers' : 'Private - Invite only'}
                                                </p>
                                            </div>

                                            <div>
                                                <h4 className="font-medium mb-1">Location</h4>
                                                <p className={`text-sm ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
                                                    {jobData.location === 'worldwide' ? 'Worldwide' : 'Specific countries'}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Custom Questions */}
                                        {customQuestions.filter(q => q.trim()).length > 0 && (
                                            <div>
                                                <h4 className="font-medium mb-2">Screening Questions</h4>
                                                <ul className="space-y-1">
                                                    {customQuestions.filter(q => q.trim()).map((question, index) => (
                                                        <li key={index} className={`text-sm ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
                                                            • {question}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>

                                    {/* Terms and Conditions */}
                                    <div className={`border ${borderColor} rounded-lg p-6`}>
                                        <div className="flex items-start">
                                            <input
                                                type="checkbox"
                                                id="terms"
                                                className="mt-1 mr-3 text-orange-500 focus:ring-orange-500"
                                                required
                                            />
                                            <label htmlFor="terms" className={`text-sm ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
                                                I agree to the{' '}
                                                <a href="#" className="text-orange-500 hover:text-orange-600 underline">
                                                    Terms of Service
                                                </a>{' '}
                                                and{' '}
                                                <a href="#" className="text-orange-500 hover:text-orange-600 underline">
                                                    Privacy Policy
                                                </a>
                                                . I understand that my job post will be reviewed before being published.
                                            </label>
                                        </div>
                                    </div>

                                    {/* Job Post Preview */}
                                    <div className={`border ${borderColor} rounded-lg p-6 ${theme === 'light' ? 'bg-gray-50' : 'bg-gray-800/50'}`}>
                                        <h3 className="text-lg font-semibold mb-4">How your job post will appear:</h3>

                                        <div className={`${inputBgColor} border ${inputBorderColor} rounded-lg p-4 space-y-3`}>
                                            <div className="flex justify-between items-start">
                                                <div>
                                                    <h4 className="font-semibold text-lg">{jobData.title}</h4>
                                                    <p className={`text-sm ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
                                                        Posted just now • {jobData.projectType === 'hourly' ? 'Hourly' : 'Fixed Price'}
                                                    </p>
                                                </div>
                                                <div className="text-right">
                                                    <p className="font-semibold text-lg">
                                                        {jobData.projectType === 'hourly'
                                                            ? `$${jobData.hourlyRateMin}-${jobData.hourlyRateMax}/hr`
                                                            : `$${jobData.budget}`
                                                        }
                                                    </p>
                                                    <p className={`text-sm ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
                                                        {experienceLevels.find(e => e.value === jobData.experienceLevel)?.label}
                                                    </p>
                                                </div>
                                            </div>

                                            <p className={`text-sm ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'} line-clamp-3`}>
                                                {jobData.description.substring(0, 200)}
                                                {jobData.description.length > 200 && '...'}
                                            </p>

                                            <div className="flex flex-wrap gap-1">
                                                {skills.slice(0, 5).map((skill, index) => (
                                                    <span
                                                        key={index}
                                                        className="inline-flex items-center px-2 py-1 rounded text-xs bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300"
                                                    >
                                                        {skill}
                                                    </span>
                                                ))}
                                                {skills.length > 5 && (
                                                    <span className={`text-xs ${theme === 'light' ? 'text-gray-500' : 'text-gray-400'}`}>
                                                        +{skills.length - 5} more
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex flex-col sm:flex-row gap-4 pt-6">
                                        <button
                                            type="button"
                                            onClick={() => setCurrentStep(2)}
                                            className={`px-6 py-3 border border-gray-300 ${theme === 'light' ? 'text-gray-700 hover:bg-gray-50' : 'text-gray-300 border-gray-600 hover:bg-gray-800'} rounded-md transition-colors duration-200 font-medium`}
                                        >
                                            Go Back
                                        </button>
                                        <button
                                            type="submit"
                                            onClick={handleSubmit}
                                            className="flex-1 px-6 py-3 bg-orange-500 text-white rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-all duration-200 font-medium shadow-sm"
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