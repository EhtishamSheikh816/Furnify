import { defineQuery } from "next-sanity";

export const allProduct = defineQuery(`*[_type == "product"]{
    _type,
        _id,
        name,
        "imagePath": image.asset->url,
        price,
        description,
        discountPercentage,
        isFeaturedProduct,
        stockLevel,
        category 
        }`);

export const fourProduct = defineQuery(`*[_type == "product"][0..3]{

        _type,
        _id,
        name,
        "imagePath": image.asset->url,
        price,
        description,
        discountPercentage,
        isFeaturedProduct,
        stockLevel,
        category 
    }`);
