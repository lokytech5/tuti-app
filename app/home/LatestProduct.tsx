import React from 'react'
import ProductCard from '../components/ProductCard'
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorAlert from '../components/ErrorAlert';
import useProducts from '../hooks/useProducts';

const LatestProduct = () => {
  const { data, error, isLoading, fetchNextPage,
    hasNextPage,
    isFetchingNextPage, } = useProducts({ endpoint: '/products/latest' });

    const allProducts = data?.pages.flatMap(page => page.latestProducts || [])?.filter(p => p) || [];

  if(isLoading) return <LoadingSpinner/>
  if(error) return <ErrorAlert message={error.message}/>
  return (
    <section className="p-8 bg-netural text-base-content">
 <h1 className="text-5xl font-bold mb-6 text-center">Latest Products</h1>

 <div className="flex flex-wrap justify-center gap-10">
 {allProducts.map((product, index) => (
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

 <div className="text-center mt-6">
        <button
          onClick={() => fetchNextPage()}
          disabled={!hasNextPage || isFetchingNextPage}
          className="btn btn-secondary"
        >
          {isFetchingNextPage ? 'Loading more...' : hasNextPage ? 'Load More' : 'No more products'}
        </button>
      </div>
    </section>

  )
}

export default LatestProduct