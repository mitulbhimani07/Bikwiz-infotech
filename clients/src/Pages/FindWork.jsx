import React, { useEffect, useRef, useState } from 'react';
import work from '../assets/images/work.svg'
import Header from '../header-footer/Header';
import Footer from '../header-footer/Footer';
import { ChevronLeft, ChevronRight, Star, Search, MapPin, Briefcase, DollarSign, Filter, X } from 'lucide-react';
import job1 from '../assets/images/FindWork/work1.png';
import job2 from '../assets/images/FindWork/work2.png';
import job3 from '../assets/images/FindWork/work3.png';
import job4 from '../assets/images/FindWork/work4.png';
import job5 from '../assets/images/FindWork/work5.png';
import job6 from '../assets/images/FindWork/work6.png';
import job7 from '../assets/images/FindWork/work7.png';
import job8 from '../assets/images/FindWork/work8.png';
import job9 from '../assets/images/FindWork/work9.png';
import job10 from '../assets/images/FindWork/work10.png';
import job11 from '../assets/images/FindWork/work11.png';
import job12 from '../assets/images/FindWork/work12.png';
import { FaList } from 'react-icons/fa';
import { IoGrid } from 'react-icons/io5';
import { Link } from 'react-router-dom';
// import job1 from '../assets/images/FindWork/work1.png';

