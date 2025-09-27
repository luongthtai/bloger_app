import MainLayout from '@/layouts/MainLayout'
import { TitleSectionLarge } from '../../components/TitleSection'
import GenaralSection from '@/sections/GenaralSection'
import AccountSetting from '@/sections/AccountSetting'
import OrderSetting from '@/sections/OrderSetting'

export default function SettingPage() {
    return (
        <MainLayout>
            <div className='bg-white shadow-sidebar w-full rounded-4 p-32 flex flex-col gap-40'>
                <TitleSectionLarge title='Settings' />

                <div className='flex flex-col gap-20'>
                    <GenaralSection />
                    <AccountSetting />
                    <OrderSetting />
                </div>
            </div>
        </MainLayout>
    )
}
