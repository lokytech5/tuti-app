import React from 'react'
import Image from 'next/image'
import CuratedProductCard from './CuratedProductCard'
import useCurated from '../hooks/useCurated'
import LoadingSpinner from '../components/LoadingSpinner'
import ErrorAlert from '../components/ErrorAlert'
import { CuratedCollectionResponse } from '../components/types'
const CuratedCollection = () => {
    const {data, error, isLoading} = useCurated()
    const collections: CuratedCollectionResponse['collections'] = data?.collections || [];

    if(isLoading) return <LoadingSpinner/>
    if (error) {
      // Adjust this based on the actual structure of your error object
      const errorMessage = typeof error === 'string' ? error : 'An error occurred';
      return <ErrorAlert message={errorMessage} />;
  }
  return (
    <section className="p-8 bg-base text-base-content">
 <h1 className="text-5xl font-bold mb-6 text-center">New Arrivals</h1>


 <div className="flex flex-wrap justify-center gap-10">
          {collections.map((collection, index) => (
            <CuratedProductCard
            key={index} 
            id={collection._id} 
            name={collection.name} 
            image={collection.bannerImage}/>
          ))}
        </div>

{/* Feature Banner */}
<div className="mb-10 rounded shadow-md p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between">
  <div className="mb-4 sm:mb-0">
    <h2 className="text-xl font-semibold mb-2">Editor's Pick</h2>
    <p>Experience our most awaited, premium hair product!</p>
  </div>
  <div className="flex-shrink-0">
    <Image src="/images/hair2.jpg" alt="Featured Product" width={120} height={120} className="sm:w-36 sm:h-36" />
  </div>
</div>
      </section>
  )
}

export default CuratedCollection