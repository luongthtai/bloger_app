import { IconNode, Search } from 'lucide-react';
import React, { HTMLInputTypeAttribute, ReactElement } from 'react';

type Props = {
    type?: HTMLInputTypeAttribute,
    placeholder?: string,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
    name?: string,
    value?: any,
    icon?: IconNode | ReactElement,
    error?: string
}

export function FormInput({ type = "text", onChange, name, value, icon, placeholder, error }: Props) {
    return (
        <div className='grid gap-4'>
            <div className={`flex items-center border-[2px] border-gray rounded-8 py-6 px-12 gap-8 font-semibold focus-within:border-blue duration-200`}>
                {icon}
                <input className='w-full outline-0 h-[44px]' type={type} onChange={onChange} name={name} value={value} placeholder={placeholder} />
            </div>
            {error && <span className="text-red-500 text-12 font-semibold ml-4">{error}</span>}
        </div>
    )
}

type SearchInputProps = {
    placeholder?: string,
    className?: string
}

export const SearchInput = ({ placeholder, className }: SearchInputProps) => {
    return (
        <div className={`px-12 py-6 rounded-full bg-gray text-12 flex items-center gap-12 ${className}`}>
            <Search size={16} color='#adb5bd' />
            <input className="w-full py-4 outline-0" placeholder={placeholder} />
        </div>
    )
}