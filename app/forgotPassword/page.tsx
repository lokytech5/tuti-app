"use client"
import React, { useState } from 'react'
import useForgotPassword from '../hooks/useForgotPassword';
import Link from 'next/link';
import Image from 'next/image';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);
    
    const handleSuccess = () => {
        setSubmitted(true); // Set submitted to true on successful submission
    };
    
    const { mutate, isLoading, error } = useForgotPassword({ onSuccessCallback: handleSuccess });

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        mutate({ email });
      };
    
    if (submitted) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100 text-secondary-content">
                <div className="bg-white rounded-xl shadow-xl p-8 text-center">
                    <h2 className="text-3xl font-semibold mb-4">Check Your Email</h2>
                    <p>An email has been sent to <strong>{email}</strong> with further instructions to reset your password.</p>
                    <Link href="/loginUser">
                        <button className="btn btn-primary mt-4">Return to Login</button>
                    </Link>
                </div>
            </div>
        );
    }
    
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className="bg-white rounded-xl shadow-xl flex overflow-hidden lg:h-128">
      {/* Image and Registration Link */}
      <div className="w-1/2 flex-shrink-0 hidden lg:block">
        <figure>
          <Image src="/images/curated1.jpeg" width={284} height={150} alt="Login Illustration" className="h-full w-full object-cover"/>
        </figure>
      </div>

      {/* Forgot Password Form */}
      <div className="w-full lg:w-1/2 p-8 space-y-5">
        <div className="flex justify-end items-center">
          <span className="text-gray-600 text-sm">Don't have an account?</span>
          <Link href="/registerUser">
            <button className="btn btn-outline text-sm py-1 px-3 ml-4">Register</button>
          </Link>
        </div>

        <div>
          <h2 className="text-3xl font-semibold mb-4 text-secondary-content  md:ml-8 sm:ml-4">Forgot Password</h2>
          <form onSubmit={handleSubmit} className="w-full lg:w-1/2 p-8 space-y-5">
            <div className="space-y-4 text-secondary-content">
              <input 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input input-bordered w-full sm:w-3/4 md:w-5/6 lg:w-96" 
                type="email" 
                placeholder="Email"
                required
              />
              {error && <p className="text-red-500">{error.message}</p>}
              <button type="submit" className="btn btn-primary w-full md:w-5/6" disabled={isLoading}>
                {isLoading ? 'Sending...' : 'Send'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ForgotPassword