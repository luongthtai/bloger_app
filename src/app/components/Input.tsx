import { IconNode } from 'lucide-react';
import React, { HTMLInputTypeAttribute, ReactElement } from 'react';

type Props = {
    type?: HTMLInputTypeAttribute,
    placeholder?: string,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
    name?: string,
    value?: any,
    icon?: IconNode | ReactElement,
}

export default function FormInput({ type = "text", onChange, name, value, icon, placeholder }: Props) {
    return (
        <div className={`flex items-center border-[2px] border-gray rounded-8 py-6 px-12 gap-8 font-semibold focus-within:border-blue duration-200`}>
            {icon}
            <input className='w-full outline-0 h-[44px]' type={type} onChange={onChange} name={name} value={value} placeholder={placeholder} />
        </div>
    )
}
