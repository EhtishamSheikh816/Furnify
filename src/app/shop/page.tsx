import React from "react";
import Image from "next/image";
import { CiSliderHorizontal } from "react-icons/ci";
import { IoGrid } from "react-icons/io5";
import { MdViewDay } from "react-icons/md";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbEllipsis,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Poppins } from "@next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["italic", "normal"],
});

<BreadcrumbEllipsis />;

const Shop = () => {
  return (
    <div className={poppins.className}>
      {/* BANNER SECTION */}
      <div className="pt-12 pb-20 relative flex justify-center items-center text-center">
        <div className="absolute inset-0">
          <Image
            src="\images\layoutImg.svg"
            width={1440}
            height={316}
            alt="Layout Image"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col relative z-10 mx-auto justify-center items-center">
          <Image
            src="\images\layLogo.svg"
            width={60}
            height={60}
            alt="Layout Logo"
          />
          <h1 className="text-4xl font-medium leading-0 mb-1">Shop</h1>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/" className="font-medium">
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Shop</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      {/* TOOLBAR SECTION */}

      {/* LEFT SECTION0 */}
      <div className="bg-[#FAF4F4] mt-10 flex flex-col gap-4 px-4 py-6 justify-center items-center md:flex-row md:px-16">
        <div className="flex flex-row items-center justify-center gap-5 md:w-2/4 md:justify-start">
          <button>
            <div className="flex items-center gap-2 justify-center">
              <span>
                <CiSliderHorizontal />
              </span>
              <span>Filter</span>
            </div>
          </button>
          <div className="flex flex-row items-center gap-4">
            <span>
              <IoGrid />
            </span>
            <span>
              <MdViewDay />
            </span>
            <span>|</span>
            <span>Showing 1–16 of 32 results</span>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="flex items-center gap-4 md:w-2/4 md:justify-end">
          {/* Items per page */}
          <label className={`text-sm text-black`}>Show</label>
          <select
            className="text-sm border px-2 py-1 rounded-md"
            defaultValue="16"
          >
            <option value="16">16</option>
            <option value="32">32</option>
            <option value="48">48</option>
          </select>

          {/* Sorting */}
          <label className={`text-sm text-black`}>Short by</label>
          <select
            className="text-sm border px-2 py-1 rounded-md"
            defaultValue="Default"
          >
            <option value="Default">Default</option>
            <option value="Price: Low to High">Price: Low to High</option>
            <option value="Price: High to Low">Price: High to Low</option>
            <option value="Newest">Newest</option>
          </select>
        </div>
      </div>

      {/* SHOP THINGS */}
      <div className="px-10">
        <div className="flex flex-col md:flex-row justify-between mt-5">
          <div className="flex flex-col items-center md:text-left md:w-1/4 md:justify-end">
            <Image
              src="/images/sofa_3.png"
              width={287}
              height={287}
              alt="sofa"
            />
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
            <p className="font-normal">
              Granite dining table with dining chair
            </p>
            <span className="font-semibold">Rs. 25,000.00</span>
          </div>
          <div className="flex flex-col items-center md:text-left md:w-1/4 md:justify-end">
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
        <div className="flex flex-col md:flex-row justify-between mt-8">
          <div className="flex flex-col items-center md:text-left md:w-1/4 md:justify-end">
            <Image
              src="/images/shop5.svg"
              width={287}
              height={287}
              alt="sofa"
            />
            <p className="font-normal">Trenton modular sofa_3</p>
            <span className="font-semibold">Rs. 25,000.00</span>
          </div>
          <div className="flex flex-col items-center md:text-left md:w-1/4 md:justify-end">
            <Image
              src="/images/shop6.svg"
              width={287}
              height={287}
              alt="dining"
            />
            <p className="font-normal">
              Granite dining table with dining chair
            </p>
            <span className="font-semibold">Rs. 25,000.00</span>
          </div>
          <div className="flex flex-col items-center md:text-left md:w-1/4 md:justify-end">
            <Image src="/images/shop7.svg" width={287} height={287} alt="bar" />
            <p className="font-normal">Outdoor bar table and stool</p>
            <span className="font-semibold">Rs. 25,000.00</span>
          </div>
          <div className="flex flex-col items-center md:text-left md:w-1/4 md:justify-end">
            <Image
              src="/images/shop8.svg"
              width={287}
              height={287}
              alt="teak"
            />
            <p className="font-normal">Plain console with teak mirror</p>
            <span className="font-semibold">Rs. 25,000.00</span>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between mt-8">
          <div className="flex flex-col items-center md:text-left md:w-1/4 md:justify-end">
            <Image
              src="/images/shop9.svg"
              width={287}
              height={287}
              alt="sofa"
            />
            <p className="font-normal">Trenton modular sofa_3</p>
            <span className="font-semibold">Rs. 25,000.00</span>
          </div>
          <div className="flex flex-col items-center md:text-left md:w-1/4 md:justify-end">
            <Image
              src="/images/shop10.svg"
              width={240}
              height={240}
              alt="dining"
              // className="pt-14"
            />
            <p className="font-normal">
              Granite dining table with dining chair
            </p>
            <span className="font-semibold">Rs. 25,000.00</span>
          </div>
          <div className="flex flex-col items-center md:text-left md:w-1/4 md:justify-end">
            <Image
              src="/images/shop11.svg"
              width={287}
              height={287}
              alt="bar"
            />
            <p className="font-normal">Outdoor bar table and stool</p>
            <span className="font-semibold">Rs. 25,000.00</span>
          </div>
          <div className="flex flex-col items-center md:text-left md:w-1/4 md:justify-end ">
            <Image
              src="/images/shop12.svg"
              width={287}
              height={287}
              alt="teak"
            />
            <p className="font-normal">Plain console with teak mirror</p>
            <span className="font-semibold">Rs. 25,000.00</span>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between mt-8">
          <div className="flex flex-col items-center md:text-left md:w-1/4 md:justify-end">
            <Image
              src="/images/sidetable.png"
              width={250}
              height={250}
              alt="sofa"
              className="pr-10 pt-8"
            />
            <p className="font-normal">Trenton modular sofa_3</p>
            <span className="font-semibold">Rs. 25,000.00</span>
          </div>
          <div className="flex flex-col items-center md:text-left md:w-1/4 md:justify-end">
            <Image
              src="/images/sofa_4.svg"
              width={287}
              height={287}
              alt="dining"
            />
            <p className="font-normal">
              Granite dining table with dining chair
            </p>
            <span className="font-semibold">Rs. 25,000.00</span>
          </div>
          <div className="flex flex-col items-center md:text-left md:w-1/4 md:justify-end">
            <Image
              src="/images/shop15.svg"
              width={287}
              height={287}
              alt="bar"
            />
            <p className="font-normal">Outdoor bar table and stool</p>
            <span className="font-semibold">Rs. 25,000.00</span>
          </div>
          <div className="flex flex-col items-center md:text-left md:w-1/4 md:justify-end">
            <Image
              src="/images/shop16.svg"
              width={287}
              height={287}
              alt="teak"
            />
            <p className="font-normal">Plain console with teak mirror</p>
            <span className="font-semibold">Rs. 25,000.00</span>
          </div>
        </div>
      </div>
      <div className="flex justify-center my-20">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>

      {/* PROPERTIES */}
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
    </div>
  );
};

export default Shop;
