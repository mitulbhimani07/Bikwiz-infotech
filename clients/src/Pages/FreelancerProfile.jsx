import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { FaReply } from 'react-icons/fa'
import { FaUser } from "react-icons/fa";

import { FaDownload } from "react-icons/fa6";
import { Crown, Map, Clipboard, User, Layers, GraduationCap, FileText, Download, Globe, MapPin, Phone, Mail } from "lucide-react";
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
import banner from '../assets/images/findTalent/banner.jpg';
import Profile from "../assets/images/findTalent/profile.png";
import Account from "../assets/images/FindWork/account.png";
import Header from '../header-footer/Header'
import Job1 from "../assets/images/findTalent/job1.png"
import Job2 from "../assets/images/findTalent/job2.png"

function FreelancerProfile() {

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

  return (
    <>
      <Header />
      <div className="min-h-screen ">
        {/* Header would go here */}

        {/* Banner Section - Responsive */}
        <section className="banner-section relative w-[95%] mx-auto h-[250px] sm:h-[320px] lg:h-[350px] flex items-center justify-start bg-cover bg-center my-5 px-4 sm:px-6 md:px-12" style={{ backgroundImage: `url(${banner})`, borderRadius: '20px', overflow: 'hidden' }}>
          <div className="absolute inset-0 bg-opacity-40 rounded-[20px]"></div>
          <div className="relative z-10 flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6 w-full">
            <img src={Profile} alt="Company Logo" className="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] lg:w-[140px] lg:h-[140px] rounded-full object-cover flex-shrink-0" />
            <div className="text-white text-center sm:text-left flex-1 sm:pb-2">
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
            <div className="bg-white rounded-lg mb-6">
              <div className="bg-orange-500 text-white px-4 sm:px-6 py-3 rounded-lg flex items-center" >
                <HiOutlineBuildingOffice2 className="mr-2" />
                <span className="font-semibold text-sm sm:text-base">About Company Details</span>
              </div>
              <div className='pt-4'>
                <div className="space-y-4 text-gray-600 leading-relaxed text-sm sm:text-base">
                  <p>I've been passionate about graphic design and digital art from an early age with a keen interest in Website and Mobile Application User Interfaces. I can create high-quality and aesthetically pleasing designs in a quick turnaround time. Check out the portfolio section of my profile to see samples of my work and feel free to discuss your designing needs. I mostly use Adobe Photoshop, Illustrator, XD and Figma. *Website User Experience and Interface (UI/UX) Design - for all kinds of Professional and Personal websites. *Mobile Application User Experience and Interface Design - for all kinds of IOS/Android and Hybrid Mobile Applications. *Wireframe Designs..</p>

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
                
              </div>
            </div>

            {/* Visitor Reviews Section */}



            {/* Open Jobs Section */}
            <div className="bg-white rounded-lg w-full mt-6">
              <div className="bg-orange-500 text-white px-4 sm:px-6 py-3 rounded-lg flex items-center">
                <div className="w-4 h-4 rounded-full bg-white mr-3 border-4 border-orange-500"></div>
                <span className="font-semibold text-sm sm:text-base">Open Jobs Position List</span>
              </div>

              <div className="pt-4">
                {jobs.map(({ id, logo, title, company, location, timeAgo, type }) => (
                  <div
                    key={id}
                    className="border border-gray-200 shadow-sm rounded-lg p-4 mb-4 hover:shadow-md transition-shadow"
                  >
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                      <div className="flex items-start space-x-4 flex-1">
                        {/* Logo */}
                        <img
                          src={logo}
                          alt="logo"
                          className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover flex-shrink-0"
                        />
                        {/* Info */}
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
                      {/* Like */}
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


            {/* Overlay */}

            {/* Content */}
            <div className="bg-white rounded-lg border-2 border-gray-100 p-4 sm:p-5 mb-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-4">
                <div className="space-x-2">
                  <Crown className="text-orange-500 mb-4" />
                  <div>
                    <p className="text-xs text-gray-500 uppercase mb-1">Date of Birth</p>
                    <p className="text-sm text-black">14 June, 2021</p>
                  </div>
                </div>
                <div className="space-x-2">
                  <Map className="text-orange-500 mb-4" />
                  <div>
                    <p className="text-xs text-gray-500 uppercase mb-1">Nationality</p>
                    <p className="text-sm text-black">Bangladesh</p>
                  </div>
                </div>
                <div className="space-x-2">
                  <Clipboard className="text-orange-500 mb-4" />
                  <div>
                    <p className="text-xs text-gray-500 uppercase mb-1">Marital Status</p>
                    <p className="text-sm text-black">Single</p>
                  </div>
                </div>
                <div className="space-x-2">
                  <User className="text-orange-500 mb-4" />
                  <div>
                    <p className="text-xs text-gray-500 uppercase mb-1">Gender</p>
                    <p className="text-sm text-black">Male</p>
                  </div>
                </div>
                <div className="space-x-2">
                  <Layers className="text-orange-500 mb-4" />
                  <div>
                    <p className="text-xs text-gray-500 uppercase mb-1">Experience</p>
                    <p className="text-sm text-black">7 Years</p>
                  </div>
                </div>
                <div className="space-x-2">
                  <GraduationCap className="text-orange-500 mb-4" />
                  <div>
                    <p className="text-xs text-gray-500 uppercase mb-1">Educations</p>
                    <p className="text-sm text-black">Master Degree</p>
                  </div>
                </div>
              </div>
            </div>
            {/* </div> */}



            {/* Quick Contacts */}
            <div className="max-w-md mx-auto bg-white rounded-lg border-2 border-gray-100 p-4 sm:p-5 mb-7">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-2">Download My Resume</h3>
                <div className="flex items-center space-x-3">
                  <FileText className="w-10 h-10 text-gray-300 flex-shrink-0" />
                  <div className="flex flex-col flex-1 min-w-0">
                    <span className="text-sm text-gray-500 mb-1">Esther Howard</span>
                    <span className="text-md font-semibold text-black">PDF</span>
                  </div>
                  <div className="bg-orange-50 p-3 rounded-lg">
                    <button><Download className="text-orange-500 w-5 h-5" /></button>
                  </div>
                </div>

              </div>

            </div>


            {/* Tags Cloud */}
            {/* Tags Cloud */}
            <div className="max-w-md mx-auto bg-white rounded-lg border-2 border-gray-100 p-4 sm:p-5 mb-7">
              <h3 className="text-base sm:text-lg font-bold text-gray-800 pb-2 mb-4">
                Contact Information
              </h3>

              {/* Website */}
              <div className="mb-5">
                <div className="flex items-center text-orange-500 space-x-2 mb-1">
                  <Globe className="w-5 h-5 flex-shrink-0" />
                  <span className="uppercase text-sm text-gray-400">Website</span>
                </div>
                <p className="text-sm text-gray-700 ml-7 break-words">www.estherhoward.com</p>
              </div>

              {/* Location */}
              <div className="mb-5">
                <div className="flex items-center text-orange-500 space-x-2 mb-1">
                  <MapPin className="w-5 h-5 flex-shrink-0" />
                  <span className="uppercase text-sm text-gray-400">Location</span>
                </div>
                <p className="text-sm font-semibold text-gray-800 ml-7">
                  Beverly Hills, California 90202
                </p>
                <p className="text-sm text-gray-700 ml-7">
                  Zone/Block Basement 1 Unit B2, 1372 Spring Avenue, Portland,
                </p>
              </div>

              {/* Phone */}
              <div className="mb-5">
                <div className="flex items-center text-orange-500 space-x-2 mb-1">
                  <Phone className="w-5 h-5 flex-shrink-0" />
                  <span className="uppercase text-sm text-gray-400">Phone</span>
                </div>
                <p className="text-sm text-gray-700 ml-7">+1-202-555-0141</p>
                <p className="text-sm text-gray-500 ml-7 mt-1">Secondary Phone</p>
                <p className="text-sm text-gray-700 ml-7">+1-202-555-0189</p>
              </div>

              {/* Email */}
              <div>
                <div className="flex items-center text-orange-500 space-x-2 mb-1">
                  <Mail className="w-5 h-5 flex-shrink-0" />
                  <span className="uppercase text-sm text-gray-400">Email Address</span>
                </div>
                <p className="text-sm text-gray-700 ml-7 break-words">esther.howard@gmail.com</p>
              </div>
            </div>






          </div>
        </div>
      </div >
      <Footer />
    </>
  );

}

export default FreelancerProfile