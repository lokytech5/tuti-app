"use client"
import React, { useState } from 'react'
import Image from 'next/image';
import useCartStore from '../components/useCartStore';
import ShippingForm from './ShippingForm';
import { useForm, SubmitHandler, FormProvider, useFormContext } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { FaTrashAlt } from 'react-icons/fa';

const shippingSchema = z.object({
  name: z.string().min(1, "Name is required"),
  address: z.string().min(1, "Address is required"),
  city: z.string().min(1, "City is required"),
  state: z.string().min(1, "State is required"),
  postalCode: z.number().min(1, "Postal code is required"),
  phone: z.string().min(1, "Phone is required"),
});

type ShippingFormData = z.infer<typeof shippingSchema>;

const CheckoutPage = () => {
    const items = useCartStore((state) => state.items);
    const calculateTotal = useCartStore((state) => state.calculateTotal);
    const totalPrice = calculateTotal();
    const [isSubmitting, setIsSubmitting] = useState(false); // State for form submission
  const [formError, setFormError] = useState(''); // State for form error
  const [showPaystackButton, setShowPaystackButton] = useState(false);
  const [shippingCost, setShippingCost] = useState<number>(0);

  const methods = useForm<ShippingFormData>({
    resolver: zodResolver(shippingSchema),
  });
  
  const { handleSubmit } = useForm<ShippingFormData>();

  const handleShippingCostChange = (cost: number) => {
    setShippingCost(cost);
  }

  const handleShippingFormSubmit = methods.handleSubmit((data) => {
    setIsSubmitting(true);
    setFormError('');

    console.log(data);

    setIsSubmitting(false);
    setShowPaystackButton(true);
    // On error: setFormError('Error message');
});

  const finalTotalPrice = totalPrice + shippingCost;
  return (
    <div className='container mx-auto p-4 text-secondary-content'>
    <h1 className="text-3xl font-bold mb-4">Checkout</h1>
    {items.length === 0 ? (
      <p>Your cart is empty.</p>
    ) : (
      <div>
    {items.map(item => (
  <div key={item.product._id} className="card card-bordered card-compact lg:card-normal shadow mb-4 bg-color-1 p-4 my-2">
    <div className="card-body">
      <div className="flex items-center">
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
          <h2 className="card-title">{item.product.name}</h2>
          {item.product.selectedColor && (
            <p>Color: {item.product.selectedColor}</p>
          )}
          <p>Quantity: {item.quantity}</p>
          <p className="text-lg font-bold">Price: #{item.product.price.toLocaleString()}</p>
        </div>
      </div>
      <div className="card-actions justify-end">
        <button className="btn btn-error btn-xs" onClick={() => {/* remove item logic */}}>
          <FaTrashAlt/> Remove
        </button>
      </div>
    </div>
  </div>
))}

          <FormProvider {...methods}>
          <form onSubmit={handleShippingFormSubmit} className="mb-4">
          <div className="card bg-color-2 p-4 my-2">
               <ShippingForm onShippingCostChange={handleShippingCostChange} />
           </div>
                <button 
                    type="submit" 
                    className={`btn btn-primary mt-4 ${isSubmitting ? 'loading' : ''}`}
                    disabled={isSubmitting}
                >
                    Place Order
                </button>
                {formError && <p className="text-red-500">{formError}</p>}
            </form>


                  {/* Total Price Section */}
                   <div className="text-right card bg-color-3 p-4 my-2">
                        <div className="text-lg">Total: #{totalPrice.toLocaleString()}</div>
                        <div className="text-xl font-bold mt-2">Total with Shipping: #{finalTotalPrice.toLocaleString()}</div>
                    </div>

        {/* Payment Integration Placeholder */}
        {showPaystackButton && (
        <div className="card bg-color-4 p-4 my-2 mt-6">
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
        </FormProvider>
      </div>
    )}
  </div>
  )
}

export default CheckoutPage