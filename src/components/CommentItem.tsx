import Image from 'next/image'
import React from 'react'
import avatar from 'public/storyImg.jpg'
import { Dot } from 'lucide-react'

export default function CommentItem() {
    return (
        <div className='flex gap-20 w-full'>
            <Image
                src={avatar}
                alt='avatar'
                // width={2000}
                // height={2000}
                className='w-32 h-32 object-contain rounded-full shrink'
            />

            <div className='grow'>
                <div className='bg-gray rounded-4 p-12'>
                    <div className='flex justify-between items-center'>
                        <h5 className='font-semibold'>Samuel Bishop</h5>
                        <span className='text-14 text-gray60 font-semibold'>8 hours ago</span>
                    </div>

                    <div className='text-14 text-gray60 mt-4'>Removed demands expense account in outward tedious do. Particular way thoroughly unaffected projection.</div>
                </div>

                <div className='flex gap-8 items-center text-14 font-medium text-gray50 py-4'>
                    <div className='flex items-center gap-4'>
                        <p>Like</p>
                        <span>(3)</span>
                    </div>
                    <Dot />
                    <button>Reply</button>
                    <Dot />
                    <p>View 2 Reply</p>
                </div>
            </div>
        </div>
    )
}
