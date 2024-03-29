import { useMutation } from '@tanstack/react-query';
import { authApiClient } from '../components/services/api-client';
import { AxiosError } from 'axios';
import { OrderCreationResponse } from '../components/types';
import useOrderStore from '../components/useOrderStore';

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
              useOrderStore.getState().setOrderId(data.id);

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