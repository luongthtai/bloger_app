import { PenLine } from 'lucide-react'
import React from 'react'
import { TitleSection } from '../components/TitleSection'
import Image from 'next/image'
import avatar from 'public/avatar.webp'
import { Image as ImageSvg } from 'lucide-react'
import { PrimaryButton } from '../components/Button'

export default function CreatePost() {
    return (
        <section className='bg-white rounded-8 py-16 px-20 shadow-sidebar flex flex-col gap-12'>
            <div className='flex items-center gap-6'>
                <div className='bg-gray rounded-full p-6 text-blue'><PenLine size={15} /></div>
                <TitleSection title='Create Post' />
            </div>

            <div className='rounded-8 border-gray border-[2px] p-6 flex gap-12'>
                <Image src={avatar} alt='user name' className='w-20 h-20 rounded-full object-contain' />
                <textarea className='w-full resize-y outline-0 text-12 font-medium text-gray60' rows={4} placeholder="What's on your mind?"></textarea>
            </div>

            <div className='flex justify-between items-center'>
                <button className='text-12 flex items-center gap-8 font-semibold'><ImageSvg className='text-success' size={20} /> <span>Photo/Video</span></button>
                <PrimaryButton padding='small' className='text-12 w-[100px]'>Confirm</PrimaryButton>
            </div>
        </section>
    )
}
