import React from 'react'
import { CreditCard, Inbox } from 'lucide-react'
import { TitleSection } from '@/components/TitleSection'
import SettingItem from '@/components/SettingItem'

const acoutData = [
    {
        id: 1,
        background: "linear-gradient(to right, #0575e6, #021b79)",
        title: "My Cards",
        icon: <CreditCard size={20} />,
        href: "#"
    },
    {
        id: 2,
        background: "linear-gradient(to right, #e44d26, #f16529)",
        title: "Password",
        icon: <Inbox size={20} />,
        href: "#"
    },
]

export default function AccountSetting() {
    return (
        <section className='grid gap-8'>
            <TitleSection title='Account' />

            <div>
                {
                    acoutData.map(item => <SettingItem key={item.id} href={item.href} icon={item.icon} bgColor={item.background} title={item.title} />)
                }
            </div>
        </section>
    )
}
