import ContactsSection from '@/sections/ContactsSection'
import GroupSection from '@/sections/GroupSection'
import React from 'react'

export default function LeftSidebar() {
    return (
        <aside className='w-[300px] bottom-12 overflow-y-auto flex flex-col shrink h-fit max-h-full gap-16 rounded-8 py-16 px-20 absolute top-12 right-0 -translate-x-[12px] shadow-sidebar bg-white max-2xl:translate-x-full duration-200'>
            <ContactsSection />
            <GroupSection />
        </aside>
    )
}
