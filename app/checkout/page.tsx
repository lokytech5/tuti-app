"use client"
import React, { useState } from 'react'
import Image from 'next/image';
import useCartStore from '../components/useCartStore';
import ShippingCostCalculator from './ShippingCostCalculator';

const CheckoutPage = () => {
    const items = useCartStore((state) => state.items);
    const calculateTotal = useCartStore((state) => state.calculateTotal);
    const totalPrice = calculateTotal();
    const [isSubmitting, setIsSubmitting] = useState(false); // State for form submission
  const [formError, setFormError] = useState(''); // State for form error
  const [showPaystackButton, setShowPaystackButton] = useState(false);
  const [shippingCost, setShippingCost] = useState<number>(0);

  // Handle form submission
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setFormError('');

    // Implement form submission logic
    // On success:
    setIsSubmitting(false);
    setShowPaystackButton(true);
    // On error:
    // setFormError('Error message');

    // Redirect or show confirmation message
  };

  const handleShippingCostChange = (cost: number) => {
    setShippingCost(cost);
  }

  const finalTotalPrice = totalPrice + shippingCost;
  return (
    <div className='container mx-auto p-4 text-secondary-content'>
    <h1 className="text-3xl font-bold mb-4">Checkout</h1>
    {items.length === 0 ? (
      <p>Your cart is empty.</p>
    ) : (
      <div>
        {items.map(item => (
          <div key={item.product._id} className="flex flex-col md:flex-row items-center justify-between bg-base-200 p-4 my-2 rounded-lg shadow">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="w-24 h-24 relative mr-4">
                <Image
                  src={item.product.image}
                  alt={item.product.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <div>
                <h2 className="text-lg font-semibold">{item.product.name}</h2>
                <p>Qty: {item.quantity}</p>
                <p>Price: #{item.product.price.toLocaleString()}</p>
                {/* Additional product details */}
              </div>
            </div>
            <button className="btn btn-error btn-xs" onClick={() => {/* remove item logic */}}>
              Remove
            </button>
          </div>
        ))}
        <div className="flex justify-between items-center bg-base-200 p-4 my-2 rounded-lg shadow">
          <h3 className="text-xl font-bold">Total:</h3>
          <span className="text-xl font-bold">#{totalPrice.toLocaleString()}</span>
        </div>

        {/* Checkout Form */}
        <div className="mt-6">
          <h2 className="text-2xl font-bold mb-4">Shipping Information</h2>
          <form>
            <div className="form-group mb-4">
              <label htmlFor="name" className="block mb-2">Full Name</label>
              <input type="text" id="name" className="input input-bordered w-full" />
            </div>
            <div className="form-group mb-4">
              <label htmlFor="address" className="block mb-2">Address</label>
              <input type="text" id="address" className="input input-bordered w-full" />
            </div>

            <ShippingCostCalculator onShippingCostChange={handleShippingCostChange}/>
            {/* Additional fields as needed */}
            <button 
          type="submit" 
          className={`btn btn-primary mt-4 ${isSubmitting ? 'loading' : ''}`}
          onClick={(e) => handleSubmit}
          disabled={isSubmitting}
        >
          Place Order
        </button>
        {formError && <p className="text-red-500">{formError}</p>}
          </form>
        </div>

        <div className="flex justify-between items-center bg-base-200 p-4 my-2 rounded-lg shadow">
                <h3 className="text-xl font-bold">Total with Shipping:</h3>
                <span className="text-xl font-bold">#{finalTotalPrice.toLocaleString()}</span>
            </div>

        {/* Payment Integration Placeholder */}
        {showPaystackButton && (
        <div className="mt-6">
        <h2 className="text-2xl font-bold mb-4">Pay with Paystack</h2>
        <button 
          className={`btn btn-primary ${isSubmitting ? 'loading' : ''}`}
          
          disabled={isSubmitting}
        >
          Pay Now
        </button>
        {formError && <p className="text-red-500">{formError}</p>}
      </div>
        )}
      </div>
    )}
  </div>
  )
}

export default CheckoutPage