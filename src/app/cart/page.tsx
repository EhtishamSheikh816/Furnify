"use client";

import React, { useEffect, useState } from "react";
import { Product } from "../../../types/product";
import HeadLine from "../component/headLine/page";
import {
  getCartItems,
  removeFromCart,
  updateCartQuantity,
} from "../actions/action";
import Swal from "sweetalert2";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const Cart = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  useEffect(() => {
    setCartItems(getCartItems());
  }, []);

  const handleRemove = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will not be able to recover this item!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        removeFromCart(id);
        setCartItems(getCartItems());
        Swal.fire("Removed!", "Item has been removed.", "success");
      }
    });
  };

  const handleQuantityChange = (id: string, quantity: number) => {
    updateCartQuantity(id, quantity);
    setCartItems(getCartItems());
  };

  const handleIncrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product) {
      handleQuantityChange(id, product.stockLevel + 1);
    }
  };

  const handleDecrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product && product.stockLevel > 1) {
      handleQuantityChange(id, product.stockLevel - 1);
    }
  };

  const calculatedTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.stockLevel,
      0
    );
  };

  const router = useRouter();
  const handleProceed = () => {
    Swal.fire({
      title: "Proceed to Checkout?",
      text: "Please review your cart before checkout",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Proceed!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          "Success",
          "Your order has been successfully placed",
          "success"
        );
        router.push("/checkout");
        setCartItems([]);
      }
    });
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
          <h1 className="text-4xl font-medium leading-0 mb-1">Cart</h1>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Cart</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-6 mt-8">
          Shopping Cart
        </h1>
        {cartItems.length === 0 ? (
          <div className="text-center h-[50vh]">
            <h2 className="text-center text-2xl font-semibold mt-6 mb-4 text-gray-500">
              Your cart is empty.
            </h2>
            <Link
              href={"/shop"}
              className="text-[#ddaa2f] font-normal text-lg text-center m-auto"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              {cartItems.map((item) => (
                <div
                  key={item._id}
                  className="flex items-center bg-white shadow-md rounded-lg p-4 mb-4 "
                >
                  {item.image && (
                    <Image
                      src={urlFor(item.image).url()}
                      alt={item.name}
                      width={500}
                      height={500}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                  )}
                  <div className="flex-1 ml-4">
                    <h2 className="text-lg font-semibold">{item.name}</h2>
                    <p className="text-gray-500">
                      Price: ${item.price.toFixed(2)}
                    </p>
                    <div>
                      <button
                        onClick={() => handleDecrement(item._id)}
                        className="px-2 py-1 mr-1 bg-gray-200 hover:bg-slate-300 rounded"
                      >
                        -
                      </button>
                      <span>{item.stockLevel}</span>
                      <button
                        onClick={() => handleIncrement(item._id)}
                        className="px-2 py-1 ml-1 bg-gray-200 hover:bg-slate-300 rounded"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => handleRemove(item._id)}
                    className="ml-4 text-red-600 hover:text-red-800"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            <div className="bg-white shadow-md rounded-lg p-4">
              <h2 className="text-lg font-bold mb-4">Cart Summary</h2>
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Subtotal:</span>
                <span className="font-semibold">
                  ${calculatedTotal().toFixed(2)}
                </span>
              </div>
              <button
                onClick={handleProceed}
                className="w-full bg-blue-600 text-white py-2 mt-4 rounded hover:bg-blue-700"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="mt-16 mb-14">
        <HeadLine />
      </div>
    </div>
  );
};

export default Cart;
