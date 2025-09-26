import React from 'react'
import NewFeeds from '../sections/NewFeeds'
import AccountSection from '../sections/AccountSidebar'

export default function Sidebar() {
    return (
        <aside className='max-w-[300px] w-full h-full flex flex-col gap-4'>
            <h1 className='bg-white text-4xl py-20 px-32 font-semibold text-blue shadow-section'>Blogger</h1>
            <article className='grow flex flex-col gap-16 px-4'>
                <NewFeeds />
                <AccountSection />
            </article>
        </aside>
    )
}
