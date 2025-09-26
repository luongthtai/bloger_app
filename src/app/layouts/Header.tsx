import React from 'react'
import { SearchInput } from '../components/Input'
import NavbarItem from '../components/NavbarItem'
import { Bell, House, MessageSquare, ShoppingBag, User, Video, Zap } from 'lucide-react'
import Image from 'next/image'
import avatarDefault from 'public/avatar.webp'

export default function Header() {
    return (
        <header className='flex justify-between shrink-0 bg-white shadow-section h-[80px] items-center px-16'>
            <div className='flex gap-16'>
                <SearchInput placeholder='Start typing to search...' className='w-[350px]' />
                <div className='flex items-center gap-12'>
                    <NavbarItem href="#" icon={<House size={20} />} />
                    <NavbarItem href="#" icon={<Zap size={20} />} />
                    <NavbarItem href="#" icon={<Video size={20} />} />
                    <NavbarItem href="#" icon={<User size={20} />} />
                    <NavbarItem href="#" icon={<ShoppingBag size={20} />} />
                </div>
            </div>

            <div className='flex items-center gap-24'>
                <button className='text-blue'><Bell /></button>
                <button className='text-blue'><MessageSquare size={22} /></button>
                <Image src={avatarDefault} alt='' className='w-24 h-24 object-contain' />
            </div>
        </header>
    )
}
