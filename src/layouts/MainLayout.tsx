import React from 'react'
import { ToastContainer } from 'react-toastify'
import Header from './Header'
import LeftSidebar from './LeftSidebar'
import Sidebar from './Sidebar'
import { Provider } from 'react-redux'
import { store } from '@/reduxs/stories.redux'

type Props = {
    children: React.ReactNode,
    className?: string
}

export default function MainLayout({ children, className }: Props) {
    return (
        <Provider store={store}>
            <body className="flex h-screen bg-background text-foreground">
                <Sidebar />
                <main className='flex flex-col h-full flex-grow overflow-x-hidden'>
                    <Header />
                    <article className={`grow pr-[324px] max-2xl:pr-12 relative p-12 overflow-hidden duration-200`}>
                        <div className='overflow-y-auto grow max-h-full scrollbar-hidden duration-200'>
                            <div className={`max-w-[960px] max-h-full w-full flex gap-12 m-auto duration-200 px-12 ${className}`}>
                                {children}
                            </div>
                        </div>

                        <LeftSidebar />
                    </article>
                </main>
                <ToastContainer hideProgressBar={true} />
            </body>
        </Provider>
    )
}
