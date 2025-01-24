import React from "react";
import Image from "next/image";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const Contact = () => {
  return (
    <div>
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
          <h1 className="text-4xl font-medium leading-0 mb-1">Contact</h1>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Contact</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
      <div>
        
      </div>
    </div>
  );
};

export default Contact;
