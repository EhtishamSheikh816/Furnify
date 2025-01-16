import React from "react";
import Image from "next/image";
import { FaRegClock } from "react-icons/fa";
import { CiCalendar } from "react-icons/ci";

const Blog = () => {
  return (
    <div className="mx-8 md:mx-0 bg-white">
      <div className="flex flex-col justify-center text-center my-9">
        <h3 className="font-medium text-4xl mb-3">Our Blogs</h3>
        <p className="font-medium text-base text-[#9f9f9f] px-2">
          Find a bright ideal to suit your taste with our great selection
        </p>
      </div>
      <div className="flex flex-col gap-14 md:flex-row justify-evenly">
        <div className="flex flex-col items-center md:w-1/4">
          <Image src="/images/blog1.png" width={393} height={393} alt="" />
          <div className="flex flex-col gap-4 items-center mt-4">
            <span>Going all-in with millennial design</span>
            <button className="font-medium text-lg md:text-xl border-b-2 border-[#000000]">
              Read More
            </button>
            <div className="flex gap-3">
              <div className="flex gap-1">
                <FaRegClock />
                <span className="text-xs">5 min</span>
              </div>
              <div className="flex gap-1">
                <CiCalendar />
                <span className="text-xs">12th Oct 2022</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center md:w-1/4">
          <Image src="/images/blog2.png" width={393} height={393} alt="" />
          <div className="flex flex-col gap-4 items-center mt-4">
            <span>Going all-in with millennial design</span>
            <button className="font-medium text-lg md:text-xl border-b-2 border-[#000000]">
              Read More
            </button>
            <div className="flex gap-3">
              <div className="flex gap-1">
                <FaRegClock />
                <span className="text-xs">5 min</span>
              </div>
              <div className="flex gap-1">
                <CiCalendar />
                <span className="text-xs">12th Oct 2022</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center md:w-1/4">
          <Image src="/images/blog3.png" width={393} height={393} alt="" />
          <div className="flex flex-col gap-4 items-center mt-4">
            <span>Going all-in with millennial design</span>
            <button className="font-medium text-lg md:text-xl border-b-2 border-[#000000]">
              Read More
            </button>
            <div className="flex gap-3">
              <div className="flex gap-1">
                <FaRegClock />
                <span className="text-xs">5 min</span>
              </div>
              <div className="flex gap-1">
                <CiCalendar />
                <span className="text-xs">12th Oct 2022</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center my-14">
        <button className="font-medium text-lg md:text-xl border-b-2 border-[#000000]">
          View All Post
        </button>
      </div>
    </div>
  );
};

export default Blog;
