import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-full flex justify-end flex-col-reverse items-center pt-24 md:flex-row bg-[#FBEBB5] h-screen">
      <div className="flex flex-col gap-6 justify-center text-center md:text-start md:w-2/4">
        <h1 className="font-medium text-4xl md:text-[64px] md:leading-[75px] text-[#000000] md:pl-40 md:mb-4">
          Rocket single seater
        </h1>
        <div>
          <button className="font-medium text-black text text-lg md:text-xl border-b-2 border-[#000000] mt-4 md:mt-0 md:ml-40">
            Shop Now
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center md:w-2/4">
        <Image
          src="/images/Rocket single seater 1.svg"
          width={853}
          height={1000}
          alt="Rocket single seater"
          className="w-full md:w-auto"
        />
      </div>
    </div>
  );
};

export default Hero;
