'use client';
import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <section className="min-h-screen bg-gradient-to-r from-pink-100 to-purple-300 flex items-center justify-center p-8 relative">
      {/* Background animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-teal-100 via-pink-200 to-purple-300 animate-pulse"></div>
      
      <div className="bg-white shadow-xl rounded-lg w-full max-w-5xl p-8 transform transition-transform hover:scale-105 duration-300 relative z-10">
        <h1 className="text-4xl font-extrabold text-center text-teal-900 underline decoration-8 mb-8 tracking-wide">
          About Us
        </h1>
        <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-12">
          {/* Image Section */}
          <div className="flex-shrink-0 relative">
            <div className="relative w-72 h-72 md:w-96 md:h-96 overflow-hidden rounded-full shadow-lg border-4 border-teal-500">
            <Image
  src="/about-image.jpeg"
  alt="Resin Art"
  fill  
  style={{ objectFit: "cover" }} // ✅ objectFit inline CSS mein likho
  className="transform scale-110 hover:scale-125 transition-all duration-300"
/>

            </div>
            <div className="absolute bottom-2 left-2 text-white text-xl font-bold">
              <p className="bg-teal-600 bg-opacity-50 p-2 rounded-lg">Resin Art</p>
            </div>
          </div>

          {/* Content Section */}
          <div className="md:ml-8 space-y-4">
            <p className="text-black text-lg md:text-xl font-medium leading-relaxed mb-4">
              Welcome to <span className="font-bold text-teal-600">Ruhi Resin Art</span>! We specialize in creating unique and beautiful resin art pieces that add elegance and charm to your life. From stunning necklaces to intricate wall art, every product is crafted with love and precision.
            </p>
            <p className="text-black text-lg md:text-xl font-medium leading-relaxed mb-4">
              Our journey began with a passion for creativity and a love for art. Each design reflects our dedication to quality and innovation, ensuring that every piece is as special as you are.
            </p>
            <p className="text-black text-lg md:text-xl font-medium leading-relaxed">
              Thank you for supporting our small business. Your love and encouragement mean the world to us!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
