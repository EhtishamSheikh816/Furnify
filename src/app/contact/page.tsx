import React from "react";
import Image from "next/image";
import HeadLine from "../component/headLine/page";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from "react-icons/fa";

const Contact = () => {
  return (
    <div>
      {/* BANNER SECTION */}
      <div className="pt-24 pb-24 relative flex justify-center items-center text-center">
        <div className="absolute inset-0">
          <Image
            src="/images/layoutImg.svg"
            width={1440}
            height={316}
            alt="Layout Image"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col relative z-10 mx-auto justify-center items-center">
          <Image
            src="/images/layLogo.svg"
            width={60}
            height={60}
            alt="Layout Logo"
          />
          <h1 className="text-4xl font-medium leading-0 mb-1">Contact</h1>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Contact</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
      {/* HEADING */}
      <div className="text-center mx-6 mb-32 mt-20 md:mx-56">
        <h1 className="text-3xl font-semibold mb-3">Get In Touch With Us</h1>
        <p className="text-gry text-base">
          For More Information About Our Product & Services. Please Feel Free To
          Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not
          Hesitate!
        </p>
      </div>
      {/* MAIN CONTACT */}
      <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center my-20">
        {/* Addrees */}
        <div className="flex flex-col gap-10 mx-8 mb-16">
          <div className="flex flex-row">
            <div>
              <FaMapMarkerAlt className="text-2xl text-gray-500 mr-5" />
            </div>
            <div>
              <h4 className="text-2xl font-medium">Address</h4>
              <p className="text-base font-normal">
                236 5th SE Avenue, New York NY10000, United States
              </p>
            </div>
          </div>
          <div className="flex flex-row">
            <div>
              <FaPhoneAlt className="text-2xl text-gray-500 mr-5" />
            </div>
            <div>
              <h4 className="text-2xl font-medium">Phone</h4>
              <p className="text-base font-normal">
                Mobile: +(84) 546-6789 <br /> Hotline: +(84) 456-6789
              </p>
            </div>
          </div>
          <div className="flex flex-row">
            <div>
              <FaClock className="text-2xl text-gray-500 mr-5" />
            </div>
            <div>
              <h4 className="text-2xl font-medium">Working Time</h4>
              <p className="text-base font-normal">
                Monday-Friday: 9:00 - 22:00
                <br />
                Saturday-Sunday: 9:00 - 21:00
              </p>
            </div>
          </div>
        </div>
        {/* contact */}
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="mb-2 text-gray-700 font-medium">
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Enter your name"
              className="border border-gray-300 rounded-lg px-4 py-2 w-80 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="mb-2 text-gray-700 font-medium">
              Email address
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your Email"
              className="border border-gray-300 rounded-lg px-4 py-2 w-80 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="mb-2 text-gray-700 font-medium">
              Subject
            </label>
            <input
              id="name"
              type="text"
              placeholder="Enter your name"
              className="border border-gray-300 rounded-lg px-4 py-2 w-80 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="w-full max-w-xs gap-2">
            <h2 className="font-medium text-gray-800 mb-4">Your Feedback</h2>
            <textarea
              placeholder="Write your feedback here..."
              rows={3}
              className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <button className="text-gray-800 border border-gray-600 font-bold py-1 w-full md:w-44 rounded-lg">
              Submit
            </button>
          </div>
        </div>
      </div>
      <div className="mb-10">
        <HeadLine />
      </div>
    </div>
  );
};

export default Contact;
