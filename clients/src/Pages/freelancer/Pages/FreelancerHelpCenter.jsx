import React, { useState } from 'react';
import { Search, ThumbsUp, ThumbsDown, MoreHorizontal } from 'lucide-react';
import FreelancerSidebar from '../Navbar/FreelancerSidbar';
import FreelancerHeader from '../Navbar/FreelancerHeader';
import FreelancerFooter from '../Navbar/FreelancerFooter';

function FreelancerHelpCenter() {
    const [searchTerm, setSearchTerm] = useState('');
    const [sortBy, setSortBy] = useState('Most relevant');
    const [selectedCategory, setSelectedCategory] = useState('My Profile');
    const [helpfulStates, setHelpfulStates] = useState({});

    const handleHelpfulClick = (articleId, type) => {
        setHelpfulStates(prev => ({
            ...prev,
            [articleId]: {
                yes: type === 'yes' ? !prev[articleId]?.yes : false,
                no: type === 'no' ? !prev[articleId]?.no : false
            }
        }));
    };

    const categoryArticles = {
        'My Profile': [
            {
                id: 'profile_1',
                title: "How to update my client profile information?",
                content: "To update your client profile, navigate to your dashboard and click on 'Profile Settings'. You can edit your company information, contact details, and preferences. Make sure to save changes after updating any information."
            },
            {
                id: 'profile_2',
                title: "How to add my company logo and description?",
                content: "Go to your profile settings and look for the 'Company Branding' section. You can upload your company logo (recommended size: 200x200px) and add a detailed company description to attract quality freelancers."
            },
            {
                id: 'profile_3',
                title: "How to manage my account verification status?",
                content: "Account verification helps build trust with freelancers. Upload required documents like business registration, tax ID, or other relevant certificates in the 'Verification' section of your profile settings."
            }
        ],
        'Job Posting': [
            {
                id: 'posting_1',
                title: "How to create an effective job posting?",
                content: "Write a clear job title and detailed description including project scope, required skills, timeline, and budget. Be specific about deliverables and expectations. This helps attract qualified freelancers and reduces irrelevant applications."
            },
            {
                id: 'posting_2',
                title: "How to set the right budget for my project?",
                content: "Research market rates for similar projects in your industry. Consider project complexity, timeline, and freelancer expertise level. You can choose between fixed-price or hourly rates depending on your project nature."
            },
            {
                id: 'posting_3',
                title: "How to manage job posting visibility and duration?",
                content: "You can set your job posting to public or invite-only mode. Public postings attract more applicants, while invite-only allows you to handpick freelancers. Set appropriate duration and extend if needed to find the right talent."
            }
        ],
        'Hiring Process': [
            {
                id: 'hiring_1',
                title: "How to evaluate and select freelancers?",
                content: "Review freelancer profiles, portfolios, ratings, and previous client feedback. Look for relevant experience and communication skills. Consider conducting interviews or requesting work samples before making your final decision."
            },
            {
                id: 'hiring_2',
                title: "How to communicate effectively with freelancers?",
                content: "Use the platform's messaging system for all communications. Be clear about project requirements, deadlines, and expectations. Provide timely feedback and maintain regular check-ins to ensure project success."
            },
            {
                id: 'hiring_3',
                title: "How to handle contracts and agreements?",
                content: "Review and customize contract terms before hiring. Include project scope, timeline, payment terms, and revision policies. Both parties should agree to terms before work begins to avoid misunderstandings."
            }
        ],
        'Payment & Billing': [
            {
                id: 'payment_1',
                title: "How to set up payment methods?",
                content: "Add your preferred payment methods in the 'Billing' section. You can use credit cards, bank transfers, or digital wallets. Ensure your payment information is up-to-date to avoid project delays."
            },
            {
                id: 'payment_2',
                title: "How to handle milestone payments?",
                content: "Break large projects into milestones with specific deliverables and payment schedules. Release payments only after reviewing and approving completed work. This protects both parties and ensures quality delivery."
            },
            {
                id: 'payment_3',
                title: "How to manage invoices and transaction history?",
                content: "Access all your invoices and payment history in the 'Billing' section. You can download invoices for accounting purposes and track all transactions. Set up automatic receipts for seamless record-keeping."
            }
        ],
        'Project Management': [
            {
                id: 'project_1',
                title: "How to track project progress effectively?",
                content: "Use the project dashboard to monitor milestones, deadlines, and deliverables. Set up regular check-ins with freelancers and use time tracking tools for hourly projects. Keep all project communications centralized."
            },
            {
                id: 'project_2',
                title: "How to handle project revisions and feedback?",
                content: "Provide clear, constructive feedback on deliverables. Specify exactly what needs to be changed and why. Allow reasonable revision rounds as agreed in the contract. Maintain professional communication throughout the process."
            },
            {
                id: 'project_3',
                title: "How to close projects and leave reviews?",
                content: "Once satisfied with the final deliverables, close the project and release final payment. Leave honest, detailed reviews about the freelancer's work quality, communication, and professionalism. This helps the community grow."
            }
        ]
    };

    const sidebarItems = [
        { label: "My Profile" },
        { label: "Job Posting" },
        { label: "Hiring Process" },
        { label: "Payment & Billing" },
        { label: "Project Management" }
    ];

    const currentArticles = categoryArticles[selectedCategory] || [];
    
    const filteredArticles = currentArticles.filter(article =>
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.content.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Sort articles based on selected sort option
    const sortedArticles = [...filteredArticles].sort((a, b) => {
        switch (sortBy) {
            case 'Most recent':
                // Sort by id in descending order (assuming higher id = more recent)
                return b.id.localeCompare(a.id);
            case 'Most helpful':
                // Sort by helpful votes (yes votes - no votes)
                const aHelpfulness = (helpfulStates[a.id]?.yes ? 1 : 0) - (helpfulStates[a.id]?.no ? 1 : 0);
                const bHelpfulness = (helpfulStates[b.id]?.yes ? 1 : 0) - (helpfulStates[b.id]?.no ? 1 : 0);
                return bHelpfulness - aHelpfulness;
            case 'Most relevant':
            default:
                // Keep original order for most relevant
                return 0;
        }
    });

    return (
        <div className="min-h-screen flex flex-col lg:flex-row bg-[#fff0e5]">
            <div className="lg:block lg:sticky lg:top-0 lg:left-0 lg:h-screen lg:flex-shrink-0">
                <FreelancerSidebar />
            </div>

            <div className="flex flex-col flex-1 min-w-0">
                <div className="sticky top-0 z-10">
                    <FreelancerHeader />
                </div>

                <div className="p-4 sm:p-6">
                    <h1 className="text-2xl sm:text-3xl font-semibold text-orange-500 mb-5">Help Center</h1>

                    <div className="bg-white rounded-3xl px-4 sm:px-6">
                        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
                            {/* Sidebar */}
                            <div className="w-full lg:w-72 lg:border-r border-orange-300  lg:pr-8 mb-6 lg:mb-0">
                                <div className="mb-6">
                                    <div className='mt-6'>
                                        <span className='text-gray-600 text-sm sm:text-[16px] mt-6'>
                                            Type your question or search keyword
                                        </span>
                                    </div>
                                    <div className="relative mt-4 sm:mt-7">
                                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                                        <input
                                            type="text"
                                            placeholder="Search"
                                            value={searchTerm}
                                            onChange={(e) => setSearchTerm(e.target.value)}
                                            className="w-full pl-10 pr-4 py-2.5 border border-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-400 text-sm"
                                        />
                                    </div>
                                </div>

                                <h3 className="text-orange-500 font-extrabold mb-4 text-base border-b border-orange-300 pb-3">
                                    Client Dashboard Categories
                                </h3>
                                <ul className="space-y-3 text-sm">
                                    {sidebarItems.map((item, index) => (
                                        <li key={index}>
                                            <button
                                                onClick={() => setSelectedCategory(item.label)}
                                                className={`block w-full text-left transition-colors pb-3 border-b border-orange-300 ${
                                                    selectedCategory === item.label
                                                        ? 'text-orange-500 font-semibold'
                                                        : 'text-gray-600 hover:text-orange-500'
                                                }`}
                                            >
                                                {item.label}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Articles */}
                            <div className="flex-1 min-w-0">
                                {/* Sort dropdown */}
                                <div className="flex justify-start mb-6 mt-6">
                                    <div className="flex items-center gap-2">
                                        <span className="text-sm text-gray-600">Sort by:</span>
                                        <select
                                            value={sortBy}
                                            onChange={(e) => setSortBy(e.target.value)}
                                            className="rounded-md px-3 py-2 text-sm sm:text-[16px] focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white border border-gray-300"
                                        >
                                            <option>Most relevant</option>
                                            <option>Most recent</option>
                                            <option>Most helpful</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Category Title */}
                                <div className="mb-4">
                                    <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
                                        {selectedCategory} - Help Articles
                                    </h2>
                                </div>

                                {/* Articles */}
                                <div className="space-y-4 py-6">
                                    {sortedArticles.map((article) => (
                                        <div key={article.id} className="bg-white border border-orange-300 p-4 sm:p-6 w-full max-w-full lg:max-w-[700px]">
                                            <div className="flex justify-between items-start mb-2">
                                                <h3 className="text-base sm:text-[18px] font-semibold text-gray-800 pr-4 flex-1">
                                                    {article.title}
                                                </h3>
                                                <MoreHorizontal className="w-5 h-5 text-black flex-shrink-0" />
                                            </div>
                                            <p className="text-sm text-gray-600 pb-5 border-b border-orange-300 leading-relaxed">
                                                {article.content}
                                            </p>

                                            <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-5">
                                                <span className="text-sm text-gray-600">Was this article helpful?</span>
                                                <div className="flex gap-2">
                                                    <button
                                                        onClick={() => handleHelpfulClick(article.id, 'yes')}
                                                        className={`flex items-center gap-1 px-3 py-1.5 border text-sm transition-colors ${
                                                            helpfulStates[article.id]?.yes
                                                                ? 'border-green-400 bg-green-50 text-green-600'
                                                                : 'border-gray-300 text-gray-600 hover:border-green-400 hover:bg-green-50 hover:text-green-600'
                                                        }`}
                                                    >
                                                        <ThumbsUp className="w-4 h-4" />
                                                        Yes
                                                    </button>
                                                    <button
                                                        onClick={() => handleHelpfulClick(article.id, 'no')}
                                                        className={`flex items-center gap-1 px-3 py-1.5 border text-sm transition-colors ${
                                                            helpfulStates[article.id]?.no
                                                                ? 'border-red-400 bg-red-50 text-red-600'
                                                                : 'border-gray-300 text-gray-600 hover:border-red-400 hover:bg-red-50 hover:text-red-600'
                                                        }`}
                                                    >
                                                        <ThumbsDown className="w-4 h-4" />
                                                        No
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                    {sortedArticles.length === 0 && searchTerm && (
                                        <p className="text-center text-gray-500 py-12">
                                            No articles found for "{searchTerm}" in {selectedCategory}.
                                        </p>
                                    )}
                                    {sortedArticles.length === 0 && !searchTerm && (
                                        <p className="text-center text-gray-500 py-12">
                                            No articles available for this category.
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <FreelancerFooter />
            </div>
        </div>
    );
}

export default FreelancerHelpCenter;