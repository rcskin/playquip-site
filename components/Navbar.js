"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = (
    <>
      <li className="md:inline-block">
        <Link href="/about" className="block py-2 md:py-2 md:px-4">
          About Us
        </Link>
      </li>
      <li className="md:inline-block">
        <Link href="/products" className="block py-2 md:py-2 md:px-4">
          Products
        </Link>
      </li>
      <li className="md:inline-block">
        <Link href="/services" className="block py-2 md:py-2 md:px-4">
          Services
        </Link>
      </li>
      <li className="md:inline-block">
        <Link href="/designs" className="block py-2 md:py-2 md:px-4">
          Designs
        </Link>
      </li>
      <li className="md:inline-block">
        <Link href="/contact" className="block py-2 md:py-2 md:px-4">
          Contact
        </Link>
      </li>
    </>
  );

  return (
    <nav className="bg-white shadow-md">
      {/* Logo Section */}
      <div className="container mx-auto px-4 py-4 flex justify-center">
        <Link href="/">
          <img
            src="/images/playquip_logo.jpg"
            alt="Playquip Logo"
            className="h-12"
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

          {/* Menu Items */}
          <ul className="md:flex md:justify-center md:items-center w-full relative">
            {/* Mobile menu toggling */}
            <div 
              className={`md:flex md:gap-6 ${isMenuOpen ? "block" : "hidden"} md:block`}
              data-testid="mobile-menu"
            >
              {menuItems}
            </div>

            {/* Wish List aligned to the far right on desktop, inside menu on mobile */}
            <li className={`md:absolute md:right-0 ${isMenuOpen ? "block" : "hidden"} md:block`}>
              <Link href="/wishlist" className="flex items-center gap-2" data-testid="wishlist-link">
                Wish List
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}