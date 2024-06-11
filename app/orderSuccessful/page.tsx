"use client"
import { useRouter } from 'next/navigation';
import React from 'react'
import { OrderCompletionResponse } from '../components/types';
import { FaShoppingCart, FaRegCheckCircle, FaMailBulk, FaPoll } from 'react-icons/fa';


interface Props {
    order: OrderCompletionResponse; 
}

const OrderSuccessfulPage = ({order}: Props) => {
    const customerSupportEmail = 'adaonwuegbuzie@gmail.com';

    if(!order){
        return <div>Loading ...</div>
    }
   
    
    return (
        <div className="container mx-auto p-4 text-secondary-content">
        <div className="card bg-base-100 shadow-xl rounded-lg">
            <div className="card-body">
                <div className="flex flex-col items-center justify-center mb-6">
                    <FaRegCheckCircle className="w-16 h-16 text-green-500 mb-2"/>
                    <h1 className="text-4xl font-bold">Order Successful</h1>
                </div>
                <p className="text-center text-xl mb-6">Your order with ID <span className="font-semibold">{order.id}</span> has been successfully processed.</p>

                {/* Order Summary */}
                <div className="overflow-x-auto mt-6">
                    <table className="table w-full text-sm">
                        <thead>
                            <tr>
                                <th>Item</th>
                                <th>Quantity</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {order.items.map((item, index) => (
                                <tr key={index} className="hover:bg-gray-100">
                                    <td>{item.product.name}</td>
                                    <td>{item.quantity}</td>
                                    <td>#{item.product.price.toLocaleString()}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="text-right mt-4">
                    <p className="text-lg font-semibold">Total Amount: #{order.totalPrice.toLocaleString()}</p>
                </div>

                <div className="flex justify-between items-center mt-8">
                    <a href={`mailto:${customerSupportEmail}`} className="btn btn-outline btn-accent flex items-center">
                        <FaMailBulk className="w-5 h-5 mr-2"/> Contact Support
                    </a>
                    <button onClick={() => window.location.href = '/product'} className="btn btn-primary flex items-center">
                        <FaShoppingCart className="w-5 h-5 mr-2"/> Continue Shopping
                    </button>
                </div>

                <div className="text-center mt-6">
                    <p className="mb-2">
                        <FaPoll className="inline-block w-5 h-5 mr-1"/>
                        <a href="/return-policy" className="underline">Return Policy</a>
                    </p>
                    <p className="text-sm text-gray-500">A confirmation email has been sent to your email address with all the order details.</p>
                </div>
            </div>
        </div>
    </div>
    )

}

export default OrderSuccessfulPage