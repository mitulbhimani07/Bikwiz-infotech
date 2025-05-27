import React, { useState } from 'react';
import Header from '../header-footer/Header';
import Footer from '../header-footer/Footer';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaBehance, FaReact } from 'react-icons/fa';
import banner from '../assets/images/getintouch.jpg';
import { ContactUs } from '../API/Api';
import toast from 'react-hot-toast';



export default function GetInTouch() {

  const [contact,setcontact]=useState({
    fullname:'',
    email:'',
    subject:'',
    message:''
  })

  const handleChange=(e)=>{
    setcontact({...contact,[e.target.name]:e.target.value})
  }

  const handleSubmit=async(e)=>{
    e.preventDefault();
    try{
      const res=await ContactUs(contact);
      console.log("res---------",res);
      toast.success("Sent Message SuccessFully!!")
      setcontact({
        fullname:'',
        email:'',
        subject:'',
        message:''
      })
    }catch(error){
      console.log("Error submitting form:", error);
      toast.error("Something Went Wrong!!")
    }

  }

  return (
    <>
      <Header />
      <section
        className="banner-section relative w-[95%] mx-auto h-[450px] flex items-center justify-center bg-cover bg-center my-5"
        style={{ backgroundImage: `url(${banner})`, borderRadius: "20px", overflow: "hidden" }}
      >
        {/* Top-right Sign Up Button */}


        {/* Content */}
        <div className="relative z-10 text-center px-4 md:px-10 max-w-7xl ">
          <h1 className="text-white text-3xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Get in Touch 
          </h1>

          <p className="text-white text-base sm:text-lg mt-6 leading-relaxed">
            Looking to hire top talent or land quality projects? Whether you're expanding your team or building your freelance career, get in touch, we connect passionate freelancers and ambitious clients for long-term, successful collaborations.
          </p>

          {/* <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to='/login' className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-full transition">
              Hire Freelancer
            </Link>
            <Link to='/login' className="border border-white hover:bg-white hover:text-black text-white font-semibold py-2 px-6 rounded-full transition">
              Start Earning
            </Link>
          </div> */}
        </div>
      </section>
      
      <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4 py-10" >
        <div className="max-w-7xl w-full grid md:grid-cols-2 gap-10" style={{ alignItems: 'center' }}>
          {/* Left Side - Contact Info */}
          <div className="space-y-6">
            {/* <p className="text-sm text-gray-500">/ get in touch /</p> */}
            <h1 className="text-4xl font-bold text-black leading-snug">
              
            </h1>
            <h5 className="text-3xl md:text-4xl font-bold text-black w-fit">
              We are always ready <br />
            <span className="text-amber-500">to help you and</span><br />
             <span className="text-amber-500">answer </span>your<br /> 
              questions  
            </h5>
            <p className="text-gray-500">
              Pacific hake false trevally queen parrotfish black prickleback <br />
              mosshead warbonnet sweepers! Greenling sleeper.
            </p>

            <div className="grid grid-cols-2 gap-6 text-sm text-gray-700">
              <div>
                <h3 className="font-semibold mb-1">Call Center</h3>
                <p>800 100 955 20 34</p>
                <p>+1 (123) 800-234-5678</p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Our Location</h3>
                <p>USA, New York – 1060</p>
                <p>Str. First Avenue 1</p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Email</h3>
                <p>neuros@email.co</p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Social network</h3>
                <div className="flex space-x-3 mt-2">
                  <a href="#" className="w-8 h-8 flex items-center justify-center bg-gray-100  text-black hover:bg-black hover:text-white transition">
                    <FaFacebookF size={14} />
                  </a>
                  <a href="#" className="w-8 h-8 flex items-center justify-center bg-gray-100  text-black hover:bg-black hover:text-white transition">
                    <FaTwitter size={14} />
                  </a>
                  <a href="#" className="w-8 h-8 flex items-center justify-center bg-gray-100   text-black hover:bg-black hover:text-white transition">
                    <FaLinkedinIn size={14} />
                  </a>

                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="bg-gray-100 p-8 rounded-xl shadow-sm">
            <h2 className="text-lg font-semibold text-gray-800">Get in Touch</h2>
            <p className="text-sm text-gray-500 mb-6">
              Define your goals and identify areas where AI can add <br />
              value to your business
            </p>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Full name"
                name='fullname'
                value={contact.fullname}
                onChange={handleChange}
                className="w-full border-b border-gray-300 bg-transparent py-2 focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                name='email'
                value={contact.email}
                onChange={handleChange}
                className="w-full border-b border-gray-300 bg-transparent py-2 focus:outline-none"
              />
              <input
                type="text"
                placeholder="Subject"
                name='subject'
                value={contact.subject}
                onChange={handleChange}
                className="w-full border-b border-gray-300 bg-transparent py-2 focus:outline-none"
              />
              <textarea
                placeholder="Message"
                name='message'
                value={contact.message}
                onChange={handleChange}
                rows={4}
                className="w-full border-b border-gray-300 bg-transparent py-2 resize-none focus:outline-none"
              />
              <button
                type="submit"
                className="bg-black text-white px-6 py-2 rounded-full mt-4 hover:bg-gray-800 transition-all duration-300"
              >
                ➔ Send a message
              </button>
            </form>
          </div>
        </div>
      </div>






      {/* add map */}

      <section className="banner-section relative w-[95%] mx-auto h-[410px] flex items-center justify-center bg-cover bg-center my-5 rounded-3xl overflow-hidden">
        <div className="relative z-10 w-full h-full rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.7556546098226!2d72.83626827343991!3d21.201863481814105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04ef7edcfbd1f%3A0x93edc2884741b879!2s6R2Q%2BPFH%20Delhi%20Gate%2C%20Japan%20Market%2C%20Begampura%2C%20Surat%2C%20Gujarat%20395008!5e0!3m2!1sen!2sin!4v1747892495191!5m2!1sen!2sin&style=element:geometry%7Ccolor:0x212121&style=element:labels.icon%7Cvisibility:off&style=element:labels.text.fill%7Ccolor:0x757575&style=element:labels.text.stroke%7Ccolor:0x212121&style=feature:administrative%7Celement:geometry%7Ccolor:0x757575&style=feature:administrative.country%7Celement:labels.text.fill%7Ccolor:0x9e9e9e&style=feature:administrative.land_parcel%7Cvisibility:off&style=feature:administrative.locality%7Celement:labels.text.fill%7Ccolor:0xbdbdbd&style=feature:poi%7Celement:labels.text.fill%7Ccolor:0x757575&style=feature:poi.park%7Celement:geometry%7Ccolor:0x181818&style=feature:poi.park%7Celement:labels.text.fill%7Ccolor:0x616161&style=feature:poi.park%7Celement:labels.text.stroke%7Ccolor:0x1b1b1b&style=feature:road%7Celement:geometry.fill%7Ccolor:0x2c2c2c&style=feature:road%7Celement:labels.text.fill%7Ccolor:0x8a8a8a&style=feature:road.arterial%7Celement:geometry%7Ccolor:0x373737&style=feature:road.highway%7Celement:geometry%7Ccolor:0x3c3c3c&style=feature:road.highway.controlled_access%7Celement:geometry%7Ccolor:0x4e4e4e&style=feature:road.local%7Celement:labels.text.fill%7Ccolor:0x616161&style=feature:transit%7Celement:labels.text.fill%7Ccolor:0x757575&style=feature:water%7Celement:geometry%7Ccolor:0x000000&style=feature:water%7Celement:labels.text.fill%7Ccolor:0x3d3d3d"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </section>
      <Footer />
    </>
  );
}
