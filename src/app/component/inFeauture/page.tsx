import React from "react";
import Image from "next/image";
import Button from "../button/page";

const inFeauture = () => {
  return (
    <div className="md:px-20 bg-[#FAF4F4] py-10 flex flex-col md:flex-row justify-between pb-26">
      <div className="flex w-full md:w-2/4 flex-col items-center md:items-start mb-8 md:mb-0">
        <Image
          src="/images/sidetable.png"
          height={300}
          width={470}
          alt="Granite square side table 1"
          className="w-full md:w-auto justify-center items-center flex"
        />
        <h1 className="font-medium text-2xl md:text-4xl mb-3">Side table</h1>
        <Button
          text="Shop Now"
          className="font-medium text-lg md:text-xl border-b-2 border-[#000000] mt-4 md:mt-0"
        />
      </div>
      <div className="flex w-full md:w-2/4 flex-col items-center md:items-start mb-8 md:mb-0">
        <Image
          src="/images/sidetable2.png"
          height={30}
          width={570}
          alt="Granite square side table 1"
          className="w-full md:w-auto justify-center items-center flex md:mt-8"
        />
        <h1 className="font-medium text-2xl md:text-4xl mb-3">Side table</h1>
        <Button
          text="Shop Now"
          className="font-medium text-lg md:text-xl border-b-2 border-[#000000] mt-4 md:mt-0"
        />
      </div>
    </div>
  );
};

export default inFeauture;
