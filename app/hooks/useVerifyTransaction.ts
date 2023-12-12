import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { apiClient } from '../components/services/api-client';
import { VerifyTransactionRequest, VerifyTransactionResponse } from '../components/types';


const useVerifyTransaction = () => {
    return useMutation<VerifyTransactionResponse, AxiosError, VerifyTransactionRequest>(
        async ({ reference }: VerifyTransactionRequest) => {
            const response = await apiClient.post<VerifyTransactionResponse>('/payments/ecommerce/verify', { reference });
            return response.data;
        },
        {
            onSuccess: (data) => {
                // Handle successful verification
                console.log('Transaction verified:', data);
            },
            onError: (error) => {
                // Handle errors gracefully
                console.error('Error verifying transaction:', error.message);
            },
        }
    );
};

export default useVerifyTransaction