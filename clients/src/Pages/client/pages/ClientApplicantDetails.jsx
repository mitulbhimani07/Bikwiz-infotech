import React, { useState } from 'react';
import ClientHeader from '../navbar/ClientHeader';
import ClientSidbar from '../navbar/ClientSidbar';
import { BiMessageAltDetail } from "react-icons/bi";
import client from '../../../assets/images/client.png'; // Adjust the path as needed
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
            <div className="min-h-screen flex bg-[#fff0e5]">
                <div className="sticky top-0 left-0  h-screen">

                    <ClientSidbar />
                </div>

                <div className="flex flex-col flex-1 ">
                    <div className="sticky top-0 z-10 ">

                        <ClientHeader />
                    </div>

                    <div className="max-w-7xl mx-auto px-4 py-6">
                        <h1 className="text-2xl font-bold text-orange-500 mb-6">Applicant Details</h1>
                        <div className="flex flex-col md:flex-row gap-6 bg-white rounded-lg p-6">
                            {/* Left Column */}
                            <div className="md:w-1/3 space-y-6">

                                {/* Profile Card */}
                                <div className="bg-white  border border-orange-500 p-6">
                                    <div className="flex items-center gap-4 mb-4">
                                        {/* <div className=" rounded-xl w-16 h-16" /> */}
                                        <img src={client} alt="" width={100} className='rounded-full' />
                                        <div>
                                            <h2 className="text-lg font-semibold text-gray-900">Jerome Bell</h2>
                                            <p className="text-gray-600">Product Designer</p>
                                            <div className="flex items-center gap-1 mt-1">
                                                <span className="text-yellow-400">★</span>
                                                <span className="text-sm font-medium">4.0</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-3 bg-[#fff0e5] p-3">
                                        <div className="flex justify-between items-center text-sm">
                                            <span className="text-gray-600">Applied Jobs</span>
                                            <span className="text-gray-500">2 days ago</span>
                                        </div>
                                        <div className='border-b-2 border-orange-500'></div>
                                        <div>
                                            <h3 className="font-medium text-gray-900 mb-1">Product Development</h3>
                                            <div className="flex gap-2 text-sm text-gray-600">
                                                <span>Marketing</span>
                                                <span>•</span>
                                                <span>Full-Time</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="space-y-5 w-full max-w-md mt-5 mx-auto">
                                        {/* Stage Indicator */}
                                        <div className='bg-[#fff0e5] p-4'>
                                            <div className="flex justify-between items-center text-sm mb-2 ">
                                                <span className="text-black font-medium">Stage</span>
                                                <div className="flex items-center gap-1">
                                                    <span className="w-3 h-3 rounded-full bg-orange-500 inline-block"></span>
                                                    <span className="text-orange-500 font-medium">Interview</span>
                                                </div>
                                            </div>

                                            {/* Progress Bar - 4 Segments */}
                                            <div className="flex h-3 overflow-hidden ">
                                                <div className="flex-1 bg-orange-500"></div>
                                                <div className="flex-1 bg-orange-500 mx-[2px]"></div>
                                                <div className="flex-1 bg-orange-500 mr-[2px]"></div>
                                                <div className="flex-1 bg-orange-300"></div>
                                            </div>
                                        </div>

                                        {/* Button Section */}
                                        <div className="flex gap-2">
                                            <button className="flex-1 border border-orange-500 text-orange-600 font-semibold py-2  hover:bg-orange-50 transition">
                                                Schedule Interview
                                            </button>
                                            <button className="w-11 h-11 flex items-center justify-center border border-orange-500 text-orange-600  hover:bg-orange-50 transition">
                                                <BiMessageAltDetail className='w-5 h-5' />
                                            </button>
                                        </div>
                                    </div>

                                    {/* </div> */}

                                    {/* Contact Card */}
                                    <h3 className="font-semibold text-gray-900 my-4">Contact</h3>
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3">
                                            <span className="text-gray-400"><MdOutlineEmail className='w-5 h-5' /></span>
                                            <div>
                                                <p className="text-sm text-gray-600">Email</p>
                                                <p className="text-sm text-gray-900">jeromeBell45@email.com</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-3">
                                            <span className="text-gray-400"><IoPhonePortraitOutline className='w-5 h-5' /></span>
                                            <div>
                                                <p className="text-sm text-gray-600">Phone</p>
                                                <p className="text-sm text-gray-900">+44 1245 572 135</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-3">
                                            <span className="text-gray-400"><FaInstagram className='w-5 h-5' /></span>
                                            <div>
                                                <p className="text-sm text-gray-600">Instagram</p>
                                                <p className="text-sm text-orange-500">instagram.com/jeromebell</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-3">
                                            <span className="text-gray-400"><FaTwitter className='w-5 h-5' /></span>
                                            <div>
                                                <p className="text-sm text-gray-600">Twitter</p>
                                                <p className="text-sm text-orange-500">twitter.com/jeromebell</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-3">
                                            <span className="text-gray-400"><TbWorld className='w-5 h-5' /></span>
                                            <div>
                                                <p className="text-sm text-gray-600">Website</p>
                                                <p className="text-sm text-orange-500">www.jeromebell.com</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Column */}
                            <div className="md:w-[1000px]">
                                <div className="bg-white border border-orange-500">
                                    {/* Tabs */}
                                    <div className="border-b mx-6 border-orange-500">
                                        <div className="flex">
                                            {tabs.map((tab) => (
                                                <button
                                                    key={tab}
                                                    onClick={() => setActiveTab(tab)}
                                                    className={`px-13 py-4 text-sm md:ms-2 font-medium border-b-6 ${activeTab === tab
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
                                    <div className="p-6">
                                        {activeTab === 'Applicant Profile' && (
                                            <div className="space-y-8">
                                                {/* Personal Info */}
                                                <div>
                                                    <h3 className="text-lg font-semibold text-gray-1900 mb-4">Personal Info</h3>
                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                        <div>
                                                            <p className="text-sm text-gray-600 mb-1">Full Name</p>
                                                            <p className="text-sm font-medium text-gray-1900">Graham Dhanani</p>
                                                        </div>
                                                        <div>
                                                            <p className="text-sm text-gray-600 mb-1">Gender</p>
                                                            <p className="text-sm font-medium text-gray-1900">Male</p>
                                                        </div>
                                                        <div>
                                                            <p className="text-sm text-gray-600 mb-1">Date of Birth</p>
                                                            <p className="text-sm font-medium text-gray-1900">March 23, 1995 <span className="text-gray-500">(26 y.o)</span></p>
                                                        </div>
                                                        <div>
                                                            <p className="text-sm text-gray-600 mb-1">Language</p>
                                                            <p className="text-sm font-medium text-gray-1900">English, Hindi, Marathi</p>
                                                        </div>
                                                        <div className="md:col-span-2">
                                                            <p className="text-sm text-gray-600 mb-1">Address</p>
                                                            <p className="text-sm font-medium text-gray-1900">441, Ar Mall Parvel Point, Mota Varacha, surat.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='border-b-2 border-orange-500'></div>
                                                {/* Professional Info */}
                                                <div>
                                                    <h3 className="text-lg font-semibold text-gray-1900 mb-4">Professional Info</h3>

                                                    <div className="mb-6">
                                                        <p className="text-sm text-gray-600 mb-2">About Me</p>
                                                        <p className="text-sm text-gray-900 leading-relaxed">
                                                            I'm a product designer + filmmaker currently working remotely at Twitter from beautiful Manchester,
                                                            United Kingdom. I'm passionate about designing digital products that have a positive impact on the world.
                                                        </p>
                                                        <p className="text-sm text-gray-900 leading-relaxed mt-3">
                                                            For 4 years, I've specialised in interface, experience & interaction design as well as working in user research
                                                            and product strategy for product agencies, big tech companies & start-ups.
                                                        </p>
                                                    </div>

                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                        <div>
                                                            <p className="text-sm text-gray-600 mb-1">Current Job</p>
                                                            <p className="text-sm font-medium text-gray-900">Product Designer</p>
                                                        </div>
                                                        <div>
                                                            <p className="text-sm text-gray-600 mb-1">Experience in Years</p>
                                                            <p className="text-sm font-medium text-gray-900">4 Years</p>
                                                        </div>
                                                        <div>
                                                            <p className="text-sm text-gray-600 mb-1">Highest Qualification Held</p>
                                                            <p className="text-sm font-medium text-gray-900">Bachelors in Engineering</p>
                                                        </div>
                                                        <div>
                                                            <p className="text-sm text-gray-600 mb-1">Skill set</p>
                                                            <div className="flex flex-wrap gap-2">
                                                                <span className="px-3 py-1 text-orange-500 text-l font-medium bg-[#FFF0E5]">Project Management</span>
                                                                <span className="px-3 py-1 text-orange-500 text-l font-medium bg-[#FFF0E5]">Copywriting</span>
                                                                <span className="px-3 py-1 text-orange-500 text-l font-medium bg-[#FFF0E5]">English</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        {activeTab === 'Resume' && (
                                            <div className="text-center ">
                                                {!resumeUrl ? (
                                                    <>
                                                        <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-xl w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                                                            <span className="text-2xl">📄</span>
                                                        </div>
                                                        <p className="text-gray-500">No resume uploaded yet.</p>

                                                        <label className="inline-block mt-4 cursor-pointer bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors">
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
                                                            className="w-full h-[620px] border border-gray-300 rounded-lg"
                                                            title="Resume Preview"
                                                        ></iframe>

                                                        <a
                                                            href={resumeUrl}
                                                            download={resumeFile?.name}
                                                            className="mt-4 inline-block bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors"
                                                        >
                                                            Download Resume
                                                        </a>
                                                    </>
                                                )}
                                            </div>
                                        )}


                                        {activeTab === 'Hiring Progress' && (
                                            <div className="space-y-6">

                                                {/* Header */}
                                                <div className="flex justify-between items-center mb-6">
                                                    <h2 className="text-lg font-semibold text-gray-800">Current Stage</h2>
                                                    <button className="flex items-center gap-2 text-orange-600 border border-orange-500 px-4 py-3  hover:bg-orange-50 text-l font-semibold ">
                                                        <span><IoIosArrowDown /></span> Give Rating
                                                    </button>
                                                </div>

                                                {/* Stage Tabs */}
                                                <div className="grid grid-cols-4 text-sm font-medium text-center mb-6 overflow-hidden">
                                                    <div className="font-semibold text-l mx-1 bg-[#FFF0E5] py-5 text-orange-600">In-Review</div>
                                                    <div className="font-semibold text-l mx-1 bg-[#FFF0E5] py-5 text-orange-600">Shortlisted</div>
                                                    <div className="font-semibold text-l mx-1 bg-orange-500 text-white py-5">Interview</div>
                                                    <div className="font-semibold text-l mx-1 bg-[#FFF0E5] py-5 text-orange-600">Hired / Declined</div>
                                                </div>

                                                {/* Stage Info */}
                                                <div className="grid grid-cols-2 gap-6 mb-6">
                                                    <div>
                                                        <p className="text-sm text-gray-500">Interview Date</p>
                                                        <p className="font-medium text-gray-800">10 - 13 July 2021</p>
                                                    </div>
                                                    <div>
                                                        <p className="text-sm text-gray-500">Interview Status</p>
                                                        <span className="inline-block bg-[#FFF0E5] text-orange-500 text-xs font-semibold px-3 py-2 rounded-full mt-1">
                                                            On Progress
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <p className="text-sm text-gray-500">Interview Location</p>
                                                        <p className="font-medium text-gray-800">
                                                            Silver Crysta Room, Nomad Office<br />
                                                            3517 W. Gray St. Utica, Pennsylvania 57867
                                                        </p>
                                                    </div>
                                                    <div>
                                                        <p className="text-sm text-gray-500">Assigned to</p>
                                                        <div className="flex mt-2 space-x-[-10px]">
                                                            <img src="https://i.pravatar.cc/30?img=1" className="w-8 h-8 rounded-full border-1 border-white" />
                                                            <img src="https://i.pravatar.cc/30?img=2" className="w-8 h-8 rounded-full border-1 border-white" />
                                                            <img src="https://i.pravatar.cc/30?img=3" className="w-8 h-8 rounded-full border-1 border-white" />
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Move Step Button */}
                                                <button className="border border-orange-500 text-orange-500 px-4 py-2 rounded-md hover:bg-orange-50 mb-6">
                                                    Move To Next Step
                                                </button>

                                                {/* Notes */}
                                                <div className="border-t border-orange-500 pt-6">
                                                    <div className="flex justify-between items-center mb-4">
                                                        <h3 className="text-md font-semibold text-gray-700">Notes</h3>
                                                        <button className="flex items-center text-orange-600 gap-1 text-sm hover:underline">
                                                            <FaPlus /> Add Notes
                                                        </button>
                                                    </div>

                                                    {/* Note 1 */}
                                                    <div className="bg-[#FFF0E5] p-4  mb-4">
                                                        <div className="flex items-start gap-3">
                                                            <img src="https://i.pravatar.cc/40?img=4" className="w-10 h-10 rounded-full" />
                                                            <div>
                                                                <div className="flex items-center mb-1">
                                                                    <h4 className="font-semibold text-sm text-gray-800">Maria Kelly</h4>
                                                                    <span className="text-xs md:ms-120 sm:ms-auto text-gray-400">10 July, 2021 • 11:30 AM</span>
                                                                </div>
                                                                <p className="text-sm text-gray-700 mb-2">
                                                                    Please, do an interview stage immediately. The design division needs more new employee now
                                                                </p>
                                                                <p className="text-xs text-orange-600 font-semibold cursor-pointer hover:underline">2 Replies</p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* Note 2 */}
                                                    <div className="bg-[#FFF0E5] p-4 ">
                                                        <div className="flex items-start gap-3">
                                                            <img src="https://i.pravatar.cc/40?img=4" className="w-10 h-10 rounded-full" />
                                                            <div>
                                                                <div className="flex items-center mb-1">
                                                                    <h4 className="font-semibold text-sm text-gray-800">Maria Kelly</h4>
                                                                    <span className="text-xs md:ms-120 sm:ms-auto text-gray-400 ">10 July, 2021 • 10:30 AM</span>
                                                                </div>
                                                                <p className="text-sm text-gray-700">
                                                                    Please, do an interview stage immediately.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}


                                        {activeTab === 'Interview Schedule' && (
                                            <div className="py-6 space-y-6">

                                                {/* Section Header */}
                                                <div className="flex justify-between items-center mb-4">
                                                    <h2 className="font-semibold text-lg text-gray-800">Interview List</h2>
                                                    <button className="text-orange-600 text-sm font-medium flex items-center gap-1 hover:text-orange-800">
                                                        <span className="text-xl">+</span> Add Schedule Interview
                                                    </button>
                                                </div>

                                                {/* Grouped by Date */}
                                                <div className="space-y-3">
                                                    <p className="text-sm text-gray-400">Tomorrow - 10 July, 2021</p>

                                                    {/* Interview Card */}
                                                    <div className="bg-[#FFF7F2] p-4 rounded-md flex items-center justify-between">
                                                        <div className="flex items-center gap-4">
                                                            <img
                                                                src="https://i.pravatar.cc/40?img=1"
                                                                alt="avatar"
                                                                className="w-10 h-10 rounded-full"
                                                            />
                                                            <div>
                                                                <h4 className="font-semibold text-sm text-gray-800">Kathryn Murphy</h4>
                                                                <p className="text-xs text-gray-500">Written Test</p>
                                                            </div>
                                                        </div>

                                                        <div className="text-sm text-gray-600 text-right">
                                                            <p className="text-gray-900 font-semibold">10:00 AM - 11:30 AM</p>
                                                            <p>Silver Crysta Room, Nomad</p>
                                                        </div>

                                                        <div className="flex items-center gap-2">
                                                            <button className="flex items-center gap-2 border border-orange-500 text-orange-500 text-sm px-3 py-2 font-semibold  hover:bg-orange-50">
                                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                                                    <path d="M12 20h9" />
                                                                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19H4v-3L16.5 3.5z" />
                                                                </svg>
                                                                Add Feedback
                                                            </button>
                                                            <button className="text-gray-500 hover:text-gray-700">
                                                                <HiDotsHorizontal />
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* Grouped by Date */}
                                                <div className="space-y-3">
                                                    <p className="text-sm text-gray-400"> 10 July, 2021</p>

                                                    {/* Interview Card */}
                                                    <div className="bg-[#FFF7F2] p-4 rounded-md flex items-center justify-between">
                                                        <div className="flex items-center gap-4">
                                                            <img
                                                                src="https://i.pravatar.cc/40?img=1"
                                                                alt="avatar"
                                                                className="w-10 h-10 rounded-full"
                                                            />
                                                            <div>
                                                                <h4 className="font-semibold text-sm text-gray-800">Kathryn Murphy</h4>
                                                                <p className="text-xs text-gray-500">Written Test</p>
                                                            </div>
                                                        </div>

                                                        <div className="text-sm text-gray-600 text-right">
                                                            <p className="text-gray-900 font-semibold">10:00 AM - 11:30 AM</p>
                                                            <p>Silver Crysta Room, Nomad</p>
                                                        </div>

                                                        <div className="flex items-center gap-2">
                                                            <button className="flex items-center gap-2 border border-orange-500 text-orange-500 text-sm px-3 py-2 font-semibold  hover:bg-orange-50">
                                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                                                    <path d="M12 20h9" />
                                                                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19H4v-3L16.5 3.5z" />
                                                                </svg>
                                                                Add Feedback
                                                            </button>
                                                            <button className="text-gray-500 hover:text-gray-700">
                                                                <HiDotsHorizontal />
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* Grouped by Date */}
                                                <div className="space-y-3">
                                                    <p className="text-sm text-gray-400"> 10 July, 2021</p>

                                                    {/* Interview Card */}
                                                    <div className="bg-[#FFF7F2] p-4 rounded-md flex items-center justify-between">
                                                        <div className="flex items-center gap-4">
                                                            <img
                                                                src="https://i.pravatar.cc/40?img=1"
                                                                alt="avatar"
                                                                className="w-10 h-10 rounded-full"
                                                            />
                                                            <div>
                                                                <h4 className="font-semibold text-sm text-gray-800">Kathryn Murphy</h4>
                                                                <p className="text-xs text-gray-500">Written Test</p>
                                                            </div>
                                                        </div>

                                                        <div className="text-sm text-gray-600 text-right">
                                                            <p className="text-gray-900 font-semibold">10:00 AM - 11:30 AM</p>
                                                            <p>Silver Crysta Room, Nomad</p>
                                                        </div>

                                                        <div className="flex items-center gap-2">
                                                            <button className="flex items-center gap-2 border border-orange-500 text-orange-500 text-sm px-3 py-2 font-semibold  hover:bg-orange-50">
                                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                                                    <path d="M12 20h9" />
                                                                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19H4v-3L16.5 3.5z" />
                                                                </svg>
                                                                Add Feedback
                                                            </button>
                                                            <button className="text-gray-500 hover:text-gray-700">
                                                                <HiDotsHorizontal />
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* Grouped by Date */}
                                                <div className="space-y-3">
                                                    <p className="text-sm text-gray-400"> 10 July, 2021</p>

                                                    {/* Interview Card */}
                                                    <div className="bg-[#FFF7F2] p-4 rounded-md flex items-center justify-between">
                                                        <div className="flex items-center gap-4">
                                                            <img
                                                                src="https://i.pravatar.cc/40?img=1"
                                                                alt="avatar"
                                                                className="w-10 h-10 rounded-full"
                                                            />
                                                            <div>
                                                                <h4 className="font-semibold text-sm text-gray-800">Kathryn Murphy</h4>
                                                                <p className="text-xs text-gray-500">Written Test</p>
                                                            </div>
                                                        </div>

                                                        <div className="text-sm text-gray-600 text-right">
                                                            <p className="text-gray-900 font-semibold">10:00 AM - 11:30 AM</p>
                                                            <p>Silver Crysta Room, Nomad</p>
                                                        </div>

                                                        <div className="flex items-center gap-2">
                                                            <button className="flex items-center gap-2 border border-orange-500 text-orange-500 text-sm px-3 py-2 font-semibold  hover:bg-orange-50">
                                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                                                    <path d="M12 20h9" />
                                                                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19H4v-3L16.5 3.5z" />
                                                                </svg>
                                                                Add Feedback
                                                            </button>
                                                            <button className="text-gray-500 hover:text-gray-700">
                                                                <HiDotsHorizontal />
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Add more sections below for 11 July, 12 July, etc. */}

                                            </div>
                                        )}

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
