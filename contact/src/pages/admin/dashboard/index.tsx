import React from 'react'
import useSWR from 'swr'

type Props = {}

const DashboardPage = (props: Props) => {
    const { data, error, isLoading } = useSWR('/api/admin/user/me', fetch)
    console.log(data?.body)
    if (error) return <div>failed to load</div>
    if (isLoading) return <div>loading...</div>
    return <div>hello {JSON.stringify(data)}!</div>
}

export default DashboardPage