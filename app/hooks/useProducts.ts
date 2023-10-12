import React from 'react'
import apiClient from '../components/services/api-client'
import { useQuery } from '@tanstack/react-query';
import { ProductResponse } from '../components/types';


const useProducts = () => {
 
    const fetchProducts = () => 
        apiClient
            .get('/products')
            .then(res => res.data);

    return useQuery<ProductResponse, Error>({
        queryKey: ['products'],
        queryFn: fetchProducts
    });
    }


export default useProducts