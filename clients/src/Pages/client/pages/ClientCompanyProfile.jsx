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
        <div className="hidden lg:block lg:sticky lg:top-0 lg:left-0 lg:h-screen lg:flex-shrink-0">
          <ClientSidbar />
        </div>

        <div className="flex flex-col flex-1 min-w-0">
          {/* Header */}
          <div className="sticky top-0 z-10">
            <ClientHeader />
          </div>

          {/* Main Content */}
          <div className="bg-[#fff0e5] p-2 sm:p-4 md:p-6">
            {/* Page Title */}
            <div className="text-orange-400 mb-4 px-2">
              <p className="text-2xl sm:text-3xl font-bold">Profile</p>
            </div>

            {/* Main Content Card */}
            <div className="max-w-7xl bg-white rounded-2xl sm:rounded-3xl mx-auto overflow-hidden shadow-sm">
              <div className="p-4 sm:p-6 lg:p-8">
                {/* Profile Header Section */}
                <div className="flex flex-col xl:flex-row justify-between items-start gap-4 sm:gap-6 pb-6 border-b border-orange-400">
                  {/* Profile Image */}
                  <div className="flex-shrink-0 relative mx-auto xl:mx-0">
                    <img
                      src={profileData.img}
                      alt="Profile"
                      className="w-24 h-24 sm:w-28 sm:h-28 md:w-30 md:h-30 object-cover "
                    />
                    <button className="absolute -top-2 -left-2 sm:top-[-12px] sm:left-[-10px] w-6 h-6 sm:w-8 sm:h-8 bg-white border border-orange-400  flex items-center justify-center transition hover:bg-orange-50">
                      <Edit size={12} className="sm:size-4 text-orange-400" />
                    </button>
                  </div>

                  {/* Profile Info */}
                  <div className="flex-1 w-full text-center xl:text-left">
                    {/* Name and Website */}
                    <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between mb-4">
                      <div className="mb-3 xl:mb-0">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-800">{profileData.name}</h2>
                        <a
                          href={profileData.website}
                          className="text-orange-500 text-sm hover:underline break-all"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {profileData.website}
                        </a>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center xl:justify-end">
                        <button className="flex items-center justify-center gap-1 text-orange-600 text-sm font-semibold hover:text-orange-700 transition px-3 py-2 rounded-lg hover:bg-orange-50">
                          <IoEyeSharp size={16} className="text-orange-500" />
                          <span className="hidden sm:inline">Public View</span>
                          <span className="sm:hidden">View</span>
                        </button>
                        <button className="flex items-center justify-center gap-2 border border-orange-500 px-3 py-2 rounded-lg text-orange-600 text-sm font-semibold hover:bg-orange-50 transition">
                          <Settings size={16} className="text-orange-500" />
                          <span className="hidden sm:inline">Profile Settings</span>
                          <span className="sm:hidden">Settings</span>
                        </button>
                      </div>
                    </div>

                    {/* Company Info Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6 ">
                      {[
                        {
                          icon: <VscFlame size={20} className="sm:size-6 text-orange-500" />,
                          label: "Founded",
                          value: profileData.founded,
                        },
                        {
                          icon: <FaUsers size={20} className="sm:size-6 text-orange-500" />,
                          label: "Employees",
                          value: profileData.employees,
                        },
                        {
                          icon: <MapPin size={20} className="sm:size-6 text-orange-500" />,
                          label: "Location",
                          value: profileData.countries,
                        },
                        {
                          icon: <LiaIndustrySolid size={20} className="sm:size-6 text-orange-500" />,
                          label: "Industry",
                          value: profileData.industry,
                        },
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-3 justify-center xl:justify-start">
                          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-orange-300 flex items-center justify-center flex-shrink-0">
                            {item.icon}
                          </div>
                          <div className="text-left">
                            <div className="text-xs sm:text-sm text-gray-500">{item.label}</div>
                            <div className="font-semibold text-sm sm:text-base text-gray-800">{item.value}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 lg:gap-8 mt-6 lg:mt-10">
                  {/* Left Column - Main Content */}
                  <div className="xl:col-span-2 space-y-6 lg:space-y-8">
                    {/* Company Profile Section */}
                    <div className="pb-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl sm:text-2xl font-normal text-orange-400">Company Profile</h3>
                        <button className="w-8 h-8 bg-white border border-orange-400 rounded flex items-center justify-center transition hover:bg-orange-50">
                          <Edit size={16} className="text-orange-400 cursor-pointer hover:text-orange-600" onClick={() => setIsEditingProfile(!isEditingProfile)} />
                        </button>
                      </div>
                      
                      {isEditingProfile ? (
                        <div className="space-y-4">
                          <textarea
                            value={profileData.description}
                            onChange={(e) => setProfileData({ ...profileData, description: e.target.value })}
                            className="w-full p-3 border border-gray-300 rounded-lg text-sm resize-vertical min-h-[120px]"
                            rows="6"
                          />
                          <div className="flex flex-col sm:flex-row gap-2">
                            <button
                              onClick={() => setIsEditingProfile(false)}
                              className="flex items-center justify-center gap-1 px-4 py-2 bg-green-100 text-green-600 rounded-md text-sm hover:bg-green-200 transition"
                            >
                              <Save size={14} />
                              Save
                            </button>
                            <button
                              onClick={() => setIsEditingProfile(false)}
                              className="flex items-center justify-center gap-1 px-4 py-2 bg-gray-100 text-gray-600 rounded-md text-sm hover:bg-gray-200 transition"
                            >
                              <X size={14} />
                              Cancel
                            </button>
                          </div>
                        </div>
                      ) : (
                        <div className="text-gray-600 text-sm sm:text-base leading-relaxed">
                          {profileData.description}
                        </div>
                      )}
                    </div>

                    {/* Contact Section */}
                    <div className="pb-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl sm:text-2xl font-medium text-orange-400">Contact</h3>
                        <div className="flex gap-2">
                          <button className="w-8 h-8 bg-white border border-orange-400 rounded flex items-center justify-center transition hover:bg-orange-50">
                            <Plus size={16} className="text-orange-400 cursor-pointer hover:text-orange-600" />
                          </button>
                          <button className="w-8 h-8 bg-white border border-orange-400 rounded flex items-center justify-center transition hover:bg-orange-50">
                            <Edit size={16} className="text-orange-400 cursor-pointer hover:text-orange-600" onClick={() => setIsEditingContact(!isEditingContact)} />
                          </button>
                        </div>
                      </div>

                      {isEditingContact ? (
                        <div className="space-y-4">
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                            <input
                              type="email"
                              value={contactData.email}
                              onChange={(e) => setContactData({ ...contactData, email: e.target.value })}
                              className="p-3 border border-gray-300 rounded-lg text-sm w-full"
                              placeholder="Email"
                            />
                            <input
                              type="text"
                              value={contactData.facebook}
                              onChange={(e) => setContactData({ ...contactData, facebook: e.target.value })}
                              className="p-3 border border-gray-300 rounded-lg text-sm w-full"
                              placeholder="Facebook"
                            />
                            <input
                              type="email"
                              value={contactData.info}
                              onChange={(e) => setContactData({ ...contactData, info: e.target.value })}
                              className="p-3 border border-gray-300 rounded-lg text-sm w-full"
                              placeholder="LinkedIn"
                            />
                            <input
                              type="url"
                              value={contactData.website}
                              onChange={(e) => setContactData({ ...contactData, website: e.target.value })}
                              className="p-3 border border-gray-300 rounded-lg text-sm w-full"
                              placeholder="Website"
                            />
                          </div>
                          <div className="flex flex-col sm:flex-row gap-2">
                            <button
                              onClick={() => setIsEditingContact(false)}
                              className="flex items-center justify-center gap-1 px-4 py-2 bg-green-100 text-green-600 rounded-md text-sm hover:bg-green-200 transition"
                            >
                              <Save size={14} />
                              Save
                            </button>
                            <button
                              onClick={() => setIsEditingContact(false)}
                              className="flex items-center justify-center gap-1 px-4 py-2 bg-gray-100 text-gray-600 rounded-md text-sm hover:bg-gray-200 transition"
                            >
                              <X size={14} />
                              Cancel
                            </button>
                          </div>
                        </div>
                      ) : (
                        <div className="space-y-4">
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                            <div className="flex items-center gap-2 p-3 text-sm rounded-lg border-2 border-orange-400 min-w-0">
                              <FaTwitter size={18} className="text-orange-500 flex-shrink-0" />
                              <span className="text-orange-400 font-bold truncate">{contactData.email}</span>
                            </div>
                            <div className="flex items-center gap-2 p-3 text-sm rounded-lg border-2 border-orange-400 min-w-0">
                              <FaFacebookF size={18} className="text-orange-500 flex-shrink-0" />
                              <span className="text-orange-400 font-bold truncate">{contactData.facebook}</span>
                            </div>
                            <div className="flex items-center gap-2 p-3 text-sm rounded-lg border-2 border-orange-400 min-w-0">
                              <FaLinkedin size={18} className="text-orange-500 flex-shrink-0" />
                              <span className="text-orange-400 font-bold truncate">{contactData.info}</span>
                            </div>
                            <div className="flex items-center gap-2 p-3 text-sm rounded-lg border-2 border-orange-400 min-w-0">
                              <FaRegEnvelope size={18} className="text-orange-500 flex-shrink-0" />
                              <span className="text-orange-400 font-bold truncate">{contactData.website}</span>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Gallery Section */}
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl sm:text-2xl font-medium text-orange-400">Working at Bikwiz</h3>
                        <div className="flex gap-2">
                          <button className="w-8 h-8 bg-white border border-orange-400 rounded flex items-center justify-center transition hover:bg-orange-50">
                            <Plus size={16} className="text-orange-400 cursor-pointer hover:text-orange-600" onClick={handleAddImage} />
                          </button>
                          <button className="w-8 h-8 bg-white border border-orange-400 rounded flex items-center justify-center transition hover:bg-orange-50">
                            <Edit size={16} className="text-orange-400 cursor-pointer hover:text-orange-600" />
                          </button>
                        </div>
                      </div>

                      {/* Responsive Gallery Grid */}
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                        {/* Main large image */}
                        <div className="lg:col-span-2">
                          <div className="relative group">
                            <img
                              src={galleryImages[0]}
                              alt="Gallery 1"
                              className="w-full h-48 sm:h-64 lg:h-80 xl:h-96 object-cover rounded-lg"
                            />
                            <button
                              onClick={() => handleRemoveImage(0)}
                              className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                              <X size={14} />
                            </button>
                          </div>
                        </div>

                        {/* Small images grid */}
                        <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
                          {galleryImages.slice(1, 4).map((image, index) => (
                            <div key={index} className="relative group">
                              <img
                                src={image}
                                alt={`Gallery ${index + 2}`}
                                className="w-full h-32 sm:h-40 lg:h-24 xl:h-32 object-cover rounded-lg"
                              />
                              <button
                                onClick={() => handleRemoveImage(index + 1)}
                                className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                              >
                                <X size={12} />
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column - Sidebar Content */}
                  <div className="space-y-6 lg:space-y-8">
                    {/* Tech Stack Section */}
                    <div className="pb-6 border-b border-orange-400">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold text-gray-800">Tech Stack</h3>
                        <div className="flex gap-2">
                          <button className="w-8 h-8 bg-white border border-orange-400 rounded flex items-center justify-center transition hover:bg-orange-50">
                            <Plus size={16} className="text-orange-400 cursor-pointer hover:text-orange-600" onClick={addTechStack} />
                          </button>
                          <button className="w-8 h-8 bg-white border border-orange-400 rounded flex items-center justify-center transition hover:bg-orange-50">
                            <Edit size={16} className="text-orange-400 cursor-pointer hover:text-orange-600" onClick={() => setIsEditingTechStack(!isEditingTechStack)} />
                          </button>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-4 mb-4">
                        {techStack.map((tech, index) => (
                          <div key={index} className="text-center relative group">
                            <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-lg flex items-center justify-center mx-auto mb-2">
                              <img src={tech.img} alt={tech.name} className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 object-contain" />
                            </div>
                            <p className="text-xs sm:text-sm text-gray-600 truncate">{tech.name}</p>
                            {isEditingTechStack && (
                              <button
                                onClick={() => removeTechStack(index)}
                                className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                              >
                                <X size={10} />
                              </button>
                            )}
                          </div>
                        ))}
                      </div>

                      <button className="text-orange-500 text-sm sm:text-base font-medium hover:text-orange-600 transition-colors w-full text-left">
                        View tech stack →
                      </button>
                    </div>

                    {/* Office Locations Section */}
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl sm:text-2xl font-medium text-orange-400">Office Locations</h3>
                        <div className="flex gap-2">
                          <button className="w-8 h-8 bg-white border border-orange-400 rounded flex items-center justify-center transition hover:bg-orange-50">
                            <Plus size={16} className="text-orange-400 cursor-pointer hover:text-orange-600" onClick={addOffice} />
                          </button>
                          <button className="w-8 h-8 bg-white border border-orange-400 rounded flex items-center justify-center transition hover:bg-orange-50">
                            <Edit size={16} className="text-orange-400 cursor-pointer hover:text-orange-600" onClick={() => setIsEditingOffices(!isEditingOffices)} />
                          </button>
                        </div>
                      </div>

                      <div className="space-y-3 mb-4">
                        {offices.map((office, index) => (
                          <div key={index} className="flex items-center gap-3 group relative">
                            <img 
                              src={office.img} 
                              alt={office.country}
                              className="w-6 h-6 sm:w-8 sm:h-8 rounded-full object-cover flex-shrink-0"
                            />
                            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 flex-1 min-w-0">
                              <p className="text-sm sm:text-base font-medium text-gray-800 truncate">{office.country}</p>
                              {office.isHQ && (
                                <span className="text-xs sm:text-sm font-semibold text-orange-600 bg-orange-50 px-2 py-1 rounded-full whitespace-nowrap">
                                  HQ
                                </span>
                              )}
                            </div>
                            {isEditingOffices && (
                              <button
                                onClick={() => removeOffice(index)}
                                className="bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0"
                              >
                                <X size={10} />
                              </button>
                            )}
                          </div>
                        ))}
                      </div>

                      <button className="text-orange-500 text-sm sm:text-base font-medium hover:text-orange-600 transition-colors w-full text-left">
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