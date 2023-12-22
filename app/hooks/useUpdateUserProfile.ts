import { useMutation, useQueryClient } from '@tanstack/react-query'
import { UpdateProfileRequest, UserProfileResponse } from '../components/types'
import { AxiosError } from 'axios'
import { authApiClient } from '../components/services/api-client'

const useUpdateUserProfile = () => {
  const queryClient = useQueryClient();
    return useMutation<UserProfileResponse, AxiosError, UpdateProfileRequest>(
      (updateData: UpdateProfileRequest) => {
        return authApiClient.put<UserProfileResponse>('/users/profile', updateData)
          .then(response => response.data);
      },
      {
        onSuccess: (data) => {
          queryClient.invalidateQueries(['userProfile']);
        },
        onError: (error: AxiosError) => {
          // Handle error scenario
          console.error('Error updating profile:', error.message);
        }
      }
    );
  };

export default useUpdateUserProfile