"use client";
import { FiShoppingBag } from "react-icons/fi";
import React, { useContext } from "react";
import Cart from "./Cart";
import Link from "next/link";
import { FiHelpCircle } from "react-icons/fi";
import { FaTag } from "react-icons/fa";
import { CartContext } from "../context/CartContext";

const Navbar = () => {
  // Define proper types for the context values
  const { totalQuantity, showCart, setShowCart } = useContext(CartContext) as {
    totalQuantity: number;
    showCart: boolean;
    setShowCart: React.Dispatch<React.SetStateAction<boolean>>;
  };

  const handleCick = () => {
    setShowCart(!showCart);
  };

  return (
    <>
      <nav className="w-full bg-red-300 shadow-md fixed top-0 left-0 z-50">
        <div className="container mx-auto px-4 h-[80px] flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-black hover:text-gray-600">
            Ruhi Resin Art 🎨
          </Link>

          {/* Navigation Links */}
          <ul className="hidden md:flex items-center space-x-6 text-gray-800">
            <li>
              <Link href="/" className="hover:text-blue-600 font-semibold">
                Home
              </Link>
            </li>

            <li>
              <Link href="/about" className="hover:text-blue-600 font-semibold">
                About
              </Link>
            </li>

            <li>
              <Link href="/contact" className="hover:text-blue-600 font-semibold">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/categories" className="flex items-center space-x-2 hover:text-blue-600 font-semibold">
                <FaTag />
                <span>Categories</span>
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-blue-600 font-semibold flex items-center">
                <FiHelpCircle size={20} className="mr-2" /> FAQ
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy" className="hover:text-blue-600 font-semibold">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms&condition" className="hover:text-blue-600 font-semibold">
                Terms & Conditions
              </Link>
            </li>
          </ul>
          <button className="cart-icon" onClick={handleCick}>
            <FiShoppingBag />
            <span className="cart-item-qty">{totalQuantity}</span>
          </button>
          <Link href="/login" className="text-blue-600 hover:underline">
            Login
          </Link>
          <Link href="/signup" className="text-blue-600 hover:underline">
            Sign Up
          </Link>
        </div>

        {/* Mobile Dropdown Menu */}
        <div className="md:hidden">
          <ul className="flex flex-col items-center space-y-4 mt-4">
            <li>
              <Link href="/" className="hover:text-blue-600">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-blue-600">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue-600">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {showCart && <Cart />}
    </>
  );
};

export default Navbar;
