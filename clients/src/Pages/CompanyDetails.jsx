import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { FaReply } from 'react-icons/fa'
import { FaUser } from "react-icons/fa";

import {  FaDownload } from "react-icons/fa6";

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
    FaHeart} from 'react-icons/fa';
import { HiOutlineBuildingOffice2 } from 'react-icons/hi2';
import Footer from '../header-footer/Footer';
import banner from '../assets/images/FindWork/banner.png';
import CompanyLogo from '../assets/images/FindWork/logo.png';
import About from "../assets/images/FindWork/about.jpg";
import Account from "../assets/images/FindWork/account.png";
import Header from '../header-footer/Header';

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

    const jobListings = [
  {
    id: 1,
    title: "Website Developer & Software Developer",
    company: "Software Developer",
    location: "Drive Potsdam, NY 676",
    timeAgo: "15 Minute Ago",
    type: "Full Time",
  },
  {
    id: 2,
    title: "Head of Developers & MySQL Developers",
    company: "Software Developer",
    location: "Drive Potsdam, NY 676",
    timeAgo: "30 Minute Ago",
    type: "Part Time",
  },
  {
    id: 3,
    title: "Frontend/Backend Developer",
    company: "Software Developer",
    location: "Drive Potsdam, NY 676",
    timeAgo: "15 Minute Ago",
    type: "Full Time",
  },
  {
    id: 4,
    title: "Application Developer & Web Designer",
    company: "Software Developer",
    location: "Drive Potsdam, NY 676",
    timeAgo: "30 Minute Ago",
    type: "Part Time",
  },
];

    return (
        <>
            <Header />
            <div className="min-h-screen ">
                {/* Header would go here */}

                {/* Banner Section - keeping as provided */}
                <section className="relative w-[95%] mx-auto h-[350px] flex items-center justify-start bg-cover bg-center my-5 px-6 md:px-12" style={{ backgroundImage: `url(${banner})`, borderRadius: '20px', overflow: 'hidden' }}>
                    <div className="absolute inset-0 bg-opacity-40 rounded-[20px]"></div>
                    <div className="relative z-10 flex items-center space-x-6">
                        <img src={CompanyLogo} alt="Company Logo" className="w-[140px] h-[140px] rounded-full object-cover" />
                        <div className="text-white">
                            <div className="flex items-center space-x-2">
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
                            <h2 className="text-2xl md:text-3xl font-semibold flex items-center">Acodia PHP Development Company <FaCheckCircle className="text-orange-500 text-xl ml-2 mt-1" /></h2>
                            <div className="flex items-center space-x-2 text-sm mt-1">
                                <HiOutlineBuildingOffice2 className="text-[#f89d2a]" />
                                <span>PNT Software Company</span>
                            </div>
                            <div className="flex items-center text-sm mt-2 space-x-3 flex-wrap">
                                <div className="bg-white text-black rounded-[5px] px-3 py-1 flex items-center space-x-2">
                                    <FaMapMarkerAlt className="text-[#f89d2a]" />
                                    <span>2767 Concord Street, Bangalore</span>
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

                {/* Main Content */}
                <div className="w-[75%] mx-auto flex gap-6 mb-8 mt-[60px]">
                    {/* Left Content */}
                    <div className="flex-1">
                        {/* About Company Section */}
                        <div className="bg-white rounded-lg mb-6">
                            <div className="bg-orange-500 text-white px-6 py-3 rounded-lg flex items-center" >
                                <HiOutlineBuildingOffice2 className="mr-2" />
                                <span className="font-semibold">About Company Details</span>
                            </div>
                            <div className='pt-6'>
                                {/* <div className="mb-6"> */}
                                <img
                                    src={About}
                                    alt="Office"
                                    className="w-[790px] h-[453px] object-cover rounded-lg mb-5 "
                                />
                                {/* </div> */}
                                <div className="space-y-4 text-gray-600 leading-relaxed">
                                    <p>Lorem Ipsum is simply dummy text of printing and type setting industry. Lorem Ipsum been industry standard dummy text ever when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also has leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                </div>

                                {/* Features List */}
                                <div className="mt-6 space-y-3">
                                    <div className="flex items-start space-x-2 hover:bg-gray-50 p-2 rounded transition-colors ">
                                        <FaArrowRight className="text-orange-500 mt-1" />
                                        <span className="text-gray-700">
                                            Morbi mattis ullamcorper velit. Phasellus gravida semper nisi nullam vel sem.
                                        </span>
                                    </div>
                                    <div className="flex items-center space-x-3 hover:bg-gray-50 p-2 rounded transition-colors">
                                        <FaArrowRight className="text-orange-500 mt-1" />
                                        <span className="text-gray-700">Pencillus cursus massa as phasant lorem finsat. Quarnar dices, din as ullomelabrt.</span>
                                    </div>
                                    <div className="flex items-center space-x-3 hover:bg-gray-50 p-2 rounded transition-colors">
                                        <FaArrowRight className="text-orange-500 mt-1" />
                                        <span className="text-gray-700">Intess ultricesad vel augue. Curabitur ultriciesaugue ullicies elit. Nam eget ante Fusce cinereaeu.</span>
                                    </div>
                                    <div className="flex items-center space-x-3 hover:bg-gray-50 p-2 rounded transition-colors">
                                        <FaArrowRight className="text-orange-500 mt-1" />
                                        <span className="text-gray-700">Dices mollit bibendifn risus. Phasellus nec leo non.enim pellentasque pharetra.</span>
                                    </div>
                                    <div className="flex items-center space-x-3 hover:bg-gray-50 p-2 rounded transition-colors">
                                        <FaArrowRight className="text-orange-500 mt-1" />
                                        <span className="text-gray-700">Prosum cursus orat ut massa. Sed cursus magna augue rutro. Decor dictum acuse tincidant elit.</span>
                                    </div>
                                    <div className="flex items-center space-x-3 hover:bg-gray-50 p-2 rounded transition-colors">
                                        <FaArrowRight className="text-orange-500 mt-1" />
                                        <span className="text-gray-700">Decor sit nibors solids nec tenpuor o cursore cente tempus. Nec leo auque us.</span>
                                    </div>
                                    <div className="flex items-center space-x-3 hover:bg-gray-50 p-2 rounded transition-colors">
                                        <FaArrowRight className="text-orange-500 mt-1" />
                                        <span className="text-gray-700">Pellentesque diebus tellus quis elit. Etiam augue neque potoa et auguen euismod at nisd.</span>
                                    </div>
                                    <div className="flex items-center space-x-3 hover:bg-gray-50 p-2 rounded transition-colors">
                                        <FaArrowRight className="text-orange-500 mt-1" />
                                        <span className="text-gray-700">Pellentesque habitant morbis triaque senectus et netus et malesuada fames ac turpis egestas.</span>
                                    </div>
                                </div>

                                {/* Social Sharing */}
                                <div className="mt-8">
                                    <h4 className="text-lg font-semibold mb-4">Social Sharing:</h4>
                                    <div className="flex space-x-3">
                                        {[
                                            { icon: FaFacebookF, bg: 'bg-blue-600', hover: 'hover:bg-blue-700' },
                                            { icon: FaTwitter, bg: 'bg-blue-400', hover: 'hover:bg-blue-500' },
                                            { icon: FaLinkedinIn, bg: 'bg-blue-700', hover: 'hover:bg-blue-800' },
                                            { icon: FaGooglePlusG, bg: 'bg-red-500', hover: 'hover:bg-red-600' },
                                            { icon: FaWhatsapp, bg: 'bg-green-500', hover: 'hover:bg-green-600' },
                                            { icon: FaPinterestP, bg: 'bg-red-600', hover: 'hover:bg-red-700' }
                                        ].map((social, index) => (
                                            <button
                                                key={index}
                                                className={`${social.bg} ${social.hover} text-white p-3 rounded transition-colors duration-300 transform hover:scale-110`}
                                            >
                                                <social.icon />
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Visitor Reviews Section */}
                        <div className="bg-white rounded-lg shadow-sm mb-6">
                            {/* Header */}
                            <div className="bg-orange-500 text-white px-6 py-3 rounded-t-md flex items-center">
                                <div className="w-4 h-4 bg-white rounded-full mr-3"></div>
                                <span className="font-semibold text-sm">Visitor Reviews</span>
                            </div>

                            {/* Review List */}
                            <div className="p-6 space-y-6">
                                {reviews.map((review) => (
                                    <div key={review.id} className="bg-gray-50 p-4 rounded shadow-sm relative">
                                        <button className="absolute top-4 right-4 bg-orange-500 hover:bg-orange-600 text-white text-xs px-3 py-1 rounded-md flex items-center space-x-1">
                                            <FaReply className="text-xs" />
                                            <span>Reply</span>
                                        </button>

                                        <h4 className="font-semibold text-gray-800 text-sm">{review.name}</h4>
                                        <p className="text-xs text-gray-500 mb-2">{review.role}</p>

                                        {/* Date and Rating */}
                                        <div className="flex items-center space-x-2 mb-3">
                                            <span className="text-xs bg-white shadow-sm text-gray-700 px-3 py-1 rounded-[4px]">{review.date}</span>
                                            <div className="flex items-center space-x-1 bg-white shadow-sm px-3 py-1 rounded-[4px]">
                                                {[...Array(5)].map((_, i) => (
                                                    <FaStar key={i} className={`w-4 h-4 ${i < review.rating ? 'text-orange-500' : 'text-gray-300'}`} />
                                                ))}
                                            </div>
                                            <span className="text-xs bg-orange-500 text-white px-2 py-1 rounded-md">{review.rating}</span>
                                        </div>

                                        <p className="text-sm text-gray-600 leading-relaxed">{review.comment}</p>
                                    </div>
                                ))}

                                {/* CTA */}
                                <div className="text-center">
                                    <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 text-sm rounded-md shadow-sm transition-all">
                                        Leave Your Review
                                    </button>
                                </div>
                            </div>
                        </div>


                        {/* Open Jobs Section */}
                        <div className="bg-white rounded-lg shadow-sm w-full max-w-4xl mx-auto mt-6">
      {/* Header */}
      <div className="bg-orange-500 text-white px-6 py-3 rounded-t-lg flex items-center">
        <div className="w-4 h-4 rounded-full bg-white mr-3 border-4 border-orange-500"></div>
        <span className="font-semibold text-md">Open Jobs Position List</span>
      </div>

      {/* Job Cards */}
      <div className="p-6">
        {jobListings.map((job) => (
          <div
            key={job.id}
            className="border border-gray-200 rounded-lg p-4 mb-4 hover:shadow-md transition-shadow"
          >
            <div className="flex justify-between items-center">
              <div className="flex items-start space-x-4">
                {/* Logo */}
                <img
                  src="https://cdn-icons-png.flaticon.com/512/5969/5969020.png"
                  alt="logo"
                  className="w-12 h-12 rounded-full object-cover"
                />
                {/* Info */}
                <div>
                  <h4 className="font-semibold text-gray-800 hover:text-orange-500 cursor-pointer">
                    {job.title}
                  </h4>
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mt-1">
                    <span className="flex items-center">
                      <HiOutlineBuildingOffice2 className="mr-1 text-orange-500" />
                      {job.company}
                    </span>
                    <span className="flex items-center">
                      <FaMapMarkerAlt className="mr-1 text-red-500" />
                      {job.location}
                    </span>
                    <span className="flex items-center">
                      <FaDownload className="mr-1 text-blue-500" />
                      {job.timeAgo}
                    </span>
                  </div>
                </div>
              </div>

              {/* Type & Like */}
              <div className="flex items-center space-x-3">
                <span
                  className={`${
                    job.type === "Full Time"
                      ? "bg-orange-100 text-orange-600"
                      : "bg-yellow-100 text-yellow-600"
                  } px-3 py-1 rounded-full text-sm font-medium`}
                >
                  {job.type}
                </span>
                <button className="text-gray-400 hover:text-orange-500 transition-colors">
                  <FaHeart />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
                    </div>

                    {/* Right Sidebar */}
                    <div className="w-80">
                        {/* Resume CTA */}

                        <div
                            className="relative rounded-[6px] shadow-md overflow-hidden mb-6 w-full max-w-md mx-auto"
                            style={{
                                backgroundImage: `url(${Account})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}>
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-opacity-60"></div>

                            {/* Content */}
                            <div className="relative  text-white text-center px-6 py-10">
                                <h3 className="text-2xl font-bold mb-3">Make a Difference with Your Online Resume!</h3>
                                <p className="text-sm md:text-base text-gray-200 mb-6">
                                    Your Resume in Minutes with Jobs Resume Assistant is Ready!
                                </p>
                                <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded font-semibold transition-all">
                                    Create an Account
                                </button>
                            </div>
                        </div>



                        {/* Quick Contacts */}
                        <div className="bg-white rounded-lg shadow-md border border-gray-100 p-5 mb-7">
                            {/* Heading with underline */}
                            <div className="mb-4">
                                <h3 className="text-lg font-semibold text-gray-800 border-b border-gray-200 pb-2 relative">
                                    Quick Contacts
                                    <span className="absolute left-0 bottom-[-2px] h-[4px] w-8 bg-orange-500 rounded-full"></span>
                                </h3>
                            </div>

                            {/* Contact Form */}
                            <div className="space-y-4">
                                <input
                                    type="text"
                                    name="firstName"
                                    placeholder="Frist Name"
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

                                {/* Button */}
                                <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 rounded-md shadow-md transition-all w-full">
                                    Submit Message
                                </button>
                            </div>
                        </div>


                        {/* Tags Cloud */}
                        {/* Tags Cloud */}
                        <div className="bg-white rounded-lg shadow-md border border-gray-100 p-5 mb-7">
                            {/* Heading with underline */}
                            <div className="mb-4">
                                <h3 className="text-lg font-semibold text-gray-800 border-b border-gray-200 pb-2 relative">
                                    Tags Cloud
                                    <span className="absolute left-0 bottom-[-2px] h-[4px] w-8 bg-orange-500 rounded-full"></span>
                                </h3>
                            </div>

                            {/* Tags */}
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
                        {/* Bookmark Jobs */}
                        <div className="bg-white rounded-lg shadow-md border border-gray-100 p-5 mb-7">
                            {/* Heading with underline */}
                            <div className="mb-4">
                                <h3 className="text-lg font-semibold text-gray-800 border-b border-gray-200 pb-2 relative">
                                    Bookmark Jobs
                                    <span className="absolute left-0 bottom-[-2px] h-[4px] w-8 bg-orange-500 rounded-full"></span>
                                </h3>
                            </div>

                            {/* Content */}
                            <div className="text-center">
                                <p className="text-gray-500 mb-4">350 People Bookmarked Jobs</p>
                                <button className="bg-orange-500 hover:bg-red-600 text-white px-6 py-2 rounded-md shadow-md transition-all flex items-center justify-center mx-auto">
                                    <FaHeart className="mr-2" />
                                    Make to Bookmark Jobs
                                </button>
                            </div>
                        </div>


                        {/* Location */}
                        {/* Location */}
                        <div className="bg-white rounded-lg shadow-md border border-gray-100 p-5 mb-7">
                            {/* Heading with underline */}
                            <div className="mb-4">
                                <h3 className="text-lg font-semibold text-gray-800 border-b border-gray-200 pb-2 relative">
                                    Location
                                    <span className="absolute left-0 bottom-[-2px] h-[4px] w-8 bg-orange-500 rounded-full"></span>
                                </h3>
                            </div>

                            {/* Google Maps Iframe */}
                            <div className="rounded-lg overflow-hidden border border-gray-200">
                                <iframe
                                    title="Company Location"
                                    width="100%"
                                    height="250"
                                    style={{ border: 0 }}
                                    referrerPolicy="no-referrer-when-downgrade"
                                    src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.7556546098226!2d72.83626827343991!3d21.201863481814105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04ef7edcfbd1f%3A0x93edc2884741b879!2s6R2Q%2BPFH%20Delhi%20Gate%2C%20Japan%20Market%2C%20Begampura%2C%20Surat%2C%20Gujarat%20395008!5e0!3m2!1sen!2sin!4v1747892495191!5m2!1sen!2sin&style=element:geometry%7Ccolor:0x212121&style=element:labels.icon%7Cvisibility:off&style=element:labels.text.fill%7Ccolor:0x757575&style=element:labels.text.stroke%7Ccolor:0x212121&style=feature:administrative%7Celement:geometry%7Ccolor:0x757575&style=feature:administrative.country%7Celement:labels.text.fill%7Ccolor:0x9e9e9e&style=feature:administrative.land_parcel%7Cvisibility:off&style=feature:administrative.locality%7Celement:labels.text.fill%7Ccolor:0xbdbdbd&style=feature:poi%7Celement:labels.text.fill%7Ccolor:0x757575&style=feature:poi.park%7Celement:geometry%7Ccolor:0x181818&style=feature:poi.park%7Celement:labels.text.fill%7Ccolor:0x616161&style=feature:poi.park%7Celement:labels.text.stroke%7Ccolor:0x1b1b1b&style=feature:road%7Celement:geometry.fill%7Ccolor:0x2c2c2c&style=feature:road%7Celement:labels.text.fill%7Ccolor:0x8a8a8a&style=feature:road.arterial%7Celement:geometry%7Ccolor:0x373737&style=feature:road.highway%7Celement:geometry%7Ccolor:0x3c3c3c&style=feature:road.highway.controlled_access%7Celement:geometry%7Ccolor:0x4e4e4e&style=feature:road.local%7Celement:labels.text.fill%7Ccolor:0x616161&style=feature:transit%7Celement:labels.text.fill%7Ccolor:0x757575&style=feature:water%7Celement:geometry%7Ccolor:0x000000&style=feature:water%7Celement:labels.text.fill%7Ccolor:0x3d3d3d`}
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