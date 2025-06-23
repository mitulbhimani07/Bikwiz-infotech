import React from 'react';
import FreelancerSidebar from '../Navbar/FreelancerSidbar';
import FreelancerHeader from '../Navbar/FreelancerHeader';
import FreelancerFooter from '../Navbar/FreelancerFooter';
import New_Feature from '../../../assets/images/freelancerDashboard/Mask Group.png'; // Importing the new feature image
import { IoSearchSharp } from "react-icons/io5";
import { IoFilter } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";
import { RiCalendarEventFill } from "react-icons/ri";
import { FaChevronLeft  } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";


// Mock data for demonstration purposes
const mockApplications = [
    { id: 1, logo: 'https://cdn.pixabay.com/photo/2023/03/06/13/58/logo-7833524_640.png' , company: 'Nomad', role: 'Social Media Assistant', dateApplied: '24 July 2021', status: 'In Review' },
    { id: 2, logo: 'https://st3.depositphotos.com/11956860/17351/v/450/depositphotos_173519770-stock-illustration-logo-icon-hexagon-shape-with.jpg' , company: 'Udacity', role: 'Social Media Assistant', dateApplied: '20 July 2021', status: 'Shortlisted' },
    { id: 3, logo: 'https://static.vecteezy.com/system/resources/previews/022/418/958/non_2x/creative-polygon-logo-design-with-gradient-color-illustration-free-vector.jpg' , company: 'Packer', role: 'Social Media Assistant', dateApplied: '16 July 2021', status: 'Offered' },
    { id: 4, logo: 'https://i.pinimg.com/736x/27/fc/0c/27fc0cee8d557a044bfc4c4fe7352eee.jpg' , company: 'Divvy', role: 'Social Media Assistant', dateApplied: '14 July 2021', status: 'Interviewing' },
    { id: 5, logo: 'https://www.shutterstock.com/image-vector/hexagon-design-element-logo-260nw-575679037.jpg' , company: 'DigitalOcean', role: 'Social Media Assistant', dateApplied: '10 July 2021', status: 'Unsuitable' },
    // Add more mock data as needed
];




