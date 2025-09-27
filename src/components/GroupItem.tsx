import React from 'react'

type Props = {
    groupName: string,
    status: boolean
}

export default function GroupItem({ groupName, status }: Props) {
    const arrGroupName = groupName.split(" ")
    const firstName = arrGroupName[0][0]
    const seconName = arrGroupName[1] ? arrGroupName[1][0] : ''

    return (
        <div className='py-8 flex justify-between items-center'>
            <div className='flex items-center gap-8'>
                <div className='w-7 h-7 object-contain bg-blue rounded-full flex justify-center items-center text-12 font-semibold text-white'>{firstName + seconName}</div>
                <p className='text-12 font-semibold text-gray60 '>{groupName}</p>
            </div>

            <div className={`w-6 h-6 rounded-full ${status ? 'bg-success' : 'bg-warning'}`}></div>
        </div>
    )
}
