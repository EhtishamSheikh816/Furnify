import React from "react";
import Image from "next/image";
import { CiSliderHorizontal } from "react-icons/ci";
import { IoGrid } from "react-icons/io5";
import { MdViewDay } from "react-icons/md";
import ShopProducts from "../component/shopProducts/page";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
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

const Shop = () => {
  return (
    <div className={poppins.className}>
      {/* BANNER SECTION */}
      <div className="pt-12 pb-20 relative flex justify-center items-center text-center">
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
          <h1 className="text-4xl font-medium leading-0 mb-1">Shop</h1>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
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
      <div className="bg-[#FAF4F4] mt-10 flex flex-col gap-4 px-4 py-6 justify-center items-center md:flex-row md:px-16">
        <div className="flex flex-row items-center justify-center gap-5 md:w-2/4 md:justify-start">
          <button aria-label="Filter Options">
            <div className="flex items-center gap-2 justify-center">
              <CiSliderHorizontal />
              <span>Filter</span>
            </div>
          </button>
          <div className="flex flex-row items-center gap-4">
            <IoGrid />
            <MdViewDay />
            <span>|</span>
            <span>Showing 1–16 of 32 results</span>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="flex items-center gap-4 md:w-2/4 md:justify-end">
          <label htmlFor="itemsPerPage" className="text-sm text-black">
            Show
          </label>
          <select
            id="itemsPerPage"
            className="text-sm border px-2 py-1 rounded-md"
            defaultValue="16"
          >
            <option value="16">16</option>
            <option value="32">32</option>
            <option value="48">48</option>
          </select>

          <label htmlFor="sortingOptions" className="text-sm text-black">
            Sort by
          </label>
          <select
            id="sortingOptions"
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
      <div className="mx-8 my-8">
        <ShopProducts />
      </div>

      {/* PAGINATION */}
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
    </div>
  );
};

export default Shop;
