'use client'

import { Plus } from 'lucide-react'
import React from 'react'

import "swiper/css";
import 'swiper/css/free-mode';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import StoryItem from '@/components/StoryItem';

const storiesData = [
    {
        id: 1,
        avatar: 'http://192.168.1.3:3002/avatar.webp',
        userName: "Hurin",
        content: "http://192.168.1.3:3002/storyImg.jpg"
    },
    {
        id: 2,
        avatar: 'http://192.168.1.3:3002/avatar.webp',
        userName: "Hurin",
        content: "http://192.168.1.3:3002/storyImg.jpg"
    },
    {
        id: 3,
        avatar: 'http://192.168.1.3:3002/avatar.webp',
        userName: "Hurin",
        content: "http://192.168.1.3:3002/storyImg.jpg"
    },
    {
        id: 4,
        avatar: 'http://192.168.1.3:3002/avatar.webp',
        userName: "Hurin",
        content: "http://192.168.1.3:3002/storyImg.jpg"
    },
    {
        id: 5,
        avatar: 'http://192.168.1.3:3002/avatar.webp',
        userName: "Hurin",
        content: "http://192.168.1.3:3002/storyImg.jpg"
    },
]

export default function StoriesSection() {
    return (
        <section>
            <Swiper
                slidesPerView={5}
                spaceBetween={15}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <AddStoryButton />
                </SwiperSlide>
                {
                    storiesData.map(item => (
                        <SwiperSlide>
                            <StoryItem key={item.id} avatar={item.avatar} userName={item.userName} content={item.content} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </section>
    )
}

const AddStoryButton = () => {
    return (
        <div className='aspect-[9/14] max-w-[125px] w-full rounded-8 bg-black10 flex flex-col items-center justify-end pb-8 gap-4'>
            <button className='bg-white text-blue rounded-full p-8'><Plus size={20} /></button>
            <p className='font-semibold text-12 text-white'>Add Story</p>
        </div>
    )
}