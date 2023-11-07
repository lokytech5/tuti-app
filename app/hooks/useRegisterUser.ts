import { UseMutationResult, useMutation } from '@tanstack/react-query';
import { RegisterUserData, RegisterUserResponse } from '../components/types';
import apiClient from '../components/services/api-client';
import { AxiosError } from 'axios';
import useUserStore from '../components/useUserStore';

interface ErrorResponse {
    error?: string;
    msg?: string;
  }

const useRegisterUser = (): UseMutationResult<RegisterUserResponse, AxiosError<ErrorResponse>, RegisterUserData> => {
    const setUser = useUserStore((state) => state.setUser);
    const setError = useUserStore((state) => state.setError);

    return useMutation<RegisterUserResponse, AxiosError<ErrorResponse>, RegisterUserData>(
      (userData: RegisterUserData) => {
        // Call the API endpoint to register the user
        return apiClient.post<RegisterUserResponse>('/api/users/', userData)
          .then(response => response.data);
      },
      {
        // Optional: React Query configurations such as onSuccess, onError, etc.
        onSuccess: (data) => {
          // Handle success scenario, such as redirecting the user, showing a message, etc.
          setUser(data);
          console.log('Registration successful:', data);
        },
        onError: (error: AxiosError<ErrorResponse>) => {
                // Handle the error scenario
                let errorMessage: string;
                // Check if the response has a data property with either 'error' or 'msg'
                if (error.response && error.response.data) {
                    // Since we now have typed the error.response.data to be of ErrorResponse,
                    // we can directly access 'error' or 'msg' without needing to use 'in' operator.
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

export default useRegisterUser