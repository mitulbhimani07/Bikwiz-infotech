import React, { useState } from 'react';
import { Upload, Bold, Italic, Underline, List, Link } from 'lucide-react';
import ClientSidbar from '../navbar/ClientSidbar';
import ClientHeader from '../navbar/ClientHeader';
import { Instagram, Linkedin, Grid3X3, Plus } from 'lucide-react';
import { IoImage } from "react-icons/io5";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import ClientFooter from '../navbar/ClientFooter';
import "../../../App.css"

function ClientSettings() {
    const [activeTab, setActiveTab] = useState('Overview');
    const [viewMode, setViewMode] = useState('grid');
    const [fileName, setFileName] = useState('');
    const [imagePreview, setImagePreview] = useState(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFileName(file.name);
            setImagePreview(URL.createObjectURL(file));
        }
    };



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
    const maxChars = 500;
    const plainText = formData.description.replace(/<[^>]+>/g, '');


    return (
        <div className="min-h-screen flex flex-col lg:flex-row bg-[#fff0e5]">
            {/* Sidebar - Hidden on mobile, shown on desktop */}
            <div className="  lg:block lg:sticky lg:top-0 lg:left-0 lg:h-screen lg:flex-shrink-0">
                <ClientSidbar />
            </div>

            <div className="flex flex-col flex-1 min-w-0">
                {/* Header - Sticky on all screens */}
                <div className="sticky top-0 z-10">
                    <ClientHeader />
                </div>

                <div className="flex flex-1">
                    {/* Main Content */}
                    <div className="flex-1 p-4 sm:p-6">
                        {/* Page Header */}
                        <div className="mb-5">
                            <h1 className="text-2xl sm:text-3xl font-semibold text-orange-600 mb-2">Settings</h1>
                        </div>

                        {/* Settings Section */}
                        <div className="bg-white rounded-3xl px-4 sm:px-6 lg:pl-8 lg:pr-12">
                            {/* Tabs */}
                            <div className="border-b border-orange-200 pt-6">
                                <nav className="flex justify-start space-x-4 sm:space-x-8 relative overflow-x-auto">
                                    {tabs.map((tab) => (
                                        <button
                                            key={tab}
                                            onClick={() => setActiveTab(tab)}
                                            className={`relative pb-2 text-sm sm:text-[16px] font-medium transition-all duration-300 whitespace-nowrap ${activeTab === tab
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
                            <div className="py-6 sm:py-8">
                                {activeTab === 'Overview' && (
                                    <div className="space-y-6 sm:space-y-8">
                                        {/* Basic Information */}
                                        <div className='border-b-2 border-orange-200 pb-3 mb-6'>
                                            <h3 className="text-lg sm:text-[20px] font-semibold text-gray-900 mb-2">Basic Information</h3>
                                            <p className="text-sm sm:text-[16px] text-gray-600 mb-4">This is company information that you can update anytime.</p>
                                        </div>

                                        {/* Company Logo */}
                                        <div className='flex flex-col lg:flex-row lg:justify-between border-b-2 border-orange-200 pb-6 mb-8 gap-6'>
                                            <div className="flex-1">
                                                <h4 className="text-lg sm:text-[20px] font-semibold text-gray-900 mb-2">Company Logo</h4>
                                                <p className="text-sm sm:text-[16px] text-gray-600 mb-4">This image will be shown publicly as your profile picture</p>
                                            </div>
                                            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
                                                <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center overflow-hidden flex-shrink-0">
                                                    {imagePreview ? (
                                                        <img src={imagePreview} alt="Logo" className="w-full h-full object-cover" />
                                                    ) : null}
                                                </div>

                                                <div className="text-center bg-[#FFF0E5] rounded-lg w-full sm:w-auto">
                                                    <label
                                                        htmlFor="file-upload"
                                                        className="cursor-pointer border-3 border-dashed border-orange-500 rounded-lg p-4 sm:p-6 block"
                                                    >
                                                        <IoImage className="w-6 h-6 sm:w-8 sm:h-8 text-orange-500 mx-auto mb-2" />
                                                        <p className="text-orange-500 font-medium text-sm sm:text-base">Click to upload or drag and drop</p>
                                                        <p className="text-xs sm:text-sm text-gray-500">SVG, PNG, JPG or GIF (max. 800x400px)</p>
                                                        {fileName && (
                                                            <p className="text-xs sm:text-sm mt-2 text-green-600">Uploaded: {fileName}</p>
                                                        )}
                                                    </label>

                                                    <input
                                                        id="file-upload"
                                                        type="file"
                                                        accept=".svg,.png,.jpg,.jpeg,.gif"
                                                        className="hidden"
                                                        onChange={handleFileChange}
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Company Details */}
                                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-10 text-sm text-gray-800 px-0 sm:px-6 py-6 sm:py-10 max-w-6xl mx-auto">
                                            {/* Left Sidebar */}
                                            <div className="lg:col-span-1">
                                                <h4 className="font-semibold text-black mb-2">Company Details</h4>
                                                <p className="text-gray-600 text-sm">
                                                    Introduce your company core info quickly to users by fill up company details
                                                </p>
                                            </div>

                                            {/* Form Section */}
                                            <div className="lg:col-span-2">
                                                <div className="grid grid-cols-1 gap-4 sm:gap-6">
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
                                                        <div className="flex flex-wrap gap-2 border border-orange-300 rounded px-3 py-2 min-h-[42px]">
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
                                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                                                                className="border border-orange-300 rounded px-2 sm:px-3 py-2 focus:outline-none focus:ring-1 focus:ring-orange-400 text-sm"
                                                            >
                                                                <option>31</option>
                                                                <option>1</option>
                                                                <option>15</option>
                                                            </select>
                                                            <select
                                                                value={formData.dateMonth}
                                                                onChange={(e) => handleInputChange('dateMonth', e.target.value)}
                                                                className="border border-orange-300 rounded px-2 sm:px-3 py-2 focus:outline-none focus:ring-1 focus:ring-orange-400 text-sm"
                                                            >
                                                                <option>July</option>
                                                                <option>January</option>
                                                                <option>March</option>
                                                            </select>
                                                            <select
                                                                value={formData.dateYear}
                                                                onChange={(e) => handleInputChange('dateYear', e.target.value)}
                                                                className="border border-orange-300 rounded px-2 sm:px-3 py-2 focus:outline-none focus:ring-1 focus:ring-orange-400 text-sm"
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
                                                        <div className="flex flex-wrap gap-2 border border-orange-300 rounded px-3 py-2 min-h-[42px]">
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

                                        <div className="border-t border-orange-300 pt-6 border-b pb-6  ">
                                            <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 lg:gap-8">
                                                <div className="lg:col-span-3">
                                                    <h4 className="text-gray-900 mb-2 font-bold">About Company</h4>
                                                    <p className="text-sm text-gray-600 mb-4">Brief description for your company. URLs are hyperlinked.</p>
                                                </div>

                                                <div className="lg:col-span-7 w-[97%] pl-[42px]">
                                                    <label className="block text-sm font-bold text-gray-900 mb-1">Description</label>

                                                    {/* Textarea with no border except orange outline */}
                                                    <div className="relative border border-orange-500 rounded-sm">
                                                        <ReactQuill
                                                            theme="snow"
                                                            value={formData.description}
                                                            onChange={(value) => handleInputChange('description', value)}
                                                            modules={{
                                                                toolbar: {
                                                                    container: '#toolbar-bottom',
                                                                },
                                                            }}
                                                            formats={['bold', 'italic', 'underline', 'list', 'bullet', 'link']}
                                                            placeholder="Type your description..."
                                                            className="custom-quill-editor"
                                                        />

                                                        {/* Bottom toolbar */}
                                                        <div id="toolbar-bottom" className="flex gap-3 px-3 py-2 border-t border-orange-200">
                                                            <button className="ql-bold" />
                                                            <button className="ql-italic" />
                                                            <button className="ql-underline" />
                                                            <button className="ql-list" value="bullet" />
                                                            <button className="ql-link" />
                                                        </div>
                                                    </div>

                                                    {/* Footer: character count */}
                                                    <div className='flex justify-between items-center mt-2'>
                                                        <div className="text-sm text-gray-500">Maximum 500 characters</div>
                                                        <div className="text-sm text-gray-500">{plainText.length}/{maxChars}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Save Button */}
                                        <div className="flex justify-end pt-6">
                                            <button className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600">
                                                Save Changes
                                            </button>
                                        </div>
                                    </div>
                                )}

                                {activeTab === 'Social Links' && (
                                    <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
                                        <div className="lg:w-1/3">
                                            <h3 className="text-lg font-extrabold text-gray-900 mb-2">Basic Information</h3>
                                            <p className="text-[16px] text-gray-400 mb-6">Add elsewhere links to your company profile. You can add only username without full https links.</p>
                                        </div>

                                        <div className="flex-1 space-y-4 max-w-2xl">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-400 mb-1">Instagram</label>
                                                <input
                                                    type="url"
                                                    placeholder="https://instagram.com/yourcompany"
                                                    className="w-full px-3 py-2 border border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-400 mb-1">Twitter</label>
                                                <input
                                                    type="url"
                                                    placeholder="https://twitter.com/yourcompany"
                                                    className="w-full px-3 py-2 border border-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-400 mb-1">Facebook</label>
                                                <input
                                                    type="url"
                                                    placeholder="https://facebook.com/yourcompany"
                                                    className="w-full px-3 py-2 border border-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-400 mb-1">LinkedIn</label>
                                                <input
                                                    type="url"
                                                    placeholder="https://linkedin.com/company/yourcompany"
                                                    className="w-full px-3 py-2 border border-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-400 mb-1">Youtube</label>
                                                <input
                                                    type="url"
                                                    placeholder="https://youtube.com/company/yourcompany"
                                                    className="w-full px-3 py-2 border border-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                                />
                                            </div>

                                            <div className="flex justify-end pt-4">
                                                <button className="bg-orange-500 text-white px-6 py-3 rounded hover:bg-orange-600">
                                                    Save Changes
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {activeTab === 'Team' && (
                                    <div className="flex flex-col lg:flex-row min-h-screen gap-6">
                                        {/* Left Sidebar Info */}
                                        <div className="lg:w-1/4 p-0 lg:p-6">
                                            <h2 className="font-semibold text-sm text-gray-800 mb-1">Basic Information</h2>
                                            <p className="text-gray-500 text-sm">Add team members of your company</p>
                                        </div>

                                        {/* Right Section */}
                                        <div className="flex-1 p-0 lg:p-6">
                                            {/* Top Header */}
                                            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
                                                <h2 className="text-xl font-semibold">50 Members</h2>
                                                <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
                                                    <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2 text-sm">
                                                        <Plus size={18} /> Add Members
                                                    </button>
                                                    <div className="flex bg-white border border-gray-200 rounded-lg overflow-hidden w-fit">
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
                                            <div className={`grid gap-4 ${viewMode === "grid" ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3" : "grid-cols-1"}`}>
                                                {teamMembers.map((member) => (
                                                    <div
                                                        key={member.id}
                                                        className={`bg-white border-2 border-orange-200 rounded-md px-4 sm:px-6 py-4 transition hover:shadow-lg hover:border-orange-300 ${viewMode === "list" ? "flex items-center gap-4 sm:gap-6" : "text-center"}`}
                                                    >
                                                        <div className={`${viewMode === "list" ? "flex-shrink-0" : "mb-4"}`}>
                                                            <img
                                                                src={member.image}
                                                                alt={member.name}
                                                                className={`w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-full border-4 border-gray-100 ${viewMode === "grid" ? "mx-auto" : ""}`}
                                                            />
                                                        </div>
                                                        <div className={`${viewMode === "list" ? "flex-1 min-w-0" : ""}`}>
                                                            <h3 className={`text-gray-900 font-semibold mb-1 text-sm sm:text-base ${viewMode === "list" ? "text-left" : ""}`}>
                                                                {member.name}
                                                            </h3>
                                                            <p className={`text-xs sm:text-sm text-gray-400 mb-2 ${viewMode === "list" ? "text-left" : ""}`}>
                                                                {member.role}
                                                            </p>
                                                            <div className={`flex gap-1 ${viewMode === "list" ? "justify-start" : "justify-center"}`}>
                                                                <a href={member.linkedin} className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-orange-500 hover:border-orange-300 transition">
                                                                    <Linkedin size={16} />
                                                                </a>
                                                                <a href={member.instagram} className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-orange-500 hover:border-orange-300 transition">
                                                                    <Instagram size={16} />
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>

                                            {/* Save Button */}
                                            <div className="flex justify-end mt-8">
                                                <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-8 py-3 rounded-lg font-medium transition">
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
                <ClientFooter />
            </div>
        </div>
    );
}

export default ClientSettings;