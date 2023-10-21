import React from 'react'
import pic1 from '../../public/images/po1.jpg'
import Image from 'next/image'
const Hero = () => {
  return (
    <div className="hero min-h-screen bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500">
    <div className="hero-overlay bg-opacity-60"></div>
<div className="hero-content flex-col lg:flex-row-reverse">

<div className="w-full lg:w-96 carousel rounded-box flex-shrink-0 ">
<Image src={pic1} className="w-full lg:max-w-sm rounded-lg shadow-2xl" alt="" />


 </div>
 
 <header>
 <h1 className="text-5xl lg:text-6xl font-bold mb-4 font-serif">Welcome to Tuti Hairs</h1>
 <p className="text-3xl mb-6">
           Discover exclusive deals, premium products, and affordable hairs.
         </p>

         <p className="text-xl">
       At Tuti Hairs, we believe every woman deserves to feel confident and beautiful. Dive into our meticulously curated collection of premium hair products
       </p>

         <div className="flex space-x-6 justify-center mt-5">
           <button className="btn btn-outline btn-accent">Shop Now</button>
           <button className="btn btn-ghost">Learn More</button>
         </div>
       </header>
</div>
</div>
  )
}

export default Hero