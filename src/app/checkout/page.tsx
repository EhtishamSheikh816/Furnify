"use client";

import React, { useEffect, useState } from "react";
import { Product } from "../../../types/product";
import { getCartItems } from "../actions/action";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import HeadLine from "../component/headLine/page";
import Swal from "sweetalert2";
import order from "@/sanity/schemaTypes/order";
import { client } from "@/sanity/lib/client";

const CheckOut = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [discount, setDiscount] = useState<number>(0);
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    zipCode: "",
    city: "",
  });

  const [formsErrors, setFormsErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    phone: false,
    address: false,
    zipCode: false,
    city: false,
  });

  useEffect(() => {
    setCartItems(getCartItems());
    const appliedDiscount = localStorage.getItem("appliedDiscount");
    if (appliedDiscount) {
      setDiscount(Number(appliedDiscount));
    }
  }, []);

  const total = cartItems.reduce(
    (total, item) => total + item.price * item.stockLevel,
    0
  );
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [e.target.id]: e.target.value,
    });
  };

  const validationForm = () => {
    const errors = {
      firstName: !formValues.firstName,
      lastName: !formValues.lastName,
      email: !formValues.email,
      phone: !formValues.phone,
      address: !formValues.address,
      zipCode: !formValues.zipCode,
      city: !formValues.city,
    };
    setFormsErrors(errors);
    return Object.values(errors).every((error) => !error);
  };

  const handlePlaceOrder = async () => {
    Swal.fire({
      title: "Processing your order...",
      text: "Please wait a moment.",
      icon: "info",
      showCancelButton: false,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Proceed",
    }).then((result) => {
      if (result.isConfirmed) {
        if (validationForm()) {
          localStorage.removeItem("appliedDiscount");
          Swal.fire(
            "Success",
            "Your order has been successfully placed",
            "success"
          );
        } else {
          Swal.fire(
            "Error!",
            "Please fill in all the fields before preceeding.",
            "error"
          );
        }
      }
    });

    const orderData = {
      _type: "order",
      firstName: formValues.firstName,
      lastName: formValues.lastName,
      address: formValues.address,
      city: formValues.city,
      zipCode: formValues.zipCode,
      phone: formValues.phone,
      email: formValues.email,
      cartItems: cartItems.map((item) => ({
        _type: "reference",
        _ref: item._id,
      })),
      total: total,
      discount: discount,
      orderDate: new Date().toISOString,
    };
    try {
      await client.create(orderData);
      localStorage.removeItem("appliedDiscount");
    } catch (error) {
      console.error("error creating order", error);
    }
  };

  return (
    <div>
      {/* BANNER SECTION */}
      <div className="pt-20 pb-24 relative flex justify-center items-center text-center">
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
          <h1 className="text-4xl font-medium leading-0 mb-1">Checkout</h1>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/cart">Cart</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Checkout</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white border rounded-lg p-6 space-y-6">
              <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
              {cartItems.length > 0 ? (
                cartItems.map((item) => (
                  <div
                    key={item._id}
                    className="flex items-center gap-4 py-3 border-b"
                  >
                    <div className="w-16 h-16 rounded overflow-hidden">
                      {item.image && (
                        <Image
                          src={urlFor(item.image).url()}
                          alt={item.name}
                          width={50}
                          height={50}
                          className="object-cover w-full h-full"
                        />
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm font-medium">{item.name}</h3>
                      <p className="text-xs text-gray-500">
                        Quantity : {item.stockLevel}
                      </p>
                    </div>
                    <p>${item.price * item.stockLevel}</p>
                  </div>
                ))
              ) : (
                <p className="text-xs font-medium">No items in cart</p>
              )}
              <div className="text-right pt-4">
                <p className="text-sm">
                  SubTotal:
                  <span className="font-medium">${total}</span>
                </p>
                <p className="text-sm">
                  Discount:
                  <span className="font-medium">${discount}</span>
                </p>
                <p className="text-lg font-semibold">
                  Total : ${total.toFixed(2)}
                </p>
              </div>
            </div>

            {/* Billing Section */}
            <div className="bg-white border rounded-lg p-6 space-y-6">
              <h2 className="text-xl font-semibold">Billing Information</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName">First Name </label>
                  <input
                    id="firstName"
                    placeholder="Enter your first name"
                    value={formValues.firstName}
                    onChange={handleInputChange}
                  />
                  {formsErrors.firstName && (
                    <p className="text-red-500 text-sm">
                      First Name is required.
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="lastName">Last Name </label>
                  <input
                    id="lastName"
                    placeholder="Enter your lastName name"
                    value={formValues.lastName}
                    onChange={handleInputChange}
                  />
                  {formsErrors.lastName && (
                    <p className="text-red-500 text-sm">
                      Last Name is required.
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="address">Address </label>
                  <input
                    id="address"
                    placeholder="Enter your address"
                    value={formValues.address}
                    onChange={handleInputChange}
                  />
                  {formsErrors.address && (
                    <p className="text-red-500 text-sm">Address is required.</p>
                  )}
                </div>
                <div>
                  <label htmlFor="city">City </label>
                  <input
                    id="city"
                    placeholder="Enter your city name"
                    value={formValues.city}
                    onChange={handleInputChange}
                  />
                  {formsErrors.city && (
                    <p className="text-red-500 text-sm">City is required.</p>
                  )}
                </div>
                <div>
                  <label htmlFor="zipCode">Zip Code </label>
                  <input
                    id="zipCode"
                    placeholder="Enter your zip code"
                    value={formValues.zipCode}
                    onChange={handleInputChange}
                  />
                  {formsErrors.zipCode && (
                    <p className="text-red-500 text-sm">
                      Zip code is required.
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="phone">Phone </label>
                  <input
                    id="phone"
                    placeholder="Enter your phone number"
                    value={formValues.phone}
                    onChange={handleInputChange}
                  />
                  {formsErrors.phone && (
                    <p className="text-red-500 text-sm">
                      Phone number is required.
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="email">email </label>
                  <input
                    id="email"
                    placeholder="Enter your email"
                    value={formValues.email}
                    onChange={handleInputChange}
                  />
                  {formsErrors.email && (
                    <p className="text-red-500 text-sm">Email is required.</p>
                  )}
                </div>
                <button
                  className="w-full h-12 bg-blue-500 hover:bg-blue-700 text-white"
                  onClick={handlePlaceOrder}
                >
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-12">
        <HeadLine />
      </div>
    </div>
  );
};

export default CheckOut;
