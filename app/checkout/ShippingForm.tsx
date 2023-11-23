import React from 'react'
import ShippingCostCalculator from './ShippingCostCalculator';
import { useFormContext } from 'react-hook-form';
  
  interface Props {
    onShippingCostChange: (cost: number) => void;
  }
  

const ShippingForm = ({onShippingCostChange}: Props) => {
    const { register, formState: { errors } } = useFormContext();

  return (
    <div className="mt-6">
          <h2 className="text-2xl font-bold mb-4">Shipping Information</h2>
          <form>

          <div className="form-group mb-4">
            <label htmlFor="name" className="block mb-2">Name</label>
            <input 
             {...register('name')}
            type="text" 
            id="name" 
            className="input input-bordered w-full" required />
            <p>{errors.name?.message as string || null}</p>
        </div>

        <div className="form-group mb-4">
            <label htmlFor="address" className="block mb-2">Address</label>
            <input 
             {...register('address')}
            type="text" 
            id="address" 
            className="input input-bordered w-full" required />
            <p>{errors.address?.message as string || null}</p>
        </div>

        <div className="form-group mb-4">
            <label htmlFor="city" className="block mb-2">City</label>
            <input 
             {...register('city')}
            type="text" 
            id="city" 
            className="input input-bordered w-full" required />
            <p>{errors.city?.message as string || null}</p>
        </div>

        <div className="form-group mb-4">
            <label htmlFor="state" className="block mb-2">State</label>
            <input 
            {...register('state')}
            type="text" 
            id="state" 
            className="input input-bordered w-full" required />
            <p>{errors.state?.message as string || null}</p>
        </div>

        <div className="form-group mb-4">
            <label htmlFor="postalCode" className="block mb-2">Postal Code</label>
            <input 
              {...register('postalCode')}
            type="number" 
            id="postalCode" 
            className="input input-bordered w-full" required />
             <p>{errors.postalCode?.message as string || null}</p>
        </div>

        <div className="form-group mb-4">
            <label htmlFor="phone" className="block mb-2">Phone</label>
            <input 
              {...register('phone')}
            type="tel" 
            id="phone" 
            className="input input-bordered w-full" required />
             <p>{errors.phone?.message as string || null}</p>
        </div>

            <ShippingCostCalculator onShippingCostChange={onShippingCostChange}/>
          </form>
        </div>
   
  )
}

export default ShippingForm