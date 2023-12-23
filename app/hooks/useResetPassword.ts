import { useMutation } from '@tanstack/react-query';
import React from 'react'
import { ResetPasswordData, ResetPasswordResponse } from '../components/types';
import { AxiosError } from 'axios';
import { apiClient} from '../components/services/api-client';
import { showToast } from '../components/ToastNotifier';

interface ResetPasswordErrorResponse {
    message?: string;
    error?: string;
  }

  interface Props {
    onSuccessCallback: () => void;
  }
  

const useResetPassword = ({onSuccessCallback}: Props) => {
    return useMutation<ResetPasswordResponse, AxiosError<ResetPasswordErrorResponse>, ResetPasswordData>(
        (resetPasswordData: ResetPasswordData) => {
          return apiClient.post<ResetPasswordResponse>('/auth/resetPassword', resetPasswordData)
            .then(response => response.data);
        },
        {
          onSuccess: (data) => {
            console.log('Password reset successful:', data.message);
            showToast('Your password has been changed successfully. Please log in with your new password.', 'success')
            setTimeout(onSuccessCallback, 2000);
          },
          onError: (error: AxiosError<ResetPasswordErrorResponse>) => {
            const errorMessage = error.response?.data?.error ?? error.response?.data?.message ?? 'An unexpected error occurred';
            console.error('Password reset failed:', errorMessage);
          },
        }
      );
}

export default useResetPassword