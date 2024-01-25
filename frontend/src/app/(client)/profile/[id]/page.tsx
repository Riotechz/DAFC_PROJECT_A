'use client'
import Profile from '@/components/ui/user/Profile';
import DafcInfo from '@/components/ui/user/DafcInfo';
import { userProfile } from '@/services';
import { redirect } from 'next/navigation'


export default function PageUserShareProfile({ params }: { params: { id: string } }) {
    const { data, isLoading } = userProfile({ params: params.id })
    if (!isLoading && !data) {
        redirect('/')
    }
    return !isLoading && (
        <>
            <main className="overflow-hidden w-[500px] max-w-[100%] m-auto">
                <Profile {...data?.data} />
                <DafcInfo />
            </main>
        </>
    );
}