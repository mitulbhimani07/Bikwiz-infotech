import React, { useState } from 'react';
import ClientHeader from '../navbar/ClientHeader';
import ClientSidbar from '../navbar/ClientSidbar';
import client from '../../../assets/images/client.png'; // Adjust the path as needed
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
        <div className="min-h-screen bg-gray-50 flex">
            {/* Sidebar */}
            <ClientSidbar />

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                {/* Header */}
                <ClientHeader />

                <div className="max-w-7xl mx-auto px-4 py-6">
                    <div className="flex flex-col md:flex-row gap-6">
                        {/* Left Column */}
                        <div className="md:w-1/3 space-y-6">
                            <h1 className="text-2xl font-bold text-orange-500">Applicant Details</h1>

                            {/* Profile Card */}
                            <div className="bg-white rounded-lg border border-gray-200 p-6">
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

                                <div className="space-y-3">
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="text-gray-600">Applied Jobs</span>
                                        <span className="text-gray-500">2 days ago</span>
                                    </div>

                                    <div>
                                        <h3 className="font-medium text-gray-900 mb-1">Product Development</h3>
                                        <div className="flex gap-2 text-sm text-gray-600">
                                            <span>Marketing</span>
                                            <span>•</span>
                                            <span>Full-Time</span>
                                        </div>
                                    </div>

                                    <div className="mt-4">
                                        <div className="flex justify-between items-center text-sm mb-2">
                                            <span className="text-gray-600">Stage</span>
                                            <span className="text-orange-500 font-medium">Interview</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                            <div className="bg-orange-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                                        </div>
                                    </div>

                                    <button className="w-full bg-orange-50 text-orange-600 border border-orange-200 rounded-lg py-2 px-4 mt-4 flex items-center justify-center gap-2 hover:bg-orange-100 transition-colors">
                                        <span>💬</span>
                                        Schedule Interview
                                    </button>
                                </div>
                            </div>

                            {/* Contact Card */}
                            <div className="bg-white rounded-lg border border-gray-200 p-6">
                                <h3 className="font-semibold text-gray-900 mb-4">Contact</h3>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <span className="text-gray-400">✉️</span>
                                        <div>
                                            <p className="text-sm text-gray-600">Email</p>
                                            <p className="text-sm text-gray-900">jeromeBell45@email.com</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <span className="text-gray-400">📱</span>
                                        <div>
                                            <p className="text-sm text-gray-600">Phone</p>
                                            <p className="text-sm text-gray-900">+44 1245 572 135</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <span className="text-gray-400">📸</span>
                                        <div>
                                            <p className="text-sm text-gray-600">Instagram</p>
                                            <p className="text-sm text-orange-500">instagram.com/jeromebell</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <span className="text-gray-400">🐦</span>
                                        <div>
                                            <p className="text-sm text-gray-600">Twitter</p>
                                            <p className="text-sm text-orange-500">twitter.com/jeromebell</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <span className="text-gray-400">🌐</span>
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
                            <div className="bg-white rounded-lg border border-gray-200">
                                {/* Tabs */}
                                <div className="border-b border-gray-200">
                                    <div className="flex">
                                        {tabs.map((tab) => (
                                            <button
                                                key={tab}
                                                onClick={() => setActiveTab(tab)}
                                                className={`px-6 py-4 text-sm font-medium border-b-2 ${activeTab === tab
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
                                                            <span className="px-3 py-1 bg-orange-100 text-orange-700 text-xs rounded-full">Project Management</span>
                                                            <span className="px-3 py-1 bg-orange-100 text-orange-700 text-xs rounded-full">Copywriting</span>
                                                            <span className="px-3 py-1 bg-orange-100 text-orange-700 text-xs rounded-full">English</span>
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
                                        <div className="py-6">
                                            <div className="flex justify-between mb-2">
                                                <span className="text-sm font-medium text-gray-700">Application Review</span>
                                                <span className="text-sm text-gray-500">2 days ago</span>
                                            </div>
                                            <div className="h-2 bg-gray-200 rounded-full mb-8">
                                                <div className="h-2 bg-green-500 rounded-full" style={{ width: '100%' }}></div>
                                            </div>

                                            <div className="flex justify-between mb-2">
                                                <span className="text-sm font-medium text-gray-700">Screening</span>
                                                <span className="text-sm text-gray-500">1 day ago</span>
                                            </div>
                                            <div className="h-2 bg-gray-200 rounded-full mb-8">
                                                <div className="h-2 bg-green-500 rounded-full" style={{ width: '100%' }}></div>
                                            </div>

                                            <div className="flex justify-between mb-2">
                                                <span className="text-sm font-medium text-orange-600">Interview</span>
                                                <span className="text-sm text-gray-500">In progress</span>
                                            </div>
                                            <div className="h-2 bg-gray-200 rounded-full mb-8">
                                                <div className="h-2 bg-orange-500 rounded-full" style={{ width: '75%' }}></div>
                                            </div>

                                            <div className="flex justify-between mb-2">
                                                <span className="text-sm font-medium text-gray-500">Final Decision</span>
                                                <span className="text-sm text-gray-500">Pending</span>
                                            </div>
                                            <div className="h-2 bg-gray-200 rounded-full">
                                                <div className="h-2 bg-gray-300 rounded-full" style={{ width: '0%' }}></div>
                                            </div>
                                        </div>
                                    )}

                                    {activeTab === 'Interview Schedule' && (
                                        <div className="py-6">
                                            <div className="bg-gray-50 p-4 rounded-lg mb-6">
                                                <div className="flex justify-between items-center mb-2">
                                                    <span className="font-medium">First Round Interview</span>
                                                    <span className="text-sm bg-orange-100 text-orange-800 px-2 py-1 rounded">Upcoming</span>
                                                </div>
                                                <div className="text-sm text-gray-600 mb-1">Monday, June 7, 2023</div>
                                                <div className="text-sm text-gray-600">10:00 AM - 11:00 AM (GMT)</div>
                                                <div className="flex gap-2 mt-4">
                                                    <button className="text-sm text-orange-600 hover:text-orange-800">Reschedule</button>
                                                    <button className="text-sm text-red-600 hover:text-red-800">Cancel</button>
                                                </div>
                                            </div>

                                            <div className="bg-gray-50 p-4 rounded-lg">
                                                <div className="flex justify-between items-center mb-2">
                                                    <span className="font-medium">Technical Assessment</span>
                                                    <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">Completed</span>
                                                </div>
                                                <div className="text-sm text-gray-600 mb-1">Friday, June 4, 2023</div>
                                                <div className="text-sm text-gray-600">2:00 PM - 3:30 PM (GMT)</div>
                                                <div className="mt-4">
                                                    <button className="text-sm text-blue-600 hover:text-blue-800">View Feedback</button>
                                                </div>
                                            </div>

                                            <button className="w-full mt-6 bg-orange-50 text-orange-600 border border-orange-200 rounded-lg py-2 px-4 flex items-center justify-center gap-2 hover:bg-orange-100 transition-colors">
                                                <span>+</span>
                                                Schedule New Interview
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClientAllApplicants;
