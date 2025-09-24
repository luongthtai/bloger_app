import React from 'react'
import { TitleSection } from '../components/TitleSection'
import Link from 'next/link'
import { UrlObject } from 'url'
import { Badge, Globe, Tv, User, Zap } from 'lucide-react'

export default function NewFeeds() {
    return (
        <div className='bg-white rounded-8 py-16 px-20 shadow-section'>
            <TitleSection title='New Feeds' />

            <div className='grid gap-12 mt-12'>
                <NewFeedItem bgColor='linear-gradient(to right, #0575e6, #021b79)' icon={<Tv size={20} />} href="#" title='Newsfeed' />
                <NewFeedItem bgColor='linear-gradient(to right, #e44d26, #f16529)' icon={<Badge size={20} />} href="#" title='Badges' />
                <NewFeedItem bgColor='linear-gradient(to right, #f2994a, #f2c94c)' icon={<Globe size={20} />} href="#" title='Explore Stories' />
                <NewFeedItem bgColor='linear-gradient(to right, #ee0979, #ff6a00)' icon={<Zap size={20} />} href="#" title='Popular Groups' />
                <NewFeedItem bgColor='linear-gradient(135deg, #05f, #09f)' icon={<User size={20} />} href="#" title='Author Profle' />
            </div>
        </div>
    )
}

type Props = {
    title?: string,
    href: UrlObject | any,
    icon: React.ReactNode,
    bgColor?: string,
}

const NewFeedItem = ({ title, href, icon, bgColor }: Props) => {
    return (
        <Link href={href} className='flex items-center gap-20'>
            <div className='flex aspect-square text-white p-12 rounded-full' style={{ background: bgColor }}>
                {icon}
            </div>
            <h5 className='font-semibold text-16 text-[#888]'>{title}</h5>
        </Link >
    )
}