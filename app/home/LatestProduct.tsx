import React from 'react'
import ProductCard from '../components/ProductCard'

const LatestProduct = () => {
    const latestProducts = [
        {
            title: 'Shoes!',
      description: 'If a dog chews shoes whose shoes does he choose?',
      image: '/images/hair1.jpg',
      price: 10_000
        },
        {
            title: 'Shoes!',
      description: 'If a dog chews shoes whose shoes does he choose?',
      image: '/images/hair3.jpg',
      price: 10_000
        },
        {
            title: 'Shoes!',
      description: 'If a dog chews shoes whose shoes does he choose?',
      image: '/images/hair3.jpg',
      price: 10_000
        },
        {
            title: 'Shoes!',
      description: 'If a dog chews shoes whose shoes does he choose?',
      image: '/images/hair3.jpg',
      price: 10_000
        }
    ]
  return (
    <section className="p-8 bg-netural text-base-content">
 <h1 className="text-5xl font-bold mb-6 text-center">Latest Products</h1>

 <div className="flex flex-wrap justify-center gap-10">
 {latestProducts.map((product, index) => (
            <ProductCard
            key={index} 
            id={0} 
            name={product.title} 
            description={product.description} 
            image={product.image}
            showDetailsButton={true}
             showAddToCartButton={true}
             price={product.price} />
          ))}

 </div>

 </section>

  )
}

export default LatestProduct