import { SERVER_URL_IMG } from '@/helps/api'
import { Ellipsis, MessageCircle, Share2, ThumbsUp } from 'lucide-react'
import Image from 'next/image'
import { IPostItem } from '../models/posts.model'
import moment from 'moment'
import Link from 'next/link'

export default function PostItem({ _id, author, content, createdAt, media, comments, likes, type }: IPostItem) {
    const handleLikePost = () => {
        console.log(_id)
    }

    return (
        <div className='bg-white shadow-sidebar rounded-8 p-16 flex flex-col gap-16'>
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-16'>
                    <Image
                        src={`${SERVER_URL_IMG}${author.avatar}`}
                        alt='avatar'
                        width={2000}
                        height={2000}
                        className='w-32 h-32 object-contain'
                    />
                    <div>
                        <h6 className='text-12 font-bold'>{author.username}</h6>
                        <p className='text-[10px] font-semibold text-gray50'>{moment(createdAt).fromNow()}</p>
                    </div>
                </div>
                <button className='border-full bg-gray rounded-full p-8'><Ellipsis size={20} /></button>
            </div>

            <div className='flex flex-col gap-12 w-full'>
                <p className='text-12 font-medium text-gray50'>{content} <Link href={`/post/${_id}`} className='text-blue ml-8 cursor-pointer'>See more</Link></p>
                {
                    type === "image" && <Image src={`${SERVER_URL_IMG}${media[0]}`} width={2000} height={2000} alt='post' className='w-full aspect-video object-cover rounded-4' />
                }
            </div>

            <div className='flex justify-between items-center'>
                <div className='flex gap-16'>
                    <button className='flex items-center gap-6 cursor-pointer' onClick={handleLikePost}>
                        <ThumbsUp size={20} />
                        <span className='text-12 font-semibold'>{likes.length} Like</span>
                    </button>
                    <button className='flex items-center gap-6 cursor-pointer'>
                        <MessageCircle size={20} />
                        <span className='text-12 font-semibold'>{comments.length} Comment</span>
                    </button>
                </div>

                <div className='flex items-center gap-6'>
                    <Share2 size={20} />
                    <span className='text-12 font-semibold'>Share</span>
                </div>
            </div>
        </div>
    )
}
