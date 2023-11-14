import { useMutation } from '@tanstack/react-query';
import { LoginUserData, LoginUserResponse } from '../components/types';
import { AxiosError } from 'axios';
import apiClient from '../components/services/api-client';
import useUserStore from '../components/useUserStore';

interface LoginErrorResponse {
  error?: string;
  errors?: { msg: string }[];
  message?: string;
}

const useLoginUser = () => {
    return useMutation<LoginUserResponse, AxiosError<LoginErrorResponse>, LoginUserData>(
        (loginData: LoginUserData) => {
          return apiClient.post<LoginUserResponse>('/auth/', loginData)
            .then(response => response.data);
        },
        {
          onSuccess: (data) => {
            // Handle successful login, e.g., storing the token, updating user state, etc.
            const setUser = useUserStore.getState().setUser;

            setUser({
              _id: data._id,
              username: data.username,
            });

        // Store the token securely, e.g., in localStorage
        localStorage.setItem('token', data.token);
          },
          onError: (error: AxiosError<LoginErrorResponse>) => {
             // Handle login error
        const errorMessage = error.response?.data?.errors 
        ? error.response.data.errors.map(e => e.msg).join(', ')
        : error.response?.data?.error ?? 'An unexpected error occurred';
        console.error('Login failed:', errorMessage);   
        },
        }
      );
  
}

export default useLoginUser