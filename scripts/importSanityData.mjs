import { createClient } from "@sanity/client";
import fetch from "node-fetch";

// Initialize Sanity client
const client = createClient({
  projectId: "anh862vo",
  dataset: "production",
  useCdn: true, // Set to true if you want faster reads
  apiVersion: "2025-01-13",
  token:
    "skPn60FzZUznP80inlM6355qvXWr73Odb4VGky9YsyN72S47lxRCoGbiU4yUk2OfEutKSogBbK5Adjbv1VKX2b382OxGOf21R09AWXXX3wCAS5OJCi6o4iUUSEzG1drspPQ3rKvW0y89ZlG88kaCfzHnNuUo2m10SCd73rJ3R9OqcKSS4IIZ", // Replace with your Sanity token
});

// Function to upload an image to Sanity
async function uploadImageToSanity(imageUrl) {
  try {
    console.log(`Uploading image: ${imageUrl}`);

    const response = await fetch(imageUrl);
    if (!response.ok) {
      throw new Error(`Failed to fetch image: ${imageUrl}`);
    }

    const buffer = await response.arrayBuffer();
    const bufferImage = Buffer.from(buffer);

    const asset = await client.assets.upload("image", bufferImage, {
      filename: imageUrl.split("/").pop(),
    });

    console.log(`Image uploaded successfully: ${asset._id}`);
    return asset._id;
  } catch (error) {
    console.error("Failed to upload image:", imageUrl, error);
    return null;
  }
}

// Function to upload a single product to Sanity
async function uploadProduct(product) {
  try {
    const imageId = await uploadImageToSanity(product.imagePath);

    if (imageId) {
      const document = {
        _type: "product",
        id: product.id,
        name: product.name,
        image: {
          _type: "image",
          asset: {
            _ref: imageId,
          },
        },
        price: parseFloat(product.price), // Ensure the price is a number
        description: product.description,
        discountPercentage: product.discountPercentage,
        isFeaturedProduct: product.isFeaturedProduct,
        stockLevel: product.stockLevel,
        category: product.category,
      };

      const createdProduct = await client.create(document);
      console.log(
        `Product "${product.name}" uploaded successfully:`,
        createdProduct
      );
    } else {
      console.log(
        `Product "${product.name}" skipped due to image upload failure.`
      );
    }
  } catch (error) {
    console.error("Error uploading product:", error);
  }
}

// Function to fetch products from the provided API and upload them to Sanity
async function migrateProducts() {
  try {
    const response = await fetch(
      "https://template-0-beta.vercel.app/api/product"
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const products = await response.json();

    for (const product of products) {
      await uploadProduct(product);
    }
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}

// Start the migration
migrateProducts();
