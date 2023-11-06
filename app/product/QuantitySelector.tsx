import React from 'react'

interface QuantitySelectorProps {
    quantity: number;
    onIncrease: () => void;
    onDecrease: () => void;
}

const QuantitySelector = ({ quantity, onIncrease, onDecrease}: QuantitySelectorProps) => {
  return (
    <div className="flex items-center mb-4 sm:mb-0">
        <span className="text-md sm:text-md font-semibold text-gray-600 mr-2 sm:mr-3">Quantity:</span>
        <button 
            onClick={onDecrease}
            className="px-2 sm:px-3 py-0.5 sm:py-1 bg-black text-sm sm:text-lg border rounded-l-md focus:outline-none"
        >
            -
        </button>
        <span className="w-12 sm:w-16 px-2 sm:px-3 py-1 text-center text-sm sm:text-lg border-t border-b text-secondary-content">
            {quantity}
        </span>
        <button 
            onClick={onIncrease}
            className="px-2 sm:px-3 py-0.5 sm:py-1 bg-black text-sm sm:text-lg border rounded-r-md focus:outline-none"
        >
            +
        </button>
    </div>
  )
}

export default QuantitySelector