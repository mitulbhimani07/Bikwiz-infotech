import React from 'react'
import { Link } from 'react-router-dom' // Add this import for Link
import banner from '../assets/images/aboutUsBanner.jpg';
import Header from '../header-footer/Header';

export default function AboutUs() {
  return (
    <div>
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
    </div>
  )
}