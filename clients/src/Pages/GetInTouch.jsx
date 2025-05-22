import React from 'react'
import Header from '../header-footer/Header'
import Footer from '../header-footer/Footer'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaBehance, FaReact } from 'react-icons/fa';


export default function GetInTouch() {
  return (
    <>
      <Header />
      <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4 py-10" >
        <div className="max-w-7xl w-full grid md:grid-cols-2 gap-10" style={{alignItems: 'center'}}>
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


      <Footer />
    </>
  )
}
