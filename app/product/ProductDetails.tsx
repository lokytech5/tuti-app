import React from 'react'
import { Product } from '../components/types';

interface Props {
  product: Product;
}

const ProductDetails = ({product}: Props) => {
  return (
    <div>
      <h1 className='bg-black'>{product.name}</h1>
      <h2 className='bg-black'>product details page</h2>
    </div>
  )
   
}

export default ProductDetails