import React from 'react'
import { create } from 'zustand';

interface OrderState {
    orderId: string | null;
    setOrderId: (orderId: string) => void;
    initializeOrderId: () => void;
    persistOrderId: () => void;
    clearOrderId: () => void;
}

const useOrderStore = create<OrderState>((set, get) => ({
    orderId: null,

    setOrderId: (orderId) => {
        set({ orderId });
    },

    initializeOrderId: () => {
        const savedOrderId = localStorage.getItem('orderId');
        if (savedOrderId) {
            set({ orderId: savedOrderId });
        }
    },

    persistOrderId: () => {
        const { orderId } = get();
        if (orderId) {
            localStorage.setItem('orderId', orderId);
        }
    },
    clearOrderId: () => {
        console.log('Clearing orderId in store');
        set(() => ({ orderId: null }));
    },
}));

export default useOrderStore