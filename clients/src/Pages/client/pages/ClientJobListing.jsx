import React, { useState } from 'react';
import {  MoreHorizontal, Calendar } from 'lucide-react';
import ClientSidebar from '../navbar/ClientSidbar';
import ClientHeader from '../navbar/ClientHeader';
import ClientFooter from '../navbar/ClientFooter';
import { TbMenu4 } from "react-icons/tb";
import { BiChevronLeft , BiChevronRight  } from "react-icons/bi";

// Mock components for demonstration

function ClientJobListing() {
    const [jobs] = useState([
        {
            id: 1,
            role: 'Social Media Assistant',
            status: 'Live',
            statusColor: 'border-[#56cdad] text-[#56cdad]',
            datePosted: '20 May 2020',
            dueDate: '24 May 2020',
            jobType: 'Fulltime',
            jobTypeColor: 'border-[#ff6800] text-[#ff6800]',
            applicants: 19,
            needs: 4
        },
        {
            id: 2,
            role: 'Senior Designer',
            status: 'Live',
            statusColor: 'border-[#56cdad] text-[#56cdad]',
            datePosted: '16 May 2020',
            dueDate: '24 May 2020',
            jobType: 'Fulltime',
            jobTypeColor: 'border-[#ff6800] text-[#ff6800]',
            applicants: 1234,
            needs: 0
        },
        {
            id: 3,
            role: 'Visual Designer',
            status: 'Live',
            statusColor: 'border-[#56cdad] text-[#56cdad]',
            datePosted: '15 May 2020',
            dueDate: '24 May 2020',
            jobType: 'Freelance',
            jobTypeColor: 'border-[#ffb836] text-[#ffb836]',
            applicants: 2435,
            needs: 1
        },
        {
            id: 4,
            role: 'Data Senior',
            status: 'Closed',
            statusColor: 'border-[#ff6550] text-[#ff6550]',
            datePosted: '13 May 2020',
            dueDate: '24 May 2020',
            jobType: 'Freelance',
            jobTypeColor: 'border-[#ffb836] text-[#ffb836]',
            applicants: 6534,
            needs: 10
        },
        {
            id: 5,
            role: 'Kotlin Developer',
            status: 'Closed',
            statusColor: 'border-[#ff6550] text-[#ff6550]',
            datePosted: '12 May 2020',
            dueDate: '24 May 2020',
            jobType: 'Fulltime',
            jobTypeColor: 'border-[#ff6800] text-[#ff6800]',
            applicants: 12,
            needs: 20
        },
        {
            id: 6,
            role: 'React Developer',
            status: 'Closed',
            statusColor: 'border-[#ff6550] text-[#ff6550]',
            datePosted: '11 May 2020',
            dueDate: '24 May 2020',
            jobType: 'Fulltime',
            jobTypeColor: 'border-[#ff6800] text-[#ff6800]',
            applicants: 15,
            needs: 10
        },
        {
            id: 7,
            role: 'Kotlin Developer',
            status: 'Closed',
            statusColor: 'border-[#ff6550] text-[#ff6550]',
            datePosted: '12 May 2020',
            dueDate: '24 May 2020',
            jobType: 'Fulltime',
            jobTypeColor: 'border-[#ff6800] text-[#ff6800]',
            applicants: 12,
            needs: 20
        }
    ]);

    return (
        <div className="min-h-screen flex flex-col lg:flex-row bg-[#fff0e5]">
            {/* Sidebar - Hidden on mobile, shown on desktop */}
            <div className="lg:block lg:sticky lg:top-0 lg:left-0 lg:h-screen lg:flex-shrink-0">
                <ClientSidebar />
            </div>

            <div className="flex flex-col flex-1 min-w-0">
                {/* Header - Sticky on all devices */}
                <div className="sticky top-0 z-10">
                    <ClientHeader />
                </div>

                <div className="flex flex-1">
                    {/* Main Content */}
                    <div className="flex-1 p-3 sm:p-6">
                        {/* Page Header */}
                        <div className="mb-5">
                            <h1 className="text-2xl sm:text-3xl font-semibold text-orange-600 mb-2">Job Listing</h1>
                        </div>

                        {/* Job Listing Section */}
                        <div className="bg-white rounded-2xl sm:rounded-3xl px-3 sm:px-6 py-5">
                            {/* Section Header */}
                            <div className="py-4">
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                                    <div>
                                        <h2 className="text-lg sm:text-[22px] font-bold text-gray-900">Job Listing</h2>
                                        <p className="text-xs sm:text-sm text-gray-400 mt-1 font-normal">
                                            Here is your jobs listing status from July 19 - July 25.
                                        </p>
                                    </div>
                                    <div className="flex items-center justify-center text-xs sm:text-sm text-gray-500 border-1 border-gray-200 px-3 sm:px-4 py-2 rounded">
                                        <span className='mr-2'>Jul 19 - Jul 25</span>
                                        <svg
                                            className="w-4 h-4 mr-1 mt-[-1px]"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                color='#f97316'
                                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            {/* Job List Header */}
                            <div className="px-3 sm:px-6 py-4 border-1 border-orange-500">
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
                                    <h3 className="text-sm sm:text-base font-medium text-gray-900">Job List</h3>
                                    <button className="flex items-center px-3 py-2 text-xs sm:text-sm text-gray-900 border border-orange-500  hover:bg-gray-50 self-start sm:self-auto">
                                        <TbMenu4 className="w-4 h-4 mr-2" />
                                        Filters
                                    </button>
                                </div>
                            </div>

                            {/* Mobile Card View (visible on small screens) */}
                            <div className="block lg:hidden">
                                {jobs.map((job, index) => (
                                    <div key={job.id} className="border-b border-gray-200 p-4 space-y-3">
                                        <div className="flex justify-between items-start">
                                            <h4 className="font-medium text-gray-900 text-sm">{job.role}</h4>
                                            <button className="text-gray-400">
                                                <MoreHorizontal className="w-4 h-4" />
                                            </button>
                                        </div>
                                        
                                        <div className="flex flex-wrap gap-2">
                                            <span className={`inline-flex px-2 py-1 items-center justify-center text-xs font-medium rounded-full border-1 ${job.statusColor}`}>
                                                {job.status}
                                            </span>
                                            <span className={`inline-flex px-2 py-1 items-center justify-center text-xs font-medium rounded-full border ${job.jobTypeColor}`}>
                                                {job.jobType}
                                            </span>
                                        </div>
                                        
                                        <div className="grid grid-cols-2 gap-2 text-xs text-gray-500">
                                            <div>
                                                <span className="font-medium">Posted:</span> {job.datePosted}
                                            </div>
                                            <div>
                                                <span className="font-medium">Due:</span> {job.dueDate}
                                            </div>
                                            <div>
                                                <span className="font-medium">Applicants:</span> {job.applicants.toLocaleString()}
                                            </div>
                                            <div>
                                                <span className="font-medium">Needs:</span> {job.needs}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Desktop Table View (hidden on small screens) */}
                            <div className="hidden lg:block overflow-x-auto">
                                <table className="w-full">
                                    <thead>
                                        <tr>
                                            <th className="px-6 py-5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Roles
                                            </th>
                                            <th className="px-6 py-5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Status
                                            </th>
                                            <th className="px-6 py-5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Date Posted
                                            </th>
                                            <th className="px-6 py-5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Due Date
                                            </th>
                                            <th className="px-6 py-5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Job Type
                                            </th>
                                            <th className="px-6 py-5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Applicants
                                            </th>
                                            <th className="px-6 py-5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Needs
                                            </th>
                                            <th className="px-6 py-5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Actions
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y border border-orange-500">
                                        {jobs.map((job, index) => (
                                            <tr key={job.id} className="odd:bg-white even:bg-[#fff9f5] border-0">
                                                <td className="px-6 py-6 whitespace-nowrap">
                                                    <div className="text-sm font-medium text-gray-900">{job.role}</div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <span className={`inline-flex w-[70px] h-[30px] items-center justify-center text-xs font-medium rounded-full border-1 ${job.statusColor}`}>
                                                        {job.status}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                    {job.datePosted}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                    {job.dueDate}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <span className={`inline-flex w-[90px] h-[30px] items-center justify-center text-xs font-medium rounded-full border ${job.jobTypeColor}`}>
                                                        {job.jobType}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                    {job.applicants.toLocaleString()}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                    {job.needs}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                                                    <button className="hover:text-gray-600">
                                                        <MoreHorizontal className="w-5 h-5" />
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            {/* Pagination */}
                            <div className="px-3 sm:px-6 py-4 border-1 lg:border-t-0 border-orange-500">
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                                    <div className="flex items-center text-xs sm:text-sm text-gray-500">
                                        <span>View</span>
                                        <select className="mx-2 border border-gray-300 rounded px-2 py-1 text-xs sm:text-sm">
                                            <option>10</option>
                                            <option>25</option>
                                            <option>50</option>
                                        </select>
                                        <span>Applicants per page</span>
                                    </div>
                                    <div className="flex items-center space-x-2 self-start sm:self-auto">
                                        <button className="px-3 py-1 text-xs sm:text-sm text-gray-400 hover:text-gray-600">
                                           <BiChevronLeft className='w-6 h-6'/>
                                        </button>
                                        <button className="px-3 py-1 text-xs sm:text-sm bg-orange-500 text-white rounded">
                                            1
                                        </button>
                                        <button className="px-3 py-1 text-xs sm:text-sm text-gray-500 hover:text-gray-700">
                                            2
                                        </button>
                                        <button className="px-3 py-1 text-xs sm:text-sm text-gray-400 hover:text-gray-600">
                                            <BiChevronRight className='w-6 h-6'/>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ClientFooter />
            </div>
        </div>
    );
}

export default ClientJobListing;