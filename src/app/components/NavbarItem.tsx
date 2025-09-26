import Link from 'next/link'
import React from 'react'
import { UrlObject } from 'url'

type Props = {
    href: UrlObject | any,
    icon: React.ReactNode
}

export default function NavbarItem({ href, icon }: Props) {
    return (
        <Link href={href} className='flex items-center justify-center text-12 text-gray50 bg-gray p-8 rounded-full'>{icon}</Link>
    )
}
