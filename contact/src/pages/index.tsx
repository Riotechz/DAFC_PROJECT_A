import { ClientLayout } from "@/layouts";
import type { NextPage } from "next";
import { useRouter } from 'next/router'
import { useEffect } from "react";


const HomePage: NextPage = () => {

    const router = useRouter()

    useEffect(() => {
        router.push("/auth/login")
    }, [])


    return (
        <ClientLayout>
            Home page
        </ClientLayout>
    )
}

export default HomePage