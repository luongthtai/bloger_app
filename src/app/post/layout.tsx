'use client'

import MainLayout from '@/layouts/MainLayout'
import React from 'react'

type Props = {
    children: React.ReactNode
}

export default function page({ children }: Props) {
    return <MainLayout className='flex-col'>{children}</MainLayout>
}
