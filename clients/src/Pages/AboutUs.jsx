import React from 'react'
import { Link } from 'react-router-dom' // Add this import for Link
import banner from '../assets/images/aboutUsBanner.jpg';
import Header from '../header-footer/Header';
import about1 from'../assets/images/about.svg';

export default function AboutUs() {
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
          <h1 className="text-white text-3xl sm:text-4xl md:text-3xl lg:text-6xl font-bold leading-tight">
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
    </>


    
  )
}