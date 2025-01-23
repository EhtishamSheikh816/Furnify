import React from "react";
import FourProduct from "../fourProduct/page";

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
        <FourProduct />
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
