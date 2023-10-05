import React from 'react'
import Image from 'next/image'
import ProductCard from '../components/ProductCard'
const CuratedCollection = () => {
    const products = [
        {
            title: 'Shoes!',
      description: 'If a dog chews shoes whose shoes does he choose?',
      image: '/images/hair1.jpg'
        },
        {
            title: 'Shoes!',
      description: 'If a dog chews shoes whose shoes does he choose?',
      image: '/images/hair3.jpg'
        },
        {
            title: 'Shoes!',
      description: 'If a dog chews shoes whose shoes does he choose?',
      image: '/images/hair3.jpg'
        },
        {
            title: 'Shoes!',
      description: 'If a dog chews shoes whose shoes does he choose?',
      image: '/images/hair3.jpg'
        }
    ]
  return (
    <section className="p-8 bg-base text-base-content">
 <h1 className="text-5xl font-bold mb-6 text-center">New Arrivals</h1>


 <div className="flex flex-wrap justify-center gap-10">
          {products.map((product, index) => (
            <ProductCard id={0} name={product.title} description={product.description} image={product.image} />
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