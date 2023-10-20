import React from 'react'

const login = () => {
  return (
    
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <div className="bg-white rounded-xl shadow-xl flex overflow-hidden lg:h-96">
            {/* Image Section: Only visible on large screens */}
            <div className="w-1/2 flex-shrink-0 hidden lg:block">
              <img src="/path-to-your-image.jpg" alt="Login Illustration" className="h-full w-full object-cover"/>
            </div>
    
            {/* Login Content Section */}
            <div className="w-full lg:w-1/2 p-8 space-y-5">
      <div className="flex justify-end items-center">
        <span className="text-gray-600 text-sm">Already Have an account?</span>
        <button className="btn btn-outline text-sm py-1 px-3 ml-4">Sign In</button>
      </div>
    
      <div>
        <h2 className="text-3xl font-semibold mb-4 text-secondary-content">Welcome to GeoHomeFinder</h2>
    
        <div className="space-y-4">
          <input 
            className="input input-bordered w-full" 
            type="text" 
            placeholder="Username"
          />
          <input 
            className="input input-bordered w-full" 
            type="password" 
            placeholder="Password"
          />
          <button className="btn btn-primary w-full">Login</button>
        </div>
      </div>
    </div>
          </div>
        </div>
      )
  
}

export default login