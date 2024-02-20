import BrandFooter from "@/components/client/profile/brandFooter";
import Profile from "@/components/client/profile/info";
import { ClientLayout } from "@/layouts";
import type { NextPage } from "next";


const ProfilePage: NextPage = () => {


    return (
        <ClientLayout>
            <main className="overflow-hidden w-[500px] max-w-[100%] m-auto">
                <Profile />
                <BrandFooter />
            </main>
        </ClientLayout>
    )
}

export default ProfilePage