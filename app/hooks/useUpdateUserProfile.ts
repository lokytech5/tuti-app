import { useMutation } from '@tanstack/react-query'
import { UpdateProfileRequest, UserProfileResponse } from '../components/types'
import { AxiosError } from 'axios'
import { authApiClient } from '../components/services/api-client'

const useUpdateUserProfile = () => {
    return useMutation<UserProfileResponse, AxiosError, UpdateProfileRequest>(
      (updateData: UpdateProfileRequest) => {
        return authApiClient.put<UserProfileResponse>('/users/profile', updateData)
          .then(response => response.data);
      },
      {
        onSuccess: (data) => {
          // Handle success scenario
          console.log('Profile updated successfully:', data);
        },
        onError: (error: AxiosError) => {
          // Handle error scenario
          console.error('Error updating profile:', error.message);
        }
      }
    );
  };

export default useUpdateUserProfile