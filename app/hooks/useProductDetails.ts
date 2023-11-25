import { useQuery } from '@tanstack/react-query';
import { apiClient } from '../components/services/api-client';
import { Product } from '../components/types';

interface Props {
    productId: string | undefined;
  }

  const useProductDetails = ({ productId }: Props) => {
    const fetchProductDetails = (): Promise<Product> => {
      if (!productId) {
        return Promise.reject(new Error("Product ID is undefined."));
    }     
        return apiClient.get(`/products/${productId}`)
            .then(res => {          
                return res.data;
            })       
    }
    return useQuery<Product, Error>(['product', productId], fetchProductDetails);
  };

export default useProductDetails