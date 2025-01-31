import { Product } from "../../../types/product";

export const addToCart = (product: Product) => {
  const cart: Product[] = JSON.parse(localStorage.getItem("cart") || "[]");
  const existingProductIndex = cart.findIndex(
    (item) => item._id === product._id
  );

  if (existingProductIndex > -1) {
    cart[existingProductIndex].stockLevel += 1;
  } else {
    cart.push({
      ...product,
      stockLevel: 1,
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
};

export const removeFromCart = (productId: string) => {
  let cart: Product[] = JSON.parse(localStorage.getItem("cart") || "[]");
  cart = cart.filter((item) => item._id !== productId);
  localStorage.setItem("cart", JSON.stringify(cart));
};

export const updateCartQuantity = (productID: string, quantity: number) => {
  const cart: Product[] = JSON.parse(localStorage.getItem("cart") || "[]");
  const productIndex = cart.findIndex((item) => item._id === productID);

  if (productIndex > -1) {
    cart[productIndex].stockLevel = quantity;
    localStorage.setItem("cart", JSON.stringify(cart));
  }
};

export const getCartItems = (): Product[] => {
  return JSON.parse(localStorage.getItem("cart") || "[]");
};
