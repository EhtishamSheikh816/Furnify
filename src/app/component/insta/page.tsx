import React from "react";
import Image from "next/image";

const Insta = () => {
  return (
    <div className="relative py-20 px-6 flex justify-center items-center text-center">
      <div className="absolute inset-0">
        <Image
          src="/images/insta.png"
          width={1000}
          height={1000}
          alt="Insta Bacground"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col gap-4 items-center">
        <h1 className="text-4xl font-bold text-black md:text-5xl">
          Our Instagram
        </h1>
        <p className="text-xl font-normal">Follow our store on Instagram</p>
        <button
          type="button"
          className="px-5 py-2 rounded-full bg-white shadow-md shadow-black hover:text-slate-300 "
        >
          Follow Us
        </button>
      </div>
    </div>
  );
};

export default Insta;
