import React from 'react'
import { Product } from '../components/types';
import { Category } from '../components/types';
import Image from 'next/image';

interface Props {
  product: Product;
  category: Category;
}

const ProductDetails = ({product, category}: Props) => {

  const colorMapping: Record<string, string> = {
    'Golden Blonde': '#f5c145',
    'Platinum': '#e6e8e6',
    'Ash Brown': '#a89f91'
    // Add other colors as needed
  };
  
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

          <div className="mb-4">
            <h4 className="text-lg font-semibold mb-2 text-secondary-content">Select Color:</h4>
            <ul className="flex space-x-2 text-secondary-content">
            {category.colors.map((color, index) => (
                <li key={index}>
                  {/* This div represents the color. Adjust width, height, and borderRadius as desired. */}
                  <div 
                    style={{
                      backgroundColor: colorMapping[color] || 'transparent', 
                      width: '30px', 
                      height: '30px', 
                      borderRadius: '50%', 
                    }}
                    
                    onClick={() => {
                      console.log(color);

                      // Handle color selection here
                      console.log(`Selected color: ${color}`);
                    }}
                    className="cursor-pointer hover:opacity-75" // Add hover effect for better UX
                  ></div>
                </li>
            ))}
            </ul>
          </div>
     {/* Any other product details like buttons can be added here */}
        </div>
      </div>
    </div>
  )
   
}

export default ProductDetails


