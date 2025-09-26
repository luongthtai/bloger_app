import React from 'react'
import ContactsSection from '../sections/ContactsSection'
import GroupSection from '../sections/GroupSection'

export default function LeftSidebar() {
    return (
        <aside className='w-[300px] bottom-12 overflow-y-auto flex flex-col shrink gap-16 rounded-8 py-16 px-20 absolute top-12 right-0 -translate-x-[12px] shadow-sidebar bg-white max-lg:translate-x-full duration-200'>
            <ContactsSection />
            <GroupSection />
        </aside>
    )
}
