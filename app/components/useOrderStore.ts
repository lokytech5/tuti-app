import React from 'react'
import { create } from 'zustand';

interface OrderState {
    orderId: string | null;
    setOrderId: (orderId: string) => void;
    clearOrderId: () => void;
}

const useOrderStore = create<OrderState>((set) => ({
    orderId: null,
    setOrderId: (orderId) => {
        console.log('Setting orderId in store:', orderId);
        set(() => ({ orderId }));
    },
    clearOrderId: () => {
        console.log('Clearing orderId in store');
        set(() => ({ orderId: null }));
    },
}));

export default useOrderStore