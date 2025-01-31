import React from "react";
import { Product } from "../../../../types/product";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

async function getProduct(slug: string): Promise<Product> {
  return client.fetch(
    `*[_type == "product" && slug.current == $slug][0]{
            _id,
            name,
            _type,
            image,
            price,
            description,
        }`,
    { slug }
  );
}

const ProductPage = async ({ params }: ProductPageProps) => {
  const { slug } = await params;
  const product = await getProduct(slug);

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="aspect-square">
          {product.image && (
            <Image
              src={urlFor(product.image).url()}
              alt={product.name}
              width={500}
              height={500}
              className="rounded-lg shadow-md"
            />
          )}
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold">{product.name}</h1>
          <p className="text-gray-500 text-2xl font-sans">
            Rs. {product.price}
          </p>
          <p className="text-sm font-normal">{product.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
