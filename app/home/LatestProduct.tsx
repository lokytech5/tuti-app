import React from 'react'
import ProductCard from '../components/ProductCard'
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorAlert from '../components/ErrorAlert';
import useProducts from '../hooks/useProducts';

const LatestProduct = () => {
  const { data, error, isLoading } = useProducts({ endpoint: '/products/latest' });

  if(isLoading) return <LoadingSpinner/>
  if(error) return <ErrorAlert message={error.message}/>
  return (
    <section className="p-8 bg-netural text-base-content">
 <h1 className="text-5xl font-bold mb-6 text-center">Latest Products</h1>

 <div className="flex flex-wrap justify-center gap-10">
 {data?.latestProducts?.map((product, index) => (
            <ProductCard
            key={index} 
            id={product._id} 
            name={product.name} 
            description={product.description} 
            image={product.image}
             showAddToCartButton={true}
             price={product.price} />
          ))}

 </div>

 </section>

  )
}

export default LatestProduct