'use client';
import React from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp, FaTiktok } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="min-h-screen bg-gradient-to-r from-blue-200 to-slate-400 flex items-center justify-center p-8">
      <div className="bg-white/80 backdrop-blur-md shadow-2xl rounded-3xl w-full max-w-4xl p-10 border border-white/40">
        <h1 className="text-4xl font-extrabold text-center text-teal-900 drop-shadow-md underline decoration-8 mb-8">Contact Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="flex flex-col space-y-6 text-black pt-[20px]">
            <div className="flex items-center space-x-4">
              <span className="text-blue-600 text-2xl">🏡</span>
              <p className="text-lg font-semibold">North Karachi, Sector-4, Karachi, Pakistan</p>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-blue-600 text-2xl">📞</span>
              <p className="text-lg font-semibold">+92 319 3017997</p>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-blue-600 text-2xl">✉️</span>
              <p className="text-lg font-semibold">rahilashabbir80@gmail.com</p>
            </div>
            {/* Social Media Icons */}
            <div className="flex space-x-6 mt-6 text-2xl">
              <a href="https://www.facebook.com/share/15qmhD5zGA/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:scale-110 transition-transform duration-300">
                <FaFacebook />
              </a>
              <a href="https://www.instagram.com/rohii9910?igsh=d296aHN6c2QyYzZt" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:scale-110 transition-transform duration-300">
                <FaInstagram />
              </a>
              <a href="https://chat.whatsapp.com/IPKcssG2MTxLkHhBSJi2kG" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:scale-110 transition-transform duration-300">
                <FaWhatsapp />
              </a>
              <a href="https://www.tiktok.com/@ruhii.ruhii1?_t=ZN-8tVAq4ajwaA&_r=1" target="_blank" rel="noopener noreferrer" className="text-black hover:scale-110 transition-transform duration-300">
                <FaTiktok />
              </a>
            </div>
          </div>
          {/* Contact Form */}
          <form className="flex flex-col space-y-4 text-gray-900">
            <input
              type="text"
              placeholder="Your Name"
              className="border border-blue-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-md"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border border-blue-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-md"
            />
            <textarea
              placeholder="Your Order in Detail"
              rows={4}
              className="border border-blue-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-md"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-700 text-white py-3 px-6 rounded-lg hover:bg-blue-500 hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
