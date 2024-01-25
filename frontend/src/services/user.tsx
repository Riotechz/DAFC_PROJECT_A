import { userApi } from "@/api-client"
import useSWR, { SWRConfiguration } from "swr"
import { QueryKeys } from '@/constants/query-keys'



export interface UserProfile {
    params: string
    option?: SWRConfiguration
}

export function userProfile({ params, option }: UserProfile) {
    const swrResponse = useSWR([QueryKeys.GET_SHARE_PROFILE, params], () => userApi.getShareProfile(params), {
        dedupingInterval: 1000,
        ...option
    })

    return swrResponse
}