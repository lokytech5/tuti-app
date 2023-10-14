import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import apiClient from '../components/services/api-client';
import { ProductResponse } from '../components/types';

interface Props {
    endpoint?: string;
    itemsPerPage?: number;
    sortOrder?: string | null; 
    category?: string | null;
    size?: number
  }

const useProducts = ({endpoint = '/products' , itemsPerPage = 4, sortOrder, category, size} : Props = {}) => {
   
    const fetchProducts = ({ pageParam = 1 }) => {
        const skipCount = (pageParam - 1) * itemsPerPage;

        let queryParams = `?skip=${skipCount}`;

        if (sortOrder) {
            queryParams += `&sortOrder=${sortOrder}`;
         }

         if (category) {
            queryParams += `&category=${category}`;
        }
        if (size) {
            queryParams += `&size=${size}`;
            console.log(`${endpoint}${queryParams}`);

        }

        return apiClient
            .get(`${endpoint}${queryParams}`) // Changed page to skip
            .then(res => res.data);
    };
    
    return useInfiniteQuery<ProductResponse, Error>({
        queryKey: [endpoint, itemsPerPage,  category, size, sortOrder],
        queryFn: fetchProducts,
        getNextPageParam: (lastPage, allPages) => {
            const nextPage = allPages.length + 1;
            return nextPage <= lastPage.totalPages ? nextPage : undefined;
        },
    });
    }


export default useProducts