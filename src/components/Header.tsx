"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="custom-header flex justify-between items-center px-4 py-2">
      <div>
        <Image
          src="/frames/dne-logo-white.png"
          alt="Footer logo"
          width="80"
          height="30"
        />
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex justify-between">
        <Link
          href={"/home"}
          className="text-gray-100 hover:text-gray-300 ml-8 transition-colors duration-200"
        >
          Home
        </Link>
        <Link
          href={"/services"}
          className="text-gray-100 hover:text-gray-300 ml-8 transition-colors duration-200"
        >
          Services
        </Link>
        <Link
          href={"/industries"}
          className="text-gray-100 hover:text-gray-300 ml-8 transition-colors duration-200"
        >
          Industries
        </Link>
        <Link
          href={"/about-us"}
          className="text-gray-100 hover:text-gray-300 ml-8 transition-colors duration-200"
        >
          About Us
        </Link>
        <Link
          href={"/use-cases"}
          className="text-gray-100 hover:text-gray-300 ml-8 transition-colors duration-200"
        >
          Use Cases
        </Link>
        {/* <Link
          href={"/blog"}
          className="text-gray-100 hover:text-gray-300 ml-8"
        >
          Blog
        </Link> */}
        <Link
          href={"/contact"}
          className="text-gray-100 hover:text-gray-300 ml-8 transition-colors duration-200"
        >
          Contact
        </Link>
      </div>

      {/* Mobile Burger Menu Button */}
      <button
        className="md:hidden text-gray-100 hover:text-gray-300 transition-colors duration-200"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6 transition-transform duration-300"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            className={`transition-all duration-300 ${
              isMenuOpen ? "opacity-0" : "opacity-100"
            }`}
            d="M4 6h16M4 12h16M4 18h16"
          />
          <path
            className={`transition-all duration-300 ${
              isMenuOpen ? "opacity-100" : "opacity-0"
            }`}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      {/* Mobile Navigation Menu */}
      <div
        className={`absolute  top-full left-0 right-0 bg-[rgba(24,33,58,1)] border border-[rgba(47,56,94,1)] rounded-xl md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="flex flex-col p-4">
          <Link
            href={"/home"}
            className="text-gray-100 hover:text-gray-300 py-2 transition-colors duration-200"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href={"/services"}
            className="text-gray-100 hover:text-gray-300 py-2 transition-colors duration-200"
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </Link>
          <Link
            href={"/industries"}
            className="text-gray-100 hover:text-gray-300 py-2 transition-colors duration-200"
            onClick={() => setIsMenuOpen(false)}
          >
            Industries
          </Link>
          <Link
            href={"/about-us"}
            className="text-gray-100 hover:text-gray-300 py-2 transition-colors duration-200"
            onClick={() => setIsMenuOpen(false)}
          >
            About Us
          </Link>
          <Link
            href={"/use-cases"}
            className="text-gray-100 hover:text-gray-300 py-2 transition-colors duration-200"
            onClick={() => setIsMenuOpen(false)}
          >
            Use Cases
          </Link>
          <Link
            href={"/blog"}
            className="text-gray-100 hover:text-gray-300 py-2 transition-colors duration-200"
            onClick={() => setIsMenuOpen(false)}
          >
            Blog
          </Link>
          <Link
            href={"/contact"}
            className="text-gray-100 hover:text-gray-300 py-2 transition-colors duration-200"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
