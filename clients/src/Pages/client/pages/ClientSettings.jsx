import React, { useState } from 'react';
import { Upload, Bold, Italic, Underline, List, Link } from 'lucide-react';
import ClientSidbar from '../navbar/ClientSidbar';
import ClientHeader from '../navbar/ClientHeader';
import { Instagram, Linkedin, Grid3X3, Plus } from 'lucide-react';


function ClientSettings() {
    const [activeTab, setActiveTab] = useState('Overview');
    const [viewMode, setViewMode] = useState('grid');

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

    const teamMembers = [
        {
            id: 1,
            name: 'Célestin Gardinier',
            role: 'CEO & Co-Founder',
            image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
            instagram: '#',
            linkedin: '#'
        },
        {
            id: 2,
            name: 'Reynaud Colbert',
            role: 'Co-Founder',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
            instagram: '#',
            linkedin: '#'
        },
        {
            id: 3,
            name: 'Arienne Lyon',
            role: 'Managing Director',
            image: 'https://images.unsplash.com/photo-1494790108755-2616b612b586?w=150&h=150&fit=crop&crop=face',
            instagram: '#',
            linkedin: '#'
        },
        {
            id: 4,
            name: 'Bernard Alexander',
            role: 'Software Developer',
            image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=150&h=150&fit=crop&crop=face',
            instagram: '#',
            linkedin: '#'
        },
        {
            id: 5,
            name: 'Christine Jhonson',
            role: 'UI UX Designer',
            image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
            instagram: '#',
            linkedin: '#'
        },
        {
            id: 6,
            name: 'Aaron Morgan',
            role: 'Web Developer',
            image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
            instagram: '#',
            linkedin: '#'
        }
    ];


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
                        <div className="bg-white rounded-lg shadow-sm pl-8 pr-12 ">
                            {/* Tabs */}
                            <div className="border-b border-orange-200 pt-6">
                                <nav className="flex justify-start space-x-8 relative">
                                    {tabs.map((tab) => (
                                        <button
                                            key={tab}
                                            onClick={() => setActiveTab(tab)}
                                            className={`relative pb-2 text-[16px] font-medium transition-all duration-300 ${activeTab === tab
                                                    ? 'text-black font-semibold'
                                                    : 'text-gray-400 hover:text-gray-600'
                                                }`}
                                        >
                                            {tab}
                                            {activeTab === tab && (
                                                <span className="absolute -bottom-0 left-0 w-full h-1 rounded-t-full bg-orange-500" />
                                            )}
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
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-sm text-gray-800 px-6 py-10 max-w-6xl mx-auto">
                                            {/* Left Sidebar */}
                                            <div>
                                                <h4 className="font-semibold text-black mb-2">Company Details</h4>
                                                <p className="text-gray-600 text-sm">
                                                    Introduce your company core info quickly to users by fill up company details
                                                </p>
                                            </div>

                                            {/* Form Section */}
                                            <div className="md:col-span-2">
                                                <div className="grid grid-cols-1 gap-6">
                                                    {/* Company Name */}
                                                    <div>
                                                        <label className="block mb-1 font-medium text-gray-700">Company Name</label>
                                                        <input
                                                            type="text"
                                                            value={formData.companyName}
                                                            onChange={(e) => handleInputChange('companyName', e.target.value)}
                                                            className="w-full border border-orange-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-orange-400"
                                                        />
                                                    </div>

                                                    {/* Website */}
                                                    <div>
                                                        <label className="block mb-1 font-medium text-gray-700">Website</label>
                                                        <input
                                                            type="url"
                                                            value={formData.website}
                                                            onChange={(e) => handleInputChange('website', e.target.value)}
                                                            className="w-full border border-orange-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-orange-400"
                                                        />
                                                    </div>

                                                    {/* Location */}
                                                    <div>
                                                        <label className="block mb-1 font-medium text-gray-700">Location</label>
                                                        <div className="flex flex-wrap gap-2 border border-orange-300 rounded px-3 py-2">
                                                            {formData.location.map((loc, index) => (
                                                                <span key={index} className="inline-flex items-center bg-orange-100 text-orange-700 px-2 py-1 rounded text-sm">
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

                                                    {/* Employees + Industry */}
                                                    <div className="grid grid-cols-2 gap-4">
                                                        <div>
                                                            <label className="block mb-1 font-medium text-gray-700">Employee</label>
                                                            <select
                                                                value={formData.employees}
                                                                onChange={(e) => handleInputChange('employees', e.target.value)}
                                                                className="w-full border border-orange-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-orange-400"
                                                            >
                                                                <option>1 - 50</option>
                                                                <option>51 - 200</option>
                                                                <option>201 - 1000</option>
                                                                <option>1000+</option>
                                                            </select>
                                                        </div>
                                                        <div>
                                                            <label className="block mb-1 font-medium text-gray-700">Industry</label>
                                                            <select
                                                                value={formData.industry}
                                                                onChange={(e) => handleInputChange('industry', e.target.value)}
                                                                className="w-full border border-orange-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-orange-400"
                                                            >
                                                                <option>Technology</option>
                                                                <option>Finance</option>
                                                                <option>Healthcare</option>
                                                                <option>Education</option>
                                                            </select>
                                                        </div>
                                                    </div>

                                                    {/* Date Founded */}
                                                    <div>
                                                        <label className="block mb-1 font-medium text-gray-700">Date Founded</label>
                                                        <div className="grid grid-cols-3 gap-2">
                                                            <select
                                                                value={formData.dateDay}
                                                                onChange={(e) => handleInputChange('dateDay', e.target.value)}
                                                                className="border border-orange-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-orange-400"
                                                            >
                                                                <option>31</option>
                                                                <option>1</option>
                                                                <option>15</option>
                                                            </select>
                                                            <select
                                                                value={formData.dateMonth}
                                                                onChange={(e) => handleInputChange('dateMonth', e.target.value)}
                                                                className="border border-orange-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-orange-400"
                                                            >
                                                                <option>July</option>
                                                                <option>January</option>
                                                                <option>March</option>
                                                            </select>
                                                            <select
                                                                value={formData.dateYear}
                                                                onChange={(e) => handleInputChange('dateYear', e.target.value)}
                                                                className="border border-orange-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-orange-400"
                                                            >
                                                                <option>2021</option>
                                                                <option>2023</option>
                                                                <option>2024</option>
                                                            </select>
                                                        </div>
                                                    </div>

                                                    {/* Tech Stack */}
                                                    <div>
                                                        <label className="block mb-1 font-medium text-gray-700">Tech Stack</label>
                                                        <div className="flex flex-wrap gap-2 border border-orange-300 rounded px-3 py-2">
                                                            {formData.techStack.map((tech, index) => (
                                                                <span key={index} className="inline-flex items-center bg-orange-100 text-orange-700 px-2 py-1 rounded text-sm">
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

                                        {/* Save Button */}
                                        <div className="flex justify-end">
                                            <button className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600">
                                                Save Changes
                                            </button>
                                        </div>
                                    </div>
                                )}

                                {activeTab === 'Social Links' && (
                                    <div className="space-y-6 flex justify-between">
                                        <div>
                                            <h3 className="text-lg font-extrabold text-gray-900 mb-2">Basic Information</h3>
                                            <p className="text-[16px] text-gray-400 mb-6 max-w-[250px] ">Add elsewhere links to your company profile. You can add only username without full https links.</p>
                                        </div>

                                        <div className="space-y-4 w-full max-w-2xl">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-400 mb-1">Instagram</label>
                                                <input
                                                    type="url"
                                                    placeholder="https://instagram.com/yourcompany"
                                                    className="w-full px-3 py-2 border border-orange-400  focus:outline-none focus:ring-2 focus:ring-orange-500"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-400 mb-1">Twitter</label>
                                                <input
                                                    type="url"
                                                    placeholder="https://twitter.com/yourcompany"
                                                    className="w-full px-3 py-2 border border-orange-300  focus:outline-none focus:ring-2 focus:ring-orange-500"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-400 mb-1">Facebook</label>
                                                <input
                                                    type="url"
                                                    placeholder="https://facebook.com/yourcompany"
                                                    className="w-full px-3 py-2 border border-orange-300  focus:outline-none focus:ring-2 focus:ring-orange-500"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-400 mb-1">LinkedIn</label>
                                                <input
                                                    type="url"
                                                    placeholder="https://linkedin.com/company/yourcompany"
                                                    className="w-full px-3 py-2 border border-orange-300  focus:outline-none focus:ring-2 focus:ring-orange-500"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-400 mb-1">Youtube</label>
                                                <input
                                                    type="url"
                                                    placeholder="https://youtube.com/company/yourcompany"
                                                    className="w-full px-3 py-2 border border-orange-300  focus:outline-none focus:ring-2 focus:ring-orange-500"
                                                />
                                            </div>

                                            <div className="flex justify-end">
                                                <button className="bg-orange-500 text-white px-6 py-3 rounded hover:bg-orange-600">
                                                    Save Changes
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {activeTab === 'Team' && (
                                    <div className="flex  min-h-screen">
                                        {/* Left Sidebar Info */}
                                        <div className="w-1/4 p-6  ">
                                            <h2 className="font-semibold text-sm text-gray-800 mb-1">Basic Information</h2>
                                            <p className="text-gray-500 text-sm">Add team members of your company</p>
                                        </div>

                                        {/* Right Section */}
                                        <div className="flex-1 p-6">
                                            {/* Top Header */}
                                            <div className="flex items-center justify-between mb-6">
                                                <h2 className="text-xl font-semibold">50 Members</h2>
                                                <div className="flex gap-3 items-center">
                                                    <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 text-sm">
                                                        <Plus size={18} /> Add Members
                                                    </button>
                                                    <div className="flex bg-white border border-gray-200 rounded-lg overflow-hidden">
                                                        <button
                                                            onClick={() => setViewMode("grid")}
                                                            className={`p-2 ${viewMode === "grid" ? "bg-orange-500 text-white" : "text-gray-400 hover:text-gray-600"}`}
                                                        >
                                                            <Grid3X3 size={18} />
                                                        </button>
                                                        <button
                                                            onClick={() => setViewMode("list")}
                                                            className={`p-2 ${viewMode === "list" ? "bg-orange-500 text-white" : "text-gray-400 hover:text-gray-600"}`}
                                                        >
                                                            <List size={18} />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Team Cards */}
                                            <div className={`grid gap-4 ${viewMode === "grid" ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"}`}>
                                                {teamMembers.map((member) => (
                                                    <div
                                                        key={member.id}
                                                        className={`bg-white border-2 border-orange-200 rounded-md px-6 py-4 transition hover:shadow-lg hover:border-orange-300 ${viewMode === "list" ? "flex items-center gap-6" : "text-center"}`}
                                                    >
                                                        <div className={`${viewMode === "list" ? "flex-shrink-0" : "mb-4"}`}>
                                                            <img
                                                                src={member.image}
                                                                alt={member.name}
                                                                className={`w-20 h-20 object-cover rounded-full border-4 border-gray-100 ${viewMode === "grid" ? "mx-auto" : ""}`}
                                                            />
                                                        </div>
                                                        <div className={`${viewMode === "list" ? "flex-1 min-w-0" : ""}`}>
                                                            <h3 className={`text-gray-900 font-semibold mb-1 ${viewMode === "list" ? "text-left" : ""}`}>
                                                                {member.name}
                                                            </h3>
                                                            <p className={`text-sm text-gray-400 mb-1 ${viewMode === "list" ? "text-left" : ""}`}>
                                                                {member.role}
                                                            </p>
                                                            <div className={`flex  ${viewMode === "list" ? "justify-start" : "justify-center"}`}>
                                                                <a href={member.linkedin} className="w-8 h-8 flex items-center justify-center  text-gray-400 hover:text-orange-500 hover:border-orange-300 transition">
                                                                    <Linkedin size={16} />
                                                                </a>
                                                                <a href={member.instagram} className="w-8 h-8 flex items-center justify-center   text-gray-400 hover:text-orange-500 hover:border-orange-300 transition">
                                                                    <Instagram size={16} />
                                                                </a>

                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>

                                            {/* Save Button */}
                                            <div className="flex justify-end mt-8">
                                                <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-medium transition">
                                                    Save Changes
                                                </button>
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