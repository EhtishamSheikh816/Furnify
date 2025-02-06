export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2025-01-23";

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  "Missing environment variable: NEXT_PUBLIC_SANITY_DATASET"
);

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  "Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID"
);
export const token = assertValue(
  "skPn60FzZUznP80inlM6355qvXWr73Odb4VGky9YsyN72S47lxRCoGbiU4yUk2OfEutKSogBbK5Adjbv1VKX2b382OxGOf21R09AWXXX3wCAS5OJCi6o4iUUSEzG1drspPQ3rKvW0y89ZlG88kaCfzHnNuUo2m10SCd73rJ3R9OqcKSS4IIZ",
  "Missing environment variable: SANITY_API_TOKEN"
);

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage);
  }

  return v;
}
