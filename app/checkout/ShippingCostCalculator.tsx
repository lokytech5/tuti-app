import React, { useEffect, useState } from 'react'
import calculateShippingCost from '../components/services/shippingUtils';
import { useFormContext } from 'react-hook-form';

interface Props {
    onShippingCostChange: (cost: number) => void;
}

type ShippingMethod = 'standard' | 'express';

const ShippingCostCalculator = ({onShippingCostChange}: Props) => {
    const [shippingMethod, setShippingMethod] = useState<ShippingMethod>('standard');
    const [state, setState] = useState<string>('');
    const [shippingCost, setShippingCost] = useState<number>(0);
    const [error, setError] = useState<string>('');
    const { watch } = useFormContext();
    const selectedState = watch('state');

    useEffect(() => {
        if(selectedState) {
        try {
            const cost = calculateShippingCost(shippingMethod, selectedState);
            setShippingCost(cost);
            onShippingCostChange(cost);
            setError('');
        } catch (error) {
            if (error instanceof Error) {
                console.error(error.message);
            }
        }
    }
    }, [shippingMethod, selectedState, onShippingCostChange]);


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
    {/* <div className="form-group mb-4">
        <label htmlFor="location" className="block mb-2">State</label>
        <input type="text" id="location" className="input input-bordered w-full"
               onChange={(e) => setState(e.target.value)} />
    </div>
    {error && <p className="text-red-500">{error}</p>} */}
    <div className="flex justify-between items-center bg-base-200 p-4 my-2 rounded-lg shadow">
        <h3 className="text-xl font-bold">Shipping Cost:</h3>
        <span className="text-xl font-bold">#{shippingCost.toLocaleString()}</span>
    </div>
</div>
  )
}

export default ShippingCostCalculator