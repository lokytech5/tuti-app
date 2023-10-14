import React from 'react'
import apiClient from '../components/services/api-client';
import { useQuery } from '@tanstack/react-query';
import { CategoryResponse } from '../components/types';


const useCategory = (endpoint = '/categorys/all') => {
    const fetchCategory = () => {
        return apiClient.get(endpoint).then(res => res.data);
    };

    const queryInfo = useQuery<CategoryResponse, Error>({
        queryKey: ['category', endpoint],
        queryFn: fetchCategory,
    });


    return queryInfo;
}

export default useCategory