import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { UrlObject } from 'url'

type Props = {
    title?: string,
    href: UrlObject | any,
    icon: React.ReactNode,
    bgColor?: string,
}

export default function SettingItem({ href, icon, bgColor, title }: Props) {
    return (
        <Link href={href} className='flex justify-between items-center py-6 border-b border-gray last:border-0'>
            <div className='flex items-center gap-16'>
                <div className='flex aspect-square text-white p-8 rounded-full' style={{ background: bgColor }}>
                    {icon}
                </div>
                <h5 className='font-semibold text-14'>{title}</h5>
            </div>

            <ChevronRight className='text-gray50' strokeWidth={1} />
        </Link >
    )
}
