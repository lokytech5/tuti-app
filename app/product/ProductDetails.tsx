import React, { useState } from 'react'
import { Product } from '../components/types';
import { Category } from '../components/types';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

import ColourBox from './ColourBox';
import AddToCartButton from './AddToCartButton';

interface Props {
  product: Product;
  category: Category;
}

const ProductDetails = ({product, category}: Props) => {
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(1);

  const router = useRouter();

  const increaseQuantity = () => {
    setQuantity(prev => prev + 1);
}

const decreaseQuantity = () => {
    if (quantity > 1) {
        setQuantity(prev => prev - 1);
    }
}

const closeCard = () => {
  router.back();
}
  
  return (
    <div className="flex items-center justify-center min-h-screen">
   <div className="bg-white shadow-2xl rounded-lg mx-6 mt-6 md:mt-0 flex flex-col md:flex-row w-full lg:w-4/5 xl:w-3/4 relative overflow-hidden">
    {/* Close Button */}
    <button
        onClick={closeCard} 
        className="absolute top-0 sm:top-2 right-0 sm:right-2 z-50 p-3 text-3xl text-secondary-content focus:outline-none hover:bg-gray-300 visible sm:visible"
    >
                X
            </button>
      <div className="w-full md:w-1/2 lg:w-2/3 xl:w-3/4 relative h-64 md:h-auto">
        <Image src={product.image} alt={product.name} layout="fill" objectFit="cover" />
      </div>
      <div className="p-6 w-full">
        {/* Category Name */}
        <h4 className="mb-2 text-secondary-content">
          {category.name}
        </h4>

        {/* Product Name */}
        <h2 className="product-name-large text-secondary-content">
          {product.name}
        </h2>
        
        {/* Rating and View Count */}
<div className="flex items-center space-x-3.5 mb-4"> {/* Adjusted the space here using space-x utility */}
  <div className="rating rating-sm flex items-center space-x-2">
    {/* <p className="text-xs text-gray-600">
      {product.averageRating}
    </p> */}
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
        <p className="product-description text-secondary-content">
            {product.description}
          </p>

          <div className="mb-4 flex items-center space-x-2.5"> {/* Using flex utilities */}
    <h4 className="color-label text-md font-semibold mb-0 text-secondary-content">Color:</h4>
    <ul className="flex space-x-2 text-secondary-content mb-0">
            {category.colors.map((color, index) => (
                <li key={index}>

                  <ColourBox
                     colorName={color}
                     selectedColor={selectedColor}
                     onChange={(color) => {
                      setSelectedColor(color);
                      console.log(`Selected color: ${color}`);
                    }}
                  />
                </li>
            ))}
            </ul>
          </div>

          {/* Adding the inches using DaisyUI's badge or pill */}
<div className="mb-6 flex items-center space-x-2.5">
    <h4 className="length-label text-md font-semibold mb-0 text-secondary-content">Length:</h4>
    <span className="length-value badge badge-primary text-md">{category.inches}"</span>
          </div>

          {/* Stock availability */}
<div className="mb-6 flex items-center space-x-2.5">
    <h4 className="stock-label font-semibold mb-0 text-secondary-content">Stock:</h4>
    {product.stock < 5 ?
        <span className="badge badge-error text-md">Low Stock</span> :
        <span className="badge badge-success text-md">In Stock</span>
    }
</div>

<div className="mb-6 flex flex-col-reverse sm:flex-row w-full justify-between">
<span className="product-price-large text-secondary-content">#{product.price.toLocaleString()}</span>
    <div className="flex items-center mb-4 sm:mb-0">
        <span className="text-md sm:text-md font-semibold text-gray-600 mr-2 sm:mr-3">Quantity:</span>
        <button 
            onClick={decreaseQuantity}
            className="px-2 sm:px-3 py-0.5 sm:py-1 bg-black text-sm sm:text-lg border rounded-l-md focus:outline-none"
        >
            -
        </button>
        <span className="w-12 sm:w-16 px-2 sm:px-3 py-1 text-center text-sm sm:text-lg border-t border-b text-secondary-content">
            {quantity}
        </span>
        <button 
            onClick={increaseQuantity}
            className="px-2 sm:px-3 py-0.5 sm:py-1 bg-black text-sm sm:text-lg border rounded-r-md focus:outline-none"
        >
            +
        </button>
    </div>
</div> 

   {/* Add to Cart Button */}
   <AddToCartButton/>
     {/* Any other product details like buttons can be added here */}
        </div>
        
        
      </div>
      {/* Floating Write Review Button */}
      {/* <div className="fixed bottom-6 right-6">
            <button 
                // onClick={openReviewModal}
                className="px-6 py-2 bg-blue-600 text-white rounded-full focus:outline-none shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-200"
            >
                Write Review
            </button>
        </div> */}
    </div>

  )
   
}

export default ProductDetails


