import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import React from 'react'
import { apiClient } from '../components/services/api-client';

interface VerifyTransactionData {
    reference: string;
}

const useVerifyTransaction = () => {
    return useMutation<TransactionResponse, AxiosError, VerifyTransactionData>(
        async ({ reference }: VerifyTransactionData) => {
            const response = await apiClient.post('/api/payment/verify', { reference });
            return response.data;
        },
        {
            onError: (error) => {
                // Handle errors gracefully
                console.error('Error verifying transaction:', error.message);
            },
        }
    );
};

export default useVerifyTransaction