'use client'

import React from 'react'
import { Bell, House, MessageSquare, ShoppingBag, User, Video, Zap } from 'lucide-react'
import Image from 'next/image'
import avatarDefault from 'public/avatar.webp'
import Link from 'next/link'
import { SearchInput } from '@/components/Input'
import NavbarItem from '@/components/NavbarItem'
import { usePathname } from 'next/navigation'

const navbars = [
    {
        id: 1,
        href: "/",
        icon: <House size={20} />
    },
    {
        id: 2,
        href: "#",
        icon: <Zap size={20} />
    },
    {
        id: 3,
        href: "#",
        icon: <Video size={20} />
    },
    {
        id: 4,
        href: "#",
        icon: <User size={20} />
    },
    {
        id: 5,
        href: "#",
        icon: <ShoppingBag size={20} />
    },
]

export default function Header() {
    const pathname = usePathname()

    return (
        <header className='flex justify-between gap-20 shrink-0 bg-white shadow-section h-[80px] items-center px-16'>
            <div className='flex gap-16'>
                <SearchInput placeholder='Start typing to search...' className='w-[350px]' />
                <div className='flex items-center gap-12 max-lg:hidden'>
                    {
                        navbars.map(nav => <NavbarItem key={nav.id} href={nav.href} active={pathname === nav.href} icon={nav.icon} />)
                    }
                </div>
            </div>

            <div className='flex items-center gap-24'>
                <button className='text-blue'><Bell /></button>
                <button className='text-blue'><MessageSquare size={22} /></button>
                <Link href="/settings"> <Image src={avatarDefault} alt='' className='w-24 h-24 object-contain' /></Link>
            </div>
        </header>
    )
}
