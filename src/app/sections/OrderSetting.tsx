import React from 'react'
import { TitleSection } from '../components/TitleSection'
import SettingItem from '../components/SettingItem'
import { Bell, CircleQuestionMark, Lock } from 'lucide-react'

const otherData = [
    {
        id: 1,
        background: "linear-gradient(to right, #0575e6, #021b79)",
        title: "Notification",
        icon: <Bell size={20} />,
        href: "#"
    },
    {
        id: 2,
        background: "linear-gradient(to right, #e44d26, #f16529)",
        title: "Help",
        icon: <CircleQuestionMark size={20} />,
        href: "#"
    },
    {
        id: 3,
        background: "linear-gradient(to right, #f2994a, #f2c94c)",
        title: "Logout",
        icon: <Lock size={20} />,
        href: "#"
    },
]

export default function OrderSetting() {
    return (
        <section className='grid gap-8'>
            <TitleSection title='Other' />

            <div>
                {
                    otherData.map(item => <SettingItem key={item.id} href={item.href} icon={item.icon} bgColor={item.background} title={item.title} />)
                }
            </div>
        </section>
    )
}
