import { sanityFetch } from "@/sanity/lib/fetch";
import { allProduct } from "@/sanity/lib/querries";
import { Poppins } from "@next/font/google";
import Image from "next/image";
import React from "react";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["italic", "normal"],
});

interface Product {
  _type: string;
  name: string;
  imagePath: string;
  stockLevel: number;
  category: string;
  _id: number;
  price: number;
  description: string;
  isFeaturedProduct: boolean;
}

const ShopProducts = async () => {
  const products: Product[] = await sanityFetch({ query: allProduct });
  console.log(products);

  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 ${poppins.className}`}
    >
      {products.map((product) => (
        <div
          className="flex flex-col px-2 py-2 shadow-md shadow-slate-600 md:justify-end"
          key={product._id}
        >
          <h2 className="text-2xl text-gray-600 font-bold mb-2">
            {product.name}
          </h2>
          <Image
            src={product.imagePath}
            alt={product.name}
            width={200}
            height={200}
            className="m-auto"
          />
          <p className="font-semibold text-gray-600 mb-2">
            {product.description}
          </p>
          <p className="text-lg font-bold text-red-600">
            Price: ${product.price}
          </p>
          <p className="text-lg text-gray-600">Category: {product.category}</p>
          <p className="text-lg text-gray-600">
            Stock Level: {product.stockLevel}
          </p>
          <p
            className={`text-lg text-gray-600 ${product.isFeaturedProduct ? "text-red-600" : "text-gray-600"}`}
          >
            Featured: {product.isFeaturedProduct ? "Yes" : "No"}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ShopProducts;
