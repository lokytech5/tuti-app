
import React from 'react'
import OrderSuccessfulPage from '../page'
import LoadingSpinner from '@/app/components/LoadingSpinner';
import ErrorAlert from '@/app/components/ErrorAlert';
import useFetchOrderById from '@/app/hooks/useFetchOrderById';

interface Props {
    params: { orderId: string}
  }

const OrderSuccessfulDetailPage = ({ params: {orderId}}: Props) => {

  const id: string | undefined = orderId as string;

  const { data: order, isLoading, error } =  useFetchOrderById({ orderId: id});

  if (isLoading) return <div><LoadingSpinner/></div>;
    if (error) return <div><ErrorAlert/></div>;
    
    <div>
    { order ? (
      <OrderSuccessfulPage order={ order } />
    ): (
      <div>No orders available.</div>  
    )}
  </div>
}

export default OrderSuccessfulDetailPage