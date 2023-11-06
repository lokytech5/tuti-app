import React from 'react'
import { FaShoppingCart } from 'react-icons/fa';

interface AddToCartProps {
  onClick: () => void;
}

const AddToCartButton = ({onClick}: AddToCartProps) => {
    
  return (
    <div className="flex justify-center my-4">
    <button 
        className="flex items-center space-x-2 px-12 py-3 bg-accent rounded-full focus:outline-none shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-200"
        onClick={onClick}>
        <FaShoppingCart className="w-5 h-5" />
        <span>Add to Cart</span>
    </button>
</div>
  )
}

export default AddToCartButton