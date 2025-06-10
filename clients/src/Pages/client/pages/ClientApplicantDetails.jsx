import React, { useState } from 'react';
import ClientHeader from '../navbar/ClientHeader';
import ClientSidbar from '../navbar/ClientSidbar';
import { BiMessageAltDetail } from "react-icons/bi";
import client from '../../../assets/images/client.png';
import { MdOutlineEmail } from "react-icons/md";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import { HiDotsHorizontal } from "react-icons/hi";
import ClientFooter from '../navbar/ClientFooter';

const ClientAllApplicants = () => {
    const [activeTab, setActiveTab] = useState('Applicant Profile');
    const tabs = ['Applicant Profile', 'Resume', 'Hiring Progress', 'Interview Schedule'];
    const [resumeFile, setResumeFile] = useState(null);
    const [resumeUrl, setResumeUrl] = useState(null);
    
    const handleResumeUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            setResumeFile(file);
            const fileUrl = URL.createObjectURL(file);
            setResumeUrl(fileUrl);
        }
    };

    return (
        <>
            <div className="min-h-screen flex flex-col xl:flex-row bg-[#fff0e5]">
                {/* Sidebar */}
                <div className="hidden xl:block xl:sticky xl:top-0 xl:left-0 xl:h-screen xl:flex-shrink-0">
                    <ClientSidbar />
                </div>

                {/* Main Content */}
                <div className="flex flex-col flex-1 min-w-0">
                    {/* Header */}
                    <div className="sticky top-0 z-10">
                        <ClientHeader />
                    </div>

                    {/* Content */}
                    <div className="w-full px-3 sm:px-4 md:px-6 py-4 md:py-6">
                        <div className="max-w-full">
                            <h1 className="text-xl sm:text-2xl font-bold text-orange-500 mb-4 md:mb-6">Applicant Details</h1>
                            
                            {/* Main Content Grid */}
                            <div className="flex flex-col xl:flex-row gap-4 md:gap-6 bg-white rounded-2xl md:rounded-3xl p-3 sm:p-4 md:p-6 overflow-hidden">
                                
                                {/* Left Column - Profile Section */}
                                <div className="xl:w-1/3 w-full space-y-4 md:space-y-6 min-w-0">
                                    {/* Profile Card */}
                                    <div className="bg-white border border-orange-500 p-4 md:p-6 rounded-lg">
                                        {/* Profile Header */}
                                        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 md:gap-4 mb-4">
                                            <img src={client} alt="" className='w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full flex-shrink-0' />
                                            <div className="text-center sm:text-left min-w-0 flex-1">
                                                <h2 className="text-base md:text-lg font-semibold text-gray-900 truncate">Jerome Bell</h2>
                                                <p className="text-sm md:text-base text-gray-600 truncate">Product Designer</p>
                                                <div className="flex items-center justify-center sm:justify-start gap-1 mt-1">
                                                    <span className="text-yellow-400">★</span>
                                                    <span className="text-sm font-medium">4.0</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Applied Job Section */}
                                        <div className="space-y-3 bg-[#fff0e5] p-3 rounded-lg mb-4">
                                            <div className="flex justify-between items-center text-sm">
                                                <span className="text-gray-600">Applied Jobs</span>
                                                <span className="text-gray-500 text-xs sm:text-sm">2 days ago</span>
                                            </div>
                                            <div className='border-b-2 border-orange-500'></div>
                                            <div>
                                                <h3 className="font-medium text-gray-900 mb-1 text-sm md:text-base">Product Development</h3>
                                                <div className="flex gap-2 text-xs md:text-sm text-gray-600">
                                                    <span>Marketing</span>
                                                    <span>•</span>
                                                    <span>Full-Time</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Stage Progress */}
                                        <div className="space-y-4 w-full mb-4">
                                            <div className='bg-[#fff0e5] p-3 md:p-4 rounded-lg'>
                                                <div className="flex justify-between items-center text-sm mb-2">
                                                    <span className="text-black font-medium">Stage</span>
                                                    <div className="flex items-center gap-1">
                                                        <span className="w-3 h-3 rounded-full bg-orange-500 inline-block"></span>
                                                        <span className="text-orange-500 font-medium text-xs sm:text-sm">Interview</span>
                                                    </div>
                                                </div>

                                                {/* Progress Bar */}
                                                <div className="flex h-3 overflow-hidden gap-1">
                                                    <div className="flex-1 bg-orange-500 rounded-sm"></div>
                                                    <div className="flex-1 bg-orange-500 rounded-sm"></div>
                                                    <div className="flex-1 bg-orange-500 rounded-sm"></div>
                                                    <div className="flex-1 bg-orange-300 rounded-sm"></div>
                                                </div>
                                            </div>

                                            {/* Action Buttons */}
                                            <div className="flex flex-col sm:flex-row gap-2">
                                                <button className="flex-1 border border-orange-500 text-orange-600 font-semibold py-2 px-3 text-sm hover:bg-orange-50 transition rounded">
                                                    Schedule Interview
                                                </button>
                                                <button className="w-full sm:w-11 h-11 flex items-center justify-center border border-orange-500 text-orange-600 hover:bg-orange-50 transition rounded">
                                                    <BiMessageAltDetail className='w-5 h-5' />
                                                </button>
                                            </div>
                                        </div>

                                        {/* Contact Section */}
                                        <h3 className="font-semibold text-gray-900 my-4 text-base md:text-lg">Contact</h3>
                                        <div className="space-y-3 md:space-y-4">
                                            {[
                                                { icon: MdOutlineEmail, label: 'Email', value: 'jeromeBell45@email.com', color: 'text-gray-900' },
                                                { icon: IoPhonePortraitOutline, label: 'Phone', value: '+44 1245 572 135', color: 'text-gray-900' },
                                                { icon: FaInstagram, label: 'Instagram', value: 'instagram.com/jeromebell', color: 'text-orange-500' },
                                                { icon: FaTwitter, label: 'Twitter', value: 'twitter.com/jeromebell', color: 'text-orange-500' },
                                                { icon: TbWorld, label: 'Website', value: 'www.jeromebell.com', color: 'text-orange-500' }
                                            ].map((contact, index) => (
                                                <div key={index} className="flex items-center gap-3">
                                                    <span className="text-gray-400 flex-shrink-0">
                                                        <contact.icon className='w-4 h-4 md:w-5 md:h-5' />
                                                    </span>
                                                    <div className="min-w-0 flex-1">
                                                        <p className="text-xs md:text-sm text-gray-600">{contact.label}</p>
                                                        <p className={`text-xs md:text-sm ${contact.color} truncate`}>{contact.value}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Right Column - Main Content */}
                                <div className="xl:w-2/3 w-full min-w-0">
                                    <div className="bg-white border border-orange-500 min-w-0 rounded-lg">
                                        {/* Tabs */}
                                        <div className="border-b mx-3 sm:mx-4 md:mx-6 border-orange-500 overflow-x-auto">
                                            <div className="flex min-w-max">
                                                {tabs.map((tab) => (
                                                    <button
                                                        key={tab}
                                                        onClick={() => setActiveTab(tab)}
                                                        className={`px-2 sm:px-3 md:px-4 py-3 md:py-4 text-xs sm:text-sm font-medium border-b-4 md:border-b-6 whitespace-nowrap ${activeTab === tab
                                                            ? 'border-orange-500 text-orange-600'
                                                            : 'border-transparent text-gray-500 hover:text-gray-700'
                                                            }`}
                                                    >
                                                        {tab}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Tab Content */}
                                        <div className="p-3 sm:p-4 md:p-6 min-w-0">
                                            {activeTab === 'Applicant Profile' && (
                                                <div className="space-y-6 md:space-y-8">
                                                    {/* Personal Info */}
                                                    <div>
                                                        <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-3 md:mb-4">Personal Info</h3>
                                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                                                            {[
                                                                { label: 'Full Name', value: 'Graham Dhanani' },
                                                                { label: 'Gender', value: 'Male' },
                                                                { label: 'Date of Birth', value: 'March 23, 1995 (26 y.o)' },
                                                                { label: 'Language', value: 'English, Hindi, Marathi' }
                                                            ].map((item, index) => (
                                                                <div key={index}>
                                                                    <p className="text-xs md:text-sm text-gray-600 mb-1">{item.label}</p>
                                                                    <p className="text-xs md:text-sm font-medium text-gray-900">{item.value}</p>
                                                                </div>
                                                            ))}
                                                            <div className="sm:col-span-2">
                                                                <p className="text-xs md:text-sm text-gray-600 mb-1">Address</p>
                                                                <p className="text-xs md:text-sm font-medium text-gray-900">441, Ar Mall Parvel Point, Mota Varacha, surat.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='border-b-2 border-orange-500'></div>
                                                    
                                                    {/* Professional Info */}
                                                    <div>
                                                        <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-3 md:mb-4">Professional Info</h3>

                                                        <div className="mb-4 md:mb-6">
                                                            <p className="text-xs md:text-sm text-gray-600 mb-2">About Me</p>
                                                            <div className="space-y-2 md:space-y-3">
                                                                <p className="text-xs md:text-sm text-gray-900 leading-relaxed">
                                                                    I'm a product designer + filmmaker currently working remotely at Twitter from beautiful Manchester,
                                                                    United Kingdom. I'm passionate about designing digital products that have a positive impact on the world.
                                                                </p>
                                                                <p className="text-xs md:text-sm text-gray-900 leading-relaxed">
                                                                    For 4 years, I've specialised in interface, experience & interaction design as well as working in user research
                                                                    and product strategy for product agencies, big tech companies & start-ups.
                                                                </p>
                                                            </div>
                                                        </div>

                                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                                                            {[
                                                                { label: 'Current Job', value: 'Product Designer' },
                                                                { label: 'Experience in Years', value: '4 Years' },
                                                                { label: 'Highest Qualification Held', value: 'Bachelors in Engineering' }
                                                            ].map((item, index) => (
                                                                <div key={index}>
                                                                    <p className="text-xs md:text-sm text-gray-600 mb-1">{item.label}</p>
                                                                    <p className="text-xs md:text-sm font-medium text-gray-900">{item.value}</p>
                                                                </div>
                                                            ))}
                                                            <div className="sm:col-span-2">
                                                                <p className="text-xs md:text-sm text-gray-600 mb-1">Skill set</p>
                                                                <div className="flex flex-wrap gap-2">
                                                                    {['Project Management', 'Copywriting', 'English'].map((skill, index) => (
                                                                        <span key={index} className="px-2 md:px-3 py-1 text-orange-500 text-xs md:text-sm font-medium bg-[#FFF0E5] rounded">
                                                                            {skill}
                                                                        </span>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}

                                            {activeTab === 'Resume' && (
                                                <div className="text-center">
                                                    {!resumeUrl ? (
                                                        <>
                                                            <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-xl w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 flex items-center justify-center">
                                                                <span className="text-xl md:text-2xl">📄</span>
                                                            </div>
                                                            <p className="text-gray-500 text-sm md:text-base mb-4">No resume uploaded yet.</p>

                                                            <label className="inline-block cursor-pointer bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors text-sm md:text-base">
                                                                Upload Resume
                                                                <input
                                                                    type="file"
                                                                    accept=".pdf,.doc,.docx"
                                                                    onChange={handleResumeUpload}
                                                                    className="hidden"
                                                                />
                                                            </label>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <iframe
                                                                src={resumeUrl}
                                                                className="w-full h-[400px] sm:h-[500px] md:h-[620px] border border-gray-300 rounded-lg"
                                                                title="Resume Preview"
                                                            ></iframe>

                                                            <a
                                                                href={resumeUrl}
                                                                download={resumeFile?.name}
                                                                className="mt-4 inline-block bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors text-sm md:text-base"
                                                            >
                                                                Download Resume
                                                            </a>
                                                        </>
                                                    )}
                                                </div>
                                            )}

                                            {activeTab === 'Hiring Progress' && (
                                                <div className="space-y-4 md:space-y-6">
                                                    {/* Header */}
                                                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-4 md:mb-6">
                                                        <h2 className="text-base md:text-lg font-semibold text-gray-800">Current Stage</h2>
                                                        <button className="flex items-center gap-2 text-orange-600 border border-orange-500 px-3 md:px-4 py-2 md:py-3 hover:bg-orange-50 text-xs md:text-sm font-semibold rounded w-full sm:w-auto justify-center">
                                                            <IoIosArrowDown /> Give Rating
                                                        </button>
                                                    </div>

                                                    {/* Stage Tabs */}
                                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-1 text-xs md:text-sm font-medium text-center mb-4 md:mb-6">
                                                        {[
                                                            { name: 'In-Review', active: false },
                                                            { name: 'Shortlisted', active: false },
                                                            { name: 'Interview', active: true },
                                                            { name: 'Hired/Declined', active: false }
                                                        ].map((stage, index) => (
                                                            <div key={index} className={`font-semibold py-3 md:py-5 px-2 ${stage.active ? 'bg-orange-500 text-white' : 'bg-[#FFF0E5] text-orange-600'}`}>
                                                                {stage.name}
                                                            </div>
                                                        ))}
                                                    </div>

                                                    {/* Stage Info */}
                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
                                                        <div>
                                                            <p className="text-xs md:text-sm text-gray-500">Interview Date</p>
                                                            <p className="font-medium text-gray-800 text-sm md:text-base">10 - 13 July 2021</p>
                                                        </div>
                                                        <div>
                                                            <p className="text-xs md:text-sm text-gray-500">Interview Status</p>
                                                            <span className="inline-block bg-[#FFF0E5] text-orange-500 text-xs font-semibold px-2 md:px-3 py-1 md:py-2 rounded-full mt-1">
                                                                On Progress
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <p className="text-xs md:text-sm text-gray-500">Interview Location</p>
                                                            <p className="font-medium text-gray-800 text-xs md:text-sm">
                                                                Silver Crysta Room, Nomad Office<br />
                                                                3517 W. Gray St. Utica, Pennsylvania 57867
                                                            </p>
                                                        </div>
                                                        <div>
                                                            <p className="text-xs md:text-sm text-gray-500">Assigned to</p>
                                                            <div className="flex mt-2 space-x-[-8px]">
                                                                {[1, 2, 3].map((i) => (
                                                                    <img key={i} src={`https://i.pravatar.cc/30?img=${i}`} className="w-6 h-6 md:w-8 md:h-8 rounded-full border-2 border-white" alt="avatar" />
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* Move Step Button */}
                                                    <button className="border border-orange-500 text-orange-500 px-3 md:px-4 py-2 rounded-md hover:bg-orange-50 mb-4 md:mb-6 text-sm md:text-base w-full sm:w-auto">
                                                        Move To Next Step
                                                    </button>

                                                    {/* Notes */}
                                                    <div className="border-t border-orange-500 pt-4 md:pt-6">
                                                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-4">
                                                            <h3 className="text-sm md:text-base font-semibold text-gray-700">Notes</h3>
                                                            <button className="flex items-center text-orange-600 gap-1 text-xs md:text-sm hover:underline">
                                                                <FaPlus /> Add Notes
                                                            </button>
                                                        </div>

                                                        {/* Notes List */}
                                                        <div className="space-y-3 md:space-y-4">
                                                            {[
                                                                {
                                                                    text: "Please, do an interview stage immediately. The design division needs more new employee now",
                                                                    replies: "2 Replies",
                                                                    time: "10 July, 2021 • 11:30 AM"
                                                                },
                                                                {
                                                                    text: "Please, do an interview stage immediately.",
                                                                    replies: null,
                                                                    time: "10 July, 2021 • 10:30 AM"
                                                                }
                                                            ].map((note, index) => (
                                                                <div key={index} className="bg-[#FFF0E5] p-3 md:p-4 rounded-lg">
                                                                    <div className="flex items-start gap-3">
                                                                        <img src="https://i.pravatar.cc/40?img=4" className="w-8 h-8 md:w-10 md:h-10 rounded-full flex-shrink-0" alt="avatar" />
                                                                        <div className="min-w-0 flex-1">
                                                                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 mb-2">
                                                                                <h4 className="font-semibold text-sm text-gray-800">Maria Kelly</h4>
                                                                                <span className="text-xs text-gray-400">{note.time}</span>
                                                                            </div>
                                                                            <p className="text-xs md:text-sm text-gray-700 mb-2">{note.text}</p>
                                                                            {note.replies && (
                                                                                <p className="text-xs text-orange-600 font-semibold cursor-pointer hover:underline">{note.replies}</p>
                                                                            )}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            )}

                                            {activeTab === 'Interview Schedule' && (
                                                <div className="py-4 md:py-6 space-y-4 md:space-y-6">
                                                    {/* Section Header */}
                                                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-4">
                                                        <h2 className="font-semibold text-base md:text-lg text-gray-800">Interview List</h2>
                                                        <button className="text-orange-600 text-xs md:text-sm font-medium flex items-center gap-1 hover:text-orange-800">
                                                            <span className="text-lg md:text-xl">+</span> Add Schedule Interview
                                                        </button>
                                                    </div>

                                                    {/* Date Header */}
                                                    <div className="space-y-3">
                                                        <p className="text-xs md:text-sm text-gray-400">Tomorrow - 10 July, 2021</p>

                                                        {/* Interview Card */}
                                                        <div className="bg-[#FFF7F2] p-3 md:p-4 rounded-md">
                                                            <div className="flex flex-col gap-3">
                                                                {/* Top Row */}
                                                                <div className="flex items-center justify-between">
                                                                    <div className="flex items-center gap-3 min-w-0 flex-1">
                                                                        <img
                                                                            src="https://i.pravatar.cc/40?img=1"
                                                                            alt="avatar"
                                                                            className="w-8 h-8 md:w-10 md:h-10 rounded-full flex-shrink-0"
                                                                        />
                                                                        <div className="min-w-0">
                                                                            <h4 className="font-semibold text-sm text-gray-800 truncate">Kathryn Murphy</h4>
                                                                            <p className="text-xs text-gray-500">Written Test</p>
                                                                        </div>
                                                                    </div>
                                                                    <button className="text-gray-500 hover:text-gray-700 flex-shrink-0">
                                                                        <HiDotsHorizontal />
                                                                    </button>
                                                                </div>

                                                                {/* Time and Location */}
                                                                <div className="text-xs md:text-sm text-gray-600">
                                                                    <p className="text-gray-900 font-semibold mb-1">10:00 AM - 11:30 AM</p>
                                                                    <p className="truncate">Silver Crysta Room, Nomad</p>
                                                                </div>

                                                                {/* Action Button */}
                                                                <div className="flex">
                                                                    <button className="flex items-center gap-2 border border-orange-500 text-orange-500 text-xs md:text-sm px-3 py-2 font-semibold hover:bg-orange-50 rounded w-full sm:w-auto justify-center">
                                                                        <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                                                            <path d="M12 20h9" />
                                                                            <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19H4v-3L16.5 3.5z" />
                                                                        </svg>
                                                                        Add Feedback
                                                                    </button>
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
                    <ClientFooter />
                </div>
            </div>
        </>
    );
};

export default ClientAllApplicants;