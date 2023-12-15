"use client"
import React from 'react'
import OrderSuccessfulPage from '../page'
import useFetchOrder from '@/app/hooks/useFetchOrder';
import LoadingSpinner from '@/app/components/LoadingSpinner';
import ErrorAlert from '@/app/components/ErrorAlert';

interface Props {
    params: { orderId: string}
  }

const OrderSuccessfulDetailPage = ({ params: {orderId}}: Props) => {

    const { data: order, isLoading, isError, error } = useFetchOrder({ orderId });

    if(isLoading) return <LoadingSpinner/>
    if(error) return <ErrorAlert message={error.message}/>
    
  return <OrderSuccessfulPage order={order}/>
}

export default OrderSuccessfulDetailPage