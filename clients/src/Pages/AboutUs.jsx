import React from 'react'
import { Link } from 'react-router-dom' // Add this import for Link
import banner from '../assets/images/aboutUsBanner.jpg';
import Header from '../header-footer/Header';
import about1 from '../assets/images/about.svg';
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
    </>



  )
}