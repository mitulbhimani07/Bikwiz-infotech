import React, { useState } from 'react';
import { Mail, Phone, MapPin, Edit, Plus, X, Save, Globe, Calendar, Users, Briefcase } from 'lucide-react';
import ClientSidbar from '../navbar/ClientSidbar';
import ClientHeader from '../navbar/ClientHeader';

function CompanyProfile() {
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [isEditingContact, setIsEditingContact] = useState(false);
  const [isEditingTechStack, setIsEditingTechStack] = useState(false);
  const [isEditingOffices, setIsEditingOffices] = useState(false);

  const [profileData, setProfileData] = useState({
    name: "Anjali Kumar",
    website: "https://anjalikumar.com",
    founded: "July 31, 2011",
    employees: "40+",
    countries: "20 countries",
    industry: "Social & Non-Profit",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n\nContrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source."
  });

  const [contactData, setContactData] = useState({
    email: "company@email.com",
    facebook: "facebook.com/company",
    info: "info@company.email.com",
    website: "company.com"
  });

  const [techStack, setTechStack] = useState([
    { name: "HTML 5", color: "bg-orange-500", initial: "HTML" },
    { name: "CSS 3", color: "bg-blue-500", initial: "CSS" },
    { name: "JavaScript", color: "bg-yellow-500", initial: "JS" },
    { name: "Ruby", color: "bg-red-500", initial: "Ruby" },
    { name: "Mongodb", color: "bg-purple-500", initial: "Mongo" },
    { name: "Flutter", color: "bg-teal-500", initial: "Flutter" }
  ]);

  const [offices, setOffices] = useState([
    { country: "United States", flag: "🇺🇸", isHQ: true },
    { country: "England", flag: "🇬🇧", isHQ: false },
    { country: "Japan", flag: "🇯🇵", isHQ: false },
    { country: "Australia", flag: "🇦🇺", isHQ: false },
    { country: "China", flag: "🇨🇳", isHQ: false }
  ]);

  const [galleryImages, setGalleryImages] = useState([
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=250&fit=crop",
    "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=400&h=350&fit=crop",
    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=280&fit=crop",
    "https://images.unsplash.com/photo-1515169067868-5387ec356754?w=400&h=320&fit=crop"
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
    <ClientSidbar/>

    <div className="flex flex-col flex-1 h-full overflow-hidden">
        <div className="sticky top-0 z-10">
          <ClientHeader/>
        </div>

        <div className="min-h-screen bg-orange-50 p-4 md:p-6 lg:p-8">
          <div className="text-orange-400 mb-4">
          <h1 className="text-4xl font-bold">Profile</h1>
        </div>
      <div className="max-w-6xl mx-auto bg-white rounded-3xl  overflow-hidden">
        {/* Header */}
        

        <div className="p-6">

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pb-6 border-b border-gray-200">
                <img 
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b77c?w=150&h=150&fit=crop&crop=face" 
                  alt="Profile" 
                  className="w-20 h-20 rounded-lg object-cover"
                />
                <div className="flex-1">
                  <h2 className="text-xl font-semibold text-gray-800 mb-1">{profileData.name}</h2>
                  <p className="text-orange-500 text-sm mb-3">{profileData.website}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} className="text-orange-500" />
                      <span>{profileData.founded}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users size={14} className="text-orange-500" />
                      <span>Employees: {profileData.employees}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Globe size={14} className="text-orange-500" />
                      <span>{profileData.countries}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Briefcase size={14} className="text-orange-500" />
                      <span>{profileData.industry}</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="flex items-center gap-1 px-3 py-1 bg-orange-100 text-orange-600 rounded-md text-sm hover:bg-orange-200 transition-colors">
                    <Globe size={14} />
                    Public View
                  </button>
                  <button className="flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-600 rounded-md text-sm hover:bg-blue-200 transition-colors">
                    Profile Settings
                  </button>
                </div>
              </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column */}

            
            <div className="lg:col-span-2 space-y-8">
              {/* Profile Section */}
              

              {/* Company Profile */}
              <div className="pb-6 border-b border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-800">Company Profile</h3>
                  <Edit 
                    size={16} 
                    className="text-orange-500 cursor-pointer hover:text-orange-600" 
                    onClick={() => setIsEditingProfile(!isEditingProfile)}
                  />
                </div>
                {isEditingProfile ? (
                  <div className="space-y-4">
                    <textarea
                      value={profileData.description}
                      onChange={(e) => setProfileData({...profileData, description: e.target.value})}
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
              <div className="pb-6 border-b border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-800">Contact</h3>
                  <Edit 
                    size={16} 
                    className="text-orange-500 cursor-pointer hover:text-orange-600"
                    onClick={() => setIsEditingContact(!isEditingContact)}
                  />
                </div>
                {isEditingContact ? (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input
                        type="email"
                        value={contactData.email}
                        onChange={(e) => setContactData({...contactData, email: e.target.value})}
                        className="p-2 border border-gray-300 rounded text-sm"
                        placeholder="Email"
                      />
                      <input
                        type="text"
                        value={contactData.facebook}
                        onChange={(e) => setContactData({...contactData, facebook: e.target.value})}
                        className="p-2 border border-gray-300 rounded text-sm"
                        placeholder="Facebook"
                      />
                      <input
                        type="email"
                        value={contactData.info}
                        onChange={(e) => setContactData({...contactData, info: e.target.value})}
                        className="p-2 border border-gray-300 rounded text-sm"
                        placeholder="Info Email"
                      />
                      <input
                        type="url"
                        value={contactData.website}
                        onChange={(e) => setContactData({...contactData, website: e.target.value})}
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
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Mail size={16} className="text-orange-500" />
                      <span className="text-gray-600">{contactData.email}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Phone size={16} className="text-orange-500" />
                      <span className="text-gray-600">{contactData.facebook}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin size={16} className="text-orange-500" />
                      <span className="text-gray-600">{contactData.info}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Globe size={16} className="text-orange-500" />
                      <span className="text-gray-600">{contactData.website}</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Working at Rikwiz - Gallery */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-800">Working at Rikwiz</h3>
                  <button
                    onClick={handleAddImage}
                    className="flex items-center gap-1 px-3 py-1 bg-orange-100 text-orange-600 rounded-md text-sm hover:bg-orange-200"
                  >
                    <Plus size={14} />
                    Add Image
                  </button>
                </div>
                <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
                  {galleryImages.map((image, index) => (
                    <div key={index} className="break-inside-avoid mb-4 relative group">
                      <img 
                        src={image}
                        alt={`Gallery ${index + 1}`}
                        className="w-full rounded-lg object-cover"
                      />
                      <button
                        onClick={() => handleRemoveImage(index)}
                        className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <X size={14} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              {/* Tech Stack */}
              <div className="pb-6 border-b border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-800">Tech Stack</h3>
                  <div className="flex gap-2">
                    <button
                      onClick={addTechStack}
                      className="text-orange-500 hover:text-orange-600"
                    >
                      <Plus size={16} />
                    </button>
                    <Edit 
                      size={16} 
                      className="text-orange-500 cursor-pointer hover:text-orange-600"
                      onClick={() => setIsEditingTechStack(!isEditingTechStack)}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  {techStack.map((tech, index) => (
                    <div key={index} className="text-center relative group">
                      <div className={`w-12 h-12 ${tech.color} rounded-lg flex items-center justify-center text-white font-bold text-xs mx-auto mb-2`}>
                        {tech.initial}
                      </div>
                      <p className="text-xs text-gray-600">{tech.name}</p>
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
                <button className="text-orange-500 text-sm font-medium hover:text-orange-600 transition-colors">
                  View tech stack →
                </button>
              </div>

              {/* Office Locations */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-800">Office Locations</h3>
                  <div className="flex gap-2">
                    <button
                      onClick={addOffice}
                      className="text-orange-500 hover:text-orange-600"
                    >
                      <Plus size={16} />
                    </button>
                    <Edit 
                      size={16} 
                      className="text-orange-500 cursor-pointer hover:text-orange-600"
                      onClick={() => setIsEditingOffices(!isEditingOffices)}
                    />
                  </div>
                </div>
                <div className="space-y-3 mb-4">
                  {offices.map((office, index) => (
                    <div key={index} className="flex items-center gap-3 group relative">
                      <span className="text-lg">{office.flag}</span>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-800">{office.country}</p>
                        {office.isHQ && <p className="text-xs text-orange-500">Head Quarters</p>}
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
                <button className="text-orange-500 text-sm font-medium hover:text-orange-600 transition-colors">
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