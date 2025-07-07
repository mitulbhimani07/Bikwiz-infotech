import React, { useState } from 'react';
import FreelancerSidbar from '../Navbar/FreelancerSidbar'
import FreelancerHeader from '../Navbar/FreelancerHeader'
import ClientFooter from '../../client/navbar/ClientFooter'
import { Camera, User, Mail, Phone, Calendar, Users } from 'lucide-react';

export default function FreelancerBrowseCompanies() {
    const [activeTab, setActiveTab] = useState('My Profile');
    const [accountType, setAccountType] = useState('Job Seeker');
    const [image, setImage] = useState(null);

    const [formData, setFormData] = useState({
        fullName: 'Jake Gyll',
        phone: '+44 1245 572 135',
        email: 'Jakegyll@gmail.com',
        dateOfBirth: '09/08/1997',
        gender: 'Male'
    });
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setImage(imageUrl);
        }
    };

    const handleClickUpload = () => {
        document.getElementById('profile-upload').click();
    };
    const handleInputChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };
    return (
        <div className="min-h-screen flex bg-[#fff0e5]">
            {/* Sidebar */}
            <aside className="hidden lg:block lg:sticky lg:top-0 lg:h-screen flex-shrink-0">
                <FreelancerSidbar />
            </aside>

            {/* Main content area */}
            <div className="flex flex-col flex-1 min-w-0">
                {/* Header */}
                <div className="sticky top-0 z-10">
                    <FreelancerHeader />
                </div>

                {/* Main Page Content */}
                <main className="flex-1 p-6">
                    {/* Header */}
                    <div>
                        <div>
                            <h1 className="text-2xl font-bold text-orange-600 pb-6">Browse Companies</h1>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="mx-auto bg-white rounded-lg shadow-sm p-8">
                        {/* Navigation Tabs */}
                        <div className="flex space-x-8 mb-8 border-b border-gray-200">
                            {['My Profile', 'Login Details', 'Notifications'].map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`pb-3 px-1 text-sm font-medium ${activeTab === tab
                                            ? 'text-gray-900 border-b-2 border-gray-900'
                                            : 'text-gray-500 hover:text-gray-700'
                                        }`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>

                        {/* Profile Form */}
                        <div className="">
                            {/* Basic Information Section */}
                            <div className="mb-8">
                                <h2 className="text-lg font-semibold text-gray-900 mb-2">Basic Information</h2>
                                <p className="text-gray-600 text-sm mb-6">This is your personal information that you can update anytime.</p>

                                {/* Profile Photo Section */}
                                <div className="mb-8">
                                    <h3 className="text-base font-medium text-gray-900 mb-4">Profile Photo</h3>
                                    <div className="flex items-start space-x-6">
                                        {/* Profile Preview */}
                                        <div className="flex-shrink-0">
                                            <div className="w-24 h-24 bg-gray-200 rounded-full overflow-hidden">
                                                <img
                                                    src={image || '/api/placeholder/96/96'}
                                                    alt="Profile"
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        </div>

                                        {/* Upload Area */}
                                        <div className="flex-1">
                                            <p className="text-sm text-gray-600 mb-4">
                                                This image will be shown publicly as your profile picture, it will help recruiters recognize you!
                                            </p>

                                            <div
                                                onClick={handleClickUpload}
                                                className="cursor-pointer border-2 border-dashed border-orange-300 rounded-lg p-8 text-center bg-orange-50 hover:bg-orange-100 transition"
                                            >
                                                <Camera className="mx-auto h-8 w-8 text-orange-400 mb-2" />
                                                <p className="text-orange-600 font-medium mb-1">Click to replace or drag and drop</p>
                                                <p className="text-gray-500 text-sm">SVG, PNG, JPG or GIF (max. 400 x 400px)</p>
                                            </div>

                                            {/* Hidden file input */}
                                            <input
                                                id="profile-upload"
                                                type="file"
                                                accept="image/*"
                                                onChange={handleImageChange}
                                                className="hidden"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Personal Details */}
                                <div className="mb-8">
                                    <h3 className="text-base font-medium text-gray-900 mb-6">Personal Details</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {/* Full Name */}
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Full Name <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                value={formData.fullName}
                                                onChange={(e) => handleInputChange('fullName', e.target.value)}
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                            />
                                        </div>

                                        {/* Email */}
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Email <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="email"
                                                value={formData.email}
                                                onChange={(e) => handleInputChange('email', e.target.value)}
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                            />
                                        </div>

                                        {/* Phone Number */}
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Phone Number <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="tel"
                                                value={formData.phone}
                                                onChange={(e) => handleInputChange('phone', e.target.value)}
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                            />
                                        </div>

                                        {/* Date of Birth */}
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Date of Birth <span className="text-red-500">*</span>
                                            </label>
                                            <div className="relative">
                                                <input
                                                    type="text"
                                                    value={formData.dateOfBirth}
                                                    onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent pr-10"
                                                />
                                                <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                                            </div>
                                        </div>

                                        {/* Gender */}
                                        <div className="md:col-span-2">
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Gender <span className="text-red-500">*</span>
                                            </label>
                                            <select
                                                value={formData.gender}
                                                onChange={(e) => handleInputChange('gender', e.target.value)}
                                                className="w-full md:w-1/2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                            >
                                                <option value="Male">Male</option>
                                                <option value="Female">Female</option>
                                                <option value="Other">Other</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                {/* Account Type */}
                                <div className="mb-8">
                                    <h3 className="text-base font-medium text-gray-900 mb-4">Account Type</h3>
                                    <p className="text-sm text-gray-600 mb-4">You can update your account type</p>

                                    <div className="space-y-4">
                                        <label className="flex items-start space-x-3 cursor-pointer">
                                            <input
                                                type="radio"
                                                name="accountType"
                                                value="Job Seeker"
                                                checked={accountType === 'Job Seeker'}
                                                onChange={(e) => setAccountType(e.target.value)}
                                                className="mt-1 h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300"
                                            />
                                            <div>
                                                <div className="font-medium text-gray-900">Job Seeker</div>
                                                <div className="text-sm text-gray-600">Looking for a job</div>
                                            </div>
                                        </label>

                                        <label className="flex items-start space-x-3 cursor-pointer">
                                            <input
                                                type="radio"
                                                name="accountType"
                                                value="Employer"
                                                checked={accountType === 'Employer'}
                                                onChange={(e) => setAccountType(e.target.value)}
                                                className="mt-1 h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300"
                                            />
                                            <div>
                                                <div className="font-medium text-gray-900">Employer</div>
                                                <div className="text-sm text-gray-600">Hiring, sourcing candidates, or posting a jobs</div>
                                            </div>
                                        </label>
                                    </div>
                                </div>

                                {/* Save Button */}
                                <div className="flex justify-end">
                                    <button className="bg-orange-600 hover:bg-orange-700 text-white font-medium py-2 px-6 rounded-md transition-colors duration-200">
                                        Save Profile
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>

                {/* Footer */}
                <footer className="mt-auto">
                    <ClientFooter />
                </footer>
            </div>
        </div>
    )
}
