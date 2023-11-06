import React from 'react'
import { Product } from './types';
import { create } from 'zustand';

interface CartProduct {
    _id: string;
    name: string;
    price: number;
    image: string;
}

interface CartItem {
    product: CartProduct;
    quantity: number;
}

interface CartState {
    items: CartItem[];
    addToCart: (product: CartProduct) => void;
    removeFromCart: (productId: string) => void;
  increaseQuantity: (productId: string) => void;
  decreaseQuantity: (productId: string) => void;
  clearCart: () => void;
}

const useCartStore = create<CartState>((set) => ({
    items: [],

    addToCart: (product) =>
    set((state) => {
      const cartItem = state.items.find((item) => item.product._id === product._id);
      if (cartItem) {
        return {
          items: state.items.map((item) =>
            item.product._id === product._id ? { ...item, quantity: item.quantity + 1 } : item
          ),
        };
      } else {
        return {
          items: [...state.items, { product, quantity: 1 }],
        };
      }
    }),

    removeFromCart: (productId) =>
    set((state) => ({
      items: state.items.filter((item) => item.product._id !== productId),
    })),

  increaseQuantity: (productId) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.product._id === productId ? { ...item, quantity: item.quantity + 1 } : item
      ),
    })),

  decreaseQuantity: (productId) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.product._id === productId ? { ...item, quantity: Math.max(1, item.quantity - 1) } : item
      ),
    })),

  clearCart: () => set(() => ({ items: [] })),

}));

export default useCartStore