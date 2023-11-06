"use client"
import { useEffect } from 'react';
import useCartStore from './useCartStore';

const CartInitializer = () => {
  const initializeCart = useCartStore((state) => state.initializeCart);

  useEffect(() => {
    initializeCart();
  }, [initializeCart]);

  return null;
};

export default CartInitializer;
