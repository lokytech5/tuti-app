import React from 'react'

const TrainingClass = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-gray-200 to-gray-300">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800">
              Training Class Coming Soon
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-600">
              Stay updated with our latest classes!
            </p>
          </div>
    
          <div className="mt-8">
            <input 
              type="email" 
              placeholder="Enter your email"
              aria-label="Email for notifications"
              className="px-4 py-2 w-64 md:w-80 rounded-l-lg border-0 focus:ring-2 focus:ring-gray-400" 
            />
            <button 
              className="bg-gray-800 text-white px-4 py-2 rounded-r-lg hover:bg-gray-700 transition duration-300"
            >
              Notify Me
            </button>
          </div>
        </div>
    )
}

export default TrainingClass