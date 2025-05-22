import React from 'react';
import Header from '../header-footer/Header';
import Footer from '../header-footer/Footer';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaBehance, FaReact } from 'react-icons/fa';


export default function GetInTouch() {
  return (
    <>
      <Header />
      <section className="relative h-[400px] w-[95%] mx-auto my-10 rounded-4xl flex items-center justify-center overflow-hidden bg-gradient-to-r from-orange-500 from-orange-500 to-[#000]">
        {/* Left abstract shape */}
        <div className="absolute -left-24 top-1/2 transform -translate-y-1/2 w-96 h-96 bg-gradient-to-tr from-yellow-400 via-pink-500 from-orange-500 opacity-70 blur-3xl rounded-full rotate-45 z-0"></div>

        {/* Right abstract shape */}
        <div className="absolute -right-20 top-1/3 w-96 h-96 bg-gradient-to-br from-orange-500 from-orange-500 from-orange-500 opacity-60 blur-3xl rounded-full z-0"></div>

        {/* Content on top */}
        <div className="relative z-10 bg-white/10 backdrop-blur-md p-10 rounded-2xl border border-white/20 text-white text-center shadow-lg">
          <h1 className="text-4xl font-bold">Get In Touch</h1>
        </div>
      </section>
      <Footer />
      <Header />
      <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4 py-10" >
        <div className="max-w-7xl w-full grid md:grid-cols-2 gap-10" style={{ alignItems: 'center' }}>
          {/* Left Side - Contact Info */}
          <div className="space-y-6">
            {/* <p className="text-sm text-gray-500">/ get in touch /</p> */}
            <h1 className="text-4xl font-bold text-black leading-snug">
              We are always ready <br />
              to help you and <br />
              answer your <br />
              questions
            </h1>
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
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Full name"
                className="w-full border-b border-gray-300 bg-transparent py-2 focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full border-b border-gray-300 bg-transparent py-2 focus:outline-none"
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full border-b border-gray-300 bg-transparent py-2 focus:outline-none"
              />
              <textarea
                placeholder="Message"
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
