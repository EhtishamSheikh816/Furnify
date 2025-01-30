import { groq } from "next-sanity";

export const allProduct = groq`*[_type == "product"]`;
export const fourProduct = groq`*[_type == "product"][0..3]`;
