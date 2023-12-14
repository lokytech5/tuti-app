"use client"
import { useEffect } from 'react';
import useOrderStore from './useOrderStore';

const OrderIdInitializer = () => {
    const initializeOrderId = useOrderStore((state) => state.initializeOrderId);
    const persistOrderId = useOrderStore((state) => state.persistOrderId);

    useEffect(() => {
        initializeOrderId();

        // Optionally, you can add event listeners to persist orderId on specific events
        window.addEventListener('beforeunload', persistOrderId);

        return () => {
            window.removeEventListener('beforeunload', persistOrderId);
        };
    }, [initializeOrderId, persistOrderId]);

    return null;
};

export default OrderIdInitializer;
