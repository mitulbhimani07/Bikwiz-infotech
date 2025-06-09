import React, { useState } from 'react';
import { Filter, MoreHorizontal, Calendar } from 'lucide-react';
import ClientSidbar from '../navbar/ClientSidbar';
import ClientHeader from '../navbar/ClientHeader';
import ClientFooter from '../navbar/ClientFooter';

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
            jobTypeColor: 'border-[ff6800] text-[#ff6800]',
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
        <div className="min-h-screen flex bg-[#fff0e5]">
                <div className="sticky top-0 left-0  h-screen">
        
                  <ClientSidbar />
                </div>
        
                <div className="flex flex-col flex-1 ">
                  <div className="sticky top-0 z-10 ">
        
                    <ClientHeader />
                  </div>

                <div className="flex">
                    {/* Sidebar Space */}

                    {/* Main Content */}
                    <div className="flex-1 p-6">
                        {/* Page Header */}
                        <div className="mb-5">
                            <h1 className="text-2xl font-semibold text-orange-600 mb-2">Applicant Details</h1>
                        </div>

                        {/* Job Listing Section */}
                        <div className="bg-white rounded-3xl px-6">
                            {/* Section Header */}
                            <div className="py-4">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <h2 className="text-[22px] font-bold text-gray-900">Job Listing</h2>
                                        <p className="text-sm text-gray-400 mt-1 font-normal">
                                            Here is your jobs listing status from July 19 - July 25.
                                        </p>
                                    </div>
                                    <div className="flex items-center justify-center text-sm text-gray-500 border-1 border-gray-200  px-4 py-2">

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
                            <div className="px-6 py-4 border-1 border-orange-500  ">
                                <div className="flex justify-between items-center">
                                    <h3 className="text-base font-medium text-gray-900">Job List</h3>
                                    <button className="flex items-center px-3 py-2 text-sm text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50">
                                        <Filter className="w-4 h-4 mr-2" />
                                        Filters
                                    </button>
                                </div>
                            </div>

                            {/* Table */}
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead className="">
                                        <tr className=''>
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
                                    <tbody className="bg-white divide-y border border-orange-500 odd:bg-rose-50 even:bg-white">
                                        {jobs.map((job, index) => (
                                            <tr key={job.id} className="odd:bg-white even:bg-[#fff9f5] border-0">
                                                <td className="px-6 py-6 whitespace-nowrap">
                                                    <div className="text-sm font-medium text-gray-900">{job.role}</div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <span className={`inline-flex w-[70px] h-[30px] items-center justify-center text-xs font-medium rounded-full border-1 ${job.statusColor} border-${job.statusColor.replace('text-', '')}`}>
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
                            <div className="px-6 py-4 border-t border-gray-200">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center text-sm text-gray-500">
                                        <span>View</span>
                                        <select className="mx-2 border border-gray-300 rounded px-2 py-1 text-sm">
                                            <option>10</option>
                                            <option>25</option>
                                            <option>50</option>
                                        </select>
                                        <span>Applicants per page</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <button className="px-3 py-1 text-sm text-gray-400 hover:text-gray-600">
                                            &lt;
                                        </button>
                                        <button className="px-3 py-1 text-sm bg-orange-500 text-white rounded">
                                            1
                                        </button>
                                        <button className="px-3 py-1 text-sm text-gray-500 hover:text-gray-700">
                                            2
                                        </button>
                                        <button className="px-3 py-1 text-sm text-gray-400 hover:text-gray-600">
                                            &gt;
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                                        <ClientFooter/>

            </div>
        </div>
    );
}

export default ClientJobListing;