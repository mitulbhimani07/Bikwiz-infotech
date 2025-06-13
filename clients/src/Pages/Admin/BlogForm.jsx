import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { FaExclamationTriangle, FaUpload, FaCalendarAlt, FaUser, FaImage } from 'react-icons/fa';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import logo from '../../assets/images/logo.png';
import logo2 from '../../assets/images/logo2.png';
import { AddBlog, Getcategory } from '../../API/Api';

export default function BlogForm() {
    const [theme, setTheme] = useState('light');
    const [errors, setErrors] = useState({
        img: '',
        category: '',
        title: '',
        profileImg: '',
        bloggerName: '',
        publishDate: '',
        content: ''
    });

    const [blogData, setBlogData] = useState({
        img: null,
        category: '',
        title: '',
        profileImg: null,
        bloggerName: '',
        publishDate: '',
        content: ''
    });

    const [imagePreview, setImagePreview] = useState(null);
    const [profileImagePreview, setProfileImagePreview] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [categories, setCategories] = useState([]);
    const [formKey, setFormKey] = useState(Date.now()); // Key to force form reset

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const res = await Getcategory();
                setCategories(res.data);
            } catch (error) {
                toast.error("An unexpected error occurred");
                console.error("Error:", error.message);
            }
        };

        fetchCategories();
    }, []);

    const quillModules = {
        toolbar: [
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
            [{ 'font': [] }],
            [{ 'size': ['small', false, 'large', 'huge'] }],
            ['bold', 'italic', 'underline', 'strike'],
            [{ 'color': [] }, { 'background': [] }],
            [{ 'script': 'sub' }, { 'script': 'super' }],
            ['blockquote', 'code-block'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            [{ 'indent': '-1' }, { 'indent': '+1' }],
            [{ 'direction': 'rtl' }],
            [{ 'align': [] }],
            ['link', 'image', 'video'],
            ['clean']
        ],
    };

    const quillFormats = [
        'header', 'font', 'size',
        'bold', 'italic', 'underline', 'strike',
        'color', 'background',
        'script',
        'blockquote', 'code-block',
        'list', 'bullet', 'indent',
        'direction', 'align',
        'link', 'image', 'video'
    ];

    const validateForm = () => {
        let valid = true;
        const newErrors = {
            img: '',
            category: '',
            title: '',
            profileImg: '',
            bloggerName: '',
            publishDate: '',
            content: ''
        };

        if (!blogData.img) {
            newErrors.img = 'Blog image is required';
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

        const strippedContent = blogData.content.replace(/<[^>]*>/g, '').trim();
        if (!strippedContent || strippedContent === '') {
            newErrors.content = 'Blog content is required';
            valid = false;
        } else if (strippedContent.length < 50) {
            newErrors.content = 'Content must be at least 50 characters';
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setBlogData({ ...blogData, [name]: value });
        
        if (errors[name]) {
            setErrors({ ...errors, [name]: '' });
        }
    };

    const handleContentChange = (content) => {
        setBlogData({ ...blogData, content: content });
        
        if (errors.content) {
            setErrors({ ...errors, content: '' });
        }
    };

    const handleFileChange = (e, fieldName) => {
        const file = e.target.files[0];
        if (file) {
            setBlogData({ ...blogData, [fieldName]: file });

            const reader = new FileReader();
            reader.onloadend = () => {
                if (fieldName === 'img') {
                    setImagePreview(reader.result);
                } else if (fieldName === 'profileImg') {
                    setProfileImagePreview(reader.result);
                }
            };
            reader.readAsDataURL(file);
            
            if (errors[fieldName]) {
                setErrors({ ...errors, [fieldName]: '' });
            }
        }
    };

    const resetForm = () => {
        setBlogData({
            img: null,
            category: '',
            title: '',
            profileImg: null,
            bloggerName: '',
            publishDate: '',
            content: ''
        });
        setImagePreview(null);
        setProfileImagePreview(null);
        setErrors({
            img: '',
            category: '',
            title: '',
            profileImg: '',
            bloggerName: '',
            publishDate: '',
            content: ''
        });
        setFormKey(Date.now()); // Update key to force re-render of file inputs
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!validateForm()) {
            toast.error("Please fill in all required fields");
            return;
        }

        setIsSubmitting(true);

        try {
            const formData = new FormData();
            
            if (blogData.img) formData.append('img', blogData.img);
            if (blogData.profileImg) formData.append('profileImg', blogData.profileImg);
            formData.append('category', blogData.category);
            formData.append('title', blogData.title);
            formData.append('bloggerName', blogData.bloggerName);
            formData.append('publishDate', blogData.publishDate);
            formData.append('content', blogData.content);

            const response = await AddBlog(formData);
            
            toast.success("Blog created successfully!");
            resetForm();

        } catch (error) {
            console.error("Error creating blog:", error);
            if (error.response) {
                toast.error(error.response.data?.message || 'Failed to create blog');
            } else if (error.request) {
                toast.error("Network error. Please check your connection.");
            } else {
                toast.error("An unexpected error occurred");
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleSaveAsDraft = async () => {
        try {
            const draftData = new FormData();
            
            if (blogData.img) draftData.append('img', blogData.img);
            if (blogData.profileImg) draftData.append('profileImg', blogData.profileImg);
            draftData.append('category', blogData.category);
            draftData.append('title', blogData.title);
            draftData.append('bloggerName', blogData.bloggerName);
            draftData.append('publishDate', blogData.publishDate);
            draftData.append('content', blogData.content);
            draftData.append('isDraft', 'true');
            draftData.append('savedAt', new Date().toISOString());

            toast.success("Blog saved as draft!");
            resetForm();

        } catch (error) {
            console.error("Error saving draft:", error);
            toast.error("Failed to save draft");
        }
    };

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    const bgColor = theme === 'light' ? 'bg-white' : 'bg-gray-950';
    const textColor = theme === 'light' ? 'text-gray-900' : 'text-white';
    const inputBgColor = theme === 'light' ? 'bg-white' : 'bg-gray-800';
    const inputBorderColor = theme === 'light' ? 'border-gray-300' : 'border-gray-700';
    const pageBgColor = theme === 'light' ? 'bg-white' : 'bg-gray-950';
    const borderColor = theme === 'light' ? 'border-gray-200' : 'border-gray-700';
    const headerBg = theme === 'light' ? 'bg-white' : 'bg-gray-950';

    return (
        <>
            <style jsx>{`
                .ql-toolbar {
                    background-color: ${theme === 'light' ? '#f9fafb' : '#374151'} !important;
                    border-color: ${theme === 'light' ? '#d1d5db' : '#4b5563'} !important;
                    border-top-left-radius: 0.375rem;
                    border-top-right-radius: 0.375rem;
                }
                .ql-container {
                    background-color: ${theme === 'light' ? '#ffffff' : '#1f2937'} !important;
                    color: ${theme === 'light' ? '#111827' : '#ffffff'} !important;
                    border-color: ${theme === 'light' ? '#d1d5db' : '#4b5563'} !important;
                    border-bottom-left-radius: 0.375rem;
                    border-bottom-right-radius: 0.375rem;
                }
                .ql-editor {
                    color: ${theme === 'light' ? '#111827' : '#ffffff'} !important;
                    min-height: 200px;
                }
                .ql-stroke {
                    stroke: ${theme === 'light' ? '#374151' : '#d1d5db'} !important;
                }
                .ql-fill {
                    fill: ${theme === 'light' ? '#374151' : '#d1d5db'} !important;
                }
                .ql-picker-label {
                    color: ${theme === 'light' ? '#374151' : '#d1d5db'} !important;
                }
                .ql-picker-options {
                    background-color: ${theme === 'light' ? '#ffffff' : '#374151'} !important;
                    border-color: ${theme === 'light' ? '#d1d5db' : '#4b5563'} !important;
                }
                .ql-picker-item {
                    color: ${theme === 'light' ? '#374151' : '#d1d5db'} !important;
                }
                .ql-picker-item:hover {
                    background-color: ${theme === 'light' ? '#f3f4f6' : '#4b5563'} !important;
                }
            `}</style>

            <header className={`${headerBg} ${textColor} transition-colors duration-300`}>
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
                <div key={formKey} className={`max-w-4xl mx-auto p-8 rounded-lg ${bgColor} ${textColor} transition-colors duration-300`}>
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
                            <div className={`border-2 border-dashed ${errors.img ? 'border-red-500' : inputBorderColor} rounded-lg p-6 text-center hover:border-orange-500 transition-colors duration-200`}>
                                {imagePreview ? (
                                    <div className="relative">
                                        <img src={imagePreview} alt="Preview" className="mx-auto max-h-48 rounded-lg" />
                                        <button
                                            type="button"
                                            onClick={() => {
                                                setImagePreview(null);
                                                setBlogData({ ...blogData, img: null });
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
                                                    name='img'
                                                    accept="image/*"
                                                    onChange={(e) => handleFileChange(e, 'img')}
                                                    className="hidden"
                                                    key={blogData.img ? blogData.img.name : 'default-img-key'}
                                                />
                                            </label>
                                        </div>
                                        <p className="mt-2 text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                                    </div>
                                )}
                            </div>
                            {errors.img && (
                                <div className="flex items-center mt-1 text-sm text-red-700">
                                    <FaExclamationTriangle className="w-4 h-4 mr-1" />
                                    <span>{errors.img}</span>
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
                                        <option key={category._id} value={category._id}>
                                            {category.categoryname}
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
                                <div className={`border-2 border-dashed ${errors.profileImg ? 'border-red-500' : inputBorderColor} rounded-lg p-4 text-center hover:border-orange-500 transition-colors duration-200`}>
                                    {profileImagePreview ? (
                                        <div className="relative">
                                            <img src={profileImagePreview} alt="Profile Preview" className="mx-auto w-16 h-16 rounded-full object-cover" />
                                            <button
                                                type="button"
                                                onClick={() => {
                                                    setProfileImagePreview(null);
                                                    setBlogData({ ...blogData, profileImg: null });
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
                                                    name="profileImg"
                                                    accept="image/*"
                                                    onChange={(e) => handleFileChange(e, 'profileImg')}
                                                    className="hidden"
                                                    key={blogData.profileImg ? blogData.profileImg.name : 'default-profile-key'}
                                                />
                                            </label>
                                        </div>
                                    )}
                                </div>
                                {errors.profileImg && (
                                    <div className="flex items-center mt-1 text-sm text-red-700">
                                        <FaExclamationTriangle className="w-4 h-4 mr-1" />
                                        <span>{errors.profileImg}</span>
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
                                <label htmlFor="publishDate" className="block text-sm font-medium mb-2">
                                    <FaCalendarAlt className="inline mr-2" />
                                    Publish Date
                                </label>
                                <input
                                    id="publishDate"
                                    type="date"
                                    name="publishDate"
                                    value={blogData.publishDate}
                                    onChange={handleInputChange}
                                    className={`appearance-none block w-full px-3 py-3 border ${errors.publishDate ? "border-red-700" : inputBorderColor} rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 ${inputBgColor} transition-colors duration-200`}
                                />
                                {errors.publishDate && (
                                    <div className="flex items-center mt-1 text-sm text-red-700">
                                        <FaExclamationTriangle className="w-4 h-4 mr-1" />
                                        <span>{errors.publishDate}</span>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Blog Content with React Quill */}
                        <div>
                            <label className="block text-sm font-medium mb-2">
                                Blog Content
                            </label>

                            <div className={`${errors.content ? 'border-2 border-red-500 rounded-md' : ''}`}>
                                <ReactQuill
                                    theme="snow"
                                    value={blogData.content}
                                    onChange={handleContentChange}
                                    modules={quillModules}
                                    formats={quillFormats}
                                    placeholder="Write your blog content here with rich text formatting..."
                                    style={{ minHeight: '250px' }}
                                />
                            </div>

                            {errors.content && (
                                <div className="flex items-center mt-2 text-sm text-red-700">
                                    <FaExclamationTriangle className="w-4 h-4 mr-1" />
                                    <span>{errors.content}</span>
                                </div>
                            )}
                        </div>

                        {/* Submit Buttons */}
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                            <div className="pt-6">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`w-full flex justify-center py-3 px-4 rounded-md text-sm font-medium text-white border-orange-500 border bg-orange-500 hover:bg-white hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors duration-200 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                                >
                                    {isSubmitting ? 'Publishing...' : 'Publish Blog Post'}
                                </button>
                            </div>

                            <div className='pt-6'>
                                <button
                                    type="button"
                                    onClick={handleSaveAsDraft}
                                    disabled={isSubmitting}
                                    className={`w-full flex justify-center py-3 px-4 border ${inputBorderColor} rounded-md text-sm font-medium text-orange-500 border-orange-500 border ${inputBgColor} hover:bg-orange-500 dark:hover:bg-orange-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors duration-200 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                                >
                                    Save as Draft
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}