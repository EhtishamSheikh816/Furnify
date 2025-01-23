import React from "react";

const HeadLine = () => {
  return (
    <div className="flex flex-col gap-8 text-center px-4 py-14 mb-6 bg-[#FAF4F4] md:flex-row md:text-left md:px-8">
      <div className="md:w-3/6">
        <h1 className="text-3xl font-medium pb-3">Free Delivery</h1>
        <p className="text-xl font-normal text-[#9F9F9F]">
          For all oders over $50, consectetur adipim scing elit.
        </p>
      </div>
      <div className="md:w-3/6">
        <h1 className="text-3xl font-medium pb-3">90 Days Return</h1>
        <p className="text-xl font-normal text-[#9F9F9F]">
          If goods have problems, consectetur adipim scing elit.
        </p>
      </div>
      <div className="md:w-3/6">
        <h1 className="text-3xl font-medium pb-3">Secure Payment</h1>
        <p className="text-xl font-normal text-[#9F9F9F]">
          100% secure payment, consectetur adipim scing elit.
        </p>
      </div>
    </div>
  );
};

export default HeadLine;
