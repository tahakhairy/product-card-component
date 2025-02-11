import type { Product } from "@/api";
import { defineStore } from "pinia";

interface CartState {
  cartItems: { product: Product; quantity: number }[];
}

export const useCartStore = defineStore("cart", {
  state(): CartState {
    return {
      cartItems: JSON.parse(localStorage.getItem("cart")!) ?? [],
    };
  },

  actions: {
    addToCart(newProduct: Product, quantity: number) {
      const existingProduct = this.cartItems.find(
        ({ product }) => product.id === newProduct.id,
      );

      if (existingProduct) {
        existingProduct.quantity = quantity;
      } else {
        this.cartItems.push({ product: newProduct, quantity });
      }

      localStorage.setItem("cart", JSON.stringify(this.cartItems));
    },
  },

  getters: {
    totalPrice() {
      let total = 0;
      this.cartItems.forEach((item) => {
        total += Math.floor(item.product.price * item.quantity);
      });
      return total;
    },
  },
});
