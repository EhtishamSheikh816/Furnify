import { createClient } from "next-sanity";
import { client } from "./client";

const clent = createClient({
  projectId: "anh862vo",
  dataset: "production",
  apiVersion: "2022-03-01",
  useCdn: true,
  token:
    "skPn60FzZUznP80inlM6355qvXWr73Odb4VGky9YsyN72S47lxRCoGbiU4yUk2OfEutKSogBbK5Adjbv1VKX2b382OxGOf21R09AWXXX3wCAS5OJCi6o4iUUSEzG1drspPQ3rKvW0y89ZlG88kaCfzHnNuUo2m10SCd73rJ3R9OqcKSS4IIZ",
});

export async function sanityFetch({
  querry,
  params = {},
}: {
  querry: string;
  params?: any;
}) {
  return await client.fetch(querry, params);
}
