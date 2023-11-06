import React from 'react'
import { Product } from './types';
import { create } from 'zustand';

interface CartProduct {
    _id: string;
    name: string;
    price: number;
    image: string;
    quantity?: number;
    selectedColor?: string;
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
  calculateTotal: () => number;
}

const useCartStore = create<CartState>((set, get) => ({
    items: [],

    addToCart: (product) =>
    set((state) => {
      // Check if the cart already has the item with the same ID and selectedColor
      const cartItemIndex = state.items.findIndex((item) =>
        item.product._id === product._id &&
        item.product.selectedColor === product.selectedColor // Check for color as well
      );
      
      if (cartItemIndex > -1) {
        // Item already in cart, update quantity
        let newItems = [...state.items];
        newItems[cartItemIndex].quantity += product.quantity || 1;
        return { items: newItems };
      } else {
        // Item not in cart, add new item
        return {
          items: [...state.items, { product, quantity: product.quantity || 1 }],
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

    calculateTotal: () => {
      const { items } = get(); // using get to access current state
      return items.reduce((total, item) => total + item.quantity * item.product.price, 0);
    },


  clearCart: () => set(() => ({ items: [] })),

}));

export default useCartStore