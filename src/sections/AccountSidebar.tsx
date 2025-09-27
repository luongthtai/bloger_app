import React from 'react'
import { ChartPie, MessageSquare, SettingsIcon } from 'lucide-react'
import Link from 'next/link'
import { UrlObject } from 'url'
import { TitleSection } from '@/components/TitleSection'

export default function AccountSection() {
    return (
        <section className='bg-white rounded-8 py-16 px-20 shadow-section'>
            <TitleSection title='Account' />

            <div className='grid gap-12 mt-12'>
                <AccountItem href='settings' title='Settings' icon={<SettingsIcon size={20} />} />
                <AccountItem href='#' title='Analysis' icon={<ChartPie size={20} />} />
                <AccountItem href='#' title='Chat' icon={<MessageSquare size={20} />} />
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