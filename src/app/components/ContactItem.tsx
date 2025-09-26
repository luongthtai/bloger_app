import Image from 'next/image'
import React from 'react'

type Props = {
    avatar: string,
    userName: string,
    status: boolean
}

export default function ContactItem({ avatar, status, userName }: Props) {
    return (
        <div className='py-8 flex justify-between items-center'>
            <div className='flex items-center gap-8'>
                <Image src={avatar} alt='avatar' width={2000} height={2000} className='w-7 h-7 object-contain bg-blue rounded-full' />
                <p className='text-12 font-semibold text-gray60 '>{userName}</p>
            </div>

            <div className={`w-6 h-6 rounded-full ${status ? 'bg-success' : 'bg-warning'}`}></div>
        </div>
    )
}
