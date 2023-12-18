import '../../app/globals.css'

export const metadata = {
    title: 'Auth sign up page',
}

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex items-center justify-center h-full w-full">
            {children}
        </div>
    )
}
