import React from "react";
import { CiSearch, CiHeart } from "react-icons/ci";
import { MdOutlinePersonAdd } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex bg-[#FBEBB5] p-3 justify-end fixed w-full z-10">
      <div className="md:flex justify-end w-3/5 hidden ">
        <ul className="flex justify-end gap-16 font-medium text-base text-[#000000]">
          <li>
            <Link href="" className="hover:text-gray-900">
              Home
            </Link>
          </li>
          <li>
            <Link href="#blog" className="hover:text-gray-900">
              Shop
            </Link>
          </li>
          <li>
            <Link href="" className="hover:text-gray-900">
              About
            </Link>
          </li>
          <li>
            <Link href="" className="hover:text-gray-900">
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex items-end text-[28px] text-[#000000] gap-8 md:w-2/5 md:justify-center">
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
    </div>
  );
};

export default Header;
