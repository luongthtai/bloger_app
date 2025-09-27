import GroupItem from '@/components/GroupItem'
import { TitleSection } from '@/components/TitleSection'
import React from 'react'

const groupData = [
    {
        id: 1,
        groupName: 'Hurin',
        status: true
    },
    {
        id: 2,
        groupName: 'Victo Exrixon',
        status: false
    },
    {
        id: 3,
        groupName: 'Surfiya Zakir',
        status: true
    },
]

export default function GroupSection() {
    return (
        <div className='grid gap-8'>
            <TitleSection title='Groups' />

            <div>
                {
                    groupData.map(item => <GroupItem key={item.id} groupName={item.groupName} status={item.status} />)
                }
            </div>
        </div>
    )
}
