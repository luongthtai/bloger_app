import React from 'react'
import { TitleSection } from '../components/TitleSection'
import SettingItem from '../components/SettingItem'
import { House, MapPin, Twitter } from 'lucide-react'

const genaralData = [
    {
        id: 1,
        background: "linear-gradient(to right, #0575e6, #021b79)",
        title: "Acount Information",
        icon: <House size={20} />,
        href: "#"
    },
    {
        id: 2,
        background: "linear-gradient(to right, #e44d26, #f16529)",
        title: "Saved Address",
        icon: <MapPin size={20} />,
        href: "#"
    },
    {
        id: 3,
        background: "linear-gradient(to right, #f2994a, #f2c94c)",
        title: "Social Acount",
        icon: <Twitter size={20} />,
        href: "#"
    },
]

export default function GenaralSection() {
    return (
        <section className='grid gap-8'>
            <TitleSection title='Genaral' />

            <div>
                {
                    genaralData.map(item => <SettingItem key={item.id} href={item.href} icon={item.icon} bgColor={item.background} title={item.title} />)
                }
            </div>
        </section>
    )
}
