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

      <div className="flex  overflow-hidden bg-[#fff0e5]">
        <ClientSidbar />

        <div className="flex flex-col flex-1 h-full overflow-hidden">
          <div className="sticky top-0 z-10">
            <ClientHeader />
          </div>

          <div className="min-h-screen bg-orange-50 p-4 md:p-6 lg:p-8">
            <div className="text-orange-400 mb-4">
              <h1 className="text-3xl font-bold">Profile</h1>
            </div>
            <div className="max-w-6xl mx-auto bg-white rounded-3xl  overflow-hidden">
              {/* Header */}


              <div className="p-8">

                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 pb-6 border-b border-orange-400">
                  {/* Left Section: Profile Image */}
                  <div className="flex-shrink-0 relative">
                    <img
                      src={profileData.img}
                      alt="Profile"
                      className="w-30 h-30 object-cover "
                    />

                    {/* Edit Icon */}
                    <button className="absolute top-[-12px] left-[-10px] w-8 h-8 bg-white   border border-orange-400 flex items-center justify-center transition">
                      <Edit size={16} className="text-orange-400" />
                    </button>
                  </div>

                  {/* Middle Section: Name, Website & Info */}
                  <div className="flex-1 w-full">
                    {/* Name and Website */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                      <div>
                        <h2 className="text-3xl font-medium text-gray-800">{profileData.name}</h2>
                        <a
                          href={profileData.website}
                          className="text-orange-500 text-sm hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {profileData.website}
                        </a>
                      </div>

                      {/* Buttons */}
                      <div className="flex gap-3 mt-3 sm:mt-0 me-5">
                        <button className="flex items-center gap-1 text-orange-600 text-sm font-semibold hover:text-orange-700 transition">
                          <IoEyeSharp size={16} className="text-orange-500" />
                          Public View
                        </button>
                        <button className="flex items-center gap-2 border border-orange-500 px-3 py-1.5 rounded text-orange-600 text-sm font-semibold hover:bg-orange-50 transition">
                          <Settings size={16} className="text-orange-500" />
                          Profile Settings
                        </button>
                      </div>
                    </div>

                    {/* Company Info Row */}
                    <div className="flex flex-wrap gap-10 mt-4">
                      {/* Single Info Block */}
                      {[
                        {
                          icon: <VscFlame size={24} className="text-orange-500" />,
                          label: "Founded",
                          value: profileData.founded,
                        },
                        {
                          icon: <FaUsers size={24} className="text-orange-500" />,
                          label: "Employees",
                          value: profileData.employees,
                        },
                        {
                          icon: <MapPin size={24} className="text-orange-500" />,
                          label: "Location",
                          value: profileData.countries,
                        },
                        {
                          icon: <LiaIndustrySolid size={24} className="text-orange-500" />,
                          label: "Industry",
                          value: profileData.industry,
                        },
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-10 h-10 rounded-full border border-orange-300 flex items-center justify-center">
                            {item.icon}
                          </div>
                          <div>
                            <div className="text-sm text-gray-500">{item.label}</div>
                            <div className="font-semibold text-gray-800">{item.value}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>



                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Left Column */}


                  <div className="lg:col-span-2 space-y-8">
                    {/* Profile Section */}


                    {/* Company Profile */}
                    <div className="pb-6 mt-10">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-2xl font-normal text-orange-400">Company Profile</h3>
                        {/* <Edit
                          size={16}
                          className="text-orange-500 cursor-pointer hover:text-orange-600"
                          onClick={() => setIsEditingProfile(!isEditingProfile)}
                        /> */}
                        <button className=" w-8 h-8 bg-white   border border-orange-400 flex items-center justify-center transition">
                          <Edit size={16} className="text-orange-400 cursor-pointer hover:text-orange-600" onClick={() => setIsEditingProfile(!isEditingProfile)} />
                        </button>
                      </div>
                      {isEditingProfile ? (
                        <div className="space-y-4">
                          <textarea
                            value={profileData.description}
                            onChange={(e) => setProfileData({ ...profileData, description: e.target.value })}
                            className="w-full p-3 border border-gray-300 rounded-lg text-sm"
                            rows="8"
                          />
                          <div className="flex gap-2">
                            <button
                              onClick={() => setIsEditingProfile(false)}
                              className="flex items-center gap-1 px-3 py-1 bg-green-100 text-green-600 rounded-md text-sm hover:bg-green-200"
                            >
                              <Save size={14} />
                              Save
                            </button>
                            <button
                              onClick={() => setIsEditingProfile(false)}
                              className="flex items-center gap-1 px-3 py-1 bg-gray-100 text-gray-600 rounded-md text-sm hover:bg-gray-200"
                            >
                              <X size={14} />
                              Cancel
                            </button>
                          </div>
                        </div>
                      ) : (
                        <div className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">
                          {profileData.description}
                        </div>
                      )}
                    </div>

                    {/* Contact */}
                    <div className="pb-6 ">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-2xl font-medium text-orange-400">Contact</h3>
                        <div className="flex gap-2">
                          <button className=" w-8 h-8 bg-white   border border-orange-400 flex items-center justify-center transition">
                            <Plus size={16} className="text-orange-400 cursor-pointer hover:text-orange-600" />
                          </button>

                          <button className=" w-8 h-8 bg-white   border border-orange-400 flex items-center justify-center transition">
                            <Edit size={16} className="text-orange-400 cursor-pointer hover:text-orange-600" onClick={() => setIsEditingContact(!isEditingContact)} />
                          </button>
                        </div>

                      </div>
                      {isEditingContact ? (
                        <div className="space-y-4">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <input
                              type="email"
                              value={contactData.email}
                              onChange={(e) => setContactData({ ...contactData, email: e.target.value })}
                              className="p-2 border border-gray-300 rounded text-sm"
                              placeholder="Email"
                            />
                            <input
                              type="text"
                              value={contactData.facebook}
                              onChange={(e) => setContactData({ ...contactData, facebook: e.target.value })}
                              className="p-2 border border-gray-300 rounded text-sm"
                              placeholder="Facebook"
                            />
                            <input
                              type="email"
                              value={contactData.info}
                              onChange={(e) => setContactData({ ...contactData, info: e.target.value })}
                              className="p-2 border border-gray-300 rounded text-sm"
                              placeholder="Info Email"
                            />
                            <input
                              type="url"
                              value={contactData.website}
                              onChange={(e) => setContactData({ ...contactData, website: e.target.value })}
                              className="p-2 border border-gray-300 rounded text-sm"
                              placeholder="Website"
                            />
                          </div>
                          <div className="flex gap-2">
                            <button
                              onClick={() => setIsEditingContact(false)}
                              className="flex items-center gap-1 px-3 py-1 bg-green-100 text-green-600 rounded-md text-sm hover:bg-green-200"
                            >
                              <Save size={14} />
                              Save
                            </button>
                            <button
                              onClick={() => setIsEditingContact(false)}
                              className="flex items-center gap-1 px-3 py-1 bg-gray-100 text-gray-600 rounded-md text-sm hover:bg-gray-200"
                            >
                              <X size={14} />
                              Cancel
                            </button>
                          </div>
                        </div>
                      ) : (
                        <>

                          <div className="flex gap-4">
                            <div className="flex items-center gap-2 p-2 text-sm rounded-lg border-2 border-orange-400">
                              <FaTwitter size={18} className="text-orange-500" />
                              <span className="text-orange-400 font-bold">{contactData.email}</span>
                            </div>
                            <div className="flex items-center gap-2 p-2 text-sm rounded-lg border-2 border-orange-400">
                              <FaFacebookF size={18} className="text-orange-500" />
                              <span className="text-orange-400 font-bold">{contactData.facebook}</span>
                            </div>

                          </div>
                          <div className='flex gap-4 mt-3'>
                            <div className="flex items-center gap-2 p-2 text-sm rounded-lg border-2 border-orange-400">
                              <FaLinkedin size={18} className="text-orange-500" />
                              <span className="text-orange-400 font-bold">{contactData.info}</span>
                            </div>
                            <div className="flex items-center gap-2 p-2 text-sm rounded-lg border-2 border-orange-400">
                              <FaRegEnvelope size={18} className="text-orange-500" />
                              <span className="text-orange-400 font-bold">{contactData.website}</span>
                            </div>
                          </div>
                        </>

                      )}
                    </div>

                    {/* Working at Rikwiz - Gallery */}
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-2xl font-medium text-orange-400">Working at Bikwiz</h3>
                        <div className="flex gap-2">
                          <button className=" w-8 h-8 bg-white   border border-orange-400 flex items-center justify-center transition">
                            <Plus size={16} className="text-orange-400 cursor-pointer hover:text-orange-600" onClick={handleAddImage} />
                          </button>

                          <button className=" w-8 h-8 bg-white   border border-orange-400 flex items-center justify-center transition">
                            <Edit size={16} className="text-orange-400 cursor-pointer hover:text-orange-600" onClick={() => setIsEditingTechStack(!isEditingTechStack)} />
                          </button>
                        </div>

                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {/* Left side: large image */}
                        <div className="md:col-span-2">
                          <div className="relative group">
                            <img
                              src={galleryImages[0]}
                              alt="Gallery 1"
                              className="w-full h-128 object-cover rounded-lg"
                            />
                            <button
                              onClick={() => handleRemoveImage(0)}
                              className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                              <X size={14} />
                            </button>
                          </div>
                        </div>

                        {/* Right side: stacked images */}
                        <div className="flex flex-col gap-4">
                          {galleryImages.slice(1).map((image, index) => (
                            <div key={index} className="relative group h-1/2">
                              <img
                                src={image}
                                alt={`Gallery ${index + 2}`}
                                className="w-40 h-40 object-cover rounded-lg"
                              />
                              <button
                                onClick={() => handleRemoveImage(index + 1)}
                                className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                              >
                                <X size={14} />
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>

                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="space-y-8 mt-10">
                    {/* Tech Stack */}
                    <div className="pb-6 border-b border-orange-400">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold text-gray-800">Tech Stack</h3>
                        <div className="flex gap-2">
                          <button className=" w-8 h-8 bg-white   border border-orange-400 flex items-center justify-center transition">
                            <Plus size={16} className="text-orange-400 cursor-pointer hover:text-orange-600" onClick={addTechStack} />
                          </button>

                          <button className=" w-8 h-8 bg-white   border border-orange-400 flex items-center justify-center transition">
                            <Edit size={16} className="text-orange-400 cursor-pointer hover:text-orange-600" onClick={() => setIsEditingTechStack(!isEditingTechStack)} />
                          </button>
                        </div>
                      </div>
                      <div className="grid grid-cols-3  mb-4">
                        {techStack.map((tech, index) => (
                          <div key={index} className="text-center relative group mt-3">
                            <div className={`w-19 h-19  rounded-lg flex items-center justify-center text-white font-bold text-xs mx-auto mb-2`}>
                              {/* {tech.initial} */}
                              <img src={tech.img} alt="" className='' />
                            </div>
                            <p className="text-sm text-gray-600">{tech.name}</p>
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
                      <button className="text-orange-500 text-lg font-medium hover:text-orange-600 transition-colors">
                        View tech stack →
                      </button>
                    </div>

                    {/* Office Locations */}
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-2xl font-medium text-orange-400">Office Locations</h3>
                        <div className="flex gap-2">
                          <button className=" w-8 h-8 bg-white   border border-orange-400 flex items-center justify-center transition">
                            <Plus size={16} className="text-orange-400 cursor-pointer hover:text-orange-600" />
                          </button>

                          <button className=" w-8 h-8 bg-white   border border-orange-400 flex items-center justify-center transition">
                            <Edit size={16} className="text-orange-400 cursor-pointer hover:text-orange-600" onClick={() => setIsEditingContact(!isEditingContact)} />
                          </button>
                        </div>
                      </div>
                      <div className="space-y-3 mb-4">
                        {offices.map((office, index) => (
                          <div key={index} className="flex items-center gap-3 group relative">
                            <img src={office.img} alt="" />
                            <div className="flex items-center gap-3">
                              <p className="text-sm font-medium text-gray-800">{office.country}</p>

                              {office.isHQ && (
                                <span className="text-sm font-semibold text-orange-600 bg-orange-50 px-4 py-1 rounded-full">
                                  Head Quarters
                                </span>
                              )}
                            </div>

                            {isEditingOffices && (
                              <button
                                onClick={() => removeOffice(index)}
                                className="bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                              >
                                <X size={10} />
                              </button>
                            )}
                          </div>
                        ))}
                      </div>
                      <button className="text-orange-500 text-md font-medium hover:text-orange-600 transition-colors">
                        View countries →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  );
}

export default CompanyProfile;