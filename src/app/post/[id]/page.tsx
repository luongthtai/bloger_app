'use client'

import { get, SERVER_URL_IMG } from '@/helps/api'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'next/navigation'
import React from 'react'
import Image from 'next/image';
import { IPostItem } from '@/models/posts.model';
import moment from 'moment'
import { MessageCircle, ThumbsUp } from 'lucide-react'
import CommentItem from '@/components/CommentItem'

export default function PostDetail() {
    const { id } = useParams()

    const { data, isLoading } = useQuery({
        queryKey: ['post_detail', id],
        queryFn: () => get(`/post/detail/${id}`)
    })

    if (isLoading) return <p>Loading...</p>

    const { _id, author, comments, content, type, createdAt, likes, media }: IPostItem = data?.data

    return (
        <>
            {
                type !== ""
                &&
                <div className='bg-white p-20 shadow-section rounded-8 border-gray border w-full flex flex-wrap gap-12'>
                    {
                        media.map(item => <Image key={item} width={2000} height={2000} src={`${SERVER_URL_IMG}/${item}`} alt={content} className='block object-contain max-h-[400px] w-fit' />)
                    }
                </div>
            }

            <div className='bg-white p-20 shadow-section rounded-8 border-gray border flex flex-col gap-12'>
                <div className='flex items-center gap-16'>
                    {
                        author &&
                        <Image
                            src={`${SERVER_URL_IMG}${author.avatar}`}
                            alt='avatar'
                            width={2000}
                            height={2000}
                            className='w-32 h-32 object-contain'
                        />
                    }
                    <div>
                        <h6 className='font-bold'>{author.username}</h6>
                        <p className='text-12 font-semibold text-gray50'>{moment(createdAt).fromNow()}</p>
                    </div>
                </div>

                <div className='whitespace-pre-wrap'>{content}</div>

                <div className='flex gap-16'>
                    <button className='flex items-center gap-6 cursor-pointer'>
                        <ThumbsUp size={20} />
                        <span className='text-12 font-semibold'>{likes.length} Like</span>
                    </button>
                    <button className='flex items-center gap-6 cursor-pointer'>
                        <MessageCircle size={20} />
                        <span className='text-12 font-semibold'>{comments.length} Comment</span>
                    </button>
                </div>

                <div className='pt-12 grid gap-8 border-t-[2px] border-gray'>
                    <div className='flex gap-20'>
                        <Image src={`${SERVER_URL_IMG}${author.avatar}`} alt='' width={2000} height={2000} className='w-32 h-32 object-contain' />
                        <input type="text" name="" id="" className='w-full border-b border-gray outline-0 text-14' placeholder='Enter your comment' />
                    </div>

                    {
                        comments.map(cmt => <CommentItem key={cmt._id} />)
                    }
                </div>
            </div>
        </>
    )
}
