"use client"
import React, { useState } from 'react'
import { OrderCreationResponse } from '../components/types';
import { FaBoxOpen, FaCreditCard, FaShippingFast } from 'react-icons/fa';
import useInitializePayment from '../hooks/useInitializePayment';
import useUserStore from '../components/useUserStore';
import { showToast } from '../components/ToastNotifier';

interface Props {
    order: OrderCreationResponse;
}

const OrderPage = ({order}: Props) => { 
    const [isButtonLoading, setIsButtonLoading] = useState(false);
    const initializePayment = useInitializePayment();
    const { user } = useUserStore();
    const userEmail = user?.email || '';

    const handlePayment = () => {
        setIsButtonLoading(true);

        initializePayment.mutate({
            email: userEmail,
            amount: order.totalPrice
        }, {
            onSuccess: (data) => {
                if(data.status && data.data.authorization_url){
                    window.location.href = data.data.authorization_url;
                } else {
                    showToast('Payment initialization failed: ' + data.message, 'error');
                    setIsButtonLoading(false);
                }
            },
            onError: (error) => {
                showToast('Payment initialization error: ' + error.message, 'error');
                setIsButtonLoading(false);
            }
        });
    }

    //  const getStatusBadge = () => {
    //     switch (order.status) {
    //         case 'pending':
    //             return <span className="badge badge-warning">Pending</span>;
    //         case 'completed':
    //             return <span className="badge badge-success">Completed</span>;
    //         case 'error':
    //             return <span className="badge badge-error">Error</span>;
    //         default:
    //             return <span className="badge badge-info">Info</span>;
    //     }
    // };

  return (
    <div className='container mx-auto p-4 text-secondary-content'>
            <h1 className="text-4xl font-bold text-center my-6">Order Summary</h1>

            <div className="flex flex-col md:flex-row justify-around items-center mb-6">
                <div className="card bg-white shadow-lg rounded-lg p-6 m-2 w-full md:w-1/3">
                    <h2 className="text-2xl font-semibold flex items-center"><FaBoxOpen className="mr-2"/> Order Details</h2>
                    <p><strong>ID:</strong> {order.id}</p>
                    <p><strong className="badge badge-warning">Status:</strong> {order.status}</p>
                    <p><strong>Date:</strong> {order.orderDate}</p>
                    <p><strong>Total:</strong> #{order.totalPrice.toLocaleString()}</p>
                </div>

                <div className="card bg-white shadow-lg rounded-lg p-6 m-2 w-full md:w-1/3">
                    <h2 className="text-2xl font-semibold flex items-center"><FaShippingFast className="mr-2"/> Shipping Info</h2>
                    <p>{order.shipping.name}</p>
                    <p>{order.shipping.address}</p>
                    <p>{order.shipping.city}, {order.shipping.state} {order.shipping.postalCode}</p>
                    <p>Phone: {order.shipping.phone}</p>
                </div>
            </div>

            <div className="card bg-white shadow-lg rounded-lg p-6 my-6">
                <h2 className="text-2xl font-semibold mb-4">Items Ordered</h2>
                <ul>
                    {order.items.map(item => (
                        <li key={item.id} className="border-b border-gray-200 py-2">
                            {item.product.name} - <span className="font-semibold">Qty:</span> {item.quantity}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="flex justify-center">
                <div className="card bg-color-4 p-4 shadow-lg rounded-lg">
                    <h2 className="text-2xl font-bold mb-4 flex items-center justify-center"><FaCreditCard className="mr-2"/> Payment</h2>
                    <button 
                        className={`btn btn-primary ${isButtonLoading ? 'loading' : ''}`}
                        onClick={handlePayment}
                        disabled={isButtonLoading}
                    >
                        Pay #{order.totalPrice.toLocaleString()} Now
                    </button>
                </div>
            </div>
        </div>
  )
}

export default OrderPage