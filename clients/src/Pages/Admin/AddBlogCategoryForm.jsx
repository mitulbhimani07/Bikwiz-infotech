import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { FaExclamationTriangle, FaTag, FaPlus } from 'react-icons/fa';
import logo from '../../assets/images/logo.png';
import logo2 from '../../assets/images/logo2.png';

export default function AddBlogCategoryForm() {
    const [theme, setTheme] = useState('light');
    const [errors, setErrors] = useState({
        categoryName: ''
    });

    const [categoryData, setCategoryData] = useState({
        categoryName: ''
    });

    const validateForm = () => {
        let valid = true;
        const newErrors = {
            categoryName: ''
        };

        if (!categoryData.categoryName.trim()) {
            newErrors.categoryName = 'Category name is required';
            valid = false;
        } else if (categoryData.categoryName.length < 3) {
            newErrors.categoryName = 'Category name must be at least 3 characters';
            valid = false;
        } else if (categoryData.categoryName.length > 50) {
            newErrors.categoryName = 'Category name must be less than 50 characters';
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCategoryData({ ...categoryData, [name]: value });
        
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors({ ...errors, [name]: '' });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) {
            return;
        }

        try {
            // Replace with your API call
            // const res = await CreateBlogCategory(categoryData);
            
            console.log("Category Data:", categoryData);
            toast.success("Blog category created successfully!");
            
            // Reset form
            setCategoryData({
                categoryName: ''
            });
            
        } catch (error) {
            console.log("Error creating category:", error);
            toast.error("Failed to create blog category");
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
    const pageBgColor = theme === 'light' ? 'bg-white' : 'bg-gray-950';
    const headerBg = theme === 'light' ? 'bg-white' : 'bg-gray-950';

    return (
        <>
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
                <div className={`max-w-2xl mx-auto p-8 rounded-lg ${bgColor} ${textColor} transition-colors duration-300 `}>
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 dark:bg-orange-900 rounded-full mb-4">
                            <FaTag className="w-8 h-8 text-orange-600 dark:text-orange-400" />
                        </div>
                        <h2 className="text-3xl font-bold">Add New Blog Category</h2>
                        <p className={`mt-2 ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
                            Create a new category to organize your blog posts
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Category Name Field */}
                        <div>
                            <label htmlFor="categoryName" className="block text-sm font-medium mb-2">
                                <FaTag className="inline mr-2" />
                                Category Name
                            </label>
                            <input
                                id="categoryName"
                                type="text"
                                name="categoryName"
                                value={categoryData.categoryName}
                                onChange={handleInputChange}
                                className={`appearance-none block w-full px-4 py-3 border ${
                                    errors.categoryName ? "border-red-500" : inputBorderColor
                                } rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 ${inputBgColor} transition-colors duration-200 text-lg`}
                                placeholder="Enter category name (e.g., Freelancers, News)"
                                maxLength="50"
                            />
                            {errors.categoryName && (
                                <div className="flex items-center mt-2 text-sm text-red-600">
                                    <FaExclamationTriangle className="w-4 h-4 mr-1" />
                                    <span>{errors.categoryName}</span>
                                </div>
                            )}
                            <p className={`mt-2 text-sm ${theme === 'light' ? 'text-gray-500' : 'text-gray-400'}`}>
                                {categoryData.categoryName.length}/50 characters
                            </p>
                        </div>

                        {/* Submit Button */}
                        <div className="pt-6">
                            <button
                                type="submit"
                                disabled={!categoryData.categoryName.trim()}
                                className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md text-sm font-medium text-white bg-orange-500 hover:bg-orange-600 disabled:bg-gray-400 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors duration-200"
                            >
                                <FaPlus className="w-4 h-4 mr-2" />
                                Add Category
                            </button>
                        </div>

                        {/* Cancel Button */}
                        <div>
                            <Link to="/admin/categories">
                                <button
                                    type="button"
                                    className={`w-full flex justify-center py-3 px-4 border ${inputBorderColor} rounded-md text-sm font-medium ${textColor} ${inputBgColor} hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors duration-200`}
                                >
                                    Cancel
                                </button>
                            </Link>
                        </div>
                    </form>

                    {/* Help Text */}
                    <div className={`mt-8 p-4 rounded-lg ${theme === 'light' ? 'bg-gray-50' : 'bg-gray-800'} border ${inputBorderColor}`}>
                        <h3 className="text-sm font-medium mb-2">💡 Tips for creating categories:</h3>
                        <ul className={`text-sm ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'} space-y-1`}>
                            <li>• Keep category names short and descriptive</li>
                            <li>• Use consistent naming conventions</li>
                            <li>• Avoid creating too many similar categories</li>
                            <li>• Think about how readers will search for content</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}