"use client"
import React, { ReactHTMLElement, useState } from 'react'
import useUserProfile from '../hooks/useUserProfile';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorAlert from '../components/ErrorAlert';
import defaultAvatar from '../../public/images/avatar.png';
import Image from 'next/image';

const UserProfile = () => {
    const { data: userProfile, isLoading, isError, error } = useUserProfile();

    const user = userProfile?.user;

    const avatarSrc = user?.avatar ? user.avatar : defaultAvatar;

    const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // setSelectedFile(e.target.files[0]);
  };

  const handleAvatarUpload = () => {
    // Use your uploadAvatar hook to upload the selected file
  };

  const handleEditProfile = () => {
    // Redirect to UpdateProfile component or open a modal for editing
  };

    if(isLoading) return <LoadingSpinner/>
    if(isError) return <ErrorAlert message={error.message}/>
  return (
    <div className="card card-bordered w-full max-w-lg mx-auto bg-base-100 shadow-xl text-secondary-content">
    <figure className="px-4 md:px-10 pt-10">
      <Image src={avatarSrc} alt="User Avatar" className="rounded-full w-20 h-20 md:w-24 md:h-24" width={80} height={80} />
    </figure> 
    <div className="card-body items-center text-center">
      <h2 className="card-title">{user?.username}</h2>
      <p><strong>Email:</strong> {user?.email}</p>
      <p>{user?.isVerified ? "Email Verified" : "Email Not Verified"}</p>
      
      <div className="card-actions justify-end">
        <div className="badge badge-outline">{user?.notificationPreferences.emailNotifications ? "Email Notifications: On" : "Email Notifications: Off"}</div>
        <div className="badge badge-outline">{user?.notificationPreferences.pushNotifications ? "Push Notifications: On" : "Push Notifications: Off"}</div>
      </div>

      {/* Avatar Upload */}
      <div className="card-body">
        <input type="file" onChange={handleFileChange} />
        <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg" onClick={handleAvatarUpload}>Upload Avatar</button>
      </div>

      {/* Notification Toggles */}
      <div className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text">Email Notifications</span>
          <input type="checkbox" checked={user?.notificationPreferences.emailNotifications} className="toggle" />
        </label>
      </div>

      <div className="card-actions">
        <button className="btn btn-primary">Edit Profile</button>
      </div>
    </div>
  </div>

  )
}

export default UserProfile