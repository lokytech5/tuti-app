import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import calculateShippingCost from "../components/services/shippingUtils";

interface Props {
  onShippingCostChange: (cost: number) => void;
  shippingMethod: ShippingMethod;
  setShippingMethod: (method: ShippingMethod) => void;
}

export type ShippingMethod = "standard" | "express";

const ShippingCostCalculator = ({
  onShippingCostChange,
  shippingMethod,
  setShippingMethod,
}: Props) => {
  const [shippingCost, setShippingCost] = useState<number>(0);
  const [error, setError] = useState<string>("");
  const { watch } = useFormContext();
  const selectedState = watch("state");

  useEffect(() => {
    if (selectedState) {
      try {
        const cost = calculateShippingCost(shippingMethod, selectedState);
        setShippingCost(cost);
        onShippingCostChange(cost);
        setError("");
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
        <label htmlFor="shippingMethod" className="block mb-2">
          Shipping Method
        </label>
        <select
          id="shippingMethod"
          className="select select-bordered w-full"
          onChange={(e) => setShippingMethod(e.target.value as ShippingMethod)}
        >
          <option value="standard">Standard</option>
          <option value="express">Express</option>
        </select>
      </div>

      <div className="flex justify-between items-center bg-base-200 p-4 my-2 rounded-lg shadow">
        <h3 className="text-xl font-bold">Shipping Cost:</h3>
        <span className="text-xl font-bold">
          #{shippingCost.toLocaleString()}
        </span>
      </div>
    </div>
  );
};

export default ShippingCostCalculator;
