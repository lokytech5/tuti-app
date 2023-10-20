import React from 'react'
import { Product } from '../components/types';
import { Category } from '../components/types';
import Image from 'next/image';

interface Props {
  product: Product;
  category: Category;
}

const ProductDetails = ({product, category}: Props) => {
  console.log('Rendering ProductDetailsPage');
  console.log('Rendering ProductDetailsPage');
  if(category){
    console.log("Colors:", category.colors);
  } else {
    console.log("Category not yet loaded.");
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 md:bg-white">
    <div className="bg-white shadow-lg rounded-lg mx-6 mt-6 md:mt-0 flex flex-col md:flex-row w-full md:max-w-2xl">
      <div className="w-full md:w-1/2 relative h-64 md:h-auto">
        <Image src={product.image} alt={product.name} layout="fill" objectFit="cover" />
      </div>
      <div className="p-6 w-full">
        {/* Product Name */}
        <h3 className="text-2xl font-semibold mb-2.5 text-secondary-content">
          {product.name}
        </h3>
        
        {/* Rating and View Count */}
<div className="flex items-center space-x-3.5 mb-4"> {/* Adjusted the space here using space-x utility */}
  <div className="rating rating-sm flex items-center space-x-2">
    <p className="text-xs text-gray-600">
      {product.averageRating}
    </p>
    <div>
      <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
      <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"  defaultChecked  />
      <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
      <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
      <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
    </div>
  </div>
  <div className="text-sm text-gray-600">
    Views: {product.viewCount}
  </div>
</div>

        
        {/* Product Description */}
        <p className="text-gray-500 w-full mb-4">
            {product.description}
          </p>
         

          {/* Product Price */}
          <div className="text-xl font-semibold text-gray-500 mb-4 w-full">
            ${product.price}
          </div>

          <ul style={{backgroundColor: 'red'}}>
  {category?.colors?.map((color, index) => (
    <li key={index} style={{backgroundColor: 'blue', color: 'green'}}>
      {color}
    </li>
  ))}
</ul>


          {/* Any other product details like buttons can be added here */}
        </div>
      </div>
    </div>
  )
   
}

export default ProductDetails


