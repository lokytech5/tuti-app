import { useQuery } from '@tanstack/react-query';
import React from 'react'
import apiClient from '../components/services/api-client';
import { SingleProductResponse } from '../components/types';

interface Props {
    productId: string | undefined;
  }

  const useProductDetails = ({ productId }: Props) => {
    const fetchProductDetails = (): Promise<SingleProductResponse> => {
        return apiClient.get(`/products/${productId}`).then(res => res.data);
    }
    
    return useQuery<SingleProductResponse, Error>(['product', productId], fetchProductDetails);
  };

export default useProductDetails