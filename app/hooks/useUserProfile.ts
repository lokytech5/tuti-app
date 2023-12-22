import {  authApiClient } from '../components/services/api-client';
import { UserProfileResponse } from '../components/types';
import { useQuery } from '@tanstack/react-query';


const fetchUserProfile = () => {
    return  authApiClient.get<UserProfileResponse>('/users/me').then(res => res.data);
  };

const useUserProfile = () => {
    return useQuery<UserProfileResponse, Error>({
        queryKey: ['userProfile'],
        queryFn: fetchUserProfile,
        onError: (error) => {
          console.error('Error fetching user profile:', error);
        },
      });
}

export default useUserProfile