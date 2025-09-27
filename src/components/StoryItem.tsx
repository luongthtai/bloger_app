import Image from 'next/image'
import React from 'react'

type Props = {
    avatar: string,
    userName: string,
    content: string
}

export default function StoryItem({ content, avatar, userName }: Props) {
    return (
        <div className='aspect-[9/14] max-w-[125px] w-full rounded-8 flex flex-col items-center justify-end pb-8 gap-4 relative overflow-hidden bgStory cursor-pointer'>
            <Image src={avatar} alt={userName} width={2000} height={2000} className='bg-white text-blue rounded-full w-[36px] h-[36px] object-contain z-1' />
            <p className='font-semibold text-12 text-white z-1'>Hurin Seary</p>
            <Image src={content} alt={userName} width={2000} height={2000} className='absolute inset-0 object-cover block h-full w-full' />
        </div>
    )
}
