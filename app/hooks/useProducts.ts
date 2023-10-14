import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import apiClient from '../components/services/api-client';
import { ProductResponse } from '../components/types';

interface Props {
    endpoint?: string;
    itemsPerPage?: number;
  }

const useProducts = ({endpoint = '/products' , itemsPerPage = 4} : Props = {}) => {
   
    const fetchProducts = ({ pageParam = 1 }) => {
        const skipCount = (pageParam - 1) * itemsPerPage;
        return apiClient
            .get(`${endpoint}?skip=${skipCount}`) // Changed page to skip
            .then(res => res.data);
    };
    
    return useInfiniteQuery<ProductResponse, Error>({
        queryKey: [endpoint, itemsPerPage],
        queryFn: fetchProducts,
        getNextPageParam: (lastPage, allPages) => {
            const nextPage = allPages.length + 1;
            return nextPage <= lastPage.totalPages ? nextPage : undefined;
        },
    });
    }


export default useProducts