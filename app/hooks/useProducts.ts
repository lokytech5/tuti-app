import React from 'react'
import apiClient from '../components/services/api-client'
import { useQuery } from '@tanstack/react-query';
import { Category } from './useCategory';

export interface Product {
    _id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    category: Category;
    stock: number;
    averageRating: number;
    reviews: any[]; // Define a more detailed type for reviews if you have the structure
    createdAt: string;
    updatedAt: string;
    __v: number;
  }

const useProducts = () => {
 
    const fetchProducts = () => 
        apiClient
            .get('/products')
            .then(res => res.data);

    const { data, error, isLoading } = useQuery<Product[], Error>({
        queryKey: ['products'],
        queryFn: fetchProducts
    });
     console.log(data);
     

    return { data, error, isLoading };
    }


export default useProducts