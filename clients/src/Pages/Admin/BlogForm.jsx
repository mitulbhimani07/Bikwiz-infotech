import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { FaExclamationTriangle, FaUpload, FaCalendarAlt, FaUser, FaImage } from 'react-icons/fa';
import logo from '../../assets/images/logo.png';
import logo2 from '../../assets/images/logo2.png';

// For rich text editor, you can install and import:
// import ReactQuill from 'react-quill';
// import 'react-quill/dist/quill.snow.css';

export default function BlogForm() {
    const [theme, setTheme] = useState('light');
    const [errors, setErrors] = useState({
        image: '',
        category: '',
        title: '',
        profileImage: '',
        bloggerName: '',
        blogDate: '',
        description: ''
    });

    const [blogData, setBlogData] = useState({
        image: null,
        category: '',
        title: '',
        profileImage: null,
        bloggerName: '',
        blogDate: '',
        description: ''
    });

    const [imagePreview, setImagePreview] = useState(null);
    const [profileImagePreview, setProfileImagePreview] = useState(null);

    const categories = [
        'Technology',
        'Business',
        'Health & Fitness',
        'Travel',
        'Food & Cooking',
        'Lifestyle',
        'Fashion',
        'Education',
        'Entertainment',
        'Sports',
        'Finance',
        'Marketing',
        'Design',
        'Photography',
        'Personal Development'
    ];

    const validateForm = () => {
        let valid = true;
        const newErrors = {
            image: '',
            category: '',
            title: '',
            profileImage: '',
            bloggerName: '',
            blogDate: '',
            description: ''
        };

        if (!blogData.image) {
            newErrors.image = 'Blog image is required';
            valid = false;
        }

        if (!blogData.category) {
            newErrors.category = 'Please select a category';
            valid = false;
        }

        if (!blogData.title.trim()) {
            newErrors.title = 'Blog title is required';
            valid = false;
        } else if (blogData.title.length < 10) {
            newErrors.title = 'Title must be at least 10 characters';
            valid = false;
        }

        if (!blogData.profileImage) {
            newErrors.profileImage = 'Blogger profile image is required';
            valid = false;
        }

        if (!blogData.bloggerName.trim()) {
            newErrors.bloggerName = 'Blogger name is required';
            valid = false;
        }

        if (!blogData.blogDate) {
            newErrors.blogDate = 'Blog date is required';
            valid = false;
        }

        if (!blogData.description.trim()) {
            newErrors.description = 'Blog description is required';
            valid = false;
        } else if (blogData.description.length < 50) {
            newErrors.description = 'Description must be at least 50 characters';
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setBlogData({ ...blogData, [name]: value });
    };

    const handleFileChange = (e, fieldName) => {
        const file = e.target.files[0];
        if (file) {
            setBlogData({ ...blogData, [fieldName]: file });
            
            // Create preview
            const reader = new FileReader();
            reader.onloadend = () => {
                if (fieldName === 'image') {
                    setImagePreview(reader.result);
                } else if (fieldName === 'profileImage') {
                    setProfileImagePreview(reader.result);
                }
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) {
            return;
        }

        try {
            // Create FormData for file upload
            const formData = new FormData();
            formData.append('image', blogData.image);
            formData.append('profileImage', blogData.profileImage);
            formData.append('category', blogData.category);
            formData.append('title', blogData.title);
            formData.append('bloggerName', blogData.bloggerName);
            formData.append('blogDate', blogData.blogDate);
            formData.append('description', blogData.description);

            // Replace with your API call
            // const res = await CreateBlog(formData);
            
            console.log("Blog Data:", blogData);
            toast.success("Blog created successfully!");
            
            // Reset form
            setBlogData({
                image: null,
                category: '',
                title: '',
                profileImage: null,
                bloggerName: '',
                blogDate: '',
                description: ''
            });
            setImagePreview(null);
            setProfileImagePreview(null);
            
        } catch (error) {
            console.log("Error creating blog:", error);
            toast.error("Failed to create blog");
        }
    };

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    // Dynamic styles based on theme
    const bgColor = theme === 'light' ? 'bg-white' : 'bg-gray-950';
    const textColor = theme === 'light' ? 'text-gray-900' : 'text-white';
    const inputBgColor = theme === 'light' ? 'bg-white' : 'bg-gray-800';
    const inputBorderColor = theme === 'light' ? 'border-gray-300' : 'border-gray-700';
    const pageBgColor = theme === 'light' ? 'bg-white-' : 'bg-gray-950';
    const borderColor = theme === 'light' ? 'border-gray-200' : 'border-gray-700';
    const headerBg = theme === 'light' ? 'bg-white' : 'bg-gray-950';

    return (
        <>
            <header className={`${headerBg} ${textColor}  transition-colors duration-300 `}>
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

            <div className={`min-h-screen ${pageBgColor} px-4 sm:px-6 lg:px-8 py-12 transition-colors duration-300`}>
                <div className={`max-w-4xl mx-auto p-8 rounded-lg  ${bgColor} ${textColor} transition-colors duration-300`}>
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold">Create New Blog Post</h2>
                        <p className={`mt-2 ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
                            Share your thoughts and expertise with the world
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Blog Image Upload */}
                        <div>
                            <label className="block text-sm font-medium mb-2">
                                <FaImage className="inline mr-2" />
                                Blog Featured Image
                            </label>
                            <div className={`border-2 border-dashed ${inputBorderColor} rounded-lg p-6 text-center hover:border-orange-500 transition-colors duration-200`}>
                                {imagePreview ? (
                                    <div className="relative">
                                        <img src={imagePreview} alt="Preview" className="mx-auto max-h-48 rounded-lg" />
                                        <button
                                            type="button"
                                            onClick={() => {
                                                setImagePreview(null);
                                                setBlogData({ ...blogData, image: null });
                                            }}
                                            className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                                        >
                                            ×
                                        </button>
                                    </div>
                                ) : (
                                    <div>
                                        <FaUpload className="mx-auto h-12 w-12 text-gray-400" />
                                        <div className="mt-4">
                                            <label htmlFor="blogImage" className="cursor-pointer">
                                                <span className="mt-2 block text-sm font-medium text-orange-500">
                                                    Upload blog image
                                                </span>
                                                <input
                                                    id="blogImage"
                                                    type="file"
                                                    accept="image/*"
                                                    onChange={(e) => handleFileChange(e, 'image')}
                                                    className="hidden"
                                                />
                                            </label>
                                        </div>
                                        <p className="mt-2 text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                                    </div>
                                )}
                            </div>
                            {errors.image && (
                                <div className="flex items-center mt-1 text-sm text-red-700">
                                    <FaExclamationTriangle className="w-4 h-4 mr-1" />
                                    <span>{errors.image}</span>
                                </div>
                            )}
                        </div>

                        {/* Category and Title Row */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="category" className="block text-sm font-medium mb-2">
                                    Category
                                </label>
                                <select
                                    id="category"
                                    name="category"
                                    value={blogData.category}
                                    onChange={handleInputChange}
                                    className={`appearance-none block w-full px-3 py-3 border ${errors.category ? "border-red-700" : inputBorderColor} rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 ${inputBgColor} transition-colors duration-200`}
                                >
                                    <option value="">Select a category</option>
                                    {categories.map((category) => (
                                        <option key={category} value={category}>
                                            {category}
                                        </option>
                                    ))}
                                </select>
                                {errors.category && (
                                    <div className="flex items-center mt-1 text-sm text-red-700">
                                        <FaExclamationTriangle className="w-4 h-4 mr-1" />
                                        <span>{errors.category}</span>
                                    </div>
                                )}
                            </div>

                            <div>
                                <label htmlFor="title" className="block text-sm font-medium mb-2">
                                    Blog Title
                                </label>
                                <input
                                    id="title"
                                    type="text"
                                    name="title"
                                    value={blogData.title}
                                    onChange={handleInputChange}
                                    className={`appearance-none block w-full px-3 py-3 border ${errors.title ? "border-red-700" : inputBorderColor} rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 ${inputBgColor} transition-colors duration-200`}
                                    placeholder="Enter engaging blog title..."
                                />
                                {errors.title && (
                                    <div className="flex items-center mt-1 text-sm text-red-700">
                                        <FaExclamationTriangle className="w-4 h-4 mr-1" />
                                        <span>{errors.title}</span>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Blogger Details Row */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div>
                                <label className="block text-sm font-medium mb-2">
                                    <FaUser className="inline mr-2" />
                                    Blogger Profile Image
                                </label>
                                <div className={`border-2 border-dashed ${inputBorderColor} rounded-lg p-4 text-center hover:border-orange-500 transition-colors duration-200`}>
                                    {profileImagePreview ? (
                                        <div className="relative">
                                            <img src={profileImagePreview} alt="Profile Preview" className="mx-auto w-16 h-16 rounded-full object-cover" />
                                            <button
                                                type="button"
                                                onClick={() => {
                                                    setProfileImagePreview(null);
                                                    setBlogData({ ...blogData, profileImage: null });
                                                }}
                                                className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-red-600 text-xs"
                                            >
                                                ×
                                            </button>
                                        </div>
                                    ) : (
                                        <div>
                                            <FaUser className="mx-auto h-8 w-8 text-gray-400" />
                                            <label htmlFor="profileImage" className="cursor-pointer">
                                                <span className="mt-2 block text-xs font-medium text-orange-500">
                                                    Upload profile
                                                </span>
                                                <input
                                                    id="profileImage"
                                                    type="file"
                                                    accept="image/*"
                                                    onChange={(e) => handleFileChange(e, 'profileImage')}
                                                    className="hidden"
                                                />
                                            </label>
                                        </div>
                                    )}
                                </div>
                                {errors.profileImage && (
                                    <div className="flex items-center mt-1 text-sm text-red-700">
                                        <FaExclamationTriangle className="w-4 h-4 mr-1" />
                                        <span>{errors.profileImage}</span>
                                    </div>
                                )}
                            </div>

                            <div>
                                <label htmlFor="bloggerName" className="block text-sm font-medium mb-2">
                                    Blogger Name
                                </label>
                                <input
                                    id="bloggerName"
                                    type="text"
                                    name="bloggerName"
                                    value={blogData.bloggerName}
                                    onChange={handleInputChange}
                                    className={`appearance-none block w-full px-3 py-3 border ${errors.bloggerName ? "border-red-700" : inputBorderColor} rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 ${inputBgColor} transition-colors duration-200`}
                                    placeholder="Author name"
                                />
                                {errors.bloggerName && (
                                    <div className="flex items-center mt-1 text-sm text-red-700">
                                        <FaExclamationTriangle className="w-4 h-4 mr-1" />
                                        <span>{errors.bloggerName}</span>
                                    </div>
                                )}
                            </div>

                            <div>
                                <label htmlFor="blogDate" className="block text-sm font-medium mb-2">
                                    <FaCalendarAlt className="inline mr-2" />
                                    Publish Date
                                </label>
                                <input
                                    id="blogDate"
                                    type="date"
                                    name="blogDate"
                                    value={blogData.blogDate}
                                    onChange={handleInputChange}
                                    className={`appearance-none block w-full px-3 py-3 border ${errors.blogDate ? "border-red-700" : inputBorderColor} rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 ${inputBgColor} transition-colors duration-200`}
                                />
                                {errors.blogDate && (
                                    <div className="flex items-center mt-1 text-sm text-red-700">
                                        <FaExclamationTriangle className="w-4 h-4 mr-1" />
                                        <span>{errors.blogDate}</span>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Description Field */}
                        <div>
                            <label htmlFor="description" className="block text-sm font-medium mb-2">
                                Blog Content
                            </label>
                            
                            {/* Basic Textarea - Replace with Rich Text Editor */}
                            <textarea
                                id="description"
                                name="description"
                                rows="8"
                                value={blogData.description}
                                onChange={handleInputChange}
                                className={`appearance-none block w-full px-3 py-3 border ${errors.description ? "border-red-700" : inputBorderColor} rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 ${inputBgColor} transition-colors duration-200 resize-vertical`}
                                placeholder="Write your blog content here... (For rich text editing, consider integrating React Quill or similar)"
                            />
                            
                            {/* Rich Text Editor Alternative - Uncomment if using React Quill */}
                            {/*
                            <ReactQuill
                                theme="snow"
                                value={blogData.description}
                                onChange={(content) => setBlogData({ ...blogData, description: content })}
                                modules={{
                                    toolbar: [
                                        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                                        ['bold', 'italic', 'underline', 'strike'],
                                        [{ 'color': [] }, { 'background': [] }],
                                        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                                        [{ 'indent': '-1'}, { 'indent': '+1' }],
                                        ['link', 'image'],
                                        ['clean']
                                    ],
                                }}
                                formats={[
                                    'header', 'bold', 'italic', 'underline', 'strike',
                                    'color', 'background', 'list', 'bullet', 'indent',
                                    'link', 'image'
                                ]}
                                className={`${inputBgColor} ${textColor}`}
                                style={{ height: '200px', marginBottom: '50px' }}
                            />
                            */}
                            
                            {errors.description && (
                                <div className="flex items-center mt-1 text-sm text-red-700">
                                    <FaExclamationTriangle className="w-4 h-4 mr-1" />
                                    <span>{errors.description}</span>
                                </div>
                            )}
                            
                            <div className="mt-2 text-sm text-gray-500">
                                <p>💡 For rich text editing with colors and formatting, consider adding:</p>
                                <ul className="list-disc list-inside mt-1 space-y-1">
                                    <li><strong>React Quill:</strong> npm install react-quill</li>
                                    <li><strong>Draft.js:</strong> npm install draft-js</li>
                                    <li><strong>TinyMCE:</strong> npm install @tinymce/tinymce-react</li>
                                    <li><strong>Slate.js:</strong> npm install slate slate-react</li>
                                </ul>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="pt-6">
                            <button
                                type="submit"
                                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md text-sm font-medium text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors duration-200"
                            >
                                Publish Blog Post
                            </button>
                        </div>

                        {/* Save as Draft Button */}
                        <div>
                            <button
                                type="button"
                                className={`w-full flex justify-center py-3 px-4 border ${inputBorderColor} rounded-md text-sm font-medium ${textColor} ${inputBgColor} hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors duration-200`}
                            >
                                Save as Draft
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}