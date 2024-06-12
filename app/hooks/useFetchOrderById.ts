
import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { authApiClient } from '../components/services/api-client';
import { OrderCreationResponse } from '../components/types';

interface Props {
    orderId: string | null;
}

const useFetchOrderById = ({orderId}: Props) => {
    const fetchOrderDetails = (): Promise<OrderCreationResponse> => {
        if(!orderId) {
            return Promise.reject(new Error("Order ID is undefined."));
    }   

    return authApiClient.get<OrderCreationResponse>(`/orders/by/${orderId}`).then(res => res.data);
}
    return useQuery<OrderCreationResponse, Error>(['order', orderId], fetchOrderDetails);
}

export default useFetchOrderById