import React from 'react'
import Image from 'next/image'
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
          <div key={index} className="card card-compact w-64 bg-netural-100 shadow-2xl">
              <div className="card-body"> {/* Added margin-bottom for spacing */}
                <h2 className="card-title">{product.title}</h2> {/* Added margin-bottom for spacing */}
                <p>{product.description}</p>
              </div>
              <figure>
                <Image src={product.image} alt={product.title} width={284} height={156} layout="responsive" />
              </figure>
            </div>
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