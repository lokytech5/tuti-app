"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import useRegisterUser from '../hooks/useRegisterUser'
import ErrorAlert from '../components/ErrorAlert'
import LoadingSpinner from '../components/LoadingSpinner'
import { showToast } from '../components/ToastNotifier'
import { useRouter } from 'next/navigation'
import VerificationModal from '../components/VerificationModal'


const schema = z.object({
    username: z.string().min(1, 'Username is required'),
    email: z.string().email('Invalid email address'),
    password: z.string().min(5, 'Password must be at least 5 characters long'),
});

type FormData = z.infer<typeof schema>;

const RegisterUserPage = () => {
    const { register, handleSubmit, formState: { errors }} = useForm<FormData>({ resolver: zodResolver(schema),});
    const router = useRouter();
    // Get the mutation function and state from your hook
  const { mutate: registerUser, isLoading, isError, error } = useRegisterUser();
  const [showVerificationModal, setShowVerificationModal] = useState(false);

    const onSubmit = async (data: FormData) => {
      try {
            await registerUser(data, {
                onSuccess: () => {
                  // Show toast notification and redirect here
                  showToast('Registration successful', 'success');
                  setShowVerificationModal(true);
                  console.log('Modal should show now');
                },
              });
        } catch (e) {
            if(e instanceof Error) {
                showToast('Registration failed: ' + e.message, 'error');
            }  else {
                showToast('Registration failed: An unexpected error occurred', 'error');
            }
           
        }
        console.log(data);
        // Here you would typically dispatch this data to a server or state management
      };

      if(isLoading) return <LoadingSpinner/>
  if(error) return <ErrorAlert message={error.message}/>

  const handleCloseModal = () => {
    setShowVerificationModal(false);
    router.push("/loginUser");
  }
  


  return (
    
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <div className="bg-white rounded-xl shadow-xl flex overflow-hidden lg:h-128">
            {/* Image Section: Only visible on large screens */}
            <div className="w-1/2 flex-shrink-0 hidden lg:block">
            <figure className="h-full">
              <Image 
              src="/images/curated1.jpeg"
               width={284} 
               height={150} 
               alt="Login Illustration" 
               className="h-full w-full object-cover"/>
              </figure>
            </div>
    
            {/* Login Content Section */}
            <div className="w-full lg:w-1/2 p-8 space-y-5">
      <div className="flex justify-end items-center">
        <span className="text-gray-600 text-sm">Already Have an account?</span>
        <Link href="/loginUser">
        <button className="btn btn-outline text-sm py-1 px-3 ml-4">LogIn</button>
        </Link>
      </div>
    
      <div>
        <h2 className="text-3xl font-semibold mb-4 text-secondary-content">Welcome to TutiHairs</h2>
        <form onSubmit={handleSubmit(onSubmit)}>

     
        <div className="space-y-4 text-secondary-content">
          <input 
          {...register('username')} 
            className="input input-bordered w-full" 
            type="text" 
            placeholder="Username"
          />
       <p>{errors.username?.message as string || null}</p>


          <input 
           {...register('email')} 
            className="input input-bordered w-full" 
            type="text" 
            placeholder="Email Address"
          />
        <p>{errors.email?.message as string || null}</p>

          <input 
            {...register('password')}
            className="input input-bordered w-full" 
            type="password" 
            placeholder="Password"
          />
          <p>{errors.password?.message as string || null}</p>

          <button type='submit' className="btn btn-primary w-full">Register</button>
          
        </div>
        </form>
      </div>
      
    </div>
          </div>
          <VerificationModal
          isOpen={showVerificationModal} 
          onClose={handleCloseModal}/>
        </div>
      )
  
}

export default RegisterUserPage
