import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import LeftSidebar from './LeftSidebar'

type Props = {
    children: React.ReactNode,
}

export default function MainLayout({ children }: Props) {
    return (
        <body className="flex h-screen bg-background text-foreground">
            <Sidebar />
            <main className='flex flex-col h-full flex-grow overflow-x-hidden'>
                <Header />
                <article className={`flex-grow pr-[324px] max-lg:pr-12 relative p-12 overflow-hidden`}>
                    <div className="max-w-[960px] grow max-h-full overflow-y-auto scrollbar-hidden w-full flex gap-12 m-auto duration-200 px-12">
                        {children}
                    </div>

                    <LeftSidebar />
                </article>
            </main>
        </body>
    )
}
