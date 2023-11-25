"use client"
import React, { useState } from 'react'
import useFetchOrder from '../hooks/useFetchOrder';
import { useSearchParams } from 'next/navigation';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorAlert from '../components/ErrorAlert';

const OrderSummary = () => {
    const searchParams = useSearchParams();
    const orderId = searchParams.get('orderId')
    const { data: order, isLoading, error } = useFetchOrder({ orderId });
    const [isButtonLoading, setIsButtonLoading] = useState(false);

    if(isLoading) return <LoadingSpinner/>
    if(error) return <ErrorAlert message={error.message}/>

    const handlePayment = () => {
        setIsButtonLoading(true);
        // Implement payment logic here
    }

  return (
    <div>
      <h1>Order Summary</h1>
      {order && (
                <div>
                    <h2>Order ID: {order.id}</h2>
                    <p>User: {order.user.name} ({order.user.email})</p>
                    <p>Status: {order.status}</p>
                    <p>Order Date: {order.orderDate}</p>
                    <p>Total Price: {order.totalPrice}</p>
                    <h3>Shipping Details:</h3>
                    <p>{order.shipping.name}</p>
                    <p>{order.shipping.address}</p>
                    <p>{order.shipping.city}, {order.shipping.state} {order.shipping.postalCode}</p>
                    <p>Phone: {order.shipping.phone}</p>
                    <h3>Items:</h3>
                    <ul>
                        {order.items.map(item => (
                            <li key={item.id}>
                                {item.product.name} - Quantity: {item.quantity}
                            </li>
                        ))}
                    </ul>
                </div>
            )}

        <div className="card bg-color-4 p-4 my-2 mt-6">
                <h2 className="text-2xl font-bold mb-4">Pay with Paystack</h2>
                <button 
                    className={`btn btn-primary ${isButtonLoading ? 'loading' : ''}`}
                    onClick={handlePayment}
                    disabled={isButtonLoading}
                >
                    Pay Now
                </button>
            </div>
        </div>
  )
}

export default OrderSummary