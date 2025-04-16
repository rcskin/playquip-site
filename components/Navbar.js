//Nav bar component

"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = (
    <>
      <li className="md:inline-block">
        <Link
          href="/about"
          onClick={() => setIsMenuOpen(false)}
          className="block py-2 md:py-2 md:px-4 text-blue-950 font-semibold sm:text-lg md:text-xl"
        >
          About Us
        </Link>
      </li>
      <li className="md:inline-block">
        <Link
          href="/products"
          onClick={() => setIsMenuOpen(false)}
          className="block py-2 md:py-2 md:px-4 text-blue-950 font-semibold sm:text-lg md:text-xl"
        >
          Products
        </Link>
      </li>
      <li className="md:inline-block">
        <Link
          href="/services"
          onClick={() => setIsMenuOpen(false)}
          className="block py-2 md:py-2 md:px-4 text-blue-950 font-semibold sm:text-lg md:text-xl"
        >
          Services
        </Link>
      </li>
      <li className="md:inline-block">
        <Link
          href="/designs"
          onClick={() => setIsMenuOpen(false)}
          className="block py-2 md:py-2 md:px-4 text-blue-950 font-semibold sm:text-lg md:text-xl"
        >
          Designs
        </Link>
      </li>
      <li className="md:inline-block">
        <Link
          href="/contact"
          onClick={() => setIsMenuOpen(false)}
          className="block py-2 md:py-2 md:px-4 text-blue-950 font-semibold sm:text-lg md:text-xl"
        >
          Contact
        </Link>
      </li>
    </>
  );

  return (
    <nav className="bg-white shadow-md">
      {/* Logo Section */}
      <div className="container mx-auto px-2 py-2 flex justify-center">
        <Link href="/">
          <img
            src="/images/playquip_logo2.jpg"
            alt="Playquip Logo"
            className="h-48"
            data-testid="logo"
          />
        </Link>
      </div>

      {/* Navigation Menu */}
      <div className="border-t">
        <div className="container mx-auto px-4">
          {/* Mobile Menu Button */}
          <div className="flex items-center justify-end md:hidden py-2">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-800 focus:outline-none"
              data-testid="mobile-menu-button"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                )}
              </svg>
            </button>
          </div>


          {/* Menu Container */}
           <div
            className={`w-full ${isMenuOpen ? "block" : "hidden"} md:flex md:items-center md:relative`}
          >
            {/* Menu items centered */}
            <ul className="flex flex-col md:flex-row justify-center w-full text-blue-950">
              {menuItems}
            </ul> 

            {/* Wish List pushed to the far right on desktop and justify-left on mobile */}
            <div className={`mt-2 md:mt-0 ${isMenuOpen ? "block" : "hidden"} md:block md:absolute md:right-2 flex justify-start`}>

              <Link
                href="/wishlist"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-2 text-base sm:text-lg md:text-xl text-blue-950 font-semibold"
                data-testid="wishlist-link"
              >
                Wish List
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
