import React from 'react'
import { FaArrowRight, FaInfoCircle } from 'react-icons/fa'
import Image from 'next/image'
import pic1 from '../../public/images/hair4.jpg'

const ProductDescription = () => {
  return (
    <section className="bg-gradient-to-r from-primary to-blue-600 py-4 md:py-12"> 
    <div className="flex justify-center mt-2 md:mt-4">
        <div className="artboard artboard-horizontal phone-3 sm:min-h-40 bg-white p-4 md:p-8 rounded-lg shadow-lg flex flex-col md:flex-row"> 
        
            
            {/* Placeholder for Image */}
            <div className="flex-none w-full md:w-1/2 mt-8 md:mt-14 md:mb-0 md:mr-8">
                <div className="w-full h-56 md:h-96 rounded overflow-hidden">
                    <figure className="overflow-hidden rounded-t-lg">
                        <Image src={pic1} alt="woman with hair" width={284} height={213} layout="responsive" className="object-cover" />
                    </figure>
                </div>
            </div>

            {/* Description */}
            <div className="flex flex-col justify-center space-y-3 md:space-y-4 w-full md:w-1/2">
                <div className="flex items-center space-x-1 md:space-x-2 mb-2 md:mb-4">
                    <FaInfoCircle className="text-primary w-5 h-5 md:w-6 md:h-6" />
                    <span className="badge badge-info">Featured Product</span>
                </div>
                <h2 className="text-lg md:text-xl font-semibold text-center text-gray-600 mb-1 md:mb-2 sm:mb-12">Elevate Your Beauty</h2>
                <p className="text-gray-600 mb-4">
                    Our premium weavon collection, as showcased by our stunning model, 
                    offers elegance, charm, and a touch of luxury. Indulge in the finest 
                    hair weaves that are as captivating to the eyes as they are comfortable to wear.
                </p>
                <div className="flex justify-center">
                    <button className="btn btn-primary flex items-center space-x-1 md:space-x-2 hover:bg-blue-800 transition-colors duration-300">
                        <span>Discover More</span>
                        <FaArrowRight />
                    </button>
                </div>
            </div>
        </div>
    </div>
</section>

  )
}

export default ProductDescription