import { useMutation } from '@tanstack/react-query';
import React from 'react'
import { apiClient } from '../components/services/api-client';
import { AxiosError } from 'axios';

interface InitializeTransactionData {
    email: string;
    amount: number;
    paymentOption: string;
}

interface TransactionResponse {
    // Define the expected response structure
    data: any; // Replace with more specific type as per your API response
    message?: string;
}

const useInitializeTransaction = () => {
    return useMutation<TransactionResponse, AxiosError, InitializeTransactionData>(
        async (transactionData: InitializeTransactionData) => {
            const response = await apiClient.post('/api/payment/initialize', transactionData);
            return response.data;
        },
        {
            onError: (error) => {
                // Handle errors gracefully
                console.error('Error initializing transaction:', error.message);
            },
        }
    );
};

export default useInitializeTransaction