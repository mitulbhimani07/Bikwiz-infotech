import React, { useState } from 'react';
import { Search, ThumbsUp, ThumbsDown, MoreHorizontal } from 'lucide-react';
import ClientSidbar from '../navbar/ClientSidbar';
import ClientHeader from '../navbar/ClientHeader';

function ClientHelpCenter() {
    const [searchTerm, setSearchTerm] = useState('');
    const [sortBy, setSortBy] = useState('Most relevant');
    const [helpfulStates, setHelpfulStates] = useState({
        1: { yes: false, no: false },
        2: { yes: false, no: false },
        3: { yes: false, no: false }
    });

    const handleHelpfulClick = (articleId, type) => {
        setHelpfulStates(prev => ({
            ...prev,
            [articleId]: {
                yes: type === 'yes' ? !prev[articleId].yes : false,
                no: type === 'no' ? !prev[articleId].no : false
            }
        }));
    };

    const helpArticles = [
        {
            id: 1,
            title: "What is My Applications?",
            content: "My Applications is a way for you to track jobs as you move through the application process. Depending on the job you applied to, you may also receive notifications indicating that an application has been actioned by an employer."
        },
        {
            id: 2,
            title: "How to access my applications history",
            content: "To access applications history, go to your My Applications page on your dashboard profile. You must be signed in to your JobHunty account to view this page."
        },
        {
            id: 3,
            title: "Not seeing jobs you applied in your my application list?",
            content: "Please note that we are unable to track materials submitted for jobs you apply to via an employer's site. As a result, these applications are not recorded in the My Applications section of your JobHunty account. We suggest keeping a personal record of all positions you have applied to externally."
        }
    ];

    const sidebarItems = [
        { label: "Getting Started", isCategory: true },
        { label: "My Profile" },
        { label: "Applying for a job" },
        { label: "Job Search Tips" },
        { label: "Job Alerts" }
    ];

    const filteredArticles = helpArticles.filter(article =>
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.content.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-[#fff0e5] flex">
            <ClientSidbar />

            <div className="flex-1 flex flex-col">
                <ClientHeader />

                <div className="px-12 py-8">
                    {/* Unified card for sidebar + content */}
                    <h1 className="text-2xl font-semibold text-orange-500 mb-6">Help Center</h1>

                    <div className="bg-white rounded-lg  px-6">
                        {/* Heading */}

                        {/* Main layout */}
                        <div className="flex flex-wrap lg:flex-nowrap gap-8">
                            {/* Sidebar */}
                            <div className="w-full lg:w-72 border-r border-orange-300 pr-6 lg:pr-8 mb-8 lg:mb-0">
                                <div className="mb-6">
                                    <div className='mt-6'><span className='text-gray-600 text-[16px] mt-6'>Type your question or search keyword</span></div>
                                    <div className="relative mt-7">
                                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                                        <input
                                            type="text"
                                            placeholder="Search"
                                            value={searchTerm}
                                            onChange={(e) => setSearchTerm(e.target.value)}
                                            className="w-full pl-10 pr-4 py-2.5 border border-orange-300  focus:outline-none focus:ring-2 focus:ring-orange-400 text-sm"
                                        />
                                    </div>
                                </div>

                                <h3 className="text-orange-500 font-extrabold mb-4 text-base border-b border-orange-300 pb-3">Getting Started</h3>
                                <ul className="space-y-3 text-sm">
                                    {sidebarItems.slice(1).map((item, index) => (
                                        <li key={index}>
                                            <a href="#" className="block text-gray-600 hover:text-orange-500 transition-colors pb-3 border-b border-orange-300">
                                                {item.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Articles */}
                            <div className="flex-1">
                                {/* Sort dropdown */}
                                <div className="flex justify-start mb-6 mt-6">
                                    <div className="flex items-center gap-2">
                                        <span className="text-sm text-gray-600">Sort by:</span>
                                        <select
                                            value={sortBy}
                                            onChange={(e) => setSortBy(e.target.value)}
                                            className=" rounded-md px-3 py-2 text-[16px] focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white"
                                        >
                                            <option>Most relevant</option>
                                            <option>Most recent</option>
                                            <option>Most helpful</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Articles */}
                                <div className="space-y-4 py-6">
                                    {filteredArticles.map((article) => (
                                        <div key={article.id} className="bg-white  border border-orange-300 p-6 w-[700px]">
                                            <div className="flex justify-between items-start mb-2">
                                                <h2 className="text-[18px] font-semibold text-gray-800">{article.title}</h2>
                                                <MoreHorizontal className="w-5 h-5 text-black" />
                                            </div>
                                            <p className="text-sm text-gray-600 pb-5 border-b border-orange-300">{article.content}</p>

                                            <div className="flex items-center gap-4 pt-5">
                                                <span className="text-sm text-gray-600">Was this article helpful?</span>
                                                <div className="flex gap-2">
                                                    <button
                                                        onClick={() => handleHelpfulClick(article.id, 'yes')}
                                                        className={`flex items-center gap-1 px-3 py-1.5 border  text-sm transition-colors ${helpfulStates[article.id].yes
                                                            ? 'border-orange-400 bg-orange-50 text-orange-600'
                                                            : 'border-orange-400 text-orange-600 hover:bg-orange-50'
                                                            }`}
                                                    >
                                                        <ThumbsUp className="w-4 h-4" />
                                                        Yes
                                                    </button>
                                                    <button
                                                        onClick={() => handleHelpfulClick(article.id, 'no')}
                                                        className={`flex items-center gap-1 px-3 py-1.5 border  text-sm transition-colors ${helpfulStates[article.id].no
                                                            ? 'border-orange-400 bg-orange-50 text-orange-600'
                                                            : 'border-orange-400 text-orange-600 hover:bg-orange-50'
                                                            }`}
                                                    >
                                                        <ThumbsDown className="w-4 h-4" />
                                                        No
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                    {filteredArticles.length === 0 && searchTerm && (
                                        <p className="text-center text-gray-500 py-12">No articles found.</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ClientHelpCenter;
