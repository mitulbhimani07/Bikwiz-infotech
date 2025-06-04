import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom' // Add this import for Link
import banner from '../assets/images/aboutUsBanner.jpg';
import Header from '../header-footer/Header';
import about1 from '../assets/images/about.svg';
import { ChevronLeft, ChevronRight, Facebook, Github, Linkedin } from 'lucide-react';
import Deepika from '../assets/images/Deepika.png';
import Akshay from '../assets/images/Akashay.jpg';

import vision from '../assets/images/vision.svg';
import { ChevronDown, ChevronUp, Star } from 'lucide-react';
import teamImage from '../assets/images/choose.png';
import client1 from '../assets/images/client1.png';
import client2 from '../assets/images/client2.png';

import { FaHandsHelping, FaLaptopCode, FaRupeeSign, FaTasks, FaUserCheck } from 'react-icons/fa';
import {
  Shell,
  Search,
  Zap,
  Palette,
  Contrast,
  Waves
} from "lucide-react";
import Footer from '../header-footer/Footer';

export default function AboutUs() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);


  const teamMembers = [
    {
      id: 1,
      name: "Deepika Kumari",
      role: "Founder",
      description: "Pop music lover, seeks joy and exciting pop concerts",
      image: Deepika,
      bgColor: "bg-gray-800"
    },
    {
      id: 2,
      name: "Akshay Kumar",
      role: "CTO",
      description: "Bookworm, creative software developer with precision",
      image: Akshay,
      bgColor: "bg-gray-600",
      highlighted: true
    },
    {
      id: 3,
      name: "Michael Chen",
      role: "Full Stack Developer",
      description: "Technology enthusiast and problem solver",
      image: Akshay,
      bgColor: "bg-green-600"
    },
    {
      id: 4,
      name: "Michael Chen",
      role: "Full Stack Developer",
      description: "Technology enthusiast and problem solver",
      image: Akshay,
      bgColor: "bg-green-600"
    },
        {
      id: 5,
      name: "Michael Chen",
      role: "Full Stack Developer",
      description: "Technology enthusiast and problem solver",
      image: Akshay,
      bgColor: "bg-green-600"
    },
        {
      id: 6 ,
      name: "Michael Chen",
      role: "Full Stack Developer",
      description: "Technology enthusiast and problem solver",
      image: Akshay,
      bgColor: "bg-green-600"
    }
  ];
  useEffect(() => {
    const updateSlidesToShow = () => {
      if (window.innerWidth < 640) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };

    updateSlidesToShow();
    window.addEventListener('resize', updateSlidesToShow);
    return () => window.removeEventListener('resize', updateSlidesToShow);
  }, []);

  // Reset current slide when slidesToShow changes
  useEffect(() => {
    setCurrentSlide(0);
  }, [slidesToShow]);

  const maxSlide = Math.max(0, teamMembers.length - slidesToShow);



  const getTransformValue = () => {
    const percentage = (100 / slidesToShow);
    return currentSlide * percentage;
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.max(1, teamMembers.length - 2));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.max(1, teamMembers.length - 2)) % Math.max(1, teamMembers.length - 2));
  };

  const [openAccordion, setOpenAccordion] = useState(0);
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

  const accordionData = [
    {
      title: "Made in India, for India",
      content: "We truly understand Indian work culture and business needs.",
      // detailedContent: "Our platform is designed specifically for the Indian market, taking into account local business practices, cultural nuances, and economic conditions. We understand the challenges faced by Indian freelancers and businesses."
    },
    {
      title: "Quick & Smart Matching",
      content: "Find the right project or freelancer without waWith Bikwiz, you don’t just work-you build your reputation and future",
      // detailedContent: "Our AI-powered matching system analyzes skills, experience, project requirements, and compatibility to ensure perfect matches between freelancers and clients, saving time and improving success rates."
    },
    {
      title: "Only Verified Opportunities",
      content: "No spam jobs, no fake profiles-just real, meaningful work.",
      // detailedContent: "We maintain high quality standards by verifying all freelancers' skills and ensuring all project opportunities are legitimate, creating a trustworthy environment for both parties."
    },
    {
      title: "Secure Indian Payments",
      content: "Get your payments on time, every time, through trusted Indian gateways.",
      // detailedContent: "We support all major Indian payment methods including UPI, net banking, and digital wallets, ensuring secure and hassle-free transactions with proper tax compliance."
    },
    {
      title: "Work Local or Global",
      content: "Serve clients anywhere in India or even work for overseas businesses, all from your home.",
      // detailedContent: "Whether you want to work with local businesses in your city or expand globally, our platform offers both options with proper support for different time zones and cultural requirements."
    }
  ];

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? -1 : index);
  };


  const features = [
    {
      icon: <FaLaptopCode size={24} className="text-white" />,
      title: "Easy-to-use Platform",
      desc: "Post freelance jobs or find work quickly, without any hassles.",
    },
    {
      icon: <FaTasks size={24} className="text-white" />,
      title: "Wide Range of Services",
      desc: "IT, content writing, graphic designing, SEO, digital marketing.",
    },
    {
      icon: <FaUserCheck size={24} className="text-white" />,
      title: "Verified Freelancers",
      desc: "No fake profiles, only real work and real people.",
    },
    {
      icon: <FaRupeeSign size={24} className="text-white" />,
      title: "Fast & Secure Payments",
      desc: "Get paid easily through UPI, Paytm, or direct bank transfer.",
    },
    {
      icon: <FaHandsHelping size={24} className="text-white" />,
      title: "Complete Project Support",
      desc: "Simple communication, transparent progress tracking, full support.",
    },
  ];
  return (
    <>
      <Header />
      <section
        className="banner-section relative w-[95%] mx-auto h-[450px] flex items-center justify-center bg-cover bg-center my-5"
        style={{ backgroundImage: `url(${banner})`, borderRadius: "20px", overflow: "hidden" }}
      >
        {/* Top-right Sign Up Button */}


        {/* Content */}
        <div className="relative z-10 text-center px-4 md:px-10 max-w-7xl">
          <h1 className="text-white text-3xl sm:text-4xl md:text-3xl lg:text-5xl font-bold leading-tight">
            Bikwiz Infotech: India’s Own Freelance Platform<br />
          </h1>

          <p className="text-white text-base sm:text-lg mt-6 leading-relaxed">
            Welcome to Best freelancing platform, designed to bring together skilled freelancers and forward-thinking businesses.
            Whether you want to hire the best Indian freelancers or find freelance jobs in India, this is your go-to destination.
          </p>
        </div>
      </section>

      {/* Our purpose section */}
      <div className="w-full bg-white">
        {/* Main container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
          {/* Our purpose section */}
          <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-8 lg:gap-12">
            {/* Text Content Section */}
            <div className="flex-1 text-center lg:text-left px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-6 sm:mb-8 leading-tight">
                Our Purpose
              </h2>

              <div className="space-y-4 sm:space-y-6 text-gray-800 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
                <p>
                  At Bikwiz, we firmly believe freelancing is the future of work in India. With
                  Digital India and remote work growing rapidly, our aim is to create a platform
                  where Indian freelancers can shine, earn respect, and grow in their careers on
                  their own terms.
                </p>

                <p>
                  We are committed to supporting every Indian freelancer, from big cities to
                  small towns, by providing the right tools, trust, and transparency.
                </p>
              </div>
            </div>

          

            {/* Illustration Section */}
            <div className="flex-shrink-0 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-80 lg:h-80">
                <img
                  src={about1}
                  alt="Our Purpose Illustration"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* our vision section */}


      <div className="w-full bg-white">
        {/* Main container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
          {/* Our Vision Section */}
          <div className="mb-8 sm:mb-12 lg:mb-16">
            <div className="flex flex-col lg:flex-row gap-8 sm:gap-10 lg:gap-12 items-center">

              {/* Text Content - First on mobile/tablet, Second on desktop */}
              <div className="flex-1 lg:w-1/2 text-center lg:text-left px-4 sm:px-6 lg:px-8 order-1 lg:order-2">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-6 sm:mb-8 leading-tight">
                  Our Vision
                </h2>

                <div className="space-y-4 sm:space-y-6 text-gray-800 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  <p>
                    We dream of an India where freelancing is a respected, stable, and rewarding
                    career. A country where anyone, from metros to small towns, can use their
                    skills, work independently, and earn with pride.
                  </p>

                  <p>
                    Bikwiz Infotech is more than just a platform-it's a movement to empower
                    India's freelance talent, help local businesses grow, and create a strong digital
                    workforce for tomorrow.
                  </p>
                </div>
              </div>

              {/* Horizontal Divider - Only visible on mobile/tablet */}
              <div className="block lg:hidden w-full max-w-xs mx-auto order-2">
                <hr className="border-t-2 border-dashed border-gray-300" />
              </div>

              {/* Vertical Dashed Divider - Only visible on large screens */}
              <div className="hidden lg:block w-px bg-gray-300 border-l-2 border-dashed border-gray-300 my-8 order-3"></div>

              {/* Illustration - Second on mobile/tablet, First on desktop */}
              <div className="flex-shrink-0 lg:w-1/2 flex items-center justify-center px-4 sm:px-6 lg:px-8 order-3 lg:order-1">
                <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
                  <img
                    src={vision}
                    alt="Our Vision Illustration"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>



      <div className="max-w-7xl mx-auto px-6 py-16 bg-white">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-4" style={{ color: '#FF6B35' }}>
            Meet Our Team
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Highly professional and capable of running your business across all digital channels.
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow duration-300"
            style={{ marginLeft: '-24px' }}
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow duration-300"
            style={{ marginRight: '-24px' }}
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          {/* Cards Container */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${getTransformValue()}%)`,
                gap: '2rem'
              }}
            >
              {teamMembers.map((member, index) => (
                <div
                  key={member.id}
                  className="flex-shrink-0 px-4"
                  style={{
                    width: `calc(${100 / slidesToShow}% - 1.5rem)`
                  }}
                >
                  {/* Card Wrapper with hover group */}
                  <div className={`relative rounded-3xl overflow-hidden h-96 sm:h-112 lg:h-112 ${member.bgColor} group`}>
                    {/* Member Image */}
                    <div className="h-full overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Card Content - Hidden initially, shows on hover */}
                    <div className="absolute bottom-0 left-0 right-0 bg-white rounded-3xl p-6 m-4 transform translate-y-6 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      <div className="mb-2">
                        <h3 className="text-xl font-bold text-gray-900">
                          {member.name}
                        </h3>
                        <div className={`inline-block rounded text-sm font-medium ${member.highlighted ? 'text-orange-600' : 'text-orange-600'
                          }`}>
                          {member.role}
                        </div>
                      </div>

                      <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                        {member.description}
                      </p>

                      {/* Social Icons */}
                      <div className="flex space-x-3">
                        <a
                          href="#"
                          className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors duration-200"
                        >
                          <Facebook className="w-4 h-4 text-gray-600" />
                        </a>
                        <a
                          href="#"
                          className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors duration-200"
                        >
                          <Github className="w-4 h-4 text-gray-600" />
                        </a>
                        <a
                          href="#"
                          className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors duration-200"
                        >
                          <Linkedin className="w-4 h-4 text-gray-600" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: maxSlide + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-200 ${currentSlide === index ? 'bg-orange-500' : 'bg-gray-300'
                }`}
            />
          ))}
        </div>
      </div>


      <div className="bg-orange-500 py-3 overflow-hidden">
        <div className="py-5 relative">
          <div className="flex whitespace-nowrap animate-marquee">
            {/* Repeated logos for seamless scrolling */}
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex items-center gap-12 pr-12">
                <span className="flex items-center gap-2 text-white font-semibold">
                  <Shell className="w-5 h-5" /> SHELLS
                </span>
                <span className="flex items-center gap-2 text-white font-semibold">
                  <Search className="w-5 h-5" /> SmartFinder
                </span>
                <span className="flex items-center gap-2 text-white font-semibold">
                  <Zap className="w-5 h-5" /> Zoomerr
                </span>
                <span className="flex items-center gap-2 text-white font-semibold">
                  <Palette className="w-5 h-5" /> ArtVenue
                </span>
                <span className="flex items-center gap-2 text-white font-semibold">
                  <Contrast className="w-5 h-5" /> kontrastr
                </span>
                <span className="flex items-center gap-2 text-white font-semibold">
                  <Waves className="w-5 h-5" /> WAVESMARATHON
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>




      {/* What We Offer section */}
      <section className="py-16 bg-gray-50 relative overflow-hidden">
        {/* Background Shapes */}
        <div className="absolute top-0 left-0 w-40 h-40 bg-orange-100 rounded-full opacity-30 -z-10"></div>
        <div className="absolute bottom-0 right-0 w-60 h-60 bg-orange-100 rounded-full opacity-30 -z-10"></div>

        <div className="max-w-7xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-4">What We Offer</h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            Whether you're a client seeking quality results or a freelancer chasing your dreams,
            Bikwiz Infotech is built for your growth.
          </p>

          {/* Custom Grid Layout */}
          <div className="grid gap-8">
  {/* First row - 3 cards */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {features.slice(0, 3).map((item, index) => (
      <div
        key={index}
        className="bg-white relative p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-xl transition duration-300 ease-in-out overflow-hidden"
      >
        {/* Background shapes */}
        <div className="absolute top-0 right-0 w-16 h-16 bg-orange-100 rounded-bl-full opacity-40"></div>
        <div className="absolute bottom-0 left-0 w-16 h-16 bg-orange-100 rounded-tr-full opacity-40"></div>

        {/* Icon */}
        <div className="w-12 h-12 bg-orange-500 rounded-md flex items-center justify-center mx-auto mb-4 z-10 relative">
          {item.icon}
        </div>
        <h3 className="text-xl font-semibold mb-2 relative z-10">{item.title}</h3>
        <p className="text-gray-600 text-sm relative z-10">{item.desc}</p>
      </div>
    ))}
  </div>

  {/* Second row - 2 cards centered */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto justify-center">
    {features.slice(3, 5).map((item, index) => (
      <div
        key={index + 3}
        className="bg-white relative p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-xl transition duration-300 ease-in-out overflow-hidden"
      >
        {/* Background shapes */}
        <div className="absolute top-0 right-0 w-16 h-16 bg-orange-100 rounded-bl-full opacity-40"></div>
        <div className="absolute bottom-0 left-0 w-16 h-16 bg-orange-100 rounded-tr-full opacity-40"></div>

        {/* Icon */}
        <div className="w-12 h-12 bg-orange-500 rounded-md flex items-center justify-center mx-auto mb-4 z-10 relative">
          {item.icon}
        </div>
        <h3 className="text-xl font-semibold mb-2 relative z-10">{item.title}</h3>
        <p className="text-gray-600 text-sm relative z-10">{item.desc}</p>
      </div>
    ))}
  </div>
</div>

        </div>
      </section>




      {/* why choose section */}

      <div className="max-w-7xl mx-auto p-6 bg-white">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
            Why Choose Bikwiz?
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            With Bikwiz, you don't just work-you build your reputation and future.
          </p>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-12 items-start" style={{ alignItems: 'center' }}>
          {/* Team Image */}
          <div className="flex-shrink-0 lg:w-1/2">
            <div className="relative">
              <img
                src={teamImage}
                alt="Team collaborating"
                className="w-full h-80 lg:h-100 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Accordion Section */}
          <div className="flex-1 lg:w-1/2 space-y-4">
            {accordionData.map((item, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                {/* Accordion Header */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors duration-200 flex items-center justify-between"
                >
                  <div>
                    <h3 className="text-lg font-semibold text-orange-500 mb-1">
                      {item.title}
                    </h3>

                  </div>
                  <div className="flex-shrink-0 ml-4">
                    {openAccordion === index ? (
                      <ChevronUp className="w-5 h-5 text-orange-500" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-orange-500" />
                    )}
                  </div>
                </button>

                {/* Accordion Content */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${openAccordion === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                >
                  <div className="px-6 pb-4 pt-2 bg-gray-50">
                    <p className="text-gray-700 leading-relaxed">
                      {item.content}
                    </p>
                  </div>
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
  )
}