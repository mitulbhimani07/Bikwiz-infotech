import React, { useState } from 'react'
import { Link } from 'react-router-dom' // Add this import for Link
import banner from '../assets/images/aboutUsBanner.jpg';
import Header from '../header-footer/Header';
import about1 from '../assets/images/about.svg';
import { ChevronLeft, ChevronRight, Facebook, Github, Linkedin } from 'lucide-react';
import Deepika from '../assets/images/Deepika.png';
import Akshay from '../assets/images/Akashay.jpg';


export default function AboutUs() {
    const [currentSlide, setCurrentSlide] = useState(0);

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
        }
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % Math.max(1, teamMembers.length - 2));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + Math.max(1, teamMembers.length - 2)) % Math.max(1, teamMembers.length - 2));
    };

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

            {/* Team Section */}

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
                            className="flex transition-transform duration-500 ease-in-out gap-8"
                            style={{ transform: `translateX(-${currentSlide * 33.333}%)` }}
                        >
                            {teamMembers.map((member, index) => (
                                <div key={member.id} className="flex-shrink-0 w-70 sm:w-80 lg:w-97">
                                    {/* Card Wrapper with hover group */}
                                    <div className={`relative rounded-3xl overflow-hidden h-[450px] ${member.bgColor} group`}>
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
                    {Array.from({ length: Math.max(1, teamMembers.length - 2) }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`w-3 h-3 rounded-full transition-colors duration-200 ${currentSlide === index ? 'bg-orange-500' : 'bg-gray-300'
                                }`}
                        />
                    ))}
                </div>
            </div>

        </>



    )
}