import Link from 'next/link'
import React from 'react'
import { UrlObject } from 'url'

type Props = {
    href: UrlObject | any,
    icon: React.ReactNode,
    active: boolean
}

export default function NavbarItem({ href, icon, active }: Props) {
    return (
        <Link href={href} className={`flex items-center justify-center text-12  p-8 rounded-full ${active ? 'text-blue bg-lightBlue' : 'text-gray50 bg-gray'}`}>{icon}</Link>
    )
}
