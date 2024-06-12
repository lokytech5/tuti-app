"use client"
import React from 'react'
import OrderSuccessfulPage from '../page'
import LoadingSpinner from '@/app/components/LoadingSpinner';
import ErrorAlert from '@/app/components/ErrorAlert';
import useFetchOrderById from '@/app/hooks/useFetchOrderById';

interface Props {
    params: { orderId: string}
  }

const OrderSuccessfulDetailPage = ({ params: {orderId}}: Props) => {

    const { data: order, isLoading, isError, error } = useFetchOrderById({ orderId });

    if(isLoading) return <LoadingSpinner/>
    if(error) return <ErrorAlert message={error.message}/>
    
  return <OrderSuccessfulPage order={order}/>
}

export default OrderSuccessfulDetailPage