import { useQuery } from '@tanstack/react-query';
import apiClient from '../components/services/api-client';
import { SingleCategoryResponse } from '../components/types';

interface UseSpecificCategoryParams {
    categoryId?: string;
}
  
const useSpecificCategory = ({ categoryId }: UseSpecificCategoryParams) => {

    const fetchCategory = () => {
        if (!categoryId) {
            throw new Error('Invalid categoryId provided to useSpecificCategory');
        }
        return apiClient.get(`/categorys/${categoryId}`)
     .then(res => {
        return res.data; // This should return the category object directly
     });
    };
    
    const queryInfo = useQuery<SingleCategoryResponse, Error>({
        queryKey: ['category', categoryId],
        queryFn: fetchCategory,
        enabled: !!categoryId  // only execute the query if categoryId is provided
    });

    return queryInfo;
}

export default useSpecificCategory