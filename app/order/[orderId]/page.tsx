"use client"
import ErrorAlert from '@/app/components/ErrorAlert';
import LoadingSpinner from '@/app/components/LoadingSpinner';
import useFetchOrder from '@/app/hooks/useFetchOrder';
import React from 'react'
import OrderPage from '../page';

interface Props {
  params: { orderId: string}
}

const OrderDetailsPage = ({ params: {orderId}}: Props) => {

  const id: string | undefined = orderId as string;

  const { data: order, isLoading, error } = useFetchOrder({ orderId });

  if(isLoading) return <LoadingSpinner/>
  if(error) return <ErrorAlert message={error.message}/>
  
  return <OrderPage order={order}/>
}

export default OrderDetailsPage