import { useQuery } from "@tanstack/react-query";
import { OrderResponse } from "../components/types";
import { AxiosError } from "axios";
import { authApiClient } from "../components/services/api-client";


interface Props {
    orderId: string | undefined;
  }
  
const useFetchOrderById = ({ orderId }: Props) => {
    return useQuery<OrderResponse, AxiosError>(
        ['order', orderId],
        () => authApiClient.get<OrderResponse>(`/orders/by/${orderId}`).then(res => res.data),
        {
            enabled: !!orderId,
            onError: (error) => {
                console.error('Error fetching Orders', error.message);
            }
        }
    );
};

export default useFetchOrderById;