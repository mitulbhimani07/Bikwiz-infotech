import React, { useState } from 'react';
import {
    Search, Filter, Star, MoreHorizontal,
    ChevronLeft, ChevronRight, ChevronDown,
    Grid, List
} from 'lucide-react';
import ClientHeader from '../navbar/ClientHeader';
import ClientSidbar from '../navbar/ClientSidbar';
import profile1 from "../../../assets/images/clientDashbord/allapplications/1.jpg"
import { Link } from 'react-router-dom';
import ClientFooter from '../navbar/ClientFooter';

const ClientAllApplications = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [viewMode, setViewMode] = useState('pipeline'); // 'pipeline', 'card', or 'table'
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedApplicants, setSelectedApplicants] = useState(new Set());
    const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
    const [itemsPerPage, setItemsPerPage] = useState(10);

    const applicants = [
        {
            id: 1,
            name: 'Yash Gujarati',
            score: 5.0,
            hiringStage: 'Interview',
            appliedDate: '13 July, 2021',
            jobRole: 'Designer',
            status: 'See Application',
            avatar: profile1
        },
        {
            id: 2,
            name: 'Eva Sorathiya',
            score: 4.5,
            hiringStage: 'Shortlisted',
            appliedDate: '12 July, 2021',
            jobRole: 'Golang Dev',
            status: 'See Application',
            avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face'
        },
        {
            id: 3,
            name: 'Kunal Kakdiya',
            score: 3.75,
            hiringStage: 'Declined',
            appliedDate: '11 July, 2021',
            jobRole: '.NET Dev',
            status: 'See Application',
            avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
        },
        {
            id: 4,
            name: 'Milan Jogiya',
            score: 4.8,
            hiringStage: 'Hired',
            appliedDate: '11 July, 2021',
            jobRole: 'Graphic Design',
            status: 'See Application',
            avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face'
        },
        {
            id: 5,
            name: 'Hemnashi Zalavadiya',
            score: 4.6,
            hiringStage: 'Hired',
            appliedDate: '9 July, 2021',
            jobRole: 'Designer',
            status: 'See Application',
            avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face'
        },
        {
            id: 6,
            name: 'Krupesh Paneliya',
            score: 4.0,
            hiringStage: 'Interviewed',
            appliedDate: '5 July, 2021',
            jobRole: 'Designer',
            status: 'See Application',
            avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&crop=face'
        },
        {
            id: 7,
            name: 'Jay Mepani',
            score: 0.0,
            hiringStage: 'Interview',
            appliedDate: '13 July, 2021',
            jobRole: 'JavaScript Dev',
            status: 'See Application',
            avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face'
        },
        {
            id: 8,
            name: 'Bunit Patel',
            score: 3.9,
            hiringStage: 'Declined',
            appliedDate: '5 July, 2021',
            jobRole: 'Designer',
            status: 'See Application',
            avatar: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=100&h=100&fit=crop&crop=face'
        },
        {
            id: 9,
            name: 'kuldip Jadav',
            score: 4.2,
            hiringStage: 'Shortlisted',
            appliedDate: '3 July, 2021',
            jobRole: 'Developer',
            status: 'See Application',
            avatar: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=100&h=100&fit=crop&crop=face'
        },
        {
            id: 10,
            name: 'ankit Mangukiya',
            score: 4.1,
            hiringStage: 'Interviewed',
            appliedDate: '1 July, 2021',
            jobRole: 'Designer',
            status: 'See Application',
            avatar: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=100&h=100&fit=crop&crop=face'
        },
    ];

    const getAvatarColor = (index) => {
        const colors = ['bg-orange-400', 'bg-blue-400', 'bg-green-400', 'bg-purple-400', 'bg-pink-400', 'bg-indigo-400', 'bg-yellow-400', 'bg-red-400'];
        return colors[index % colors.length];
    };

    const handleSort = (key) => {
        const direction = (sortConfig.key === key && sortConfig.direction === 'asc') ? 'desc' : 'asc';
        setSortConfig({ key, direction });
    };

    const filteredApplicants = applicants.filter(applicant =>
        applicant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        applicant.jobRole.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleSelectAll = (checked) => {
        if (checked) {
            setSelectedApplicants(new Set(applicants.map(a => a.id)));
        } else {
            setSelectedApplicants(new Set());
        }
    };

    const handleSelectApplicant = (id) => {
        const newSelected = new Set(selectedApplicants);
        if (newSelected.has(id)) {
            newSelected.delete(id);
        } else {
            newSelected.add(id);
        }
        setSelectedApplicants(newSelected);
    };

    const getInitials = (name) => {
        return name.split(' ').map(n => n[0]).join('').toUpperCase();
    };

    const renderStars = (score) => {
        if (score === 0) {
            return (
                <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-gray-300" />
                    <span className="text-gray-600 text-sm">0.0</span>
                </div>
            );
        }

        return (
            <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                <span className="text-gray-600 text-sm">{score}</span>
            </div>
        );
    };

    const getStageColor = (stage) => {
        switch (stage.toLowerCase()) {
            case 'interview':
                return 'bg-yellow-100 text-yellow-600 border-yellow-300';
            case 'shortlisted':
                return 'bg-orange-100 text-orange-600 border-orange-300';
            case 'declined':
                return 'bg-red-100 text-red-600 border-red-300';
            case 'hired':
                return 'bg-green-100 text-green-600 border-green-300';
            case 'interviewed':
                return 'bg-blue-100 text-blue-600 border-blue-300';
            default:
                return 'bg-gray-100 text-gray-600 border-gray-300';
        }
    };

    const renderPipelineView = () => {
        const stages = {
            'Shortlisted': applicants.filter(a => a.hiringStage === 'Shortlisted'),
            'Interview': applicants.filter(a => a.hiringStage === 'Interview'),
            'Interviewed': applicants.filter(a => a.hiringStage === 'Interviewed'),
            'Hired': applicants.filter(a => a.hiringStage === 'Hired'),
            'Declined': applicants.filter(a => a.hiringStage === 'Declined')
        };

        // Stage color mapping
        const stageColors = {
            'Shortlisted': 'bg-blue-50 border-blue-200',
            'Interview': 'bg-purple-50 border-purple-200',
            'Interviewed': 'bg-yellow-50 border-yellow-200',
            'Hired': 'bg-green-50 border-green-200',
            'Declined': 'bg-red-50 border-red-200'
        };

        const stageHeaders = {
            'Shortlisted': '👥 Shortlisted',
            'Interview': '🗓️ Interview',
            'Interviewed': '🎤 Interviewed',
            'Hired': '🎉 Hired',
            'Declined': '❌ Declined'
        };

        return (
            <div className="p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                    {Object.entries(stages).map(([stage, stageApplicants]) => (
                        <div
                            key={stage}
                            className={`rounded-xl shadow-sm border ${stageColors[stage]} transition-all duration-300 hover:shadow-md hover:translate-y-[-2px]`}
                        >
                            <div className="p-4">
                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="font-semibold text-gray-700 flex items-center gap-2">
                                        {stageHeaders[stage]}
                                    </h3>
                                    <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${stage === 'Hired' ? 'bg-green-100 text-green-800' :
                                        stage === 'Declined' ? 'bg-red-100 text-red-800' :
                                            'bg-blue-100 text-blue-800'
                                        }`}>
                                        {stageApplicants.length} candidate{stageApplicants.length !== 1 ? 's' : ''}
                                    </span>
                                </div>

                                <div className="space-y-3">
                                    {stageApplicants.length === 0 ? (
                                        <div className="text-center py-6">
                                            <div className="text-gray-400 mb-1">No candidates</div>
                                            <div className="text-xs text-gray-300">Drag candidates here</div>
                                        </div>
                                    ) : (
                                        stageApplicants.map(applicant => (
                                            <div
                                                key={applicant.id}
                                                className="bg-white p-3 rounded-lg border border-gray-100 shadow-xs transition-all duration-200 hover:shadow-sm hover:border-gray-300 group"
                                                draggable="true"
                                            >
                                                <div className="flex items-center justify-between mb-2">
                                                    <div className="flex items-center gap-3">
                                                        <div className="relative">
                                                            <img
                                                                src={applicant.avatar}
                                                                alt={applicant.name}
                                                                className="w-9 h-9 rounded-full object-cover border-2 border-white shadow-xs"
                                                                onError={(e) => {
                                                                    e.target.style.display = 'none';
                                                                    e.target.nextSibling.style.display = 'flex';
                                                                }}
                                                            />
                                                            <div className={`w-9 h-9 ${getAvatarColor(applicant.id)} rounded-full items-center justify-center text-white text-sm font-medium hidden shadow-xs`}>
                                                                {getInitials(applicant.name)}
                                                            </div>
                                                            {applicant.score > 7 && (
                                                                <div className="absolute -bottom-1 -right-1 bg-yellow-400 rounded-full p-0.5">
                                                                    <Star className="w-3 h-3 text-white fill-white" />
                                                                </div>
                                                            )}
                                                        </div>
                                                        <div>
                                                            <span className="font-medium text-sm block">{applicant.name}</span>
                                                            <span className="text-xs text-gray-500">{applicant.jobRole}</span>
                                                        </div>
                                                    </div>
                                                    <button className="text-gray-400 hover:text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity">
                                                        <MoreHorizontal className="w-4 h-4" />
                                                    </button>
                                                </div>

                                                <div className="flex justify-between items-center mt-2">
                                                    <div className="flex gap-1">
                                                        {renderStars(applicant.score)}
                                                    </div>
                                                    <span className="text-xs text-gray-400">
                                                        {new Date(applicant.appliedDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                                                    </span>
                                                </div>

                                                <div className="grid grid-cols-2 gap-2 mt-3">
                                                    <button className="px-2 py-1.5 bg-gray-50 hover:bg-gray-100 text-gray-600 text-xs font-medium rounded-lg transition-colors">
                                                        Profile
                                                    </button>
                                                    <button className="px-2 py-1.5 bg-orange-50 hover:bg-orange-100 text-orange-600 text-xs font-medium rounded-lg transition-colors">
                                                        Application
                                                    </button>
                                                </div>
                                            </div>
                                        ))
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    const renderCardView = () => {
        return (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
                {applicants.map(applicant => (
                    <div key={applicant.id} className="bg-white rounded-lg shadow p-4 border border-gray-200">
                        <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-2">
                                <img
                                    src={applicant.avatar}
                                    alt={applicant.name}
                                    className="w-10 h-10 rounded-full object-cover border-2 border-gray-100"
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                        e.target.nextSibling.style.display = 'flex';
                                    }}
                                />
                                <div className={`w-10 h-10 ${getAvatarColor(applicant.id)} rounded-full items-center justify-center text-white text-sm font-medium hidden`}>
                                    {getInitials(applicant.name)}
                                </div>
                                <div>
                                    <h4 className="font-medium text-gray-900">{applicant.name}</h4>
                                    <p className="text-xs text-gray-500">{applicant.jobRole}</p>
                                </div>
                            </div>
                            <button className="text-gray-400 hover:text-gray-600">
                                <MoreHorizontal className="w-4 h-4" />
                            </button>
                        </div>
                        <div className="flex justify-between items-center mb-3">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStageColor(applicant.hiringStage)}`}>
                                {applicant.hiringStage}
                            </span>
                            {renderStars(applicant.score)}
                        </div>
                        <div className="text-xs text-gray-500 mb-3">
                            Applied: {applicant.appliedDate}
                        </div>
                        <Link to="/clientApplicationDetails" className="w-full px-3 py-2 bg-orange-50 text-orange-600 text-sm font-medium rounded hover:bg-orange-100">
                            See Application
                        </Link>
                    </div>
                ))}
            </div>
        );
    };

    const renderTableView = () => {
        return (
            <div className="overflow-x-auto mt-4">
                <table className="w-full text-[13px] text-gray-700">
                    <thead className="text-gray-600 font-medium">
                        <tr className='border-2 border-gray-200'>
                            <th className="p-4 text-left">
                                <input
                                    type="checkbox"
                                    className="w-5 h-5 border-2 border-gray-300 rounded bg-white checked:bg-orange-500 checked:border-orange-500 focus:ring-orange-500 focus:ring-2 focus:ring-offset-0 appearance-none relative checked:after:content-['✓'] checked:after:absolute checked:after:text-white checked:after:text-xs checked:after:font-bold checked:after:left-0.5 checked:after:top-0"
                                    onChange={(e) => handleSelectAll(e.target.checked)}
                                    checked={selectedApplicants.size === applicants.length && applicants.length > 0}
                                />
                            </th>
                            <th className="p-4 text-left cursor-pointer hover:text-gray-800">
                                <div className="flex items-center gap-2 text-gray-400 text-[14px]">
                                    Full Name
                                    <div className="flex flex-col">
                                        <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                                        </svg>
                                        <svg className="w-4 h-4 text-gray-400 -mt-1" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                </div>
                            </th>
                            <th className="p-4 text-left cursor-pointer hover:text-gray-800">
                                <div className="flex items-center gap-2 text-gray-400 text-[14px] ">
                                    Score
                                    <div className="flex flex-col">
                                        <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                                        </svg>
                                        <svg className="w-4 h-4 text-gray-400 -mt-1" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                </div>
                            </th>
                            <th className="p-4 text-left cursor-pointer hover:text-gray-800">
                                <div className="flex items-center gap-2 text-gray-400 text-[14px]">
                                    Hiring Stage
                                    <div className="flex flex-col">
                                        <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                                        </svg>
                                        <svg className="w-4 h-4 text-gray-400 -mt-1" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                </div>
                            </th>
                            <th className="p-4 text-left cursor-pointer hover:text-gray-800">
                                <div className="flex items-center gap-2 text-gray-400 text-[14px]">
                                    Applied Date
                                    <div className="flex flex-col">
                                        <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                                        </svg>
                                        <svg className="w-4 h-4 text-gray-400 -mt-1" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                </div>
                            </th>
                            <th className="p-4 text-left cursor-pointer hover:text-gray-800">
                                <div className="flex items-center gap-2 text-gray-400 text-[14px]">
                                    Job Role
                                    <div className="flex flex-col">
                                        <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                                        </svg>
                                        <svg className="w-4 h-4 text-gray-400 -mt-1" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                </div>
                            </th>
                            <th className=" gap-2 text-gray-400 text-[14px]">Action</th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-100 text-sm border-2 border-gray-200">
                        {applicants.map((applicant, index) => (
                            <tr
                                key={applicant.id}
                                className={` ${index % 2 === 0 ? 'bg-[#fff9f5]' : 'bg-white'}`}
                            >
                                <td className="p-4">
                                    <input
                                        type="checkbox"
                                        className="w-5 h-5 border-2 border-gray-300 rounded bg-white checked:bg-orange-500 checked:border-orange-500 focus:ring-orange-500 focus:ring-2 focus:ring-offset-0 appearance-none relative checked:after:content-['✓'] checked:after:absolute checked:after:text-white checked:after:text-xs checked:after:font-bold checked:after:left-0.5 checked:after:top-0"
                                        checked={selectedApplicants.has(applicant.id)}
                                        onChange={() => handleSelectApplicant(applicant.id)}
                                    />
                                </td>
                                <td className="p-4">
                                    <div className="flex items-center gap-3">
                                        <img
                                            src={applicant.avatar}
                                            alt={applicant.name}
                                            className="w-10 h-10 rounded-full object-cover border-2 border-gray-100"
                                            onError={(e) => {
                                                e.target.style.display = 'none';
                                                e.target.nextSibling.style.display = 'flex';
                                            }}
                                        />
                                        <div className={`w-10 h-10 ${getAvatarColor(applicant.id)} rounded-full items-center justify-center text-white text-xs font-medium hidden`}>
                                            {getInitials(applicant.name)}
                                        </div>
                                        <span className="font-medium text-gray-900">{applicant.name}</span>
                                    </div>
                                </td>
                                <td className="p-4">{renderStars(applicant.score)}</td>
                                <td className="p-4">
                                    <span className={`px-3 py-[10px] rounded-full text-[12px] font-medium border-2 ${getStageColor(applicant.hiringStage)}`}>
                                        {applicant.hiringStage}
                                    </span>
                                </td>
                                <td className="p-4 text-gray-600">{applicant.appliedDate}</td>
                                <td className="p-4 text-gray-600">{applicant.jobRole}</td>
                                <td className="p-4">
                                    <div className="flex items-center gap-2">
                                        <Link to="/clientApplicationDetails" className="px-4 py-2.5 text-[14px] text-orange-600 bg-[#fff0e5] border font-extrabold border-orange-500 hover:bg-orange-100 transition-colors duration-200">
                                            See Application
                                        </Link>
                                        <button className="p-2 rounded-md hover:bg-gray-100 transition-colors duration-200">
                                            <MoreHorizontal className="w-4 h-4 text-gray-500" />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    };

    return (
        <div className="min-h-screen flex bg-[#fff0e5]">
            <div className="sticky top-0 left-0  h-screen">

                <ClientSidbar />
            </div>

            <div className="flex flex-col flex-1 ">
                <div className="sticky top-0 z-10 ">

                    <ClientHeader />
                </div>

                <main className="flex-1 overflow-y-auto p-6">
                    <h1 className="text-3xl font-bold text-orange-600 mb-4">Profile</h1>

                    <div className="bg-white rounded-3xl  p-10">
                        <div className="flex flex-wrap items-center justify-between p-4">
                            <h2 className="text-[16px] font-semibold text-[#2b2d42]">
                                Total Applicants : {applicants.length}
                            </h2>

                            <div className="flex items-center gap-3 flex-wrap">
                                {/* Search Input */}
                                <div className="relative">
                                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                                    <input
                                        type="text"
                                        placeholder="Search Applicants"
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        className="pl-10 pr-15 py-[10px] border-2 border-gray-100 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-orange-400"
                                    />
                                </div>

                                {/* Filter Button */}
                                <button className="flex items-center gap-2 px-4 py-[10px] border-2 border-gray-100 text-sm text-[#2b2d42]">
                                    <Filter className="w-4 h-4" /> Filter
                                </button>

                                {/* View Toggle Buttons */}
                                <div className="flex bg-[#fff3e6] border-2 border-orange-200 overflow-hidden ">
                                    <button
                                        onClick={() => setViewMode('pipeline')}
                                        className={`flex items-center gap-1 px-3 py-2 text-sm transition ${viewMode === 'pipeline' ? 'bg-white text-orange-600' : 'text-orange-600 hover:bg-orange-100'}`}
                                    >
                                        <List className="w-4 h-4" /> Pipeline
                                    </button>
                                    <button
                                        onClick={() => setViewMode('card')}
                                        className={`flex items-center gap-1 px-3 py-2 text-sm transition ${viewMode === 'card' ? 'bg-white text-orange-600' : 'text-orange-600 hover:bg-orange-100'}`}
                                    >
                                        <Grid className="w-4 h-4" /> Card
                                    </button>
                                    <button
                                        onClick={() => setViewMode('table')}
                                        className={`flex items-center gap-1 px-3 py-2 text-sm transition ${viewMode === 'table' ? 'bg-white text-orange-600' : 'text-orange-600 hover:bg-orange-100'}`}
                                    >
                                        <List className="w-4 h-4" /> Table
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Render the appropriate view based on viewMode */}
                        {viewMode === 'pipeline' && renderPipelineView()}
                        {viewMode === 'card' && renderCardView()}
                        {viewMode === 'table' && renderTableView()}

                        <div className="flex justify-between items-center p-4 border-t text-sm">
                            <div className="flex items-center gap-2">
                                View
                                <div className="relative">
                                    <select
                                        value={itemsPerPage}
                                        onChange={(e) => setItemsPerPage(Number(e.target.value))}
                                        className="rounded px-2 py-1 appearance-none pr-6"
                                    >
                                        <option>10</option>
                                        <option>25</option>
                                        <option>50</option>
                                    </select>
                                    <ChevronDown className="absolute right-2 top-2 w-4 h-4 text-gray-400 pointer-events-none" />
                                </div>
                                Applicants per page
                            </div>
                            <div className="flex items-center gap-1">
                                <button
                                    disabled={currentPage === 1}
                                    onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                                    className="p-2 text-gray-400 hover:text-gray-600 disabled:opacity-50"
                                >
                                    <ChevronLeft />
                                </button>
                                <button className="px-3 py-1 bg-orange-600 text-white rounded">{currentPage}</button>
                                <button
                                    className="px-3 py-1 hover:bg-gray-100 rounded"
                                    onClick={() => setCurrentPage(prev => prev + 1)}
                                >
                                    2
                                </button>
                                <button
                                    onClick={() => setCurrentPage(prev => prev + 1)}
                                    className="p-2 text-gray-400 hover:text-gray-600"
                                >
                                    <ChevronRight />
                                </button>
                            </div>
                        </div>
                    </div>
                </main>
                        <ClientFooter />

            </div>
        </div>
    );
};

export default ClientAllApplications;