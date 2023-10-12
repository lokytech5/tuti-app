"use client"
import React from 'react'
import ProductCard from '../components/ProductCard';
import FilterProduct from './FilterProduct';
import apiClient from '../components/services/api-client';
import { useQuery } from '@tanstack/react-query';
import useProducts from '../hooks/useProducts';


const ProductPage = () => {

  const fetchProducts = () => 
  apiClient
      .get('/products')
      .then(res => res.data);

const { data, error, isLoading } = useProducts();

  if(isLoading) return <div>..isLoading</div>
  if(error?.message) return <div>Error please try again</div>

  
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-cover h-96 flex md:bg-center" style={{ backgroundImage: `url('/images/background2.jpg')` }}></div>
     
      <div className="flex flex-col lg:flex-row mt-5 items-start">
        
        <FilterProduct/>
    
        <div className="flex-grow p-4 space-y-4">
          <div className='flex flex-wrap justify-center mx-auto px-2'>
          {data?.product.map((product, index) =>(
            <div key={index} className="w-full md:w-1/2 lg:w-1/3 px-4 my-2">
            <ProductCard
            id={product._id}
            name={product.name}
            description={product.description}
            price={product.price}
            image={product.image}
            showAddToCartButton={true}
            showDetailsButton={true}/>
            </div>
          ))}
           </div>
        </div>
      </div>
    </div>

 
  )
}

export default ProductPage