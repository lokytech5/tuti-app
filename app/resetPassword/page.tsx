"use client"
import React, { useEffect, useState } from 'react'
import useResetPassword from '../hooks/useResetPassword';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorAlert from '../components/ErrorAlert';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { SubmitHandler } from 'react-hook-form';

const schema = z.object({
  newPassword: z.string().min(1, 'Please enter your new password'),
  confirmPassword: z.string().min(1, 'Please confirm your new password'),
  otp: z.string().min(1, 'OTP is required')
}).refine((data) => data.newPassword === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

type FormData = z.infer<typeof schema>;
const ResetPassword = () => {
  const [token, setToken] = useState('');
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema)
  });
  const searchParams = useSearchParams();  
  const router = useRouter();

  const handleSuccess = () => {
    router.push('/loginUser');
  }

  const { mutate, isLoading, error } = useResetPassword({onSuccessCallback:handleSuccess});
  
  
  const onSubmit: SubmitHandler<FormData> = (data, event) => {
    event?.preventDefault();
    mutate({ newPassword: data.newPassword, confirmPassword: data.confirmPassword, token, otp: data.otp });
  };
  
  useEffect(() => {
    const tokenParam = searchParams.get('token');
    if (tokenParam) {
      setToken(tokenParam);
    }
  }, [searchParams]);
 

  if(isLoading) return <LoadingSpinner/>
  if(error) return <ErrorAlert message={error.message}/>

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className="bg-white rounded-xl shadow-xl flex overflow-hidden lg:h-128">
      {/* Rest of the design, similar to ForgotPassword component */}
      <div className="w-full lg:w-1/2 p-8 space-y-5">
        <h2 className="text-3xl font-semibold mb-4 text-secondary-content">Reset Password</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full lg:w-1/2 p-8 space-y-5">
          <div className="space-y-4 text-secondary-content">
            <input 
               {...register('newPassword')} 
              className="input input-bordered w-full sm:w-3/4 md:w-5/6 lg:w-96"
              type="password" 
              placeholder="New Password"
            />
            {errors.newPassword && <p className="text-red-500">{errors.newPassword.message}</p>}

            <input 
             {...register('confirmPassword')} 
              className="input input-bordered w-full sm:w-3/4 md:w-5/6 lg:w-96"
              type="password" 
              placeholder="Confirm Password"
            />
            {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword.message}</p>}

            <input 
             {...register('otp')}
              className="input input-bordered w-full sm:w-3/4 md:w-5/6 lg:w-96"
              type="text" 
              placeholder="OTP"
            />
            {errors.otp && <p className="text-red-500">{errors.otp.message}</p>}

            <button type="submit" className="btn btn-primary w-full" disabled={isLoading}>
              {isLoading ? 'Resetting...' : 'Reset Password'}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
)
}

export default ResetPassword