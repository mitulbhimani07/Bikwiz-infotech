import React, { useState } from 'react';
import { Mail, Phone, MapPin, Edit, Plus, X, Save, Globe, Calendar, Users, Briefcase, Eye, Settings, Flame } from 'lucide-react';
import ClientSidbar from '../navbar/ClientSidbar';
import ClientHeader from '../navbar/ClientHeader';
import client from '../../../../src/assets/images/client.png'
import { VscFlame } from 'react-icons/vsc';
import { FaFacebookF, FaLinkedin, FaRegEnvelope, FaTwitter, FaUsers } from 'react-icons/fa';
import { LiaIndustrySolid } from 'react-icons/lia';
import { IoEyeSharp } from 'react-icons/io5';
import tech1 from '../../../../src/assets/images/html.png';
import tech2 from '../../../../src/assets/images/css.png';
import tech3 from '../../../../src/assets/images/javascript.png';
import tech4 from '../../../../src/assets/images/rudy.png';
import tech5 from '../../../../src/assets/images/mixpanel.png'
import tech6 from '../../../../src/assets/images/framer.png'
import gallery from '../../../../src/assets/images/gallery.png'
import gallery1 from '../../../../src/assets/images/gallery1.png'
import gallery2 from '../../../../src/assets/images/gallery2.png'
import gallery3 from '../../../../src/assets/images/gallery3.png'
import location from '../../../../src/assets/images/us.png'
import location1 from '../../../../src/assets/images/england.png'
import location2 from '../../../../src/assets/images/japan.png'
import location3 from '../../../../src/assets/images/australia.png'
import location4 from '../../../../src/assets/images/china.png'
import ClientFooter from '../navbar/ClientFooter';

