import ContactItem from '../components/ContactItem'
import { TitleSection } from '../components/TitleSection'

const contactData = [
    {
        id: 1,
        userName: 'Hurin Seary',
        avatar: 'http://localhost:3002/avatar.webp',
        status: true
    },
    {
        id: 2,
        userName: 'Victo Exrixon',
        avatar: 'http://localhost:3002/avatar.webp',
        status: true
    },
    {
        id: 3,
        userName: 'Surfiya Zakir',
        avatar: 'http://localhost:3002/avatar.webp',
        status: false
    },
]

export default function ContactsSection() {
    return (
        <div className='grid gap-8'>
            <TitleSection title='Contacts' />

            <div>
                {
                    contactData.map(item => <ContactItem key={item.id} avatar={item.avatar} status={item.status} userName={item.userName} />)
                }
            </div>
        </div>
    )
}
