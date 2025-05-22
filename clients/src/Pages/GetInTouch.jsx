import React from 'react';
import Header from '../header-footer/Header';
import Footer from '../header-footer/Footer';

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
    </>
  );
}
