import React from 'react';
import FreelancerSidebar from '../Navbar/FreelancerSidbar';
import FreelancerHeader from '../Navbar/FreelancerHeader';
import FreelancerFooter from '../Navbar/FreelancerFooter';
import New_Feature from '../../../assets/images/freelancerDashboard/Mask Group.png'; // Importing the new feature image
// Mock data for demonstration purposes
const mockApplications = [
    { id: 1, company: 'Nomad', role: 'Social Media Assistant', dateApplied: '24 July 2021', status: 'In Review' },
    { id: 2, company: 'Udacity', role: 'Social Media Assistant', dateApplied: '20 July 2021', status: 'Shortlisted' },
    { id: 3, company: 'Packer', role: 'Social Media Assistant', dateApplied: '16 July 2021', status: 'Offered' },
    { id: 4, company: 'Divvy', role: 'Social Media Assistant', dateApplied: '14 July 2021', status: 'Interviewing' },
    { id: 5, company: 'DigitalOcean', role: 'Social Media Assistant', dateApplied: '10 July 2021', status: 'Unsuitable' },
    // Add more mock data as needed
];




function FreelancerAllApplication() {
    const [activeTab, setActiveTab] = React.useState('All'); // State for active tab

    // Function to get status color
    const getStatusColor = (status) => {
        switch (status) {
            case 'In Review': return 'bg-yellow-100 text-yellow-800';
            case 'Shortlisted': return 'bg-green-100 text-green-800';
            case 'Offered': return 'bg-blue-100 text-blue-800';
            case 'Interviewing': return 'bg-purple-100 text-purple-800';
            case 'Unsuitable': return 'bg-red-100 text-red-800';
            default: return 'bg-gray-100 text-gray-800';
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
                                <div className="flex items-center text-gray-600 border border-gray-300 rounded-md px-3 py-2">
                                    <span className="mr-2">Jul 19 - Jul 25</span>
                                    {/* Calendar Icon - Using inline SVG for simplicity */}
                                    <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                                </div>
                            </div>

                            {/* New Feature Alert */}
                            <div className="bg-blue-50 m-10 p-4 rounded-md mb-6 flex items-start justify-between">
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
                                                ? 'bg-white text-blue-600 border-b-2 border-orange-500'
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
                                        <button className="flex items-center px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
                                            {/* Search Icon - Using inline SVG for simplicity */}
                                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                            Search
                                        </button>
                                        <button className="flex items-center px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
                                            {/* Filter Icon - Using inline SVG for simplicity */}
                                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path></svg>
                                            Filter
                                        </button>
                                    </div>
                                </div>

                                {/* Applications Table */}
                                <div className="overflow-x-auto bg-white rounded-lg shadow-sm">
                                    <table className="min-w-full divide-y divide-gray-200">
                                        <thead className="bg-gray-50">
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
                                        <tbody className="bg-white divide-y divide-gray-200">
                                            {mockApplications.map((app, index) => (
                                                <tr key={app.id}>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{index + 1}</td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                        {/* Company Logo Placeholder */}
                                                        <div className="flex items-center">
                                                            <div className="flex-shrink-0 h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center text-xs text-gray-600">
                                                                {app.company.charAt(0)}
                                                            </div>
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
                                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 6a2 2 0 110-4 2 2 0 010 4zm0 6a2 2 0 110-4 2 2 0 010 4zm0 6a2 2 0 110-4 2 2 0 010 4z"></path></svg>
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>

                                {/* Pagination */}
                                <div className="mt-6 flex justify-center items-center space-x-2">
                                    <button className="px-3 py-1 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">&lt;</button>
                                    {[1, 2, 3].map(page => (
                                        <button key={page} className={`px-3 py-1 border rounded-md ${page === 1 ? 'bg-blue-600 text-white border-blue-600' : 'border-gray-300 text-gray-700 hover:bg-gray-50'}`}>
                                            {page}
                                        </button>
                                    ))}
                                    <span className="text-gray-700">...</span>
                                    <button className="px-3 py-1 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">12</button>
                                    <button className="px-3 py-1 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">&gt;</button>
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
