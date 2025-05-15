import React, { useState, useRef, useEffect } from 'react'; // Added useRef and useEffect
import '../assets/css/Home.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';


// Install Swiper modules
import 'swiper/css';
import 'swiper/css/navigation';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import serivces1 from '../assets/images/serivces1.png'
import serivces2 from '../assets/images/serivces2.png'
import serivces3 from '../assets/images/serivces3.png'
import serivces4 from '../assets/images/serivces4.png'
import serivces5 from '../assets/images/serivces5.png'
import Image1 from '../assets/images/img 23.png';
import Image2 from '../assets/images/img 20.png';
import Image3 from '../assets/images/img 21.png';
import Image4 from '../assets/images/img 22.png';
import banner from '../assets/images/banner.jpg';
import '../App.css'
import Footer from '../header-footer/Footer';
import Header from '../header-footer/Header';
// import { useNavigate } from 'react-router-dom';

const MarketplaceBanner = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isHovered, setIsHovered] = useState(false);


  const categories = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
          <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
          <path d="M2 2l7.586 7.586"></path>
          <circle cx="11" cy="11" r="2"></circle>
        </svg>
      ),
      title: "UI/UX Design",
      jobs: "12k+ Jobs",
      active: true
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      ),
      title: "Development",
      jobs: "8k+ Jobs",
      active: false
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
        </svg>
      ),
      title: "Marketing",
      jobs: "12k+ Jobs",
      active: false
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg>
      ),
      title: "Telemarketing",
      jobs: "3k+ Jobs",
      active: false
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="4" y1="7" x2="20" y2="7"></line>
          <line x1="10" y1="11" x2="10" y2="17"></line>
          <line x1="14" y1="11" x2="14" y2="17"></line>
          <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2l1-12"></path>
          <path d="M9 7V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"></path>
        </svg>
      ),
      title: "Editing",
      jobs: "12k+ jobs",
      active: false
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
        </svg>
      ),
      title: "Accounting",
      jobs: "17k+ Jobs",
      active: false
    }
  ];

  const services = [
    {
      // icon: 'flaticon-accounting',
      img: serivces1,
      title: 'Audio & Video Editing',
      // jobs: 324
    },
    {
      // icon: 'flaticon-graduation-cap',
      img: serivces2,
      title: 'Product & Branding Design',
      // jobs: 573
    },
    {
      // icon: 'flaticon-planning',
      img: serivces3,
      title: 'Admin & Customer Support',
      // jobs: 125
    },
    {
      // icon: 'flaticon-programming',
      img: serivces4,
      title: 'WordPress Developement',
      // jobs: 445
    },
    {
      img: serivces5,
      title: 'Healthcare',
      // jobs: 254
    },
    // {
    //   icon: 'flaticon-car',
    //   title: 'Automotive',
    //   jobs: 87
    // }
  ];

  const [openAccordion, setOpenAccordion] = useState('seamless-search');
  const [heights, setHeights] = useState({});
  const contentRefs = {
    'seamless-search': useRef(null),
    'hire-top-talents': useRef(null),
    'protected-payments': useRef(null),
  };

  useEffect(() => {
    const measureHeights = () => {
      const newHeights = {};
      Object.keys(contentRefs).forEach((id) => {
        if (contentRefs[id].current) {
          newHeights[id] = contentRefs[id].current.scrollHeight;
        }
      });
      setHeights(newHeights);
    };

    measureHeights();
    window.addEventListener('resize', measureHeights);

    return () => {
      window.removeEventListener('resize', measureHeights);
    };
  }, []);

  const toggleAccordion = (id) => {
    if (openAccordion === id) {
      setOpenAccordion(null);
    } else {
      setOpenAccordion(id);
    }
  };

  return (
    <>
      <Header />
      <section
        className="banner-section relative w-[95%] mx-auto h-[610px] flex items-center justify-center bg-cover bg-center my-5"
        style={{ backgroundImage: `url(${banner})`, borderRadius: "20px", overflow: "hidden" }}
      >
        {/* Top-right Sign Up Button */}


        {/* Content */}
        <div className="relative z-10 text-center px-4 md:px-10 max-w-7xl">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            India’s Top Freelance Marketplace –<br />
            <span className="block mt-2">Where Talent Meets Opportunity</span>
          </h1>

          <p className="text-white text-base sm:text-lg mt-6 leading-relaxed">
            Welcome to Best freelancing platform, designed to bring together skilled freelancers and forward-thinking businesses.
            Whether you want to hire the best Indian freelancers or find freelance jobs in India, this is your go-to destination.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-full transition">
              Hire Freelancer
            </button>
            <button className="border border-white hover:bg-white hover:text-black text-white font-semibold py-2 px-6 rounded-full transition">
              Start Earning
            </button>
          </div>
        </div>
      </section>      {/* // =================card================== */}
      <section className="trending-services-section py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-10">
          {/* Heading and navigation */}
          <div className="flex items-center justify-between mb-12">
            <h5 className="text-3xl md:text-4xl font-bold text-green-800">
              Trending Services
            </h5>
            <div className="flex items-center space-x-4">
              <div className="trending-swiper-button-prev cursor-pointer bg-white w-10 h-10 flex items-center justify-center shadow-md rounded-md hover:bg-green-100">
                <ChevronLeft className="text-green-700" />
              </div>
              <div className="trending-swiper-button-next cursor-pointer bg-white w-10 h-10 flex items-center justify-center shadow-md rounded-md hover:bg-green-100">
                <ChevronRight className="text-green-700" />
              </div>
            </div>
          </div>

          {/* Swiper Slider */}
          <Swiper
            modules={[Navigation, Autoplay, Pagination]}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            pagination={{ clickable: true }}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              prevEl: '.trending-swiper-button-prev',
              nextEl: '.trending-swiper-button-next',
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
          >
            {services.map((service, index) => (
              <SwiperSlide key={index}>
                <div className="service-item rounded-lg shadow-md hover:shadow-xl relative overflow-hidden group h-80 transition-all duration-300">
                  {/* Image */}
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-40 transition-opacity duration-300 z-10"></div>

                  {/* Content */}
                  <div className="absolute inset-0 flex items-end justify-start p-6 z-20 transform translate-y-10 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    <h5 className="text-2xl font-bold text-white">{service.title}</h5>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>


      <div className="py-8 px-4 md:py-16 md:px-6 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 md:mb-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-[#005025]">
              Explore the marketplace.
            </h2>

            <div
              className="relative mt-4 md:mt-0"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <a href="#" className="text-[#00bf58] font-medium flex items-center group">
                <span className="text-base">Explore all fields</span>
                <svg className="ml-2" width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.5303 6.53033C13.8232 6.23744 13.8232 5.76256 13.5303 5.46967L8.75736 0.696699C8.46447 0.403806 7.98959 0.403806 7.6967 0.696699C7.40381 0.989593 7.40381 1.46447 7.6967 1.75736L11.9393 6L7.6967 10.2426C7.40381 10.5355 7.40381 11.0104 7.6967 11.3033C7.98959 11.5962 8.46447 11.5962 8.75736 11.3033L13.5303 6.53033ZM0 6.75H13V5.25H0V6.75Z" fill="#22C55E" />
                </svg>
                <div
                  className={`absolute bottom-0 left-0 h-0.5 bg-green-500 transition-all duration-300 ease-in-out ${isHovered ? 'w-full' : 'w-0'}`}
                />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {categories.map((category, index) => (
              <div
                key={index}
                className={`flex w-[200px] flex-col items-center justify-center rounded-[60px] border cursor-pointer transition-all duration-300 ${hoveredIndex === index || index === 0 && hoveredIndex === null
                  ? 'border-green-500 bg-white transform -translate-y-1'
                  : 'border-gray-200 bg-white hover:shadow-md'
                  }`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{ padding: "50px 15px 30px" }}
              >
                <div className={`p-4 rounded-full mb-[16px] md:mb-4 transition-colors ${hoveredIndex === index || index === 0 && hoveredIndex === null ? 'text-green-600' : 'text-gray-700'
                  }`}>
                  {category.icon}
                </div>
                <h3 className="text-[18px] text-[#254035] font-semibold mb-2 text-center" style={{ margin: "20px 0 30px" }}>{category.title}</h3>
                <p className="text-[rgba(9,50,28,.6)] text-[14px]">{category.jobs}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Why choose us? */}
        <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Left Side - Circular Card with Search UI */}
              <div className="relative flex justify-center">
                <div className="choose-us-card w-full h-full max-w-md aspect-square rounded-full bg-gray-50 relative flex items-center justify-center">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-4/5 max-w-sm">
                      {/* Search Interface */}
                      <div className="bg-white rounded-lg shadow-md mb-4 p-3 flex items-center">
                        <input
                          type="text"
                          placeholder="Designer, Brand, Logo designer "
                          className="w-full outline-none text-sm placeholder-black"
                        />
                        <button className="text-black font-bold ml-5 text-xl">×</button>
                      </div>

                      {/* Search Button */}
                      <div className="absolute right-0 md:top-12 top-0 translate-x-1/4 -translate-y-1/4">
                        <button className="bg-green-500 text-white p-3 rounded-lg shadow-lg">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                          </svg>
                        </button>
                      </div>

                      {/* Profile Cards */}
                      <div className="space-y-4 mt-8">
                        {/* Profile Card 1 */}
                        <div className="bg-white rounded-lg p-2 shadow-sm flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="w-10 h-10 rounded-full bg-purple-100 overflow-hidden mr-3">
                              <img
                                src={Image1}
                                alt="Profile"
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div>
                              <p className="font-medium text-sm">Antonio Volaska</p>
                              <p className="text-xs text-gray-500">UI Designer</p>
                            </div>
                          </div>
                          <div className="flex flex-col items-end text-xs">
                            <button className="bg-green-100 px-2 py-1 rounded text-xs">
                              HIRE ME
                            </button>
                            <span className="text-blck mt-1 text-sm"><span className='text-gray-400'>From </span> California</span>
                          </div>
                        </div>

                        {/* Profile Card 2 */}
                        <div className="bg-white rounded-lg p-2 shadow-sm flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="w-10 h-10 rounded-full bg-yellow-100 overflow-hidden mr-3">
                              <img
                                src={Image2}
                                alt="Profile"
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div>
                              <p className="font-medium text-sm">Rashed Ka</p>
                              <p className="text-xs text-gray-500">Motion Designer</p>
                            </div>
                          </div>
                          <div className="flex flex-col items-end text-xs">
                            <button className="bg-green-100 px-2 py-1 rounded text-xs">
                              HIRE ME
                            </button>
                            <span className="text-blck mt-1 text-sm"><span className='text-gray-400'>From </span> Bangladesh</span>
                          </div>
                        </div>

                        {/* Profile Card 3 */}
                        <div className="bg-white rounded-lg p-2 shadow-sm flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="w-10 h-10 rounded-full bg-green-100 overflow-hidden mr-3">
                              <img
                                src={Image3}
                                alt="Profile"
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div>
                              <p className="font-medium text-sm">Zubayer Al Hasan</p>
                              <p className="text-xs text-gray-500">Developer</p>
                            </div>
                          </div>
                          <div className="flex flex-col items-end text-xs">
                            <button className="bg-green-100 px-2 py-1 rounded text-xs">
                              HIRE ME
                            </button>
                            <span className="text-blck mt-1 text-sm"><span className='text-gray-400'>From </span> Norway</span>
                          </div>
                        </div>

                        {/* Profile Card 4 */}
                        <div className="bg-white rounded-lg p-2 shadow-sm flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="w-10 h-10 rounded-full bg-pink-100 overflow-hidden mr-3">
                              <img
                                src={Image4}
                                alt="Profile"
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div>
                              <p className="font-medium text-sm">Jannatul Ferdaus</p>
                              <p className="text-xs text-gray-500">Youtuber</p>
                            </div>
                          </div>
                          <div className="flex flex-col items-end text-xs">
                            <button className="bg-green-100 px-2 py-1 rounded text-xs">
                              HIRE ME
                            </button>
                            <span className="text-blck mt-1 text-sm"><span className='text-gray-400'>From </span>Turkey</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Why Choose Us Content */}
              <div className="p-4">
                <p className="text-lg text-green-500 font-semibold mb-2">Why choose us?</p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-green-900 mb-8">
                  World of talent at your fingertips
                </h2>

                {/* Accordion */}
                <div className="space-y-2">
                  {/* Accordion Item 1 */}
                  <div className="border-b border-gray-200">
                    <button
                      className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-700"
                      onClick={() => toggleAccordion('seamless-search')}
                    >
                      <span className="text-xl">Seamless Search</span>
                      <svg
                        className={`w-5 h-5 transition-transform duration-300 ${openAccordion === 'seamless-search' ? 'rotate-180' : ''
                          }`}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    <div
                      className="overflow-hidden transition-all duration-300 ease-in-out"
                      style={{
                        maxHeight:
                          openAccordion === 'seamless-search'
                            ? `${heights['seamless-search'] || 0}px`
                            : '0',
                      }}
                    >
                      <div
                        ref={contentRefs['seamless-search']}
                        className="pb-5 text-gray-600"
                      >
                        <p>
                          It only takes 5 minutes. Set-up is smooth and simple,
                          with fully customisable page design to reflect your
                          brand.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Accordion Item 2 */}
                  <div className="border-b border-gray-200">
                    <button
                      className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-700"
                      onClick={() => toggleAccordion('hire-top-talents')}
                    >
                      <span className="text-xl">Hire top talents</span>
                      <svg
                        className={`w-5 h-5 transition-transform duration-300 ${openAccordion === 'hire-top-talents' ? 'rotate-180' : ''
                          }`}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    <div
                      className="overflow-hidden transition-all duration-300 ease-in-out"
                      style={{
                        maxHeight:
                          openAccordion === 'hire-top-talents'
                            ? `${heights['hire-top-talents'] || 0}px`
                            : '0',
                      }}
                    >
                      <div
                        ref={contentRefs['hire-top-talents']}
                        className="pb-5 text-gray-600"
                      >
                        <p>
                          Access to top talent in various fields including design,
                          development, and content creation.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Accordion Item 3 */}
                  <div className="border-b border-gray-200">
                    <button
                      className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-700"
                      onClick={() => toggleAccordion('protected-payments')}
                    >
                      <span className="text-xl">Protected payments, every time</span>
                      <svg
                        className={`w-5 h-5 transition-transform duration-300 ${openAccordion === 'protected-payments' ? 'rotate-180' : ''
                          }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    <div
                      className="overflow-hidden transition-all duration-300 ease-in-out"
                      style={{
                        maxHeight:
                          openAccordion === 'protected-payments'
                            ? `${heights['protected-payments'] || 0}px`
                            : '0',
                      }}
                    >
                      <div
                        ref={contentRefs['protected-payments']}
                        className="pb-5 text-gray-600"
                      >
                        <p>
                          Secure payment system ensures worry-free transactions for
                          both clients and freelancers.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <button className="bg-green-500 text-white px-6 py-3 rounded-full font-medium hover:bg-green-600 transition duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* </div> */}

        {/*  */}



      </div>
      <Footer />

    </>

  );
};

export default MarketplaceBanner;