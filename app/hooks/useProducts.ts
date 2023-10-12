import { useQuery } from '@tanstack/react-query';
import apiClient from '../components/services/api-client';
import { ProductResponse } from '../components/types';

interface Props {
    endpoint?: string;
  }


const useProducts = ({endpoint = '/products'} : Props = {}) => {
 
    const fetchProducts = () => 
        apiClient
            .get(endpoint)
            .then(res => res.data);

    return useQuery<ProductResponse, Error>({
        queryKey: [endpoint],
        queryFn: fetchProducts
    });
    }


export default useProducts