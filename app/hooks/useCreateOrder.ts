import { useMutation, useQueryClient } from '@tanstack/react-query';
import React from 'react'
import { authApiClient } from '../components/services/api-client';
import { AxiosError } from 'axios';
import { OrderCreationResponse } from '../components/types';

interface OrderCreationData {
    items: Array<{
      product: string;
      quantity: number;
      selectedColor?: string | null;
    }>;
    shipping: {
      cost: number;
      address: string;
      city: string;
      state: string;
      postalCode: string;
      phone: string;
    };
  }

interface OrderCreationErrorResponse {
    error?: string;
    errors?: { msg: string }[];
    message?: string;
}


const useCreateOrder = () => {
    return useMutation<OrderCreationResponse, AxiosError<OrderCreationErrorResponse>, OrderCreationData>(
        (orderData: OrderCreationData) => {
          return authApiClient.post<OrderCreationResponse>('/orders/', orderData)
            .then(response => response.data);
        },
        {
            onSuccess: (data) => {
              // Handle success scenario
              console.log('Order created successfully:', data);
            },
            onError: (error: AxiosError<OrderCreationErrorResponse>) => {
              // Handle error scenario
              const errorMessage = error.response?.data?.errors 
              ? error.response.data.errors.map(e => e.msg).join(', ')
              : error.response?.data?.error ?? 'An unexpected error occurred';
              console.error('Order creation failed:', errorMessage);   
            },
          }
        );
      }

export default useCreateOrder