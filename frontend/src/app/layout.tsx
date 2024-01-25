import './globals.css'
import { Montserrat } from "next/font/google";
import type { Viewport } from 'next'

export const metadata = {
    title: 'Admin dashboard',
    description: 'Generated by Next.js',
}

const inter = Montserrat({ subsets: ["latin"] });

export const viewport: Viewport = {
    themeColor: '#e2e2e2',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    )
}