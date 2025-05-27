import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { FaReply } from 'react-icons/fa'
import { FaUser } from "react-icons/fa";

import { FaDownload } from "react-icons/fa6";
import { FaClock } from "react-icons/fa6";


import {
    FaMapMarkerAlt,
    FaStar,
    FaCheckCircle,
    FaFacebookF,
    FaTwitter,
    FaLinkedinIn,
    FaGooglePlusG,
    FaPinterestP,
    FaWhatsapp,
    FaHeart
} from 'react-icons/fa';
import { HiOutlineBuildingOffice2 } from 'react-icons/hi2';
import Footer from '../header-footer/Footer';
import banner from '../assets/images/FindWork/banner.png';
import CompanyLogo from '../assets/images/FindWork/logo.png';
import About from "../assets/images/FindWork/about.jpg";
import Account from "../assets/images/FindWork/account.png";
import Header from '../header-footer/Header';
import Job1 from "../assets/images/findTalent/job1.png"
import Job2 from "../assets/images/findTalent/job2.png"


function CompanyDetails() {
    const [activeTab, setActiveTab] = useState('about');
    const [contactForm, setContactForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleInputChange = (e) => {
        setContactForm({
            ...contactForm,
            [e.target.name]: e.target.value
        });
    };

    const reviews = [
        {
            id: 1,
            name: "John Williams",
            role: "Software Developer",
            date: "13 Jan, 2023 - 11:00 AM",
            rating: 5,
            comment: "Lorem Ipsum is simply dummy text of printing and type setting. Lorem Ipsum have industry standard dummy text ever when unknown printer took a galley of type and scrambled."
        },
        {
            id: 2,
            name: "John Williams",
            role: "Software Developer",
            date: "12 Jan, 2023 - 11:00 AM",
            rating: 5,
            comment: "Lorem Ipsum is simply dummy text of printing and type setting. Lorem Ipsum have industry standard dummy text ever when unknown printer took a galley of type and scrambled."
        },
        {
            id: 3,
            name: "John Williams",
            role: "Software Developer",
            date: "15 Jan, 2023 - 11:00 AM",
            rating: 5,
            comment: "Lorem Ipsum is simply dummy text of printing and type setting. Lorem Ipsum have industry standard dummy text ever when unknown printer took a galley of type and scrambled."
        }
    ];

    const jobs = [
        {
            id: 1,
            type: "Full Time",
            title: "Website Developer & Software Developer",
            company: "Software Developer",
            location: "Drive Potsdam, NY 676",
            timeAgo: "15 Minute Ago",
            logo: Job1,

        },
        {
            id: 2,
            type: "Part Time",
            title: "Head of Developers & MySQL Developers",
            company: "Software Developer",
            location: "Drive Potsdam, NY 676",
            timeAgo: "30 Minute Ago",
            logo: Job2,
        },
        {
            id: 3,
            type: "Full Time",
            title: "Frontend/Backendd Developer",
            company: "Software Developer",
            location: "Drive Potsdam, NY 676",
            timeAgo: "15 Minute Ago",
            logo: Job1,
        },
        {
            id: 4,
            type: "Part Time",
            title: "Application Developer & Web Designer",
            company: "Software Developer",
            location: "Drive Potsdam, NY 676",
            timeAgo: "30 Minute Ago",
            logo: Job2,
        },
    ];

    const socialIcons = [
        { icon: FaFacebookF, color: 'text-blue-600' },
        { icon: FaTwitter, color: 'text-sky-500' },
        { icon: FaLinkedinIn, color: 'text-blue-700' },
        { icon: FaGooglePlusG, color: 'text-gray-500' },
        { icon: FaWhatsapp, color: 'text-green-500' },
        { icon: FaPinterestP, color: 'text-red-600' },
    ];

    return (
        <>
            <Header />
            <div className="min-h-screen">
                {/* Banner Section - Responsive */}
                <section className="relative w-[95%] mx-auto h-[250px] sm:h-[300px] lg:h-[350px] flex items-center justify-start bg-cover bg-center my-5 px-4 sm:px-6 md:px-12" style={{ backgroundImage: `url(${banner})`, borderRadius: '20px', overflow: 'hidden' }}>
                    <div className="absolute inset-0  bg-opacity-40 rounded-[20px]"></div>
                    <div className="relative z-10 flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6 w-full">
                        <img src={CompanyLogo} alt="Company Logo" className="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] lg:w-[140px] lg:h-[140px] rounded-full object-cover flex-shrink-0" />
                        <div className="text-white text-center sm:text-left flex-1">
                            <div className="flex items-center justify-center sm:justify-start space-x-2 mb-2">
                                <span className="text-sm">India</span>
                                <div className="w-6 h-4 relative border border-gray-300 overflow-hidden">
                                    <div className="w-full h-1/3 bg-orange-500"></div>
                                    <div className="w-full h-1/3 bg-white flex items-center justify-center">
                                        <div className="w-2 h-2 border border-blue-600 rounded-full relative">
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <div className="w-0.5 h-0.5 bg-blue-600 rounded-full"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full h-1/3 bg-green-600"></div>
                                </div>
                            </div>
                            <h2 className="text-lg sm:text-2xl lg:text-3xl font-semibold flex items-center justify-center sm:justify-start flex-wrap">
                                <span className="mr-2">Acodia PHP Development Company</span>
                                <FaCheckCircle className="text-orange-500 text-lg sm:text-xl flex-shrink-0" />
                            </h2>
                            <div className="flex items-center justify-center sm:justify-start space-x-2 text-sm mt-1">
                                <HiOutlineBuildingOffice2 className="text-[#f89d2a]" />
                                <span>PNT Software Company</span>
                            </div>
                            <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start text-sm mt-2 space-y-2 sm:space-y-0 sm:space-x-3">
                                <div className="bg-white text-black rounded-[5px] px-3 py-1 flex items-center space-x-2">
                                    <FaMapMarkerAlt className="text-[#f89d2a]" />
                                    <span className="text-xs sm:text-sm">2767 Concord Street, Bangalore</span>
                                </div>
                                <div className="bg-white text-black rounded-[5px] px-3 py-1 flex items-center space-x-2">
                                    <div className="flex text-orange-500">
                                        <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                                    </div>
                                    <span className="text-orange-600 font-semibold text-sm">4.5</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Main Content - Responsive Layout */}
                <div className="w-full px-4 sm:px-6 lg:w-[75%] lg:mx-auto flex flex-col lg:flex-row gap-6 mb-8 mt-[40px] sm:mt-[60px]">
                    {/* Left Content */}
                    <div className="flex-1 w-full lg:w-auto">
                        {/* About Company Section */}
                        <div className="bg-white rounded-lg mb-6 ">
                            <div className="bg-orange-500 text-white px-4 sm:px-6 py-3 rounded-lg flex items-center">
                                <HiOutlineBuildingOffice2 className="mr-2" />
                                <span className="font-semibold text-sm sm:text-base">About Company Details</span>
                            </div>
                            <div className="pt-4">
                                <img
                                    src={About}
                                    alt="Office"
                                    className="w-full h-[250px] sm:h-[350px] lg:h-[453px] object-cover rounded-lg mb-5"
                                />
                                <div className="space-y-4 text-gray-600 leading-relaxed text-sm sm:text-base">
                                    <p>Lorem Ipsum is simply dummy text of printing and type setting industry. Lorem Ipsum been industry standard dummy text ever when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also has leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                </div>

                                {/* Features List */}
                                <div className="mt-6 space-y-3">
                                    {[
                                        "Morbi mattis ullamcorper velit. Phasellus gravida semper nisi nullam vel sem.",
                                        "Pencillus cursus massa as phasant lorem finsat. Quarnar dices, din as ullomelabrt.",
                                        "Intess ultricesad vel augue. Curabitur ultriciesaugue ullicies elit. Nam eget ante Fusce cinereaeu.",
                                        "Dices mollit bibendifn risus. Phasellus nec leo non.enim pellentasque pharetra.",
                                        "Prosum cursus orat ut massa. Sed cursus magna augue rutro. Decor dictum acuse tincidant elit.",
                                        "Decor sit nibors solids nec tenpuor o cursore cente tempus. Nec leo auque us.",
                                        "Pellentesque diebus tellus quis elit. Etiam augue neque potoa et auguen euismod at nisd.",
                                        "Pellentesque habitant morbis triaque senectus et netus et malesuada fames ac turpis egestas."
                                    ].map((text, index) => (
                                        <div key={index} className="flex items-start space-x-2 hover:bg-gray-50 p-2 rounded transition-colors">
                                            <FaArrowRight className="text-orange-500 mt-1 flex-shrink-0" />
                                            <span className="text-gray-700 text-sm sm:text-base">{text}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Social Sharing */}
                                <div className="mt-8">
                                    <h4 className="text-base sm:text-lg font-semibold mb-4 text-gray-700">Social Sharing:-</h4>
                                    <div className="flex flex-wrap gap-3">
                                        {socialIcons.map((social, index) => (
                                            <button
                                                key={index}
                                                className={`w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:shadow-md transition-transform duration-300 hover:scale-110 ${social.color}`}
                                            >
                                                <social.icon size={16} />
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Visitor Reviews Section */}
                        <div className="bg-white rounded-lg  mb-6">
                            <div className="bg-orange-500 text-white px-4 sm:px-6 py-3 rounded-md flex items-center">
                                <div className="w-4 h-4 bg-white rounded-full mr-3"></div>
                                <span className="font-semibold text-sm sm:text-base">Visitor Reviews</span>
                            </div>

                            <div className="pt-4 ">
                                {reviews.map((review) => (
                                    <div key={review.id} className="bg-gray-50 p-4 rounded shadow-sm relative mb-4">
                                        <button className="absolute top-4 right-4 bg-orange-500 hover:bg-orange-600 text-white text-xs px-3 py-1 rounded-md flex items-center space-x-1">
                                            <FaReply className="text-xs" />
                                            <span>Reply</span>
                                        </button>

                                        <h4 className="font-semibold text-gray-800 text-sm pr-16">{review.name}</h4>
                                        <p className="text-xs text-gray-500 mb-2">{review.role}</p>

                                        <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-2 mb-3">
                                            <span className="text-xs bg-white shadow-sm text-gray-700 px-3 py-1 rounded-[4px] inline-block">{review.date}</span>
                                            <div className="flex items-center space-x-1 bg-white shadow-sm px-3 py-1 rounded-[4px] w-fit">
                                                {[...Array(5)].map((_, i) => (
                                                    <FaStar key={i} className={`w-3 h-3 sm:w-4 sm:h-4 ${i < review.rating ? 'text-orange-500' : 'text-gray-300'}`} />
                                                ))}
                                            </div>
                                            <span className="text-xs bg-orange-500 text-white px-2 py-1 rounded-md w-fit">{review.rating}</span>
                                        </div>

                                        <p className="text-sm text-gray-600 leading-relaxed pr-0 sm:pr-16">{review.comment}</p>
                                    </div>
                                ))}

                                <div className="text-center">
                                    <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 text-sm rounded-md shadow-sm transition-all">
                                        Leave Your Review
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Open Jobs Section */}
                        <div className="bg-white rounded-lg  w-full mt-6">
                            <div className="bg-orange-500 text-white px-4 sm:px-6 py-3 rounded-lg flex items-center">
                                <div className="w-4 h-4 rounded-full bg-white mr-3 border-4 border-orange-500"></div>
                                <span className="font-semibold text-sm sm:text-base">Open Jobs Position List</span>
                            </div>

                            <div className="pt-4 ">
                                {jobs.map(({ id, logo, title, company, location, timeAgo, type }) => (
                                    <div
                                        key={id}
                                        className="border border-gray-200 shadow-sm rounded-lg p-4 mb-4 hover:shadow-md transition-shadow"
                                    >
                                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                                            <div className="flex items-start space-x-4 flex-1">
                                                <img
                                                    src={logo}
                                                    alt="logo"
                                                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover flex-shrink-0"
                                                />
                                                <div className="flex-1 min-w-0">
                                                    <div className="flex mb-2">
                                                        <span
                                                            className={`flex items-center gap-1 px-3 py-1 rounded text-xs sm:text-sm font-medium ${type === "Full Time"
                                                                ? "bg-orange-100 text-orange-600"
                                                                : "bg-yellow-100 text-yellow-600"
                                                                }`}
                                                        >
                                                            <FaClock />
                                                            {type}
                                                        </span>
                                                    </div>

                                                    <h4 className="font-semibold text-base sm:text-lg text-gray-800 hover:text-orange-500 cursor-pointer mb-2 break-words">
                                                        {title}
                                                    </h4>
                                                    <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 text-xs sm:text-sm text-gray-500">
                                                        <span className="flex items-center bg-white shadow-sm rounded-[5px] px-3 py-1 w-fit">
                                                            <HiOutlineBuildingOffice2 className="mr-1 text-orange-500 flex-shrink-0" />
                                                            <span className="truncate">{company}</span>
                                                        </span>
                                                        <span className="flex items-center bg-white shadow-sm rounded-[5px] px-3 py-1 w-fit">
                                                            <FaMapMarkerAlt className="mr-1 text-red-500 flex-shrink-0" />
                                                            <span className="truncate">{location}</span>
                                                        </span>
                                                        <span className="flex items-center bg-white shadow-sm rounded-[5px] px-3 py-1 w-fit">
                                                            <FaDownload className="mr-1 text-blue-500 flex-shrink-0" />
                                                            <span className="truncate">{timeAgo}</span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-center sm:justify-end">
                                                <div className="bg-amber-100 h-8 w-8 rounded-full flex items-center justify-center mr-2">
                                                    <button className="text-orange-300 hover:text-orange-500 transition-colors">
                                                        <FaHeart size={18} />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Sidebar - Responsive */}
                    <div className="w-full lg:w-80 space-y-6">
                        {/* Resume CTA */}
                        <div
                            className="relative rounded-[6px] shadow-md overflow-hidden w-full"
                            style={{
                                backgroundImage: `url(${Account})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}>
                            <div className="absolute inset-0  bg-opacity-60"></div>
                            <div className="relative text-white text-center px-4 sm:px-6 py-8 sm:py-10">
                                <h3 className="text-xl sm:text-2xl font-bold mb-3">Make a Difference with Your Online Resume!</h3>
                                <p className="text-sm text-gray-200 mb-6">
                                    Your Resume in Minutes with Jobs Resume Assistant is Ready!
                                </p>
                                <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded font-semibold transition-all w-full sm:w-auto">
                                    Create an Account
                                </button>
                            </div>
                        </div>

                        {/* Quick Contacts */}
                        <div className="bg-white rounded-lg shadow-md border border-gray-100 p-4 sm:p-5">
                            <div className="mb-4">
                                <h3 className="text-base sm:text-lg font-semibold text-gray-800 border-b border-gray-200 pb-2 relative">
                                    Quick Contacts
                                    <span className="absolute left-0 bottom-[-2px] h-[4px] w-8 bg-orange-500 rounded-full"></span>
                                </h3>
                            </div>

                            <div className="space-y-4">
                                <input
                                    type="text"
                                    name="firstName"
                                    placeholder="First Name"
                                    value={contactForm.firstName}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                                />
                                <input
                                    type="text"
                                    name="lastName"
                                    placeholder="Last Name"
                                    value={contactForm.lastName}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                                />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email Address"
                                    value={contactForm.email}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                                />
                                <input
                                    type="text"
                                    name="subject"
                                    placeholder="Subject"
                                    value={contactForm.subject}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                                />
                                <textarea
                                    name="message"
                                    placeholder="Message..."
                                    rows="4"
                                    value={contactForm.message}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
                                ></textarea>

                                <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 rounded-md shadow-md transition-all w-full">
                                    Submit Message
                                </button>
                            </div>
                        </div>

                        {/* Tags Cloud */}
                        <div className="bg-white rounded-lg shadow-md border border-gray-100 p-4 sm:p-5">
                            <div className="mb-4">
                                <h3 className="text-base sm:text-lg font-semibold text-gray-800 border-b border-gray-200 pb-2 relative">
                                    Tags Cloud
                                    <span className="absolute left-0 bottom-[-2px] h-[4px] w-8 bg-orange-500 rounded-full"></span>
                                </h3>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {[
                                    'Designer',
                                    'Developer',
                                    'Web',
                                    'Freelancer',
                                    'Typography',
                                    'App',
                                    'Coding',
                                    'Business',
                                ].map((tag) => (
                                    <span
                                        key={tag}
                                        className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-1 rounded text-sm cursor-pointer transition-colors"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Bookmark Jobs */}
                        <div className="bg-white rounded-lg shadow-md border border-gray-100 p-4 sm:p-5">
                            <div className="mb-4">
                                <h3 className="text-base sm:text-lg font-semibold text-gray-800 border-b border-gray-200 pb-2 relative">
                                    Bookmark Jobs
                                    <span className="absolute left-0 bottom-[-2px] h-[4px] w-8 bg-orange-500 rounded-full"></span>
                                </h3>
                            </div>

                            <div className="text-center">
                                <p className="text-gray-500 mb-4">350 People Bookmarked Jobs</p>
                                <button className="bg-orange-500 hover:bg-red-600 text-white px-6 py-2 rounded-md shadow-md transition-all flex items-center justify-center mx-auto">
                                    <FaHeart className="mr-2" />
                                    Make to Bookmark Jobs
                                </button>
                            </div>
                        </div>

                        {/* Location */}
                        <div className="bg-white rounded-lg shadow-md border border-gray-100 p-4 sm:p-5">
                            <div className="mb-4">
                                <h3 className="text-base sm:text-lg font-semibold text-gray-800 border-b border-gray-200 pb-2 relative">
                                    Location
                                    <span className="absolute left-0 bottom-[-2px] h-[4px] w-8 bg-orange-500 rounded-full"></span>
                                </h3>
                            </div>

                            <div className="rounded-lg overflow-hidden border border-gray-200">
                                <iframe
                                    title="Company Location"
                                    width="100%"
                                    height="250"
                                    style={{ border: 0 }}
                                    referrerPolicy="no-referrer-when-downgrade"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.7556546098226!2d72.83626827343991!3d21.201863481814105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04ef7edcfbd1f%3A0x93edc2884741b879!2s6R2Q%2BPFH%20Delhi%20Gate%2C%20Japan%20Market%2C%20Begampura%2C%20Surat%2C%20Gujarat%20395008!5e0!3m2!1sen!2sin!4v1747892495191!5m2!1sen!2sin"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default CompanyDetails;