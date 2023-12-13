import { useMutation } from '@tanstack/react-query'
import { OrderCompletionResponse, OrderCreationResponse } from '../components/types'
import { AxiosError } from 'axios'
import { authApiClient } from '../components/services/api-client';

interface OrderCompletionData {
    orderId: string | null;
}

export interface OrderCompletionErrorResponse {
    error: string;
}


const useCompleteOrder = () => {
    return useMutation<OrderCreationResponse, AxiosError<OrderCompletionErrorResponse>, OrderCompletionData>(
        (completionData: OrderCompletionData) => {
            console.log("Sending completion request for order ID:", completionData.orderId);  // Log the order ID being sent

          return authApiClient.put<OrderCreationResponse>(`/orders/complete/${completionData.orderId}`)
            .then(response => response.data);
        },
        {
            onSuccess: (data) => {
              // Handle successful order completion
              console.log('Order completed successfully:', data);
            },
            onError: (error: AxiosError<OrderCompletionErrorResponse>) => {
                const errorMessage = error.response?.data?.error ?? 'An unexpected error occurred';
                console.error('Order completion failed:', errorMessage); 
                // Additional error handling as needed
            },
        }
    );
};

export default useCompleteOrder