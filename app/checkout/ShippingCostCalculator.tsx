import React, { useEffect, useState } from 'react'
import calculateShippingCost from '../components/services/shippingUtils';

interface Props {
    onShippingCostChange: (cost: number) => void;
}

type ShippingMethod = 'standard' | 'express';

const ShippingCostCalculator = ({onShippingCostChange}: Props) => {
    const [shippingMethod, setShippingMethod] = useState<ShippingMethod>('standard');
    const [location, setLocation] = useState<string>('');
    const [shippingCost, setShippingCost] = useState<number>(0);

    useEffect(() => {
        try {
            const cost = calculateShippingCost(shippingMethod, location);
            setShippingCost(cost);
            onShippingCostChange(cost); // Update parent component
        } catch (error) {
            // Handle error (possibly update the parent component about the error)
            if (error instanceof Error) {
                console.error(error.message); // Or update the parent component about the error
            }
        }
    }, [shippingMethod, location, onShippingCostChange]);


  return (
    <div>
    <div className="form-group mb-4">
        <label htmlFor="shippingMethod" className="block mb-2">Shipping Method</label>
        <select id="shippingMethod" className="select select-bordered w-full"
                onChange={(e) => setShippingMethod(e.target.value as ShippingMethod)}>
            <option value="standard">Standard</option>
            <option value="express">Express</option>
        </select>
    </div>
    <div className="form-group mb-4">
        <label htmlFor="location" className="block mb-2">Location</label>
        <input type="text" id="location" className="input input-bordered w-full"
               onChange={(e) => setLocation(e.target.value)} />
    </div>

    <div className="flex justify-between items-center bg-base-200 p-4 my-2 rounded-lg shadow">
        <h3 className="text-xl font-bold">Shipping Cost:</h3>
        <span className="text-xl font-bold">#{shippingCost.toLocaleString()}</span>
    </div>
</div>
  )
}

export default ShippingCostCalculator