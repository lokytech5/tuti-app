import { useMutation } from '@tanstack/react-query';
import { ForgotPasswordData, ForgotPasswordResponse } from '../components/types';
import { AxiosError } from 'axios';
import { authApiClient } from '../components/services/api-client';
import { showToast } from '../components/ToastNotifier';

interface ForgotPasswordErrorResponse {
    message?: string;
    error?: string;
  }

const useForgotPassword = () => {
    return useMutation<ForgotPasswordResponse, AxiosError<ForgotPasswordErrorResponse>, ForgotPasswordData>(
        (forgotPasswordData: ForgotPasswordData) => {
          return authApiClient.post<ForgotPasswordResponse>('/auth/forgotPassword', forgotPasswordData)
            .then(response => response.data);
        },
        {
          onSuccess: (data) => {
            showToast('Successfully send OTP to your email address', 'success')
            console.log('Forgot Password request successful:', data.message);
          },
          onError: (error: AxiosError<ForgotPasswordErrorResponse>) => {
            const errorMessage = error.response?.data?.error ?? error.response?.data?.message ?? 'An unexpected error occurred';
            console.error('Forgot Password request failed:', errorMessage);
          },
        }
      );
}

export default useForgotPassword