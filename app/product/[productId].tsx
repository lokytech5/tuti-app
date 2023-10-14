import { useRouter } from 'next/router';
import React from 'react'
import useProductDetails from '../hooks/useProductDetails';

const ProductDetailsPage = () => {
    const router = useRouter();
  const { id } = router.query;

  console.log('Router ID:', id);

  const productId = typeof id === 'string' ? id : undefined;
  
  const { data, isLoading, error } = productId 
  ? useProductDetails({ productId }) 
  : { data: undefined, isLoading: false, error: undefined };


    console.log('Product Data:', data?.product); // Here we're accessing the product from the data

    if (!productId) return null;

    return (
      <div>
        <h1>{data?.product.name}</h1>
        <h2>Product details page here</h2>
        {/* You can add more product properties here as needed */}
      </div>
    );
}

export default ProductDetailsPage