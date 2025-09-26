import Image from 'next/image'
import React from 'react'
import avatar from 'public/avatar.webp'
import { SecondaryButton, TertiaryButton } from './Button'

export default function RequestItem() {
    return (
        <div className='flex flex-col gap-12'>
            <div className='flex items-center gap-16'>
                <Image src={avatar} alt='avatar' className='w-32 h-32 object-contain' />
                <div>
                    <h6 className='text-12 font-bold line-clamp-1'>Surfiya Zakir</h6>
                    <p className='text-[10px] font-semibold text-gray50'>12 mutual friends</p>
                </div>
            </div>

            <div className='flex gap-8 '>
                <TertiaryButton padding='small' className='text-12 w-[100px]'>Confirm</TertiaryButton>
                <SecondaryButton padding='small' className='text-12 w-[100px]'>Delete</SecondaryButton>
            </div>
        </div>
    )
}
