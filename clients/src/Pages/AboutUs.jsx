import React, { useState } from 'react'
import { Link } from 'react-router-dom' // Add this import for Link
import banner from '../assets/images/aboutUsBanner.jpg';
import Header from '../header-footer/Header';
import about1 from '../assets/images/about.svg';
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
      <div className="max-w-7xl mx-auto p-6 bg-white">
        {/* Main container with dashed border */}
        <div className="">
          <div className="flex flex-col lg:flex-row">
            {/* Text Content Section */}
            <div className="flex-1 p-8 lg:p-12">
              <h2 className="text-5xl font-bold text-black mb-8 leading-tight">
                Our Purpose
              </h2>

              <div className="space-y-6 text-gray-800 text-lg leading-relaxed max-w-2xl">
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

            {/* Vertical Dashed Divider */}
            <div className="hidden lg:block w-px  my-8"></div>

            {/* Illustration Section */}
            <div className="flex-shrink-0 p-8 lg:p-12 flex items-center justify-center">
              <div className="relative w-80 h-80">
                <img src={about1} alt="Our Purpose Illustration" className="w-full h-full object-contain" />
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="bg-orange-500 py-3 overflow-hidden">
  <div className="max-w-7xl mx-auto py-5">
    <marquee
      behavior="scroll"
      direction="left"
      scrollAmount="6"
      className="text-white font-semibold whitespace-nowrap"
    >
      <span className="inline-flex items-center gap-12 mx-4">
        <span className="flex items-center gap-2">
          <Shell className="w-5 h-5" /> SHELLS
        </span>
        <span className="flex items-center gap-2">
          <Search className="w-5 h-5" /> SmartFinder
        </span>
        <span className="flex items-center gap-2">
          <Zap className="w-5 h-5" /> Zoomerr
        </span>
        <span className="flex items-center gap-2">
          <Palette className="w-5 h-5" /> ArtVenue
        </span>
        <span className="flex items-center gap-2">
          <Contrast className="w-5 h-5" /> kontrastr
        </span>
        <span className="flex items-center gap-2">
          <Waves className="w-5 h-5" /> WAVESMARATHON
        </span>

        {/* Repeat again to ensure seamlessness */}
        <span className="flex items-center gap-2">
          <Shell className="w-5 h-5" /> SHELLS
        </span>
        <span className="flex items-center gap-2">
          <Search className="w-5 h-5" /> SmartFinder
        </span>
        <span className="flex items-center gap-2">
          <Zap className="w-5 h-5" /> Zoomerr
        </span>
        <span className="flex items-center gap-2">
          <Palette className="w-5 h-5" /> ArtVenue
        </span>
        <span className="flex items-center gap-2">
          <Contrast className="w-5 h-5" /> kontrastr
        </span>
        <span className="flex items-center gap-2">
          <Waves className="w-5 h-5" /> WAVESMARATHON
        </span>
      </span>
    </marquee>
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
                  {/* Simple Background Shapes - Screenshot Style */}
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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {features.slice(3, 5).map((item, index) => (
                <div
                  key={index + 3}
                  className="bg-white relative p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-xl transition duration-300 ease-in-out overflow-hidden"
                >
                  {/* Simple Background Shapes - Screenshot Style */}
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
      <Footer />


    {/* our vision section */}


     <div className="max-w-7xl mx-auto p-4 bg-white">
      {/* Our Vision Section */}
      <div className="mb-16">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Illustration */}
          <div className="flex-shrink-0 lg:w-1/2">
            <div className="relative w-full max-w-md mx-auto">
              <img 
                src={vision} 
                alt="Our Vision Illustration" 
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="flex-1 lg:w-1/2">
            <h2 className="text-5xl font-bold text-black mb-8 leading-tight">
              Our Vision
            </h2>
            
            <div className="space-y-6 text-gray-800 text-lg leading-relaxed">
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
        </div>
      </div>

    </div>


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
      <div className="flex flex-col lg:flex-row gap-12 items-start" style={{alignItems:'center'}}>
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
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openAccordion === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
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

    </>



  )
}