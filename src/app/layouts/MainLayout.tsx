import React from 'react'
import Sidebar from './Sidebar'

type Props = {
    children: React.ReactNode
}

export default function MainLayout({ children }: Props) {
    return (
        <body className="flex h-screen bg-background text-foreground">
            <Sidebar />
            <main>
                <article>{children}</article>
            </main>
        </body>
    )
}
