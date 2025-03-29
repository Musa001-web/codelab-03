/* eslint-disable @typescript-eslint/no-explicit-any */
import { axios } from "@/lib/axios";
import { GetBusinessHubResponse } from "../schema";
import { useMutation } from "@tanstack/react-query";
import { queryClient } from "@/lib/react-query";
import toast from "react-hot-toast";

export const createOrUpdateBusinessHub = (
  businessHubId: string | null | undefined,
  data: any
): Promise<GetBusinessHubResponse> => {
  if (businessHubId) {
    return axios.put(`/business-units/${businessHubId}`, data);
  }
  return axios.post(`business-units`, data);
};

export const useCreateOrUpdateBusinessHub = (
  businessHubId: string | null = null
) => {
  return useMutation({
    onSuccess: () => {
        queryClient.invalidateQueries({
            queryKey: [],
        });
        const msg = businessHubId ?
        'Business Hub updated Successfully' :
        'Business Hub created Successfully'

        toast.success(msg)
    },
    onError: () => {
        toast.error('Something unexpected happened!')
    },
    mutationFn: (data: any) => {
        console.log("Data sent to mutation", data)
        return createOrUpdateBusinessHub(businessHubId, data)
    },
  });
};
