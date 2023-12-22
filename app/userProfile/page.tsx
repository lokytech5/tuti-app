"use client"
import React, { useState } from 'react'
import useUserProfile from '../hooks/useUserProfile';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorAlert from '../components/ErrorAlert';
import defaultAvatar from '../../public/images/avatar.png';
import Image from 'next/image';
import UpdateProfileForm from './UpdateProfileForm';
import useUploadAvatar from '../hooks/useUploadAvatar';

const UserProfile = () => {
    const { data: userProfile, isLoading, isError, error } = useUserProfile();
    const { mutate: uploadAvatar, isLoading: isAvatarUploading } = useUploadAvatar();

    const user = userProfile?.user;

    const avatarSrc = user?.avatar ? `${user.avatar}?timestamp=${new Date().getTime()}` : defaultAvatar;


    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [editMode, setEditMode] = useState(false);

    const handleEditToggle = () => {
        setEditMode(!editMode);
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setSelectedFile(e.target.files[0]);
        }
    };

    const handleAvatarUpload = () => {
        if (selectedFile) {
            uploadAvatar(selectedFile);
        } else {
            console.log('No file selected');
        }
    };


    if(isLoading) return <LoadingSpinner/>
    if(isError) return <ErrorAlert message={error.message}/>
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6 flex justify-between items-center">
                <div>
                    <h3 className="text-lg leading-6 font-medium text-gray-900">User Profile</h3>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500">Personal details and preferences.</p>
                </div>
            </div>
            <div className="px-4 py-5 sm:px-6">
            <div className="flex sm:flex-row items-center space-x-6">
        <Image src={avatarSrc} alt="User Avatar" className="h-24 w-24 rounded-full"
        width={150}
        height={150}  />
        <div className="flex-1 min-w-0 text-secondary-content">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Avatar</h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">Your profile picture.</p>
            <div className="mt-6 flex flex-col sm:flex-row sm:items-center">
                <input type="file" onChange={handleFileChange} className="form-input mb-2 sm:mb-0 sm:mr-4" />
                <button onClick={handleAvatarUpload} className="btn btn-secondary w-auto sm:ml-4">
                    {isAvatarUploading ? 'Uploading....': 'Upload'}</button>
                    {isAvatarUploading && <LoadingSpinner />}
            </div>
        </div>
    </div>
</div>
            <div className="border-t border-gray-200">
                <dl>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">Full name</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{user?.username}</dd>
                    </div>
                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">Email address</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{user?.email}</dd>
                    </div>
                    {/* Additional user details can be added here */}
                </dl>
            </div>

            <div className="flex justify-center mt-4">
    <button onClick={handleEditToggle} className="btn btn-primary">
        {editMode ? 'Cancel Edit' : 'Edit Profile'}
    </button>
</div>

            

            {editMode && user && <UpdateProfileForm user={user} />}
            <div className="mt-6 text-secondary-content">
        <h3 className="text-lg font-semibold mb-2">Notification Preferences</h3>
        <div className="flex items-center justify-start gap-4">
            <label className="flex items-center gap-2">
                <input type="checkbox" checked={user?.notificationPreferences.emailNotifications} readOnly className="checkbox checkbox-primary" />
                <span>Email Notifications</span>
            </label>
            <label className="flex items-center gap-2">
                <input type="checkbox" checked={user?.notificationPreferences.pushNotifications} readOnly className="checkbox checkbox-primary" />
                <span>Push Notifications</span>
            </label>
        </div>
    </div>
        </div>

  )
}

export default UserProfile