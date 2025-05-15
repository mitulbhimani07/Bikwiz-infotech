import React, { useState, useRef, useEffect } from 'react'; // Added useRef and useEffect
import '../assets/css/Home.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import { TrendingUp, CreditCard, Globe, Zap, Wrench,Star  } from "lucide-react";

// Install Swiper modules
import 'swiper/css';
import 'swiper/css/navigation';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import serivces1 from '../assets/images/serivces1.png'
import serivces2 from '../assets/images/serivces2.png'
import serivces3 from '../assets/images/serivces3.png'
import serivces4 from '../assets/images/serivces4.png'
import serivces5 from '../assets/images/serivces5.png'
import client1 from '../assets/images/client1.png';
import client2 from '../assets/images/client2.png';
import banner from '../assets/images/banner.jpg';
import '../App.css'
import Footer from '../header-footer/Footer';
import Header from '../header-footer/Header';
// import { useNavigate } from 'react-router-dom';

const MarketplaceBanner = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredStep, setHoveredStep] = useState(0);

  

  const steps = [
    {
      number: "01",
      title: "Easy Sign Up",
      icon: "cursor-pointer",
      content: "Create your profile as a freelancer or client in just a few clicks."
    },
    {
      number: "02",
      title: "Post or Find Projects",
      icon: "users",
      content: "List your services or browse freelance jobs in India that match your skills."
    },
    {
      number: "03",
      title: "Work Together Seamlessly",
      icon: "document-text",
      content: "Use our built-in chat to communicate, share files, and manage projects easily."
    },
    {
      number: "04",
      title: "Get Paid Instantly",
      icon: "template",
      content: "Enjoy hassle-free, instant payments with complete security."
    }
  ];



  const services = [
    {
      // icon: 'flaticon-accounting',
      img: serivces1,
      title: 'Graphic & Design',
      // jobs: 324
    },
    {
      // icon: 'flaticon-graduation-cap',
      img: serivces2,
      title: 'Writing & Translation',
      // jobs: 573
    },
    {
      // icon: 'flaticon-planning',
      img: serivces3,
      title: 'Digital Marketing',
      // jobs: 125
    },
    {
      // icon: 'flaticon-programming',
      img: serivces4,
      title: 'Video & Animation',
      // jobs: 445
    },
    {
      img: serivces5,
      title: 'Programming & Tech',
      // jobs: 254
    },
    // {
    //   icon: 'flaticon-car',
    //   title: 'Automotive',
    //   jobs: 87
    // }
  ];
  const features = [
    {
      id: 1,
      title: "Built for India, by India",
      description: "Our platform is tailored to the Indian market, understanding local needs, languages, and payment methods.",
      icon: <Globe className="h-10 w-10 text-white" />
    },
    {
      id: 2,
      title: "Zero Commission",
      description: "We don't take any commission from freelancers' earnings. What you earn is 100% yours.",
      icon: <TrendingUp className="h-10 w-10 text-white" />
    },
    {
      id: 3,
      title: "Free AI Tools for Freelancers",
      description: "Access cutting-edge AI tools to enhance your productivity and improve your work quality.",
      icon: <Wrench className="h-10 w-10 text-white" />
    },
    {
      id: 4,
      title: "Fast & Secure Payments",
      description: "Get paid quickly through secure channels including UPI, bank transfers, and mobile wallets.",
      icon: <CreditCard className="h-10 w-10 text-white" />
    },
    {
      id: 5,
      title: "Wide Range of Talent & Services",
      description: "Connect with skilled professionals across diverse domains, from tech to digital marketing.",
      icon: <Zap className="h-10 w-10 text-white" />
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Anjali M.",
      role: "Content Writer",
      text: "I love the zero commission policy! I get to keep all my earnings, and the payment process is super quick",
      avatar: client1,
      bgColor: "bg-orange-500"
    },
    {
      id: 2,
      name: "Rajiv K.",
      role: "Startup Founder",
      text: "Finding skilled freelancers in India has never been easier. The platform is simple and reliable.",
      avatar: client2,
      bgColor: "bg-gray-200"
    }
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
      </section>
      {/* // =================card================== */}
      <section className="trending-services-section py-20">
        <div className="container mx-auto px-4 md:px-10">
          {/* Heading and navigation */}
          <div className="flex items-center justify-between mb-12">
            <h5 className="text-3xl md:text-4xl font-bold text-black">
              Popular Freelance Categories in India
            </h5>
            <div className="flex items-center space-x-4">
              <div className="trending-swiper-button-prev cursor-pointer bg-white w-10 h-10 flex items-center justify-center shadow-md rounded-md hover:bg-green-100">
                <ChevronLeft className="text-amber-500" />
              </div>
              <div className="trending-swiper-button-next cursor-pointer bg-white w-10 h-10 flex items-center justify-center shadow-md rounded-md hover:bg-green-100">
                <ChevronRight className="text-amber-500" />
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
                  <div className="absolute bottom-7 flex items-end justify-start p-6 z-20 transform translate-y-10  transition-all duration-500">
                    <h5 className="text-2xl font-bold text-white">{service.title}</h5>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>


      <section className="w-full py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900">How Our Freelancing Platform Works</h2>
          <div className="flex items-center text-sm text-gray-500">
            <span className="mr-3 font-medium">By designership.com</span>
            <div
              className="w-14 h-14 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: 'oklch(70.5% 0.213 47.604)' }}
            >
              <svg viewBox="0 0 24 24" width="28" height="28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 9L16 12L13 15M8 9L11 12L8 15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        {/* Progress Bar */}
<div className="mb-16">
  <div className="relative flex justify-between items-center">
    {/* Connecting line (behind buttons only between them) */}
    <div className="absolute top-1/2 transform -translate-y-1/2 left-0 right-0 h-1 bg-gray-200 z-0 overflow-hidden">
      <div
        className="h-full transition-all duration-300"
        style={{
          width: `${((hoveredStep - 1) / (steps.length - 1)) * 100}%`,
          backgroundColor: hoveredStep ? 'oklch(70.5% 0.213 47.604)' : 'transparent',
        }}
      ></div>
    </div>

    {steps.map((step, index) => {
      const isActive = hoveredStep > index;
      return (
        <div key={index} className="relative z-10">
          <button
            className={`w-16 h-16 rounded-lg flex items-center justify-center text-lg font-bold transition-all duration-300 ${
              isActive ? 'text-white' : 'bg-white text-gray-500 border-2 border-gray-200'
            }`}
            style={{
              backgroundColor: isActive ? 'oklch(70.5% 0.213 47.604)' : 'white',
            }}
          >
            {isActive ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            ) : (
              step.number
            )}
          </button>
        </div>
      );
    })}
  </div>
