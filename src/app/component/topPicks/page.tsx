import React from "react";
import Image from "next/image";

const Toppicks = () => {
  return (
    <div className="pt-8 bg-white">
      <div className="flex flex-col justify-center text-center">
        <h3 className="font-medium text-4xl mb-3">Top Picks For You</h3>
        <p className="font-medium text-base text-[#9f9f9f] px-2">
          Find a bright ideal to suit your taste with our great selection of
          suspension, floor and table lights.
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-between mt-8">
        <div className="flex flex-col items-center md:text-left md:w-1/4">
          <Image src="/images/sofa_3.png" width={287} height={287} alt="sofa" />
          <p className="font-normal">Trenton modular sofa_3</p>
          <span className="font-semibold">Rs. 25,000.00</span>
        </div>
        <div className="flex flex-col items-center md:text-left md:w-1/4 md:justify-end">
          <Image
            src="/images/dining.png"
            width={287}
            height={287}
            alt="dining"
          />
          <p className="font-normal">Granite dining table with dining chair</p>
          <span className="font-semibold">Rs. 25,000.00</span>
        </div>
        <div className="flex flex-col items-center md:text-left md:w-1/4">
          <Image src="/images/bar.png" width={287} height={287} alt="bar" />
          <p className="font-normal">Outdoor bar table and stool</p>
          <span className="font-semibold">Rs. 25,000.00</span>
        </div>
        <div className="flex flex-col items-center md:text-left md:w-1/4 md:justify-end">
          <Image src="/images/teak.png" width={287} height={287} alt="teak" />
          <p className="font-normal">Plain console with teak mirror</p>
          <span className="font-semibold">Rs. 25,000.00</span>
        </div>
      </div>
      <div className="flex justify-center my-14">
        <button className="font-medium text-lg md:text-xl border-b-2 border-[#000000]">
          View More
        </button>
      </div>
    </div>
  );
};

export default Toppicks;
