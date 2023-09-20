import React from 'react'
import pic1 from '../../public/images/img1.jpg'
import Image from 'next/image'

const HomePage = () => {
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
    <div>

   
    <div className="hero min-h-screen bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500">
       <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content flex-col lg:flex-row-reverse">

  <div className="w-full lg:w-96 carousel rounded-box flex-shrink-0 ">
  <div className="carousel-item w-full">
  <Image src={pic1} className="w-full lg:max-w-sm rounded-lg shadow-2xl" alt="" />
  </div>
  <div className="carousel-item w-full">
  <Image src={pic1} className="w-full lg:max-w-sm rounded-lg shadow-2xl" alt="" />
  </div>

    </div>
    
    <header>
            <h1 className="text-5xl lg:text-6xl font-bold mb-4">Welcome to Tuti Hairs</h1>
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
  

 {/* New Arrivals Section */}
 <section className="p-8">
 <h1 className="text-5xl font-bold mb-6 text-center">New Arrivals</h1>

 {/* Limited Time Discount */}
<div className="mb-6 alert alert-info">
  <div className="flex-1">
    <svg className="w-6 h-6 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
      <path d="M5 13l4 4L19 7"></path>
    </svg> 
    <span>Limited time offer: Enjoy an exclusive 10% discount on all New Arrivals!</span>
  </div>
</div>

 <div className="flex flex-wrap justify-center gap-10">
          {products.map((product, index) => (
            <div key={index} className="card card-compact w-64 bg-base-100 shadow-xl">
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
        </div>
  )
}

export default HomePage