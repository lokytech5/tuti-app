import { useMutation } from '@tanstack/react-query'
import { OrderCompletionResponse } from '../components/types'
import { AxiosError } from 'axios'
import { authApiClient } from '../components/services/api-client';
import useOrderStore from '../components/useOrderStore';

interface OrderCompletionData {
    orderId: string;
}

export interface OrderCompletionErrorResponse {
    error: string;
}


const useCompleteOrder = () => {
    const orderIdFromStore = useOrderStore((state) => state.orderId);

    return useMutation<OrderCompletionResponse, AxiosError<OrderCompletionErrorResponse>, OrderCompletionData>(
        (data: OrderCompletionData) => {
          console.log("Sending completion request for order ID:", orderIdFromStore);

          return authApiClient.put<OrderCompletionResponse>(`/orders/complete/${orderIdFromStore}`)
            .then(response => response.data);
        },
        {
          // Success and error handlers remain the same
          onSuccess: (data) => {
            console.log('Order completed successfully:', data);
          },
          onError: (error: AxiosError) => {
            const errorMessage = error.response?.data ?? 'An unexpected error occurred';
            console.error('Order completion failed:', errorMessage);
          },
        }
      );
    };

export default useCompleteOrder