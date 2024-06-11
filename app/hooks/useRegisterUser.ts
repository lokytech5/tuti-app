import { UseMutationResult, useMutation } from '@tanstack/react-query';
import { RegisterUserData, RegisterUserResponse } from '../components/types';
import { apiClient } from '../components/services/api-client';
import { AxiosError } from 'axios';
import useUserStore from '../components/useUserStore';

interface ErrorResponse {
    error?: string;
    msg?: string;
}

const useRegisterUser = (): UseMutationResult<RegisterUserResponse, AxiosError<ErrorResponse>, RegisterUserData> => {
    const setError = useUserStore((state) => state.setError);

    return useMutation<RegisterUserResponse, AxiosError<ErrorResponse>, RegisterUserData>(
        (userData: RegisterUserData) => {
            return apiClient.post<RegisterUserResponse>('/users/', userData)
                .then(response => response.data);
        },
        {
            onSuccess: (data) => {
                console.log('Registration successful:', data);
            },
            onError: (error: AxiosError<ErrorResponse>) => {
                let errorMessage: string;
                if (error.response && error.response.data) {
                    errorMessage = error.response.data.error || error.response.data.msg || error.message;
                } else {
                    errorMessage = error.message;
                }
                setError(errorMessage);
                console.error('Registration failed:', errorMessage);
            },
        }
    );
};

export default useRegisterUser;
