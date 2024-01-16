'use client'
import { LoginForm } from "@/components/auth";
import { LoginPayload } from "@/models/auth";
import { useAuth } from '@/services';
import { useRouter, useSearchParams } from "next/navigation";
import { Toast, Card } from "flowbite-react";
import { decodeUrl, getErrorMessage } from '@/helpers'

export default function LoginPage() {

    const router = useRouter()
    const searchParams = useSearchParams()
    const { login } = useAuth({
        revalidateOnMount: false
    })

    async function handleLoginSubmit(payload: LoginPayload) {
        try {
            await login(payload)
            router.push('/')
        } catch (error) {
            console.log('failed to login', error)
        }

    }

    return (
        <Card className="flex max-w-md flex-col gap-4">
            <LoginForm onSubmit={handleLoginSubmit} />
        </Card>

    )
};
