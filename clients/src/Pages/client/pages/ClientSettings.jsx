import React, { useState } from 'react';
import { Upload, Bold, Italic, Underline, List, Link } from 'lucide-react';
import ClientSidbar from '../navbar/ClientSidbar';
import ClientHeader from '../navbar/ClientHeader';

function ClientSettings() {
    const [activeTab, setActiveTab] = useState('Overview');
    const [formData, setFormData] = useState({
        companyName: 'Nutrient',
        website: 'https://www.bikwiz.com',
        location: ['Surat', 'Mumbai', 'Pune'],
        employees: '1-50',
        industry: 'Technology',
        dateMonth: '31',
        dateDay: 'July',
        dateYear: '2024',
        techStack: ['HTML5', 'CSS3', 'JavaScript'],
        description: 'Bikwiz is part of the Information Technology Industry. We believe ourselves to be experienced and HR and want to get people. Nutrient improves access to all its business and guarantee $1-50 million in sales.'
    });

    const tabs = ['Overview', 'Social Links', 'Team'];

    const handleInputChange = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const removeTag = (field, tagToRemove) => {
        setFormData(prev => ({
            ...prev,
            [field]: prev[field].filter(tag => tag !== tagToRemove)
        }));
    };

    const addTag = (field, newTag) => {
        if (newTag && !formData[field].includes(newTag)) {
            setFormData(prev => ({
                ...prev,
                [field]: [...prev[field], newTag]
            }));
        }
    };

    return (
        <div className="min-h-screen bg-[#fff0e5] flex">
            {/* Sidebar */}
            <ClientSidbar />

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                {/* Header */}
                <ClientHeader />

                <div className="flex">
                    {/* Sidebar Space */}

                    {/* Main Content */}
                    <div className="flex-1 p-8">
                        {/* Page Header */}
                        <div className="mb-8">
                            <h1 className="text-2xl font-semibold text-orange-600 mb-2">Settings</h1>
                        </div>

                        {/* Settings Section */}
                        <div className="bg-white rounded-lg shadow-sm pl-12 pr-36 ">
                            {/* Tabs */}
                            <div className="border-b-2 border-orange-200  pt-6">
                                <nav className="flex space-x-8">
                                    {tabs.map((tab) => (
                                        <button
                                            key={tab}
                                            onClick={() => setActiveTab(tab)}
                                            className={`py-2  border-b-2 font-medium text-[16px] ${activeTab === tab
                                                ? 'border-b-4 pt-2  border-orange-500 text-black font-semibold'
                                                : 'border-transparent text-gray-400 hover:text-gray-700 hover:border-gray-300'
                                                }`}
                                        >
                                            {tab}
                                        </button>
                                    ))}
                                </nav>
                            </div>

                            {/* Tab Content */}
                            <div className=" py-8">
                                {activeTab === 'Overview' && (
                                    <div className="space-y-8">
                                        {/* Basic Information */}
                                        <div className='border-b-2 border-orange-200 pb-3 mb-6'>
                                            <h3 className="text-[20px] font-semibold text-gray-900 mb-2">Basic Information</h3>
                                            <p className="text-[16px] text-gray-600 mb-4">This is company information that you can update anytime.</p>
                                        </div>

                                        {/* Company Logo */}
                                        <div className='flex justify-between border-b-2 border-orange-200 pb-3 mb-8'>
                                            <div>

                                                <h4 className="text-[20px] font-semibold text-gray-900 mb-2">Company Logo</h4>
                                                <p className="text-[16px] text-gray-600 mb-4">This image will be shown publicly as your profile picture</p>
                                            </div>
                                            <div className="flex  items-center space-x-6 pr-[100px]">
                                                <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center">
                                                    <span className="text-white text-2xl font-bold">N</span>
                                                </div>
                                                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                                                    <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                                                    <p className="text-orange-500 font-medium">Click to upload or drag and drop</p>
                                                    <p className="text-sm text-gray-500">SVG, PNG, JPG or GIF (max. 800x400px)</p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Company Details */}
                                        <div className="grid grid-cols-2 gap-6">
                                            <div>
                                                <h4 className="font-medium text-gray-900 mb-4">Company Details</h4>
                                                <p className="text-sm text-gray-600 mb-4">Introduce your company core info and uniquely to identify like company details</p>

                                                <div className="space-y-4">
                                                    <div>
                                                        <label className="block text-sm font-medium text-gray-700 mb-1">Company Name:</label>
                                                        <input
                                                            type="text"
                                                            value={formData.companyName}
                                                            onChange={(e) => handleInputChange('companyName', e.target.value)}
                                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                                                        />
                                                    </div>

                                                    <div>
                                                        <label className="block text-sm font-medium text-gray-700 mb-1">Website</label>
                                                        <input
                                                            type="url"
                                                            value={formData.website}
                                                            onChange={(e) => handleInputChange('website', e.target.value)}
                                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                                                        />
                                                    </div>

                                                    <div>
                                                        <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                                                        <div className="flex flex-wrap gap-2 p-2 border border-gray-300 rounded-lg">
                                                            {formData.location.map((loc, index) => (
                                                                <span key={index} className="inline-flex items-center px-2 py-1 bg-orange-100 text-orange-800 text-sm rounded">
                                                                    {loc}
                                                                    <button
                                                                        onClick={() => removeTag('location', loc)}
                                                                        className="ml-1 text-orange-600 hover:text-orange-800"
                                                                    >
                                                                        ×
                                                                    </button>
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </div>

                                                    <div className="grid grid-cols-2 gap-4">
                                                        <div>
                                                            <label className="block text-sm font-medium text-gray-700 mb-1">Employees</label>
                                                            <select
                                                                value={formData.employees}
                                                                onChange={(e) => handleInputChange('employees', e.target.value)}
                                                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                                                            >
                                                                <option>1-50</option>
                                                                <option>51-200</option>
                                                                <option>201-1000</option>
                                                                <option>1000+</option>
                                                            </select>
                                                        </div>

                                                        <div>
                                                            <label className="block text-sm font-medium text-gray-700 mb-1">Industry</label>
                                                            <select
                                                                value={formData.industry}
                                                                onChange={(e) => handleInputChange('industry', e.target.value)}
                                                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                                                            >
                                                                <option>Technology</option>
                                                                <option>Healthcare</option>
                                                                <option>Finance</option>
                                                                <option>Education</option>
                                                            </select>
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <label className="block text-sm font-medium text-gray-700 mb-1">Date Founded</label>
                                                        <div className="grid grid-cols-3 gap-2">
                                                            <select
                                                                value={formData.dateMonth}
                                                                onChange={(e) => handleInputChange('dateMonth', e.target.value)}
                                                                className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                                                            >
                                                                <option>31</option>
                                                                <option>1</option>
                                                                <option>15</option>
                                                            </select>
                                                            <select
                                                                value={formData.dateDay}
                                                                onChange={(e) => handleInputChange('dateDay', e.target.value)}
                                                                className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                                                            >
                                                                <option>July</option>
                                                                <option>January</option>
                                                                <option>December</option>
                                                            </select>
                                                            <select
                                                                value={formData.dateYear}
                                                                onChange={(e) => handleInputChange('dateYear', e.target.value)}
                                                                className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                                                            >
                                                                <option>2024</option>
                                                                <option>2023</option>
                                                                <option>2022</option>
                                                            </select>
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <label className="block text-sm font-medium text-gray-700 mb-1">Tech Stack</label>
                                                        <div className="flex flex-wrap gap-2 p-2 border border-gray-300 rounded-lg">
                                                            {formData.techStack.map((tech, index) => (
                                                                <span key={index} className="inline-flex items-center px-2 py-1 bg-orange-100 text-orange-800 text-sm rounded">
                                                                    {tech}
                                                                    <button
                                                                        onClick={() => removeTag('techStack', tech)}
                                                                        className="ml-1 text-orange-600 hover:text-orange-800"
                                                                    >
                                                                        ×
                                                                    </button>
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div>
                                                <div className="space-y-4">
                                                    <div>
                                                        <h4 className="font-medium text-gray-900 mb-2">About Company</h4>
                                                        <p className="text-sm text-gray-600 mb-4">Brief description for your company. URLs are hyperlinked.</p>
                                                    </div>

                                                    <div>
                                                        <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                                                        <div className="border border-gray-300 rounded-lg">
                                                            <div className="flex items-center space-x-2 p-2 border-b border-gray-200">
                                                                <button className="p-1 hover:bg-gray-100 rounded">
                                                                    <Bold className="w-4 h-4" />
                                                                </button>
                                                                <button className="p-1 hover:bg-gray-100 rounded">
                                                                    <Italic className="w-4 h-4" />
                                                                </button>
                                                                <button className="p-1 hover:bg-gray-100 rounded">
                                                                    <Underline className="w-4 h-4" />
                                                                </button>
                                                                <button className="p-1 hover:bg-gray-100 rounded">
                                                                    <List className="w-4 h-4" />
                                                                </button>
                                                                <button className="p-1 hover:bg-gray-100 rounded">
                                                                    <Link className="w-4 h-4" />
                                                                </button>
                                                            </div>
                                                            <textarea
                                                                value={formData.description}
                                                                onChange={(e) => handleInputChange('description', e.target.value)}
                                                                className="w-full p-3 resize-none focus:outline-none"
                                                                rows="6"
                                                                maxLength="500"
                                                            />
                                                            <div className="p-2 text-right text-sm text-gray-500 border-t border-gray-200">
                                                                Maximum 500 characters
                                                            </div>
                                                            <div className="p-2 text-right text-sm text-gray-500">
                                                                {formData.description.length}/500
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Save Button */}
                                        <div className="flex justify-end">
                                            <button className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600">
                                                Save Changes
                                            </button>
                                        </div>
                                    </div>
                                )}

                                {activeTab === 'Social Links' && (
                                    <div className="space-y-6">
                                        <div>
                                            <h3 className="text-lg font-medium text-gray-900 mb-2">Social Links</h3>
                                            <p className="text-sm text-gray-600 mb-6">Add your social media links to connect with your audience.</p>
                                        </div>

                                        <div className="space-y-4 max-w-md">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">LinkedIn</label>
                                                <input
                                                    type="url"
                                                    placeholder="https://linkedin.com/company/yourcompany"
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                                                />
                                            </div>

                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">Twitter</label>
                                                <input
                                                    type="url"
                                                    placeholder="https://twitter.com/yourcompany"
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                                                />
                                            </div>

                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">Facebook</label>
                                                <input
                                                    type="url"
                                                    placeholder="https://facebook.com/yourcompany"
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                                                />
                                            </div>

                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">Instagram</label>
                                                <input
                                                    type="url"
                                                    placeholder="https://instagram.com/yourcompany"
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                                                />
                                            </div>
                                        </div>

                                        <div className="flex justify-end">
                                            <button className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600">
                                                Save Changes
                                            </button>
                                        </div>
                                    </div>
                                )}

                                {activeTab === 'Team' && (
                                    <div className="space-y-6">
                                        <div>
                                            <h3 className="text-lg font-medium text-gray-900 mb-2">Team Members</h3>
                                            <p className="text-sm text-gray-600 mb-6">Manage your team members and their roles.</p>
                                        </div>

                                        <div className="bg-white border border-gray-200 rounded-lg">
                                            <div className="p-4 border-b border-gray-200">
                                                <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600">
                                                    Add Team Member
                                                </button>
                                            </div>

                                            <div className="p-4">
                                                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                                                    <div className="flex items-center space-x-3">
                                                        <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                                                            <span className="text-orange-600 font-medium">AK</span>
                                                        </div>
                                                        <div>
                                                            <p className="font-medium text-gray-900">Arushi Kumari</p>
                                                            <p className="text-sm text-gray-500">arushi@bikwiz.com</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center space-x-2">
                                                        <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Admin</span>
                                                        <button className="text-gray-400 hover:text-gray-600">⋯</button>
                                                    </div>
                                                </div>

                                                <div className="flex items-center justify-between py-3">
                                                    <div className="flex items-center space-x-3">
                                                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                                                            <span className="text-blue-600 font-medium">JD</span>
                                                        </div>
                                                        <div>
                                                            <p className="font-medium text-gray-900">John Doe</p>
                                                            <p className="text-sm text-gray-500">john@bikwiz.com</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center space-x-2">
                                                        <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Member</span>
                                                        <button className="text-gray-400 hover:text-gray-600">⋯</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ClientSettings;