function FindWork() {

 const allJobs = [
    {
      id: 1,
      company: "Spotify",
      logo: job1,
      title: "Product Manager",
      location: "Remote - USA",
      type: "Full Time",
      salary: "$120k - $150k/year",
      rating: 4.5,
      postedTime: "2 days ago",
      experience: "3-5 years"
    },
    {
      id: 2,
      company: "Dribbble",
      logo: job2,
      title: "Software Engineer",
      location: "San Francisco, CA",
      type: "Full Time", 
      salary: "$90k - $130k/year",
      rating: 4.8,
      postedTime: "1 day ago",
      experience: "2-4 years"
    },
    {
      id: 3,
      company: "Volkswagen",
      logo: job3,
      title: "Product Manager",
      location: "Berlin, Germany",
      type: "Full Time",
      salary: "€70k - €90k/year",
      rating: 4.2,
      postedTime: "3 days ago",
      experience: "5+ years"
    },
    {
      id: 4,
      company: "Starbucks",
      logo: job4,
      title: "Software Engineer",
      location: "Seattle, WA",
      type: "Part Time",
      salary: "$80k - $110k/year",
      rating: 4.6,
      postedTime: "1 week ago",
      experience: "1-3 years"
    },
    {
      id: 5,
      company: "RealNetworks",
      logo: job5,
      title: "Product Manager",
      location: "New York, NY",
      type: "Contract",
      salary: "$100k - $140k/year",
      rating: 4.4,
      postedTime: "2 weeks ago",
      experience: "3-5 years"
    },
    {
      id: 6,
      company: "GitHub",
      logo: job6,
      title: "Software Engineer",
      location: "Remote",
      type: "Full Time",
      salary: "$110k - $160k/year",
      rating: 4.9,
      postedTime: "3 days ago",
      experience: "2-5 years"
    },
    {
      id: 7,
      company: "Ford",
      logo: job7,
      title: "Product Manager",
      location: "Detroit, MI",
      type: "Full Time",
      salary: "$95k - $125k/year",
      rating: 4.3,
      postedTime: "5 days ago",
      experience: "4-6 years"
    },
    {
      id: 8,
      company: "TechCorp",
      logo: job8,
      title: "Software Engineer",
      location: "Austin, TX",
      type: "Full Time",
      salary: "$85k - $115k/year",
      rating: 4.7,
      postedTime: "1 week ago",
      experience: "1-4 years"
    },
    {
      id: 9,
      company: "TechCorp",
      logo: job9,
      title: "Software Engineer",
      location: "Austin, TX",
      type: "Full Time",
      salary: "$85k - $115k/year",
      rating: 4.7,
      postedTime: "1 week ago",
      experience: "1-4 years"
    },
    {
      id: 10,
      company: "TechCorp",
      logo:job10,
      title: "Software Engineer",
      location: "Austin, TX",
      type: "Full Time",
      salary: "$85k - $115k/year",
      rating: 4.7,
      postedTime: "1 week ago",
      experience: "1-4 years"
    },
    {
      id: 11,
      company: "TechCorp",
      logo: job11,
      title: "Software Engineer",
      location: "Austin, TX",
      type: "Full Time",
      salary: "$85k - $115k/year",
      rating: 4.7,
      postedTime: "1 week ago",
      experience: "1-4 years"
    },
    {
      id: 12,
      company: "TechCorp",
      logo: job12,
      title: "Software Engineer",
      location: "Austin, TX",
      type: "Full Time",
      salary: "$85k - $115k/year",
      rating: 4.7,
      postedTime: "1 week ago",
      experience: "1-4 years"
    },
    {
      id: 13,
      company: "TechCorp",
      logo: job1,
      title: "Software Engineer",
      location: "Austin, TX",
      type: "Full Time",
      salary: "$85k - $115k/year",
      rating: 4.7,
      postedTime: "1 week ago",
      experience: "1-4 years"
    },
    {
      id: 14,
      company: "TechCorp",
      logo: job2,
      title: "Software Engineer",
      location: "Austin, TX",
      type: "Full Time",
      salary: "$85k - $115k/year",
      rating: 4.7,
      postedTime: "1 week ago",
      experience: "1-4 years"
    },
    {
      id: 15,
      company: "TechCorp",
      logo: job3,
      title: "Software Engineer",
      location: "Austin, TX",
      type: "Full Time",
      salary: "$85k - $115k/year",
      rating: 4.7,
      postedTime: "1 week ago",
      experience: "1-4 years"
    },
    {
      id: 16,
      company: "TechCorp",
      logo:job4,
      title: "Software Engineer",
      location: "Austin, TX",
      type: "Full Time",
      salary: "$85k - $115k/year",
      rating: 4.7,
      postedTime: "1 week ago",
      experience: "1-4 years"
    },
    {
      id: 17,
      company: "TechCorp",
      logo: job5,
      title: "Software Engineer",
      location: "Austin, TX",
      type: "Full Time",
      salary: "$85k - $115k/year",
      rating: 4.7,
      postedTime: "1 week ago",
      experience: "1-4 years"
    },
    {
      id: 18,
      company: "TechCorp",
      logo: job6,
      title: "Software Engineer",
      location: "Austin, TX",
      type: "Full Time",
      salary: "$85k - $115k/year",
      rating: 4.7,
      postedTime: "1 week ago",
      experience: "1-4 years"
    },
    {
      id: 19,
      company: "TechCorp",
      logo: job7,
      title: "Software Engineer",
      location: "Austin, TX",
      type: "Full Time",
      salary: "$85k - $115k/year",
      rating: 4.7,
      postedTime: "1 week ago",
      experience: "1-4 years"
    },
    {
      id: 20,
      company: "TechCorp",
      logo: job8,
      title: "Software Engineer",
      location: "Austin, TX",
      type: "Full Time",
      salary: "$85k - $115k/year",
      rating: 4.7,
      postedTime: "1 week ago",
      experience: "1-4 years"
    },
    {
      id: 21,
      company: "TechCorp",
      logo: job9,
      title: "Software Engineer",
      location: "Austin, TX",
      type: "Full Time",
      salary: "$85k - $115k/year",
      rating: 4.7,
      postedTime: "1 week ago",
      experience: "1-4 years"
    },
    {
      id: 22,
      company: "TechCorp",
      logo:job10,
      title: "Software Engineer",
      location: "Austin, TX",
      type: "Full Time",
      salary: "$85k - $115k/year",
      rating: 4.7,
      postedTime: "1 week ago",
      experience: "1-4 years"
    },
    {
      id: 23,
      company: "TechCorp",
      logo: job11,
      title: "Software Engineer",
      location: "Austin, TX",
      type: "Full Time",
      salary: "$85k - $115k/year",
      rating: 4.7,
      postedTime: "1 week ago",
      experience: "1-4 years"
    },
    {
      id: 24,
      company: "TechCorp",
      logo: job12,
      title: "Software Engineer",
      location: "Austin, TX",
      type: "Full Time",
      salary: "$85k - $115k/year",
      rating: 4.7,
      postedTime: "1 week ago",
      experience: "1-4 years"
    },
    {
      id: 25,
      company: "TechCorp",
      logo: job1,
      title: "Software Engineer",
      location: "Austin, TX",
      type: "Full Time",
      salary: "$85k - $115k/year",
      rating: 4.7,
      postedTime: "1 week ago",
      experience: "1-4 years"
    },
    {
      id: 26 ,
      company: "TechCorp",
      logo: job2,
      title: "Software Engineer",
      location: "Austin, TX",
      type: "Full Time",
      salary: "$85k - $115k/year",
      rating: 4.7,
      postedTime: "1 week ago",
      experience: "1-4 years"
    },
    {
      id: 27,
      company: "TechCorp",
      logo:job3,
      title: "Software Engineer",
      location: "Austin, TX",
      type: "Full Time",
      salary: "$85k - $115k/year",
      rating: 4.7,
      postedTime: "1 week ago",
      experience: "1-4 years"
    },
    {
      id: 28,
      company: "TechCorp",
      logo: job4,
      title: "Software Engineer",
      location: "Austin, TX",
      type: "Full Time",
      salary: "$85k - $115k/year",
      rating: 4.7,
      postedTime: "1 week ago",
      experience: "1-4 years"
    }
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedJobType, setSelectedJobType] = useState('');
  const [viewMode, setViewMode] = useState('list');
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [selectedGender, setSelectedGender] = useState([]);
  const [selectedQualification, setSelectedQualification] = useState([]);
  const [showFilters, setShowFilters] = useState(false);
  
  const jobsPerPage = 13;

  // Filter jobs based on search and filters
  const filteredJobs = allJobs.filter(job => {
    return (
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase())
    ) &&
    (selectedCategory === '' || job.title.includes(selectedCategory)) &&
    (selectedLocation === '' || job.location.includes(selectedLocation)) &&
    (selectedJobType === '' || job.type === selectedJobType)
    // (selectedExperience === '' || job.experience.includes(selectedExperience));
  });

  // Calculate pagination
  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);
  const startIndex = (currentPage - 1) * jobsPerPage;
  const endIndex = startIndex + jobsPerPage;
  const currentJobs = filteredJobs.slice(startIndex, endIndex);


  const [minPrice, setMinPrice] = useState(50);
  const [maxPrice, setMaxPrice] = useState(290);
  const [isDragging, setIsDragging] = useState(null);
  
  const sliderRef = useRef(null);
  const minValue = 0;
  const maxValue = 500;

  const handleMouseDown = (type) => {
    setIsDragging(type);
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !sliderRef.current) return;

    const rect = sliderRef.current.getBoundingClientRect();
    const percentage = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    const value = Math.round(minValue + percentage * (maxValue - minValue));

    if (isDragging === 'min') {
      setMinPrice(Math.min(value, maxPrice - 10));
    } else if (isDragging === 'max') {
      setMaxPrice(Math.max(value, minPrice + 10));
    }
  };

  const handleMouseUp = () => {
    setIsDragging(null);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, minPrice, maxPrice]);

  const minPercentage = ((minPrice - minValue) / (maxValue - minValue)) * 100;
  const maxPercentage = ((maxPrice - minValue) / (maxValue - minValue)) * 100;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-3 h-3 ${
          i < Math.floor(rating) 
            ? 'fill-orange-400 text-orange-400' 
            : 'fill-gray-200 text-gray-200'
        }`}
      />
    ));
  };

  const renderPaginationNumbers = () => {
    const pages = [];
    const maxVisiblePages = window.innerWidth < 640 ? 3 : 5;
    
    for (let i = 1; i <= Math.min(totalPages, maxVisiblePages); i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`w-8 h-8 rounded-full text-sm font-medium transition-colors ${
            currentPage === i
              ? 'bg-orange-500 text-white'
              : 'text-gray-500 hover:text-orange-500'
          }`}
        >
          {i}
        </button>
      );
    }
    return pages;
  };

  // Filter sidebar component
  const FilterSidebar = ({ isMobile = false }) => (
    <div className={`${isMobile ? 'w-full' : 'w-80'}  p-4 sm:p-6 ${isMobile ? 'border-t border-gray-200' : ''}`}>
      {isMobile && (
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-semibold text-gray-900">Filters</h2>
          <button 
            onClick={() => setShowFilters(false)}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      )}
      
      {!isMobile && <h2 className="font-semibold text-gray-900 mb-4">Filters</h2>}

      {/* Keywords */}
      <div className="mb-6">
        <h3 className="font-medium text-gray-900 mb-3">Keywords</h3>
        <input
          type="text"
          placeholder="Search keywords..."
          className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
      </div>

      {/* Category */}
      <div className="mb-6">
        <h3 className="font-medium text-gray-900 mb-3">Category</h3>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
        >
          <option value="">Select Category</option>
          <option value="Product Manager">Product Manager</option>
          <option value="Software Engineer">Software Engineer</option>
        </select>
      </div>

      {/* Location */}
      <div className="mb-6">
        <h3 className="font-medium text-gray-900 mb-3">Location</h3>
        <select
          value={selectedLocation}
          onChange={(e) => setSelectedLocation(e.target.value)}
          className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
        >
          <option value="">Select Location</option>
          <option value="Remote">Remote</option>
          <option value="San Francisco">San Francisco</option>
          <option value="New York">New York</option>
          <option value="Seattle">Seattle</option>
        </select>
      </div>

      {/* Job Type */}
     <div className="mb-6 shadow-sm rounded-lg p-4 bg-white">
  <div className="mb-3">
    <h3 className="font-semibold text-gray-900 text-base mb-4">Job Type</h3>
    {/* Orange accent line */}
      <div className="flex items-center gap-2 mb-8">
        <div className="w-8 h-1 bg-orange-500 rounded"></div>
        <div className="w-6 h-1 bg-orange-500 rounded"></div>
      </div>
  </div>
  <div className="space-y-3">
    {['Full Time', 'Part Time', 'Freelance', 'Temporary'].map((type) => (
      <label key={type} className="flex items-center space-x-3 cursor-pointer">
        <input
          type="checkbox"
          value={type}
          checked={selectedJobType === type}
          onChange={(e) => setSelectedJobType(e.target.checked ? e.target.value : '')}
          className="w-4 h-4 text-orange-500 focus:ring-orange-500 border-gray-300 rounded"
        />
        <span className="text-sm text-gray-600">{type}</span>
      </label>
    ))}
  </div>
</div>


      {/* Filter by Experience */}
      <div className="mb-6 shadow-sm rounded-lg p-4 bg-white">
        <div className="mb-3">
          <h3 className="font-semibold text-gray-900 text-base mb-4">Filter by Experience</h3>
         {/* Orange accent line */}
      <div className="flex items-center gap-2 mb-8">
        <div className="w-8 h-1 bg-orange-500 rounded"></div>
        <div className="w-6 h-1 bg-orange-500 rounded"></div>
      </div>
        </div>
        <div className="space-y-3">
          {['1-2 years', '2-4 years', '3-5 years', '5+ years'].map((exp) => (
            <label key={exp} className="flex items-center space-x-3 cursor-pointer">
              <input
                type="checkbox"
                className="w-4 h-4 text-orange-500 focus:ring-orange-500 border-gray-300 rounded"
              />
              <span className="text-sm text-gray-600">{exp}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Filter by Skills */}
      <div className="mb-6 shadow-sm rounded-lg p-4 bg-white">
        <div className="mb-3">
          <h3 className="font-semibold text-gray-900 text-base mb-4">Filter by Skills</h3>
          {/* Orange accent line */}
      <div className="flex items-center gap-2 mb-8">
        <div className="w-8 h-1 bg-orange-500 rounded"></div>
        <div className="w-6 h-1 bg-orange-500 rounded"></div>
      </div>
        </div>
        <div className="space-y-3">
          {['JavaScript', 'React', 'Node.js', 'Python', 'UI/UX Design', 'Project Management'].map((skill) => (
            <label key={skill} className="flex items-center space-x-3 cursor-pointer">
              <input
                type="checkbox"
                className="w-4 h-4 text-orange-500 focus:ring-orange-500 border-gray-300 rounded"
              />
              <span className="text-sm text-gray-600">{skill}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Filter by Gender */}
      <div className="mb-6 shadow-sm rounded-lg p-4 bg-white">
        <div className="mb-3">
          <h3 className="font-semibold text-gray-900 text-base mb-4">Filter by Gender</h3>
          {/* Orange accent line */}
      <div className="flex items-center gap-2 mb-8">
        <div className="w-8 h-1 bg-orange-500 rounded"></div>
        <div className="w-6 h-1 bg-orange-500 rounded"></div>
      </div>
        </div>
        <div className="space-y-3">
          {['Male', 'Female', 'Other', 'Not Specified'].map((gender) => (
            <label key={gender} className="flex items-center space-x-3 cursor-pointer">
              <input
                type="checkbox"
                className="w-4 h-4 text-orange-500 focus:ring-orange-500 border-gray-300 rounded"
              />
              <span className="text-sm text-gray-600">{gender}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Filter by Qualification */}
      <div className="mb-6 shadow-sm rounded-lg p-4 bg-white">
        <div className="mb-3">
          <h3 className="font-semibold text-gray-900 text-base mb-4">Filter by Qualification</h3>
          {/* Orange accent line */}
      <div className="flex items-center gap-2 mb-8">
        <div className="w-8 h-1 bg-orange-500 rounded"></div>
        <div className="w-6 h-1 bg-orange-500 rounded"></div>
      </div>
        </div>
        <div className="space-y-3">
          {['High School', 'Bachelor\'s Degree', 'Master\'s Degree', 'PhD', 'Professional Certificate'].map((qual) => (
            <label key={qual} className="flex items-center space-x-3 cursor-pointer">
              <input
                type="checkbox"
                className="w-4 h-4 text-orange-500 focus:ring-orange-500 border-gray-300 rounded"
              />
              <span className="text-sm text-gray-600">{qual}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Filter by Rate */}
  <div className="mb-5 bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Filter by Rate</h3>
      
      {/* Orange accent line */}
      <div className="flex items-center gap-2 mb-8">
        <div className="w-8 h-1 bg-orange-500 rounded"></div>
        <div className="w-6 h-1 bg-orange-500 rounded"></div>
      </div>
      
      {/* Range Slider */}
      <div className="mb-6">
        <div
          ref={sliderRef}
          className="relative h-2 bg-gray-200 rounded-full"
        >
          {/* Active range background */}
          <div
            className="absolute h-2 bg-orange-500 rounded-full"
            style={{
              left: `${minPercentage}%`,
              width: `${maxPercentage - minPercentage}%`
            }}
          />
          
          {/* Min handle */}
          <div
            className="absolute w-5 h-5 bg-orange-500 rounded-full cursor-grab active:cursor-grabbing transform -translate-x-1/2 -translate-y-1/2 top-1/2 shadow-md border-2 border-white"
            style={{ left: `${minPercentage}%` }}
            onMouseDown={() => handleMouseDown('min')}
          />
          
          {/* Max handle */}
          <div
            className="absolute w-5 h-5 bg-orange-500 rounded-full cursor-grab active:cursor-grabbing transform -translate-x-1/2 -translate-y-1/2 top-1/2 shadow-md border-2 border-white"
            style={{ left: `${maxPercentage}%` }}
            onMouseDown={() => handleMouseDown('max')}
          />
        </div>
      </div>
      
      {/* Price Display */}
      <div className="flex items-center gap-2">
        <span className="text-base font-medium text-gray-700">Price:</span>
        <span className="text-base text-gray-600">
          ${minPrice} - ${maxPrice}
        </span>
      </div>
    </div>

      {/* Apply Filter Button */}
      <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg font-medium transition-colors">
        Apply Filter
      </button>
    </div>
  );

  return (
    <>
      <Header/>
      
      {/* Banner section */}
      <div className="min-h-screen flex items-center justify-center p-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-6 text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                We have <span className="text-orange-500">45,378</span> job offers for you!
              </h1>
              
              <p className="text-gray-700 text-base sm:text-lg lg:text-xl max-w-md mx-auto lg:mx-0 leading-relaxed">
                Bikwiz Infotech is a freelance platform connecting skilled professionals across India 
                with businesses for flexible, dignified, and future-ready work.
              </p>
              
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all">
                Get Started
              </button>
            </div>

            {/* Right Illustration */}
            <div className="relative mt-8 lg:mt-0">
              <div className="relative h-64 sm:h-80 lg:h-96">
                <img src={work} alt="Work illustration" className="w-full h-full object-contain" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Job listing section */}
      <div className="min-h-screen">
        <div className="max-w-7xl mx-auto">
          {/* Mobile Filter Toggle */}
          <div className="lg:hidden bg-white border-b border-gray-200 p-4">
            <button 
              onClick={() => setShowFilters(true)}
              className="flex items-center space-x-2 text-gray-700 font-medium"
            >
              <Filter className="w-4 h-4" />
              <span>Filters</span>
            </button>
          </div>

          <div className="lg:flex">
            {/* Main Content */}
            <div className="flex-1 p-4 sm:p-6">
              {/* Header */}
             <div className="mb-8">
  {/* Section Title */}
  <h1 className="text-3xl font-bold text-gray-900 mb-4">Job Listing</h1>

  {/* Subheader Bar */}
  <div className="bg-white p-4 rounded-lg shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
    {/* Result Count */}
    <p className="text-sm text-gray-600">
      Showing {startIndex + 1}-{Math.min(endIndex, filteredJobs.length)} of {filteredJobs.length} results
    </p>

    {/* Sort + View Options */}
    <div className="flex items-center gap-4">
    {/* Sort Dropdown */}
    <select
        className="border border-gray-300 text-sm text-gray-700 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
    >
        <option>Short by</option>
        <option>Rating</option>
        <option>Newest</option>
        <option>Experience</option>
    </select>

    {/* View Toggle Buttons */}
    <button 
        onClick={() => setViewMode('list')}
        className={`p-2 rounded-md transition ${
            viewMode === 'list' 
                ? 'bg-orange-500 hover:bg-orange-600 text-white' 
                : 'bg-orange-100 hover:bg-orange-200 text-orange-600'
        }`}
    >
        <FaList />
    </button>
    <button 
        onClick={() => setViewMode('grid')}
        className={`p-2 rounded-md transition ${
            viewMode === 'grid' 
                ? 'bg-orange-500 hover:bg-orange-600 text-white' 
                : 'bg-orange-100 hover:bg-orange-200 text-orange-600'
        }`}
    >
        <IoGrid />
    </button>
</div>
  </div>
</div>

        <div className='mb-8'>
          {viewMode==='list'?(
               <div className="space-y-4">
  {currentJobs.map((job) => (
    <div
      key={job.id}
      className="bg-white rounded-lg border border-gray-200 px-6 py-4 hover:shadow-md transition-shadow"
    >
      <div className="flex items-center justify-between flex-col sm:flex-row gap-4 sm:gap-0">
        {/* Left Section: Logo + Info */}
        <div className="flex items-start sm:items-center gap-4">
          {/* Logo */}
          <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
            <img src={job.logo} alt={job.company} className="w-full h-full object-cover" />
          </div>

          {/* Details */}
          <div>
            <h3 className="text-[#1e1d4e] font-semibold text-base">{job.title}</h3>
            <p className="text-gray-500 text-sm">{job.company}</p>

            <div className="flex flex-wrap items-center gap-4 mt-1 text-xs text-gray-500">
              <div className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" />
                <span>{job.location}</span>
              </div>
              <div className="flex items-center gap-1">
                <Briefcase className="w-3.5 h-3.5" />
                <span>{job.type}</span>
              </div>
              <div className="flex items-center gap-1">
                <DollarSign className="w-3.5 h-3.5" />
                <span>{job.salary}</span>
              </div>
            </div>

            <div className="flex items-center gap-2 mt-2">
              <span className="bg-orange-500 text-white text-xs font-semibold px-2 py-0.5 rounded">
                {job.rating}
              </span>
              <div className="flex">{renderStars(job.rating)}</div>
            </div>
          </div>
        </div>

        {/* Right Section: Apply Button */}
        <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-5 py-2 rounded-lg font-semibold text-sm w-full sm:w-auto">
         <Link to='/companydetails/:id'> Apply Now </Link>
        </button>
      </div>
    </div>
  ))}
</div>
          ):(
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                          {currentJobs.map((job) => (
                              <div
                                  key={job.id}
                                  className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 text-center"
                              >
                                  {/* Profile Image */}
                                  <div className="w-20 h-20 mx-auto mb-4 rounded-xl overflow-hidden">
                                      <img 
                                          src={job.logo} 
                                          alt={job.company} 
                                          className="w-full h-full object-cover" 
                                      />
                                  </div>
              
                                  {/* Name and Title */}
                                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{job.title}</h3>
                                  <p className="text-gray-600 text-sm mb-4">{job.company}</p>
              
                                  {/* Rating */}
                                  <div className="flex items-center justify-center gap-2 mb-3">
                                      <span className="bg-orange-500 text-white text-sm font-semibold px-2.5 py-1 rounded">
                                          {job.rating}
                                      </span>
                                      <div className="flex text-orange-400">
                                          {renderStars(job.rating)}
                                      </div>
                                  </div>
              
                                  {/* Location and Salary */}
                                  <div className="space-y-2 mb-6 text-sm text-gray-600">
                                      <div className="flex items-center justify-center gap-1">
                                          <MapPin className="w-4 h-4" />
                                          <span>{job.location}</span>
                                      </div>
                                      <div className="flex items-center justify-center gap-1">
                                          <DollarSign className="w-4 h-4" />
                                          <span>{job.salary}</span>
                                      </div>
                                  </div>
              
                                  {/* View Profile Button */}
                                  <button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-2.5 px-4 rounded-lg font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2">
                                      <span> <Link to='/companydetails/:id'>View Profile</Link></span>
                                  </button>
                              </div>
                          ))}
                      </div>
          )}
        </div>



              {/* Pagination */}
              <div className="flex items-center justify-center space-x-1 sm:space-x-2 mb-4">
                <button
                  onClick={handlePrevious}
                  disabled={currentPage === 1}
                  className={`p-2 rounded-full ${
                    currentPage === 1 ? 'text-gray-300' : 'text-gray-500 hover:text-orange-500'
                  }`}
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                {renderPaginationNumbers()}

                <button
                  onClick={handleNext}
                  disabled={currentPage === totalPages}
                  className={`p-2 rounded-full ${
                    currentPage === totalPages ? 'text-gray-300' : 'text-gray-500 hover:text-orange-500'
                  }`}
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Desktop Sidebar Filters */}
            <div className="hidden lg:block">
              <FilterSidebar />
            </div>
          </div>
        </div>

        {/* Mobile Filter Overlay */}
        {showFilters && (
          <div className="lg:hidden fixed inset-0 z-50 bg-black bg-opacity-50">
            <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-lg max-h-[80vh] overflow-y-auto">
              <FilterSidebar isMobile={true} />
            </div>
          </div>
        )}
      </div>

      <Footer/>
    </>
  )
}

export default FindWork