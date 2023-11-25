"use client"
import React, { useState } from 'react'
import Image from 'next/image';
import useCartStore from '../components/useCartStore';
import ShippingForm from './ShippingForm';
import { useForm, SubmitHandler, FormProvider, useFormContext } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { FaTrashAlt } from 'react-icons/fa';
import useCreateOrder from '../hooks/useCreateOrder';
import { showToast } from '../components/ToastNotifier';
import { useRouter } from 'next/navigation';
import useUserStore from '../components/useUserStore';
import { ShippingMethod } from './ShippingCostCalculator';

const shippingSchema = z.object({
  name: z.string().min(1, "Name is required"),
  address: z.string().min(1, "Address is required"),
  city: z.string().min(1, "City is required"),
  state: z.string().min(1, "State is required"),
  postalCode: z.string()
  .min(1, "Postal code is required")
  .regex(/^\d+$/, "Postal code must be numeric"),
  phone: z.string().min(1, "Phone is required"),
});

type ShippingFormData = z.infer<typeof shippingSchema>;

const CheckoutPage = () => {
    const items = useCartStore((state) => state.items);
    const calculateTotal = useCartStore((state) => state.calculateTotal);
    const totalPrice = calculateTotal();
    const [isSubmitting, setIsSubmitting] = useState(false); // State for form submission
  const [formError, setFormError] = useState(''); // State for form error
  const [shippingMethod, setShippingMethod] = useState<ShippingMethod>('standard');
  const user = useUserStore.getState().user; 
 
  const [shippingCost, setShippingCost] = useState<number>(0);

  const router = useRouter();

  const methods = useForm<ShippingFormData>({
    resolver: zodResolver(shippingSchema),
  });

  const createOrder = useCreateOrder();

  const handleShippingCostChange = (cost: number) => {
    setShippingCost(cost);
  }

  const onSubmit = (data: ShippingFormData) => {
    setIsSubmitting(true);
    setFormError('');

    const orderData = {
       user: user?._id,
      items: items.map(item => ({
        product: item.product._id,
        quantity: item.quantity,
        selectedColor: item.product.selectedColor || null
      })),
      shipping: {
        cost: shippingCost,
        name: data.name,
        address: data.address,
        city: data.city,
        state: data.state,
        postalCode: data.postalCode.toString(), // Convert postalCode to a string
        phone: data.phone,
        method: shippingMethod
    }
    };

    createOrder.mutate(orderData, {
      onSuccess: (response) => {
        showToast('Order created successfully!', 'success');
        router.push(`/order/${response.id}`);
        console.log('Order created successfully:', response);
      
        // Additional success handling (e.g., redirect to a success page)
      },
      onError: (error) => {
        setFormError(error.response?.data?.error || 'An unexpected error occurred');
      }
    });

    setIsSubmitting(false);
   
    // On error: setFormError('Error message');
};

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
          <form onSubmit={methods.handleSubmit(onSubmit)} className="mb-4">
          <div className="card bg-color-2 p-4 my-2">
               <ShippingForm 
               onShippingCostChange={handleShippingCostChange}
               shippingMethod={shippingMethod}
               setShippingMethod={setShippingMethod}  />
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
        
        </FormProvider>
      </div>
    )}
  </div>
  )
}

export default CheckoutPage