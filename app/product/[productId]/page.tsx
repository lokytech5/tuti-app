"use client"
import useProductDetails from '@/app/hooks/useProductDetails';
import React from 'react'
import ProductDetails from '../ProductDetails';
import LoadingSpinner from '@/app/components/LoadingSpinner';
import ErrorAlert from '@/app/components/ErrorAlert';
import useSpecificCategory from '@/app/hooks/useSpecificCategory';

interface Props {
   params: { productId: string}
}

const ProductDetailsPage = ({ params: {productId }}: Props) => {
 
   const id: string | undefined = productId as string;
   
   
   const { data: product, isLoading: productLoading, error: productError } = useProductDetails({ productId: id });


   const categoryId = product?.category?._id;
   const { data: category, isLoading: categoryLoading, error: categoryError } = useSpecificCategory({ categoryId });

   
   if (productLoading || categoryLoading) return <div><LoadingSpinner/></div>;

   
   if (productError || categoryError) return <div><ErrorAlert/></div>;
  
   return product && category ? <ProductDetails product={product} category={category} /> : null;  
}

export default ProductDetailsPage