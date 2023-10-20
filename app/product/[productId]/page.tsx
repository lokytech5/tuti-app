"use client"
import useProductDetails from '@/app/hooks/useProductDetails';
import React from 'react'
import ProductDetails from '../ProductDetails';
import LoadingSpinner from '@/app/components/LoadingSpinner';
import ErrorAlert from '@/app/components/ErrorAlert';

interface Props {
   params: { productId: string}
}

const ProductDetailsPage = ({ params: {productId }}: Props) => {
 
   const id: string | undefined = productId as string;
  

    const { data: product, isLoading, error } = useProductDetails({ productId: id })
  
   if (isLoading) return <div><LoadingSpinner/></div>;
   if (error) return <div><ErrorAlert/></div>;
  
   return product ? <ProductDetails product={product}/> : null;
      
}

export default ProductDetailsPage