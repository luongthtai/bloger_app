import Image from 'next/image'
import React from 'react'
import avatar from 'public/avatar.webp'
import { Ellipsis, MessageCircle, Share2, ThumbsUp } from 'lucide-react'
import imagePost from 'public/storyImg.jpg'

export default function PostItem() {
    return (
        <div className='bg-white shadow-sidebar rounded-8 p-16 flex flex-col gap-16'>
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-16'>
                    <Image src={avatar} alt='avatar' className='w-32 h-32 object-contain' />
                    <div>
                        <h6 className='text-12 font-bold'>Surfiya Zakir</h6>
                        <p className='text-[10px] font-semibold text-gray50'>22 min ago</p>
                    </div>
                </div>
                <button className='border-full bg-gray rounded-full p-8'><Ellipsis size={20} /></button>
            </div>

            <div className='flex flex-col gap-12'>
                <p className='text-12 font-medium text-gray50'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus. <span className='text-blue ml-8'>See more</span></p>
                <Image src={imagePost} alt='post' className='aspect-video object-cover rounded-4' />
            </div>

            <div className='flex justify-between items-center'>
                <div className='flex gap-16'>
                    <div className='flex items-center gap-6'>
                        <ThumbsUp size={20} />
                        <span className='text-12 font-semibold'>2.8k Like</span>
                    </div>
                    <div className='flex items-center gap-6'>
                        <MessageCircle size={20} />
                        <span className='text-12 font-semibold'>2.8k Like</span>
                    </div>
                </div>

                <div className='flex items-center gap-6'>
                    <Share2 size={20} />
                    <span className='text-12 font-semibold'>Share</span>
                </div>
            </div>
        </div>
    )
}
