import React, { useState } from 'react'
import useUpdateUserProfile from '../hooks/useUpdateUserProfile';
import { UpdateProfileRequest, UserProfile } from '../components/types';
import { z } from 'zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

interface Props {
    user: UserProfile;
}

const profileSchema = z.object({
    firstName: z.string().optional(), // Define validation rules
    lastName: z.string().optional(),
    phone: z.string().optional(),
  });

const UpdateProfileForm = ({user}: Props) => {
    const updateProfileMutation = useUpdateUserProfile();

    const { register, handleSubmit, formState: { errors } } = useForm({
      resolver: zodResolver(profileSchema),

    });
  
    const onSubmit: SubmitHandler<UpdateProfileRequest> = (data) => {
      updateProfileMutation.mutate( data );
    };
        
  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
         <div className="mb-4 text-secondary-content">
                <h3 className="text-lg font-semibold">Current Information</h3>
                <p>First Name: {user.profile?.firstName || 'Not set'}</p>
                <p>Last Name: {user.profile?.lastName || 'Not set'}</p>
                <p>Phone: {user.profile?.phone || 'Not set'}</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="flex flex-col">
                    <label htmlFor="firstName" className="text-sm font-semibold text-gray-700">First Name</label>
                    <input
                        {...register('firstName')}
                        id="firstName"
                        placeholder="First Name"
                        type="text"
                        className="mt-1 p-2 border border-gray-300 rounded-md"
                    />
                      {errors.firstName && typeof errors.firstName.message === 'string' && (
                       <p className="text-red-500 text-xs italic">{errors.firstName.message}</p>
                      )}
                </div>

                <div className="flex flex-col">
                    <label htmlFor="lastName" className="text-sm font-semibold text-gray-700">Last Name</label>
                    <input
                        {...register('lastName')}
                        id="lastName"
                        placeholder="Last Name"
                        type="text"
                        className="mt-1 p-2 border border-gray-300 rounded-md"
                    />
                     {errors.lastName && typeof errors.lastName.message === 'string' && (
                         <p className="text-red-500 text-xs italic">{errors.lastName.message}</p>
                     )}
                </div>

                <div className="flex flex-col">
                    <label htmlFor="phone" className="text-sm font-semibold text-gray-700">Phone Number</label>
                    <input
                        {...register('phone')}
                        id="phone"
                        placeholder="Phone Number"
                        type="text"
                        className="mt-1 p-2 border border-gray-300 rounded-md"
                    />
                   {errors.phone && typeof errors.phone.message === 'string' && (
                     <p className="text-red-500 text-xs italic">{errors.phone.message}</p>
                    )}
                </div>

                <button type="submit" className="btn btn-primary mt-4 w-full">Update Profile</button>
            </form>
        </div>
  )
}

export default UpdateProfileForm