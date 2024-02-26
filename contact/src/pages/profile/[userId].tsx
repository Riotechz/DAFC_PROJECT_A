import BrandFooter from "@/components/client/profile/brandFooter";
import Profile from "@/components/client/profile/info";
import { ClientLayout } from "@/layouts";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import useSWR from 'swr'
import { useEffect } from "react";

const ProfilePage: NextPage = ({ ...props }) => {


    const router = useRouter()
    const userNick = router.query.userId

    const { data, error, isLoading } = useSWR(userNick ? ('/client/v1/user/share-profile/' + userNick) : null)

    if (error) {
        router.push('/')
        return;
    }

    if (isLoading || !data) return (
        <ClientLayout>
            <main className="h-100 max-h-full md:max-h-screen">
                Loading
            </main>
        </ClientLayout>
    )

    const profile = data.data
    const imageUrl = profile.urlAvatar == '' ? null : process.env.API_URL + profile.urlAvatar

    return (
        <ClientLayout>
            <main className="overflow-hidden w-[500px] max-w-[100%] m-auto">
                <Profile imageUrl={imageUrl} {...profile} />
                <BrandFooter />
            </main>
        </ClientLayout>
    )
}

export default ProfilePage