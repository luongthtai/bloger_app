import RequestItem from '@/components/RequestItem'
import { TitleSectionMedium } from '@/components/TitleSection'
import React from 'react'

export default function FriendRequest() {
    return (
        <section className='bg-white rounded-8 py-16 px-20 shadow-section flex flex-col gap-20'>
            <div className='flex justify-between items-center'>
                <TitleSectionMedium title='Friend Request' />
                <button className='text-12 text-blue font-semibold'>See all</button>
            </div>

            <div className='grid gap-16'>
                <RequestItem />
                <RequestItem />
                <RequestItem />
                <RequestItem />
            </div>
        </section>
    )
}
