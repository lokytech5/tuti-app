import React, { useEffect } from 'react'
import useCartStore from '../components/useCartStore';

const usePersistedCart = () => {
    const items = useCartStore((state) => state.items);
    const initializeCart = useCartStore((state) => state.initializeCart);
    const persistCart = useCartStore((state) => state.persistCart);
  
    // Load cart from localStorage when the component mounts
    useEffect(() => {
      initializeCart();
    }, [initializeCart]);
  
    // Save cart to localStorage whenever items change
    useEffect(() => {
      persistCart();
    }, [items, persistCart]);
  };

export default usePersistedCart