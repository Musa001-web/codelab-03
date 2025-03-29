import { useMutation} from "@tanstack/react-query"
import { axios } from "@/lib/axios"
import { GetBusinessHubResponse } from "../schema"
import toast from "react-hot-toast"
import { queryClient } from "@/lib/react-query";

interface Props{
    businessHubId: number;
}

export const deleteBusinessHub = async ({
    businessHubId
}: Props): Promise<GetBusinessHubResponse> => {
    return axios.delete(`/business-units/${businessHubId}`)
}

export const useDeleteBusinessHub = () => {
    return useMutation({
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey:['getBusinessHub']})
            toast.success("Business Hub Deleted")
        },
        mutationFn:deleteBusinessHub,
    })
}