import { UseMutationResult, useMutation } from '@tanstack/react-query';
import React from 'react'
import { RegisterUserData, RegisterUserResponse } from '../components/types';
import apiClient from '../components/services/api-client';
import { AxiosError } from 'axios';

const useRegisterUser = (): UseMutationResult<RegisterUserResponse, AxiosError, RegisterUserData> => {
    return useMutation<RegisterUserResponse, AxiosError, RegisterUserData>(
      (userData: RegisterUserData) => {
        // Call the API endpoint to register the user
        return apiClient.post<RegisterUserResponse>('/api/users/', userData)
          .then(response => response.data);
      },
      {
        // Optional: React Query configurations such as onSuccess, onError, etc.
        onSuccess: (data) => {
          // Handle success scenario, such as redirecting the user, showing a message, etc.
          console.log('Registration successful:', data);
        },
        onError: (error) => {
          // Handle the error scenario
          console.error('Registration failed:', error);
        },
      }
    );
  };

export default useRegisterUser