function FreelancerAllApplication() {
    const [activeTab, setActiveTab] = React.useState('All'); // State for active tab

    // Function to get status color
    const getStatusColor = (status) => {
        switch (status) {
            case 'In Review': return 'border-1 border-yellow-500 text-yellow-500';
            case 'Shortlisted': return 'border-1 borde-green-500 text-green-500';
            case 'Offered': return 'border-1 borde-blue-100 text-blue-500';
            case 'Interviewing': return 'border-1 borde-purple-100 text-purple-500';
            case 'Unsuitable': return 'border-1 borde-red-100 text-red-500';
            default: return 'border-1 borde-gray-100 text-gray-500';
        }
    };

    return (
        <div className="min-h-screen flex flex-col lg:flex-row bg-[#fff0e5] font-sans">
            {/* Sidebar */}
            <div className="lg:block lg:sticky lg:top-0 lg:left-0 lg:h-screen lg:flex-shrink-0 w-full lg:w-74">
                <FreelancerSidebar />
            </div>

            {/* Main content area */}
            <div className="flex flex-col flex-1 min-w-0">
                {/* Header */}
                <div className="sticky top-0 z-10">
                    <FreelancerHeader />
                </div>

                <main className="flex-1 overflow-y-auto px-4 sm:px-6 py-6 lg:py-8">
                    {/* Top Section */}
                    <div className="mb-6">
                        <h1 className="text-3xl font-bold text-orange-500 mb-2">All Applicants</h1>
                        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-xl font-semibold text-gray-800">Keep it up, Jake <br /><span className='text-gray-400 font-normal text-xs'>Here is job applications status from July 19 - July 25.</span></h2>
                                <div className="flex items-center text-gray-600 border border-gray-400  px-3 py-2">
                                    <span className="mr-2">Jul 19 - Jul 25</span>
                                    {/* Calendar Icon - Using inline SVG for simplicity */}
                                    <RiCalendarEventFill className="w-5 h-5 text-orange-500"/>
                                </div>
                            </div>

                            {/* New Feature Alert */}
                            <div className="bg-[#fff0e5] m-10 p-4 rounded-md mb-6 flex items-start justify-between">
                                <div className="flex items-start">
                                    {/* Icon Placeholder */}
                                    <div className="mr-3 rounded-full">
                                        <img src={New_Feature} alt="" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-orange-500">New Feature</p>
                                        <p className="text-sm text-gray-700">
                                            You can request a follow-up 7 days after applying for a job if the application status is in review. Only one follow-up is allowed per job.
                                        </p>
                                    </div>
                                </div>
                                <button className="text-gray-400 hover:text-gray-600">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                                </button>
                            </div>

                            {/* Application Status Tabs */}
                           <div className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200">
                                {['All (45)', 'In Review (34)', 'Interviewing (18)', 'Assessment (5)', 'Offered (2)', 'Hired (1)'].map(tab => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab.split(' ')[0])}
                                        className={`px-4 py-2 rounded-t-lg transition-colors duration-200 ${
                                            activeTab === tab.split(' ')[0]
                                                ? 'bg-white text-orange-500 border-b-2 border-orange-500'
                                                : 'hover:text-gray-700 hover:bg-gray-50'
                                        }`}
                                    >
                                        {tab}
                                    </button>
                                ))}
                            </div>

                            {/* Applications History Section */}
                            <div className="mt-6">
                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="text-lg font-semibold text-gray-800">Applications History</h3>
                                    <div className="flex space-x-2">
                                        <button className="flex items-center px-4 py-2 border border-gray-400  text-gray-700 hover:bg-gray-50">
                                            {/* Search Icon - Using inline SVG for simplicity */}
                                            <IoSearchSharp className="w-4 h-4 mr-2"/>
                                            Search
                                        </button>
                                        <button className="flex items-center px-4 py-2 border border-gray-400  text-gray-700 hover:bg-gray-50">
                                            {/* Filter Icon - Using inline SVG for simplicity */}
                                            <IoFilter className="w-4 h-4 mr-2"/>
                                            Filter
                                        </button>
                                    </div>
                                </div>

                                {/* Applications Table */}
                                <div className="overflow-x-auto bg-white ">
                                    <table className="min-w-full divide-y divide-gray-200">
                                        <thead className="">
                                            <tr>
                                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">#</th>
                                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Company Name</th>
                                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Roles</th>
                                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date Applied</th>
                                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                                <th scope="col" className="relative px-6 py-3">
                                                    <span className="sr-only">Edit</span>
                                                </th>
                                            </tr>
                                        </thead>
                                        {/* This is the tbody section where the changes are applied */}
                                        <tbody className="divide-y divide-gray-200">
                                            {mockApplications.map((app, index) => {
                                                // Determine the background color based on the index
                                                // index % 2 === 0 will be true for 0, 2, 4... (first, third, fifth row etc.)
                                                const rowBgColorClass = index % 2 === 0 ? 'bg-orange-50' : 'bg-white';

                                                return (
                                                    <tr key={app.id} className={rowBgColorClass}> {/* Apply the determined background class here */}
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{index + 1}</td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                            {/* Company Logo Placeholder */}
                                                            <div className="flex items-center">
                                                               {/* Conditional rendering for company logo or placeholder */}
                                                                {app.logo ? ( // Checks if a logo URL exists
                                                                    <div className="flex-shrink-0 h-8 w-8 rounded-full overflow-hidden flex items-center justify-center">
                                                                        <img className="h-full w-full object-contain" src={app.logo} alt={`${app.company} Logo`} />
                                                                    </div>
                                                                ) : ( // If no logo URL, render the placeholder
                                                                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center text-xs text-gray-600">
                                                                        {app.company.charAt(0)}
                                                                    </div>
                                                                )}
                                                                <div className="ml-3">
                                                                    {app.company}
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{app.role}</td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{app.dateApplied}</td>
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(app.status)}`}>
                                                                {app.status}
                                                            </span>
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                            <button className="text-gray-500 hover:text-gray-700">
                                                                {/* Three dots icon */}
                                                                <BsThreeDots className="w-5 h-5"/>
                                                            </button>
                                                        </td>
                                                    </tr>
                                                );
                                            })}
                                        </tbody>
                                    </table>
                                </div>

                                {/* Pagination */}
                                <div className="mt-6 flex justify-center items-center space-x-2 font-medium">
                                    <button className="px-3 py-1  text-gray-700 hover:bg-gray-50"><FaChevronLeft  /></button>
                                    {[1, 2, 3].map(page => (
                                        <button key={page} className={`px-3 py-1 rounded-sm ${page === 1 ? 'bg-orange-500 text-white border-blue-600' : 'border-gray-300 text-gray-700 hover:bg-gray-50'}`}>
                                            {page}
                                        </button>
                                    ))}
                                    <span className="text-gray-700">...</span>
                                    <button className="px-3 py-1 text-gray-700 hover:bg-gray-50">12</button>
                                    <button className="px-3 py-1 text-gray-700 hover:bg-gray-50"><FaChevronRight /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>

                {/* Footer */}
                <FreelancerFooter />
            </div>
        </div>
    );
}

export default FreelancerAllApplication;    