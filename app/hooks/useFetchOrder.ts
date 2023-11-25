import { useQuery } from '@tanstack/react-query';
import React from 'react'
import apiClient from '../components/services/api-client';
import { OrderCreationResponse } from '../components/types';

interface Props {
    orderId: string | null;
}

const useFetchOrder = ({orderId}: Props) => {
    const fetchOrderDetails = (): Promise<OrderCreationResponse> => {
        if(!orderId) {
            return Promise.reject(new Error("Order ID is undefined."));
    }   

    return apiClient.get<OrderCreationResponse>(`/orders/${orderId}`).then(res => res.data);
}
    return useQuery<OrderCreationResponse, Error>(['order', orderId], fetchOrderDetails);
}

export default useFetchOrder