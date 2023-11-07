import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const RegisterUserPage = () => {
  return (
    
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <div className="bg-white rounded-xl shadow-xl flex overflow-hidden lg:h-128">
            {/* Image Section: Only visible on large screens */}
            <div className="w-1/2 flex-shrink-0 hidden lg:block">
              <figure>
              <Image src="/images/curated1.jpeg" width={284} height={150} alt="Login Illustration" className="h-full w-full object-cover"/>
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
    
        <div className="space-y-4">
          <input 
            className="input input-bordered w-full" 
            type="text" 
            placeholder="Username"
          />

          <input 
            className="input input-bordered w-full" 
            type="text" 
            placeholder="Email Address"
          />


          <input 
            className="input input-bordered w-full" 
            type="password" 
            placeholder="Password"
          />
          <button className="btn btn-primary w-full">Register</button>
        </div>
      </div>
    </div>
          </div>
        </div>
      )
  
}

export default RegisterUserPage