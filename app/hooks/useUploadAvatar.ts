import { useMutation } from "@tanstack/react-query";
import { AvatarUploadResponse } from "../components/types";
import { AxiosError } from "axios";
import { authApiClient } from "../components/services/api-client";
import useUserStore from "../components/useUserStore";

interface AvatarUploadError {
    error: string;
  }

const useUploadAvatar = () => {
    const { setAvatar, persistUser } = useUserStore();
    return useMutation<AvatarUploadResponse, AxiosError<AvatarUploadError>, File>(
        (avatarFile: File) => {
            const formData = new FormData();
            formData.append('avatar', avatarFile);

            return authApiClient.post<AvatarUploadResponse>('/users/upload-avatar', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            }).then(response => response.data);
        },
        {
            onSuccess: (data) => {
                console.log('Avatar uploaded successfully:', data);
                if (data.user.avatar) {
                    localStorage.setItem('userAvatar', data.user.avatar);
                    setAvatar(data.user.avatar);
                    persistUser();
    }
            },
            onError: (error: AxiosError) => {
                const errorMessage = error.response ?? 'An unexpected error occurred';
                console.error('Avatar upload failed:', errorMessage);
            },
        }
    );
};

export default useUploadAvatar