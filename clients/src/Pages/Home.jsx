import React, { useState, useRef, useEffect } from 'react'; // Added useRef and useEffect
import '../assets/css/Home.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import { TrendingUp, CreditCard, Globe, Zap, Wrench, Star } from "lucide-react";
import { User, Settings } from 'lucide-react';

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
import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

const MarketplaceBanner = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const sectionRef = useRef(null);
  const progressBarRef = useRef(null);
  const [hoveredStep, setHoveredStep] = useState(0);
  const [isSticky, setIsSticky] = useState(false);
  const [sectionInView, setSectionInView] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (!progressBarRef.current) return;
      const offsetTop = progressBarRef.current.offsetTop;
      const scrollTop = window.scrollY;
      setIsSticky(scrollTop > offsetTop);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Section in view logic
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setSectionInView(entry.isIntersecting),
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);



  const steps = [
    {
      number: "1",
      title: "Easy Sign Up",
      description: "Create your profile as a freelancer or client in just a few clicks.",
      icon: User,
    },
    {
      number: "2", 
      title: "Post or Find Projects",
      description: "List your services or browse freelance jobs in India that match your skills.",
      icon: Settings,
    },
    {
      number: "3",
      title: "Work Together Seamlessly", 
      description: "Use our built-in chat to communicate, share files, and manage projects easily.",
      icon: Zap
    },
    {
      number: "04",
      title: "Get Paid Instantly",
      icon: CreditCard,
      description: "Enjoy hassle-free, instant payments with complete security."
    }
  ];
  // const steps = [
  //   {
  //     number: "01",
  //     title: "Easy Sign Up",
  //     icon: "cursor-pointer",
  //     content: "Create your profile as a freelancer or client in just a few clicks."
  //   },
  //   {
  //     number: "02",
  //     title: "Post or Find Projects",
  //     icon: "users",
  //     content: "List your services or browse freelance jobs in India that match your skills."
  //   },
  //   {
  //     number: "03",
  //     title: "Work Together Seamlessly",
  //     icon: "document-text",
  //     content: "Use our built-in chat to communicate, share files, and manage projects easily."
  //   },
  //   {
  //     number: "04",
  //     title: "Get Paid Instantly",
  //     icon: "template",
  //     content: "Enjoy hassle-free, instant payments with complete security."
  //   }
  // ];



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
            <Link to='/login' className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-full transition">
              Hire Freelancer
            </Link>
            <Link to='/login' className="border border-white hover:bg-white hover:text-black text-white font-semibold py-2 px-6 rounded-full transition">
              Start Earning
            </Link>
          </div>
        </div>
      </section>
      {/* // =================card================== */}
      <section className="trending-services-section py-20">
        <div className="container mx-auto px-4 md:px-10">
          {/* Heading and navigation */}
          <div className="flex items-center justify-between mb-12">
            <h5 className="text-3xl md:text-4xl font-bold text-black text-center mx-auto w-fit">
              Popular <span className="text-amber-500">Freelance Categories</span> in India
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


       <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          {/* Dot pattern icon */}
          <div className="flex justify-center mb-8">
            <div className="grid grid-cols-3 gap-1">
              {[...Array(9)].map((_, i) => (
                <div 
                  key={i} 
                  className="w-1.5 h-1.5 bg-orange-500 rounded-full"
                ></div>
              ))}
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Learn <span className='text-orange-500'>More About</span> Process
          </h2>
          
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Was are delightful solicitude discovered collecting man<br />
            day. Resolving neglected sir tolerably
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Desktop Layout */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Step numbers positioned above circles */}
              <div className="flex justify-between items-start mb-12">
                {steps.map((step, index) => (
                  <div key={index} className="flex-1 flex justify-center">
                    <span className="text-8xl font-light text-gray-200">{step.number.padStart(2, '0')}</span>
                  </div>
                ))}
              </div>
              
              {/* Circles and connecting lines container */}
              <div className="relative flex justify-between items-center mb-12">
                {/* Connecting curved dotted lines - Fixed positioning */}
                <div className="absolute inset-0 w-full h-full flex items-center">
                  {/* SVG container for all curved lines */}
                  <svg 
                    width="100%" 
                    height="160" 
                    viewBox="0 0 1200 160" 
                    className="absolute top-1/2 left-0 transform -translate-y-1/2"
                    style={{ zIndex: 1 }}
                  >
                    {/* Line 1 to 2 - Curved upward */}
                    <path
                      d="M 140 80 Q 250 40 360 80"
                      stroke="#d1d5db"
                      strokeWidth="3"
                      fill="none"
                      strokeDasharray="8,8"
                      strokeLinecap="round"
                    />
                    
                    {/* Line 2 to 3 - Curved downward */}
                    <path
                      d="M 500 80 Q 590 120 700 80"
                      stroke="#d1d5db"
                      strokeWidth="3"
                      fill="none"
                      strokeDasharray="8,8"
                      strokeLinecap="round"
                    />
                    
                    {/* Line 3 to 4 - Curved upward */}
                    <path
                      d="M 820 80 Q 930 40 1040 80"
                      stroke="#d1d5db"
                      strokeWidth="3"
                      fill="none"
                      strokeDasharray="8,8"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                
                {/* Circles */}
                {steps.map((step, index) => {
                  const IconComponent = step.icon;
                  return (
                    <div key={index} className="relative flex flex-col items-center" style={{ zIndex: 10 }}>
                      {/* Step Circle with dotted border */}
                      <div className="relative">
                        {/* Outer dotted circle */}
                        <div className="w-28 h-28 rounded-full border-2 border-dotted border-gray-300 flex items-center justify-center bg-white">
                          {/* Inner solid circle */}
                          <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center shadow-lg">
                            <IconComponent className="w-10 h-10 text-white" strokeWidth={2} />
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              
              {/* Step Content */}
              <div className="flex justify-between items-start">
                {steps.map((step, index) => (
                  <div key={index} className="flex-1 text-center px-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tablet Layout */}
          <div className="hidden md:block lg:hidden">
            <div className="grid grid-cols-2 gap-16">
              {steps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <div key={index} className="flex flex-col items-center text-center">
                    {/* Step number */}
                    <div className="mb-4">
                      <span className="text-6xl font-light text-gray-200">{step.number.padStart(2, '0')}</span>
                    </div>
                    
                    {/* Step Circle with dotted border */}
                    <div className="relative mb-6">
                      {/* Outer dotted circle */}
                      <div className="w-24 h-24 rounded-full border-2 border-dotted border-gray-300 flex items-center justify-center bg-white">
                        {/* Inner solid circle */}
                        <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center shadow-lg">
                          <IconComponent className="w-8 h-8 text-white" strokeWidth={2} />
                        </div>
                      </div>
                    </div>
                    
                    {/* Step Content */}
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed px-4">
                      {step.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden space-y-12">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="flex flex-col items-center text-center">
                  {/* Step number */}
                  <div className="mb-4">
                    <span className="text-6xl font-light text-gray-200">{step.number.padStart(2, '0')}</span>
                  </div>
                  
                  {/* Step Circle with dotted border */}
                  <div className="relative mb-6">
                    {/* Outer dotted circle */}
                    <div className="w-24 h-24 rounded-full border-2 border-dotted border-gray-300 flex items-center justify-center bg-white">
                      {/* Inner solid circle */}
                      <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center shadow-lg">
                        <IconComponent className="w-8 h-8 text-white" strokeWidth={2} />
                      </div>
                    </div>
                  </div>
                  
                  {/* Step Content */}
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed px-8">
                    {step.description}
                  </p>
                  
                  {/* Connecting line for mobile (except last item) */}
                  {index < steps.length - 1 && (
                    <div className="w-px h-12 bg-gradient-to-b from-gray-300 to-transparent mt-8"></div>
                  )}
                </div>
              );
            })}
          </div>
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-10">
            <p className="text-orange-500 font-medium mb-2">3940+ Happy Users</p>
            <h2 className="text-4xl md:text-4xl font-bold text-gray-900">Hear <span className="text-amber-500">from Our</span> Community</h2>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="flex items-start space-x-4 sm:space-x-6">
                {/* Avatar */}
                <div className={`rounded-lg overflow-hidden w-24 h-24 sm:w-28 sm:h-28 md:w-30 md:h-30 ${testimonial.bgColor} flex-shrink-0`}>
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
                  <p className="text-gray-800 mb-3 text-base sm:text-l">{testimonial.text}</p>
                  {/* Name and Role */}
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-gray-600 text-sm sm:text-base">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>



      {/* ========= */}
      <div className="bg-orange-500 px-4 sm:px-6 md:px-12  md:py-24 rounded-3xl relative overflow-hidden w-[95%] max-w-7xl mx-auto py-[48px] my-[48px]">
        {/* Top-left corner circle */}
        <div className="absolute top-0 left-0 w-28 h-28 sm:w-36 sm:h-36 border-[5px] border-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>

        {/* Bottom-right corner circle */}
        <div className="absolute bottom-0 right-0 w-28 h-28 sm:w-36 sm:h-36 border-[5px] border-white rounded-full translate-x-1/2 translate-y-1/2"></div>

        {/* Content container */}
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-8">
            Subscribe to our newsletter
          </h2>

          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <input
              type="text"
              placeholder="First name"
              className="text-base sm:text-lg w-full md:flex-1 p-4 rounded-md border border-orange-400 bg-orange-500 placeholder-orange-200 text-white outline-none"
            />

            <input
              type="email"
              placeholder="Email address"
              className="text-base sm:text-lg w-full md:flex-1 p-4 rounded-md border border-orange-400 bg-orange-500 placeholder-orange-200 text-white outline-none"
            />

            <button className="w-full md:w-auto text-base sm:text-lg bg-white text-black font-medium py-4 px-6 rounded-md transition duration-300">
              Subscribe Now
            </button>
          </div>
        </div>
      </div>


      <Footer />

    </>

  );
};

export default MarketplaceBanner;