</div>


        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white p-8 shadow-lg h-96 flex flex-col transition-all duration-300"
              onMouseEnter={() => setHoveredStep(index + 1)}
              onMouseLeave={() => setHoveredStep(0)}
            >
              <div className="mb-6">
                <div className="w-16 h-16 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'oklch(90% 0.05 47.604)' }}>
                  {index === 0 && (
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
                      <path d="M4 20L10.6464 13.3536C11.0369 12.9631 11.0369 12.3303 10.6464 11.9397L7 8.29289M17 4L10.6464 10.3536C10.2559 10.7441 10.2559 11.3769 10.6464 11.7675L14 15.1213" stroke="oklch(70.5% 0.213 47.604)" strokeWidth="1.8" strokeLinecap="round" />
                    </svg>
                  )}
                  {index === 1 && (
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
                      <path d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="oklch(70.5% 0.213 47.604)" strokeWidth="1.8" />
                      <path d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z" stroke="oklch(70.5% 0.213 47.604)" strokeWidth="1.8" />
                    </svg>
                  )}
                  {index === 2 && (
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
                      <path d="M16 15.2V19.5C16 20.0523 15.5523 20.5 15 20.5H5C4.44772 20.5 4 20.0523 4 19.5V8.5C4 7.94772 4.44772 7.5 5 7.5H15C15.5523 7.5 16 7.94772 16 8.5V11" stroke="oklch(70.5% 0.213 47.604)" strokeWidth="1.8" />
                      <path d="M16 3.5L16 11.5" stroke="oklch(70.5% 0.213 47.604)" strokeWidth="1.8" />
                      <path d="M8 15L10 17L16 11" stroke="oklch(70.5% 0.213 47.604)" strokeWidth="1.8" />
                    </svg>
                  )}
                  {index === 3 && (
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
                      <rect x="4" y="4" width="16" height="16" rx="2" stroke="oklch(70.5% 0.213 47.604)" strokeWidth="1.8" />
                      <circle cx="9" cy="9" r="2" stroke="oklch(70.5% 0.213 47.604)" strokeWidth="1.8" />
                    </svg>
                  )}
                </div>
              </div>
              <div className="text-sm font-semibold uppercase text-gray-500 tracking-wide mb-2">STEP {index + 1}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{step.title}</h3>
              <p className="mt-3 text-lg text-gray-600 flex-grow leading-relaxed">{step.content}</p>

              {/* {index === 0 && (
                <button
                  className="mt-auto px-6 py-3 text-white rounded-lg flex items-center justify-center text-lg font-medium w-48 h-14 transition-colors hover:bg-opacity-90"
                  style={{ backgroundColor: 'oklch(70.5% 0.213 47.604)' }}
                >
                  Learn More
                  <svg className="ml-2" width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              )} */}
            </div>
          ))}
        </div>
      </div>
    </section>






      <div className="relative py-14 px-4 sm:px-6 lg:px-8  overflow-hidden">

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
         
          <h2 className="text-5xl font-extrabold text-gray-900 mb-6">
            Why Our <span className="text-amber-500">Indian Freelance</span> Marketplace Stands Out
          </h2>
         
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature) => (
            <div
              key={feature.id}
              className='group rounded-2xl overflow-hidden transition-all duration-500 shadow-md'
            >
              <div className="h-full flex flex-col bg-white relative">
                {/* Decorative background circle */}
                <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-amber-500 opacity-10 -mt-10 -mr-10"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-amber-500 opacity-10 -mb-10 -ml-10"></div>
                
                {/* Feature icon and title */}
                <div className="p-8 flex items-start gap-6">
                  <div className="flex-shrink-0 p-4 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 shadow-lg transform -rotate-3 group-hover:rotate-0 transition-all duration-300">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      {feature.title}
                    </h3>
                    <div className="h-1 w-12 bg-amber-500 rounded-full group-hover:w-24 transition-all duration-300"></div>
                  </div>
                </div>
                
                {/* Feature description */}
                <div className="px-8 pb-8 pt-2 flex-grow flex flex-col">
                  <p className="text-lg text-gray-700 flex-grow">
                    {feature.description}
                  </p>
                 
                </div>
                
                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 border-t-[20px] border-r-[20px] border-amber-200 group-hover:border-t-[30px] group-hover:border-r-[30px] transition-all duration-300"></div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </div>


    <div className="w-full py-12 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-orange-500 font-medium mb-2">3940+ Happy Users</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Hear from Our Community</h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="flex items-start space-x-6">
              {/* Avatar */}
              <div className={`rounded-lg overflow-hidden w-32 h-32 ${testimonial.bgColor} flex-shrink-0`}>
                <img 
                  src={testimonial.avatar} 
                  alt={`${testimonial.name} avatar`}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Content */}
              <div className="flex-1">
                {/* Stars */}
                <div className="flex mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="fill-yellow-400 stroke-yellow-400 w-5 h-5" />
                  ))}
                </div>
                {/* Testimonial Text */}
                <p className="text-gray-800 mb-3 text-lg">{testimonial.text}</p>
                {/* Name and Role */}
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    <Footer />

    </>

  );
};

export default MarketplaceBanner;