function CompanyProfile() {
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [isEditingContact, setIsEditingContact] = useState(false);
  const [isEditingTechStack, setIsEditingTechStack] = useState(false);
  const [isEditingOffices, setIsEditingOffices] = useState(false);

   

  const [profileData, setProfileData] = useState({
    name: "Anjali Kumar",
    img: client,
    website: "https://anjalikumar.com",
    founded: "July 31, 2011",
    employees: "40+",
    countries: "20 countries",
    industry: "Social & Non-Profit",
    description: "Lorem Ipsum is simply dummy text of printing and type setting industry. Lorem Ipsum been industry standard dummy text ever since, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of printing and type setting industry. Lorem Ipsum been industry standard dummy text ever since, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting."
  });

   const items = [
    {
      icon: <VscFlame className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-orange-500" />,
      label: "Founded",
      value: profileData.founded,
    },
    {
      icon: <FaUsers className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-orange-500" />,
      label: "Employees",
      value: profileData.employees,
    },
    {
      icon: <MapPin className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-orange-500" />,
      label: "Location",
      value: profileData.countries,
    },
    {
      icon: <LiaIndustrySolid className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-orange-500" />,
      label: "Industry",
      value: profileData.industry,
    },
  ];

  const [contactData, setContactData] = useState({
    email: "twitter.com/Anjali",
    facebook: "facebook.com/anjali",
    info: "linkedin.com/company/anjali",
    website: "anjali@gmail.com"
  });

  const [techStack, setTechStack] = useState([
    { name: "HTML 5", img: tech1 },
    { name: "CSS 3", img: tech2 },
    { name: "JavaScript", img: tech3 },
    { name: "Ruby", img: tech4 },
    { name: "Mongodb", img: tech5 },
    { name: "Flutter", img: tech6 }
  ]);

  const [offices, setOffices] = useState([
    { country: "United States", img: location, isHQ: true },
    { country: "England", img: location1, isHQ: false },
    { country: "Japan", img: location2, isHQ: false },
    { country: "Australia", img: location3, isHQ: false },
    { country: "China", img: location4, isHQ: false }
  ]);

  const [galleryImages, setGalleryImages] = useState([
    gallery,
    gallery1,
    gallery2,
    gallery3
  ]);

  const handleAddImage = () => {
    const newImageUrl = prompt("Enter image URL:");
    if (newImageUrl) {
      setGalleryImages([...galleryImages, newImageUrl]);
    }
  };

  const handleRemoveImage = (index) => {
    setGalleryImages(galleryImages.filter((_, i) => i !== index));
  };

  const addTechStack = () => {
    const name = prompt("Enter technology name:");
    const initial = prompt("Enter initial(s):");
    const colors = ["bg-orange-500", "bg-blue-500", "bg-green-500", "bg-purple-500", "bg-red-500", "bg-yellow-500"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    if (name && initial) {
      setTechStack([...techStack, { name, initial, color: randomColor }]);
    }
  };

  const removeTechStack = (index) => {
    setTechStack(techStack.filter((_, i) => i !== index));
  };

  const addOffice = () => {
    const country = prompt("Enter country name:");
    const flag = prompt("Enter flag emoji:");
    if (country && flag) {
      setOffices([...offices, { country, flag, isHQ: false }]);
    }
  };

  const removeOffice = (index) => {
    setOffices(offices.filter((_, i) => i !== index));
  };

  return (
    <>
      <div className="min-h-screen flex flex-col lg:flex-row bg-[#fff0e5]">
        {/* Sidebar - Hidden on mobile, visible on desktop */}
        <div className=" lg:block lg:sticky lg:top-0 lg:left-0 lg:h-screen lg:flex-shrink-0">
          <ClientSidbar />
        </div>

        <div className="flex flex-col flex-1 min-w-0">
          {/* Header */}
          <div className="sticky top-0 z-10">
            <ClientHeader />
          </div>

          {/* Main Content */}
          <div className="bg-[#fff0e5] p-2 sm:p-3 md:p-4 lg:p-6 xl:p-8">
            {/* Page Title */}
            <div className="text-orange-400 mb-3 sm:mb-4 md:mb-6 px-1 sm:px-2">
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">Profile</p>
            </div>

            {/* Main Content Card */}
            <div className="max-w-none sm:max-w-6xl md:max-w-7xl xl:max-w-8xl 2xl:max-w-none bg-white rounded-xl sm:rounded-2xl md:rounded-3xl mx-auto overflow-hidden shadow-sm">
              <div className="p-3 sm:p-4 md:p-6 lg:p-8 xl:p-10 2xl:p-12">
                {/* Profile Header Section */}
                <div className="flex flex-col sm:flex-col md:flex-col lg:flex-col xl:flex-row justify-between items-center xl:items-start gap-4 sm:gap-5 md:gap-6 lg:gap-7 xl:gap-8 pb-4 sm:pb-5 md:pb-6 lg:pb-7 xl:pb-8 border-b border-orange-400">
                  {/* Profile Image */}
                  <div className="flex-shrink-0 relative">
                    <img
                      src={profileData.img}
                      alt="Profile"
                      className="w-20 h-20 xs:w-24 xs:h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 xl:w-32 xl:h-32 2xl:w-40 2xl:h-40 object-cover "
                    />
                    <button className="absolute -top-1 -left-1 xs:-top-2 xs:-left-2 sm:top-[-8px] sm:left-[-8px] md:top-[-10px] md:left-[-10px] w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-white border border-orange-400 flex items-center justify-center transition hover:bg-orange-50">
                      <Edit size={10} className="xs:w-3 xs:h-3 sm:w-4 sm:h-4 text-orange-400" />
                    </button>
                  </div>

                  {/* Profile Info */}
                  <div className="flex-1 w-full text-center xl:text-left">
                    {/* Name and Website */}
                    <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between mb-3 sm:mb-4 md:mb-5 lg:mb-6">
                      <div className="mb-2 sm:mb-3 xl:mb-0">
                        <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-3xl 2xl:text-4xl font-medium text-gray-800 break-words">
                          {profileData.name}
                        </h2>
                        <a
                          href={profileData.website}
                          className="text-orange-500 text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-base 2xl:text-lg hover:underline break-all"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {profileData.website}
                        </a>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-col xs:flex-row sm:flex-row gap-2 sm:gap-3 justify-center xl:justify-end">
                        <button className="flex items-center justify-center gap-1 xs:gap-2 text-orange-600 text-xs xs:text-sm sm:text-base font-semibold hover:text-orange-700 transition px-2 xs:px-3 py-1.5 xs:py-2 rounded-lg hover:bg-orange-50">
                          <IoEyeSharp size={14} className="xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-orange-500" />
                          <span className="whitespace-nowrap">Public View</span>
                        </button>
                        <button className="flex items-center justify-center gap-1 xs:gap-2 border border-orange-500 px-2 xs:px-3 py-1.5 xs:py-2 rounded-lg text-orange-600 text-xs xs:text-sm sm:text-base font-semibold hover:bg-orange-50 transition">
                          <Settings size={14} className="xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-orange-500" />
                          <span className="whitespace-nowrap">Profile Settings</span>
                        </button>
                      </div>
                    </div>

                    {/* Company Info Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 w-full">
  {items.map((item, idx) => (
    <div
      key={idx}
      className="flex items-start gap-3"
    >
      <div className="w-10 h-10 rounded-full border border-orange-400 flex items-center justify-center flex-shrink-0">
        {item.icon}
      </div>
      <div className="min-w-0 text-left">
        <div className="text-gray-500 text-sm mb-1">{item.label}</div>
        <div className="font-bold text-gray-900 text-base leading-tight truncate">{item.value}</div>
      </div>
    </div>
  ))}
</div>

                  </div>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10 mt-4 sm:mt-6 md:mt-8 lg:mt-10">
                  {/* Left Column - Main Content */}
                  <div className="xl:col-span-2 space-y-4 sm:space-y-6 md:space-y-8">
                    {/* Company Profile Section */}
                    <div className="pb-4 sm:pb-6">
                      <div className="flex items-center justify-between mb-3 sm:mb-4">
                        <h3 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-2xl 2xl:text-3xl font-normal text-orange-400">Company Profile</h3>
                        <button className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 bg-white border border-orange-400 rounded flex items-center justify-center transition hover:bg-orange-50">
                          <Edit size={12} className="xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-orange-400 cursor-pointer hover:text-orange-600" onClick={() => setIsEditingProfile(!isEditingProfile)} />
                        </button>
                      </div>
                      
                      {isEditingProfile ? (
                        <div className="space-y-3 sm:space-y-4">
                          <textarea
                            value={profileData.description}
                            onChange={(e) => setProfileData({ ...profileData, description: e.target.value })}
                            className="w-full p-2 xs:p-3 border border-gray-300 rounded-lg text-xs xs:text-sm sm:text-base resize-vertical min-h-[100px] xs:min-h-[120px] sm:min-h-[140px]"
                            rows="6"
                          />
                          <div className="flex flex-col xs:flex-row gap-2">
                            <button
                              onClick={() => setIsEditingProfile(false)}
                              className="flex items-center justify-center gap-1 px-3 xs:px-4 py-1.5 xs:py-2 bg-green-100 text-green-600 rounded-md text-xs xs:text-sm hover:bg-green-200 transition"
                            >
                              <Save size={12} className="xs:w-4 xs:h-4" />
                              Save
                            </button>
                            <button
                              onClick={() => setIsEditingProfile(false)}
                              className="flex items-center justify-center gap-1 px-3 xs:px-4 py-1.5 xs:py-2 bg-gray-100 text-gray-600 rounded-md text-xs xs:text-sm hover:bg-gray-200 transition"
                            >
                              <X size={12} className="xs:w-4 xs:h-4" />
                              Cancel
                            </button>
                          </div>
                        </div>
                      ) : (
                        <div className="text-gray-600 text-xs xs:text-sm sm:text-base md:text-lg leading-relaxed">
                          {profileData.description}
                        </div>
                      )}
                    </div>

                    {/* Contact Section */}
                    <div className="pb-4 sm:pb-6">
                      <div className="flex items-center justify-between mb-3 sm:mb-4">
                        <h3 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-2xl 2xl:text-3xl font-medium text-orange-400">Contact</h3>
                        <div className="flex gap-1 xs:gap-2">
                          <button className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 bg-white border border-orange-400 rounded flex items-center justify-center transition hover:bg-orange-50">
                            <Plus size={12} className="xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-orange-400 cursor-pointer hover:text-orange-600" />
                          </button>
                          <button className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 bg-white border border-orange-400 rounded flex items-center justify-center transition hover:bg-orange-50">
                            <Edit size={12} className="xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-orange-400 cursor-pointer hover:text-orange-600" onClick={() => setIsEditingContact(!isEditingContact)} />
                          </button>
                        </div>
                      </div>

                      {isEditingContact ? (
                        <div className="space-y-3 sm:space-y-4">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                            <input
                              type="email"
                              value={contactData.email}
                              onChange={(e) => setContactData({ ...contactData, email: e.target.value })}
                              className="p-2 xs:p-3 border border-gray-300 rounded-lg text-xs xs:text-sm sm:text-base w-full"
                              placeholder="Email"
                            />
                            <input
                              type="text"
                              value={contactData.facebook}
                              onChange={(e) => setContactData({ ...contactData, facebook: e.target.value })}
                              className="p-2 xs:p-3 border border-gray-300 rounded-lg text-xs xs:text-sm sm:text-base w-full"
                              placeholder="Facebook"
                            />
                            <input
                              type="email"
                              value={contactData.info}
                              onChange={(e) => setContactData({ ...contactData, info: e.target.value })}
                              className="p-2 xs:p-3 border border-gray-300 rounded-lg text-xs xs:text-sm sm:text-base w-full"
                              placeholder="LinkedIn"
                            />
                            <input
                              type="url"
                              value={contactData.website}
                              onChange={(e) => setContactData({ ...contactData, website: e.target.value })}
                              className="p-2 xs:p-3 border border-gray-300 rounded-lg text-xs xs:text-sm sm:text-base w-full"
                              placeholder="Website"
                            />
                          </div>
                          <div className="flex flex-col xs:flex-row gap-2">
                            <button
                              onClick={() => setIsEditingContact(false)}
                              className="flex items-center justify-center gap-1 px-3 xs:px-4 py-1.5 xs:py-2 bg-green-100 text-green-600 rounded-md text-xs xs:text-sm hover:bg-green-200 transition"
                            >
                              <Save size={12} className="xs:w-4 xs:h-4" />
                              Save
                            </button>
                            <button
                              onClick={() => setIsEditingContact(false)}
                              className="flex items-center justify-center gap-1 px-3 xs:px-4 py-1.5 xs:py-2 bg-gray-100 text-gray-600 rounded-md text-xs xs:text-sm hover:bg-gray-200 transition"
                            >
                              <X size={12} className="xs:w-4 xs:h-4" />
                              Cancel
                            </button>
                          </div>
                        </div>
                      ) : (
                        <div className="space-y-3 sm:space-y-4">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                            <div className="flex items-center gap-2 p-2 xs:p-3 text-xs xs:text-sm sm:text-base rounded-lg border-2 border-orange-400 min-w-0">
                              <FaTwitter size={14} className="xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-orange-500 flex-shrink-0" />
                              <span className="text-orange-400 font-bold truncate">{contactData.email}</span>
                            </div>
                            <div className="flex items-center gap-2 p-2 xs:p-3 text-xs xs:text-sm sm:text-base rounded-lg border-2 border-orange-400 min-w-0">
                              <FaFacebookF size={14} className="xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-orange-500 flex-shrink-0" />
                              <span className="text-orange-400 font-bold truncate">{contactData.facebook}</span>
                            </div>
                            <div className="flex items-center gap-2 p-2 xs:p-3 text-xs xs:text-sm sm:text-base rounded-lg border-2 border-orange-400 min-w-0">
                              <FaLinkedin size={14} className="xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-orange-500 flex-shrink-0" />
                              <span className="text-orange-400 font-bold truncate">{contactData.info}</span>
                            </div>
                            <div className="flex items-center gap-2 p-2 xs:p-3 text-xs xs:text-sm sm:text-base rounded-lg border-2 border-orange-400 min-w-0">
                              <FaRegEnvelope size={14} className="xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-orange-500 flex-shrink-0" />
                              <span className="text-orange-400 font-bold truncate">{contactData.website}</span>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Gallery Section */}
                    <div>
                      <div className="flex items-center justify-between mb-3 sm:mb-4">
                        <h3 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-2xl 2xl:text-3xl font-medium text-orange-400">Working at Bikwiz</h3>
                        <div className="flex gap-1 xs:gap-2">
                          <button className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 bg-white border border-orange-400 rounded flex items-center justify-center transition hover:bg-orange-50">
                            <Plus size={12} className="xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-orange-400 cursor-pointer hover:text-orange-600" onClick={handleAddImage} />
                          </button>
                          <button className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 bg-white border border-orange-400 rounded flex items-center justify-center transition hover:bg-orange-50">
                            <Edit size={12} className="xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-orange-400 cursor-pointer hover:text-orange-600" />
                          </button>
                        </div>
                      </div>

                      {/* Responsive Gallery Grid */}
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 sm:gap-4">
                        {/* Main large image */}
                        <div className="lg:col-span-2">
                          <div className="relative group">
                            <img
                              src={galleryImages[0]}
                              alt="Gallery 1"
                              className="w-full h-40 xs:h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 2xl:h-96 object-cover rounded-lg"
                            />
                            <button
                              onClick={() => handleRemoveImage(0)}
                              className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 xs:p-2 opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                              <X size={10} className="xs:w-4 xs:h-4" />
                            </button>
                          </div>
                        </div>

                        {/* Small images grid */}
                        <div className="grid grid-cols-3 lg:grid-cols-1 gap-3 sm:gap-4">
                          {galleryImages.slice(1, 4).map((image, index) => (
                            <div key={index} className="relative group">
                              <img
                                src={image}
                                alt={`Gallery ${index + 2}`}
                                className="w-full h-20 xs:h-24 sm:h-32 md:h-40 lg:h-20 xl:h-24 2xl:h-32 object-cover rounded-lg"
                              />
                              <button
                                onClick={() => handleRemoveImage(index + 1)}
                                className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-0.5 xs:p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                              >
                                <X size={8} className="xs:w-3 xs:h-3" />
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column - Sidebar Content */}
                  <div className="space-y-4 sm:space-y-6 md:space-y-8">
                    {/* Tech Stack Section */}
                    <div className="pb-4 sm:pb-6 border-b border-orange-400">
                      <div className="flex items-center justify-between mb-3 sm:mb-4">
                        <h3 className="text-base xs:text-lg sm:text-xl md:text-2xl font-semibold text-gray-800">Tech Stack</h3>
                        <div className="flex gap-1 xs:gap-2">
                          <button className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 bg-white border border-orange-400 rounded flex items-center justify-center transition hover:bg-orange-50">
                            <Plus size={12} className="xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-orange-400 cursor-pointer hover:text-orange-600" onClick={addTechStack} />
                          </button>
                          <button className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 bg-white border border-orange-400 rounded flex items-center justify-center transition hover:bg-orange-50">
                            <Edit size={12} className="xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-orange-400 cursor-pointer hover:text-orange-600" onClick={() => setIsEditingTechStack(!isEditingTechStack)} />
                          </button>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-6 xl:grid-cols-3 2xl:grid-cols-3 gap-3 sm:gap-4 mb-3 sm:mb-4">
                        {techStack.map((tech, index) => (
                          <div key={index} className="text-center relative group">
                            <div className="w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 xl:w-14 xl:h-14 2xl:w-16 2xl:h-16 rounded-lg flex items-center justify-center mx-auto mb-1 xs:mb-2">
                              <img src={tech.img} alt={tech.name} className="w-6 h-6 xs:w-8 xs:h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-10 xl:h-10 2xl:w-12 2xl:h-12 object-contain" />
                            </div>
                            <p className="text-xs xs:text-sm sm:text-base md:text-lg xl:text-sm 2xl:text-base text-gray-600 truncate">{tech.name}</p>
                            {isEditingTechStack && (
                              <button
                                onClick={() => removeTechStack(index)}
                                className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full p-0.5 xs:p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                              >
                                <X size={8} className="xs:w-3 xs:h-3" />
                              </button>
                            )}
                          </div>
                        ))}
                      </div>

                      <button className="text-orange-500 text-xs xs:text-sm sm:text-base md:text-lg xl:text-sm 2xl:text-base font-medium hover:text-orange-600 transition-colors w-full text-left">
                        View tech stack →
                      </button>
                    </div>

                    {/* Office Locations Section */}
                    <div>
                      <div className="flex items-center justify-between mb-3 sm:mb-4">
                        <h3 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-xl 2xl:text-2xl font-medium text-orange-400">Office Locations</h3>
                        <div className="flex gap-1 xs:gap-2">
                          <button className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 bg-white border border-orange-400 rounded flex items-center justify-center transition hover:bg-orange-50">
                            <Plus size={12} className="xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-orange-400 cursor-pointer hover:text-orange-600" onClick={addOffice} />
                          </button>
                          <button className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 bg-white border border-orange-400 rounded flex items-center justify-center transition hover:bg-orange-50">
                            <Edit size={12} className="xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-orange-400 cursor-pointer hover:text-orange-600" onClick={() => setIsEditingOffices(!isEditingOffices)} />
                          </button>
                        </div>
                      </div>

                      <div className="space-y-2 xs:space-y-3 mb-3 sm:mb-4">
                        {offices.map((office, index) => (
                          <div key={index} className="flex items-center gap-2 xs:gap-3 group relative">
                            <img 
                              src={office.img} 
                              alt={office.country}
                              className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full object-cover flex-shrink-0"
                            />
                            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 xs:gap-3 flex-1 min-w-0">
                              <p className="text-xs xs:text-sm sm:text-base md:text-lg xl:text-sm 2xl:text-base font-medium text-gray-800 truncate">{office.country}</p>
                              {office.isHQ && (
                                <span className="text-xs xs:text-sm sm:text-base xl:text-xs 2xl:text-sm font-semibold text-orange-600 bg-orange-50 px-1.5 xs:px-2 py-0.5 xs:py-1 rounded-full whitespace-nowrap self-start sm:self-center">
                                  Head Quarters
                                </span>
                              )}
                            </div>
                            {isEditingOffices && (
                              <button
                                onClick={() => removeOffice(index)}
                                className="bg-red-500 text-white rounded-full p-0.5 xs:p-1 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0"
                              >
                                <X size={8} className="xs:w-3 xs:h-3" />
                              </button>
                            )}
                          </div>
                        ))}
                      </div>

                      <button className="text-orange-500 text-xs xs:text-sm sm:text-base md:text-lg xl:text-sm 2xl:text-base font-medium hover:text-orange-600 transition-colors w-full text-left">
                        View countries →
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
    </>
  );
}

export default CompanyProfile;