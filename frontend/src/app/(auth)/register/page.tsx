'use client'
import { RegisterForm } from '@/components/auth'
import { RegisterPayload } from '@/models'
import { useAuth } from '@/services/auth'
import { Card, Toast } from 'flowbite-react'
import { useRouter, useSearchParams } from 'next/navigation'
import React from 'react'

const RegisterPage = () => {

    const router = useRouter()
    const searchParams = useSearchParams()
    const { register } = useAuth({
        revalidateOnMount: false
    })

    async function handleLoginSubmit(payload: RegisterPayload) {
        try {
            await register(payload)
            router.push('/login')
        } catch (error) {
            console.log('failed to login', error)
        }

    }

    return (
        <Card className='flex max-w-md flex-col gap-4'>
            <RegisterForm onSubmit={handleLoginSubmit} />
        </Card>
    )
}

export default RegisterPage