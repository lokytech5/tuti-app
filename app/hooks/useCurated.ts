import React from 'react'
import {apiClient} from '../components/services/api-client';
import { useQuery } from '@tanstack/react-query';

const useCurated = (endpoint = '/curatedCollection') => {
    const fetchCollections = () => {
        return apiClient.get(endpoint).then(res => res.data);
    };

    return useQuery(['curatedCollections', endpoint], fetchCollections);
}

export default useCurated