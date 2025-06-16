import React, { useState } from 'react'
import { Edit, Plus, ExternalLink, Mail, Phone, Globe, Instagram, Twitter } from 'lucide-react'
import FreelancerHeader from '../Navbar/FreelancerHeader'
import FreelancerSidebar from '../Navbar/FreelancerSidbar'
import FreelancerFooter from '../Navbar/FreelancerFooter'
import profilebg from "../../../assets/images/freelancerDashboard/bg1.png"

function FreelancerPublicProfile() {
    const [showAllExperiences, setShowAllExperiences] = useState(false)
    const [showAllEducations, setShowAllEducations] = useState(false)

    return (
        <div className="min-h-screen flex flex-col lg:flex-row bg-[#fff0e5]">
            <div className="  lg:block lg:sticky lg:top-0 lg:left-0 lg:h-screen lg:flex-shrink-0">
                <FreelancerSidebar />
            </div>


            <div className="flex flex-col flex-1 min-w-0">
                {/* Header */}
                <div className="sticky top-0 z-10">
                    <FreelancerHeader />
                </div>

                <main className="flex-1 overflow-y-auto px-4 sm:px-6 py-6  ">
                    <div className="max-w-7xl mx-auto bg-white p-6 rounded-3xl">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            {/* Left Column - Main Profile */}
                            <div className="lg:col-span-2 space-y-6">
                                {/* Profile Header Card */}
                                <div className="bg-white  shadow-sm overflow-hidden">
                                    {/* Purple Gradient Header */}
                                    <div>
                                        <img src={profilebg} className="h-32 w-[800px]" />
                                        <button className="absolute top-4 right-4 p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors">
                                            <Edit className="w-4 h-4 text-white" />
                                        </button>
                                    </div>

                                    {/* Profile Info */}
                                    <div className="px-4 pb-6">
                                        <div className=" sm:flex-row sm:items-end sm:justify-between -mt-16 relative ">
                                            <div className=" sm:flex-row sm:items-end space-y-4 sm:space-y-0 sm:space-x-4">
                                                <div className="w-26 h-26 rounded-full bg-white p-1 shadow-lg">
                                                    <img
                                                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
                                                        alt="Jake Gyll"
                                                        className="w-full h-full rounded-full object-cover"
                                                    />
                                                </div>
                                                <div className='flex justify-between items-center w-full sm:w-auto space-y-2 sm:space-y-0 sm:space-x-4'>
                                                    <div className="text-center sm:text-left pl-[80px] ">
                                                        <h1 className="text-2xl font-bold text-gray-900">Jake Gyll</h1>
                                                        <p className="text-gray-600">Product Designer at Twitter</p>
                                                        <p className="text-gray-500 flex items-center justify-center sm:justify-start mt-1">
                                                            <span className="w-2 h-2 bg-gray-400 rounded-full mr-2"></span>
                                                            Manchester, UK
                                                        </p>
                                                    </div>

                                                    <button className="mt-4 sm:mt-0 px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors font-medium">
                                                        Edit Profile
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mt-6 flex justify-center sm:justify-start">
                                            <div className="bg-teal-50 text-teal-700 px-4 py-2 rounded-full text-sm font-medium flex items-center">
                                                <div className="w-2 h-2 bg-teal-500 rounded-full mr-2"></div>
                                                OPEN FOR OPPORTUNITIES
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* About Me Section */}
                                <div className="bg-white rounded-xl shadow-sm p-6">
                                    <div className="flex items-center justify-between mb-4">
                                        <h2 className="text-xl font-bold text-gray-900">About Me</h2>
                                        <button className="p-2 text-orange-500 hover:bg-orange-50 rounded-lg transition-colors">
                                            <Edit className="w-4 h-4" />
                                        </button>
                                    </div>
                                    <div className="text-gray-700 leading-relaxed space-y-4">
                                        <p>I'm a product designer + filmmaker currently working remotely at Twitter from beautiful Manchester, United Kingdom. I'm passionate about designing digital experiences that have a positive impact on the world.</p>
                                        <p>For 10 years, I've specialised in interface, experience & interaction design as well as working in user research and product strategy for product agencies, big tech companies & start-ups.</p>
                                    </div>
                                </div>

                                {/* Experiences Section */}
                                <div className="bg-white rounded-xl shadow-sm p-6">
                                    <div className="flex items-center justify-between mb-6">
                                        <h2 className="text-xl font-bold text-gray-900">Experiences</h2>
                                        <button className="p-2 text-orange-500 hover:bg-orange-50 rounded-lg transition-colors">
                                            <Plus className="w-4 h-4" />
                                        </button>
                                    </div>

                                    <div className="space-y-6">
                                        {/* Twitter Experience */}
                                        <div className="flex space-x-4">
                                            <div className="flex-shrink-0">
                                                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                                                    <Twitter className="w-6 h-6 text-white" />
                                                </div>
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex items-start justify-between">
                                                    <div>
                                                        <h3 className="font-semibold text-gray-900">Product Designer</h3>
                                                        <p className="text-gray-600">Twitter • Full Time • Present (1y 1m)</p>
                                                        <p className="text-gray-500 text-sm">Manchester, UK</p>
                                                    </div>
                                                    <button className="p-2 text-orange-500 hover:bg-orange-50 rounded-lg transition-colors">
                                                        <Edit className="w-4 h-4" />
                                                    </button>
                                                </div>
                                                <p className="text-gray-700 mt-2">Created and executed social media plans for 10 brands utilising multiple platforms and content types to increase brand outreach, engagements, and leads.</p>
                                            </div>
                                        </div>

                                        {/* GoDaddy Experience */}
                                        <div className="flex space-x-4">
                                            <div className="flex-shrink-0">
                                                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                                                    <span className="text-white font-bold text-xs">GD</span>
                                                </div>
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex items-start justify-between">
                                                    <div>
                                                        <h3 className="font-semibold text-gray-900">Growth Marketing Designer</h3>
                                                        <p className="text-gray-600">GoDaddy • Full Time • Jun 2011 - May 2019 (8y)</p>
                                                        <p className="text-gray-500 text-sm">Manchester, UK</p>
                                                    </div>
                                                    <button className="p-2 text-orange-500 hover:bg-orange-50 rounded-lg transition-colors">
                                                        <Edit className="w-4 h-4" />
                                                    </button>
                                                </div>
                                                <p className="text-gray-700 mt-2">Developed digital marketing strategies, activation plans, proposals, content and promotions for client initiatives.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <button
                                        onClick={() => setShowAllExperiences(!showAllExperiences)}
                                        className="mt-6 text-orange-500 hover:text-orange-600 font-medium"
                                    >
                                        Show 3 more experiences
                                    </button>
                                </div>

                                {/* Education Section */}
                                <div className="bg-white rounded-xl shadow-sm p-6">
                                    <div className="flex items-center justify-between mb-6">
                                        <h2 className="text-xl font-bold text-gray-900">Educations</h2>
                                        <button className="p-2 text-orange-500 hover:bg-orange-50 rounded-lg transition-colors">
                                            <Plus className="w-4 h-4" />
                                        </button>
                                    </div>

                                    <div className="space-y-6">
                                        {/* Harvard University */}
                                        <div className="flex space-x-4">
                                            <div className="flex-shrink-0">
                                                <div className="w-12 h-12 bg-red-700 rounded-lg flex items-center justify-center">
                                                    <span className="text-white font-bold text-xs">H</span>
                                                </div>
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex items-start justify-between">
                                                    <div>
                                                        <h3 className="font-semibold text-gray-900">Harvard University</h3>
                                                        <p className="text-gray-600">Postgraduate degree, Applied Psychology</p>
                                                        <p className="text-gray-500 text-sm">2010 - 2012</p>
                                                    </div>
                                                    <button className="p-2 text-orange-500 hover:bg-orange-50 rounded-lg transition-colors">
                                                        <Edit className="w-4 h-4" />
                                                    </button>
                                                </div>
                                                <p className="text-gray-700 mt-2">As an Applied Psychologist in the field of Consumer and Society, I am specialised in creating business opportunities by observing, analysing, researching and changing behaviour.</p>
                                            </div>
                                        </div>

                                        {/* University of Toronto */}
                                        <div className="flex space-x-4">
                                            <div className="flex-shrink-0">
                                                <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center">
                                                    <span className="text-white font-bold text-xs">UT</span>
                                                </div>
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex items-start justify-between">
                                                    <div>
                                                        <h3 className="font-semibold text-gray-900">University of Toronto</h3>
                                                        <p className="text-gray-600">Bachelor of Arts, Visual Communication</p>
                                                        <p className="text-gray-500 text-sm">2005 - 2009</p>
                                                    </div>
                                                    <button className="p-2 text-orange-500 hover:bg-orange-50 rounded-lg transition-colors">
                                                        <Edit className="w-4 h-4" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <button
                                        onClick={() => setShowAllEducations(!showAllEducations)}
                                        className="mt-6 text-orange-500 hover:text-orange-600 font-medium"
                                    >
                                        Show 2 more educations
                                    </button>
                                </div>

                                {/* Skills Section */}
                                <div className="bg-white rounded-xl shadow-sm p-6">
                                    <div className="flex items-center justify-between mb-6">
                                        <h2 className="text-xl font-bold text-gray-900">Skills</h2>
                                        <div className="flex space-x-2">
                                            <button className="p-2 text-orange-500 hover:bg-orange-50 rounded-lg transition-colors">
                                                <Plus className="w-4 h-4" />
                                            </button>
                                            <button className="p-2 text-orange-500 hover:bg-orange-50 rounded-lg transition-colors">
                                                <Edit className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap gap-3">
                                        <span className="px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">Communication</span>
                                        <span className="px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">Analytics</span>
                                        <span className="px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">Facebook Ads</span>
                                        <span className="px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">Content Planning</span>
                                        <span className="px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">Community Manager</span>
                                    </div>
                                </div>

                                {/* Portfolio Section */}
                                <div className="bg-white rounded-xl shadow-sm p-6">
                                    <div className="flex items-center justify-between mb-6">
                                        <h2 className="text-xl font-bold text-gray-900">Portfolios</h2>
                                        <button className="p-2 text-orange-500 hover:bg-orange-50 rounded-lg transition-colors">
                                            <Plus className="w-4 h-4" />
                                        </button>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                        {/* Portfolio Item 1 */}
                                        <div className="group cursor-pointer">
                                            <div className="aspect-square bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg p-4 mb-3 group-hover:shadow-lg transition-shadow">
                                                <div className="w-full h-full bg-white rounded-lg shadow-sm p-3">
                                                    <div className="space-y-2">
                                                        <div className="h-2 bg-blue-200 rounded"></div>
                                                        <div className="h-2 bg-blue-100 rounded w-3/4"></div>
                                                        <div className="h-8 bg-blue-300 rounded mt-4"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <h3 className="font-medium text-gray-900 text-sm">Clinically - clinic & health care website</h3>
                                            <div className="w-full h-1 bg-orange-400 rounded-full mt-2"></div>
                                        </div>

                                        {/* Portfolio Item 2 */}
                                        <div className="group cursor-pointer">
                                            <div className="aspect-square bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg p-4 mb-3 group-hover:shadow-lg transition-shadow">
                                                <div className="w-full h-full bg-white rounded-lg shadow-sm p-3">
                                                    <div className="space-y-2">
                                                        <div className="h-2 bg-purple-200 rounded"></div>
                                                        <div className="h-2 bg-purple-100 rounded w-2/3"></div>
                                                        <div className="grid grid-cols-2 gap-2 mt-4">
                                                            <div className="h-6 bg-purple-300 rounded"></div>
                                                            <div className="h-6 bg-purple-200 rounded"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <h3 className="font-medium text-gray-900 text-sm">Growthly - SaaS Analytics & Sales Website</h3>
                                        </div>

                                        {/* Portfolio Item 3 */}
                                        <div className="group cursor-pointer">
                                            <div className="aspect-square bg-gradient-to-br from-blue-200 to-blue-300 rounded-lg p-4 mb-3 group-hover:shadow-lg transition-shadow">
                                                <div className="w-full h-full bg-white rounded-lg shadow-sm p-3 flex flex-col">
                                                    <div className="flex justify-between items-center mb-2">
                                                        <div className="h-2 bg-blue-300 rounded w-1/3"></div>
                                                        <div className="w-4 h-4 bg-blue-400 rounded"></div>
                                                    </div>
                                                    <div className="flex-1 bg-blue-100 rounded mb-2"></div>
                                                    <div className="grid grid-cols-3 gap-1">
                                                        <div className="h-3 bg-blue-200 rounded"></div>
                                                        <div className="h-3 bg-blue-300 rounded"></div>
                                                        <div className="h-3 bg-blue-200 rounded"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <h3 className="font-medium text-gray-900 text-sm">Plania - Project Management App</h3>
                                        </div>

                                        {/* Portfolio Item 4 */}
                                        <div className="group cursor-pointer">
                                            <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg p-4 mb-3 group-hover:shadow-lg transition-shadow">
                                                <div className="w-full h-full bg-white rounded-lg shadow-sm p-3">
                                                    <div className="space-y-3">
                                                        <div className="h-3 bg-gray-300 rounded"></div>
                                                        <div className="h-3 bg-gray-200 rounded w-4/5"></div>
                                                        <div className="h-3 bg-gray-200 rounded w-3/5"></div>
                                                        <div className="mt-4 space-y-1">
                                                            <div className="h-1 bg-gray-300 rounded"></div>
                                                            <div className="h-1 bg-gray-200 rounded"></div>
                                                            <div className="h-1 bg-gray-200 rounded w-3/4"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <h3 className="font-medium text-gray-900 text-sm">Fumito - Japanese furniture website</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Sidebar */}
                            <div className="space-y-6">
                                {/* Additional Details */}
                                <div className="bg-white rounded-xl shadow-sm p-6">
                                    <div className="flex items-center justify-between mb-4">
                                        <h3 className="font-bold text-gray-900">Additional Details</h3>
                                        <button className="p-1 text-orange-500 hover:bg-orange-50 rounded transition-colors">
                                            <Edit className="w-4 h-4" />
                                        </button>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="flex items-center space-x-3">
                                            <Mail className="w-4 h-4 text-gray-400" />
                                            <div>
                                                <p className="text-xs text-gray-500 uppercase tracking-wide">Email</p>
                                                <p className="text-sm text-gray-900">jakegyll@email.com</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center space-x-3">
                                            <Phone className="w-4 h-4 text-gray-400" />
                                            <div>
                                                <p className="text-xs text-gray-500 uppercase tracking-wide">Phone</p>
                                                <p className="text-sm text-gray-900">+44 1245 572 135</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center space-x-3">
                                            <Globe className="w-4 h-4 text-gray-400" />
                                            <div>
                                                <p className="text-xs text-gray-500 uppercase tracking-wide">Languages</p>
                                                <p className="text-sm text-gray-900">English, French</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Social Links */}
                                <div className="bg-white rounded-xl shadow-sm p-6">
                                    <div className="flex items-center justify-between mb-4">
                                        <h3 className="font-bold text-gray-900">Social Links</h3>
                                        <button className="p-1 text-orange-500 hover:bg-orange-50 rounded transition-colors">
                                            <Edit className="w-4 h-4" />
                                        </button>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="flex items-center space-x-3">
                                            <Instagram className="w-4 h-4 text-gray-400" />
                                            <div>
                                                <p className="text-xs text-gray-500 uppercase tracking-wide">Instagram</p>
                                                <p className="text-sm text-orange-500">instagram.com/jakegyll</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center space-x-3">
                                            <Twitter className="w-4 h-4 text-gray-400" />
                                            <div>
                                                <p className="text-xs text-gray-500 uppercase tracking-wide">Twitter</p>
                                                <p className="text-sm text-orange-500">twitter.com/jakegyll</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center space-x-3">
                                            <Globe className="w-4 h-4 text-gray-400" />
                                            <div>
                                                <p className="text-xs text-gray-500 uppercase tracking-wide">Website</p>
                                                <p className="text-sm text-orange-500">www.jakegyll.com</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>

                {/* Footer Placeholder */}
                <FreelancerFooter />
            </div>
        </div>
    )
}

export default FreelancerPublicProfile