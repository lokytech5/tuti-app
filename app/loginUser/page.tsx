"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'
import useLoginUser from '../hooks/useLoginUser';
import useUserStore from '../components/useUserStore';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import ErrorAlert from '../components/ErrorAlert';
import { showToast } from '../components/ToastNotifier';
import { SubmitHandler } from 'react-hook-form';

const schema = z.object({
    username: z.string().min(1, 'Username is required'),
    password: z.string().min(5, 'Password must be at least 5 characters long'),
  });
  
  type FormData = z.infer<typeof schema>;

const LoginPage = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: zodResolver(schema),
      });

    const { mutate: loginUser, isLoading, error } = useLoginUser();
    const setUser = useUserStore((state) => state.setUser);
    const router = useRouter();


   const onSubmit: SubmitHandler<FormData> = (data, event) => {
    event?.preventDefault();
        console.log('Form submitted', data);
        loginUser(data, {
          onSuccess: (response) => {
            const setUser = useUserStore.getState().setUser;
            setUser({
                _id: response._id,
              username: response.username,
              email: response.email,
              avatar: response.avatar
            });
            localStorage.setItem('token', response.token);
            showToast('Login successful', 'success');
            router.push('/home')  
        },

        onError: (data) => {
            if(error) return <ErrorAlert message={error.message}/>
        }
          
        });
      };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className="bg-white rounded-xl shadow-xl flex overflow-hidden lg:h-128">
        <div className="w-1/2 flex-shrink-0 hidden lg:block">
            <figure>
                <Image src="/images/curated1.jpeg" width={284} height={150} alt="Login Illustration" className="h-full w-full object-cover"/>
            </figure>
        </div>

        <div className="w-full lg:w-1/2 p-8 space-y-5">
            <div className="flex justify-end items-center">
                <span className="text-gray-600 text-sm">Don't have an account?</span>
                <Link href="/registerUser">
                <button className="btn btn-outline text-sm py-1 px-3 ml-4">Register</button>
                </Link>
            </div>
    
            <div>
                <h2 className="text-3xl font-semibold mb-4 text-secondary-content  md:ml-8 sm:ml-4">Login to TutiHairs</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="w-full lg:w-1/2 p-8 space-y-5">
                <div className="space-y-4 text-secondary-content">
                    <input
                     {...register('username')}           
                        className="input input-bordered w-full sm:w-3/4 md:w-5/6 lg:w-96" 
                        type="text" 
                        placeholder="Username"
                    />{errors.username && <p className="text-red-500">{errors.username.message}</p>}

                    <input 
                     {...register('password')}
                        className="input input-bordered w-full sm:w-3/4 md:w-5/6 lg:w-96" 
                        type="password" 
                        placeholder="Password"
                    />
                    {errors.password && <p className="text-red-500">{errors.password.message}</p>}
           
                    <button type="submit" className="btn btn-primary w-full md:w-5/6" disabled={isLoading}>
          {isLoading ? 'Logging in...' : 'Log In'}
        </button>
                </div>
                </form>
                <div className="text-right text-secondary-content">
                                <Link href="/forgotPassword">
                                    <p className="text-sm hover:underline">Forgot Password?</p>
                                </Link>
                            </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default LoginPage