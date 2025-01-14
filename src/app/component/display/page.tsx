import React from "react";
import Image from "next/image";

const Display = () => {
  return (
    <div className="bg-[#FFF9E5] py-10 md:px-20 flex flex-col md:flex-row md:items-center">
      <div className="flex flex-col items-center md:w-2/3">
        <Image src="/images/sofa_4.svg" width={983} height={799} alt="Sofa 4" />
      </div>
      <div className="flex flex-col items-center mt-8 md:w-5/12">
        <p className="text-2xl">New Arrivals</p>
        <h2 className="font-bold text-5xl">Asgaard sofa</h2>
        <button className="border border-black py-2 px-14 mt-8">
          Order Now
        </button>
      </div>
    </div>
  );
};

export default Display;
