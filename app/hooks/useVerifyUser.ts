import useUserStore from '../components/useUserStore';
import { useMutation } from '@tanstack/react-query';
import { VerifyUserRequest, VerifyUserResponse } from '../components/types';
import { AxiosError } from 'axios';
import { apiClient } from '../components/services/api-client';

interface VerifyErrorResponse {
    message?: string;
    error?: string;
}


const useVerifyUser = () => {
    const setUserVerified = useUserStore((state) => state.setIsVerified);
    const setError = useUserStore((state) => state.setError);
    
    return useMutation<VerifyUserResponse, AxiosError<VerifyErrorResponse>, VerifyUserRequest>(
        (verificationData: VerifyUserRequest) => {
            return apiClient.post<VerifyUserResponse>('/auth/verify', verificationData)
                .then(response => response.data);
        },
        {
            onSuccess: (data) => {
                // You might want to set the user as verified in your global state here
                setUserVerified(true);
                console.log('Email verification successful:', data.message);
            },
            onError: (error: AxiosError<VerifyErrorResponse>) => {
                const errorMessage = error.response?.data?.error ?? error.response?.data?.message ?? 'An unexpected error occurred';
                setError(errorMessage);
                console.error('Email verification failed:', errorMessage);
            },
        }
    );

    
};

export default useVerifyUser