import { UseMutationResult, useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { apiClient } from '../components/services/api-client';
import { InitializePaymentRequest, InitializePaymentResponse } from '../components/types';

interface BackendErrorResponse {
    error?: string;
    message?: string; 
}

const useInitializePayment = (): UseMutationResult<InitializePaymentResponse, AxiosError<BackendErrorResponse>, InitializePaymentRequest> => {
    return useMutation<InitializePaymentResponse, AxiosError<BackendErrorResponse>, InitializePaymentRequest>(
      (paymentData: InitializePaymentRequest) => {
        return apiClient.post<InitializePaymentResponse>('/payments/ecommerce/', paymentData)
          .then(response => response.data);
      },
      {
        onSuccess: (data) => {
          // Handle successful payment initialization here
          console.log('Payment initialized successfully:', data);
        },
        onError: (error: AxiosError<BackendErrorResponse>) => {
          // Handle errors here
          let errorMessage: string;
          if (error.response && error.response.data) {
              errorMessage = error.response.data.error || error.response.data.message || error.message;
          } else {
              // Generic error message if no response from backend
              errorMessage = error.message;
          }
          console.error('Payment initialization failed:', errorMessage);
        },
      }
    );
};
export default useInitializePayment