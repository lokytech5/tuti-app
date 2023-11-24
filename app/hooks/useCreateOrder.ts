import { useMutation, useQueryClient } from '@tanstack/react-query';
import React from 'react'

interface ErrorResponse {
    error?: string;
    errors?: { msg: string }[];
    message?: string;
  }



const prepareDataForBackend = (items, shippingData) => {
    return {
        items: items.map(item => ({
            product: item.product._id,
            quantity: item.quantity,
            selectedColor: item.product.selectedColor || null
        })),
        shipping: {
            ...shippingData,
            cost: shippingData.cost
        }
    };
};

// Function to post data to the backend
const createOrder = async (data) => {
    const response = await axios.post('/api/orders', data);
    return response.data;
};

const useCreateOrder = () => {
    const queryClient = useQueryClient();

    return useMutation(createOrder, {
        onSuccess: () => {
            // Invalidate and refetch any queries that depend on the orders data
            queryClient.invalidateQueries('orders');
        },
        // You can add onError and onMutate if needed
    });
}

export default useCreateOrder