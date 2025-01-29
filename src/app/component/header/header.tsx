"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CiHeart, CiSearch } from "react-icons/ci";
import { MdOutlinePersonAdd } from "react-icons/md";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-[#FBEBB5] sticky top-0 z-10 shadow-md py-4 px-6 md:px-10 lg:px-20 flex justify-between items-center  w-full ">
      {/* Mobile Menu Icon */}
      <button
        className="md:hidden text-gray-700 hover:text-[#B88E2F]"
        onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={
              isMobileMenuOpen
                ? "M6 18L18 6M6 6l12 12"
                : "M4 6h16M4 12h16M4 18h16"
            }
          />
        </svg>
      </button>

      {/* Desktop Navigation */}
      <nav className="md:flex justify-end w-3/5 hidden ">
        <ul className="flex justify-end gap-16 font-medium text-base text-[#000000]">
          <li>
            <Link href="/" className="hover:text-[#B88E2F]">
              Home
            </Link>
          </li>
          <li>
            <Link href="/shop" className="hover:text-[#B88E2F]">
              Shop
            </Link>
          </li>
          <li>
            <Link href="" className="hover:text-[#B88E2F]">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-[#B88E2F]">
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <nav className="absolute top-16 left-0 w-full bg-[#FBEBB5] shadow-md flex flex-col items-center text-gray-700 font-medium md:hidden z-50">
          <Link
            href="/"
            className="py-2 hover:text-[#B88E2F]"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/shop"
            className="py-2 hover:text-[#B88E2F]"
            onClick={() => setMobileMenuOpen(false)}
          >
            Shop
          </Link>
          <Link
            href="/blog"
            className="py-2 hover:text-[#B88E2F]"
            onClick={() => setMobileMenuOpen(false)}
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="py-2 hover:text-[#B88E2F]"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </Link>
        </nav>
      )}

      <div className="flex items-end text-[28px] text-[#000000] gap-8 md:w-2/5 md:justify-end">
        <Link href="">
          <MdOutlinePersonAdd />
        </Link>
        <Link href="">
          <CiSearch />
        </Link>
        <Link href="">
          <CiHeart />
        </Link>
        <Link href="">
          <AiOutlineShoppingCart />
        </Link>
      </div>
    </header>
  );
};

export default Header;
