"use client";
import Link from "next/link";
import React from "react";
import { FaFacebookF, FaWhatsapp, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-600 text-gray-200 py-10">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">Ruhi Resin Art 🎨</h2>
          <p className="text-sm">
            Discover unique and handcrafted resin art pieces for your home and loved ones.
            Each piece is made with love and creativity.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/categories" className="hover:text-blue-500">Categories</Link>
            </li>
            <li>
              <Link href="/" className="hover:text-blue-500">Home</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-blue-500">About Us</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue-500">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            {/* Facebook */}
            <a
              href="https://www.facebook.com/share/15qmhD5zGA/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-800 rounded-full hover:bg-blue-500"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>

            {/* WhatsApp */}
            <a
              href="https://chat.whatsapp.com/IPKcssG2MTxLkHhBSJi2kG"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-800 rounded-full hover:bg-green-500"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/rohii9910?igsh=d296aHN6c2QyYzZt"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-800 rounded-full hover:bg-pink-500"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm">
        <p>© {new Date().getFullYear()} Ruhi Resin Art. All Rights Reserved.</p>
        <p className="mt-2">Made with ❤️ by Ruhi Resin Art Team</p>
      </div>
    </footer>
  );
};

export default Footer;
