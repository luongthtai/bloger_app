import React from 'react'
import { TitleSection } from '../components/TitleSection'
import { ChartPie, MessageSquare, SettingsIcon } from 'lucide-react'
import Link from 'next/link'
import { UrlObject } from 'url'

export default function AccountSection() {
    return (
        <section className='bg-white rounded-8 py-16 px-20 shadow-section'>
            <TitleSection title='Account' />

            <div className='grid gap-12 mt-12'>
                <AccountItem href='#' title='Settings' icon={<SettingsIcon />} />
                <AccountItem href='#' title='Analysis' icon={<ChartPie />} />
                <AccountItem href='#' title='Chat' icon={<MessageSquare />} />
            </div>
        </section>
    )
}

type Props = {
    icon: React.ReactNode,
    title: string,
    href: UrlObject | any,
}

const AccountItem = ({ icon, title, href }: Props) => {
    return (
        <Link href={href} className='flex items-center gap-20 text-[#888]'>
            {icon}
            <h5>{title}</h5>
        </Link>
    )
}