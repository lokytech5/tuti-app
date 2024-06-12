"use client"
import ErrorAlert from '@/app/components/ErrorAlert';
import LoadingSpinner from '@/app/components/LoadingSpinner';
import React from 'react'
import OrderPage from '../page';
import useFetchOrderById from '@/app/hooks/useFetchOrderById';


export interface Props {
  params: { orderId: string}
}

const OrderDetailsPage = ({ params: {orderId}}: Props) => {

  const id: string | undefined = orderId as string;

  const { data: order, isLoading, error } =  useFetchOrderById({ orderId: id});

  if (isLoading) return <div><LoadingSpinner/></div>;
    if (error) return <div><ErrorAlert/></div>;

    return (
      <div>
        { order ? (
          <OrderPage order={ order } />
        ): (
          <div>No orders available.</div>  
        )}
      </div>
    )

}

export default OrderDetailsPage