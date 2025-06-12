'use client';
import Image from 'next/image';
import { useRef } from 'react';
import { LuSearch } from 'react-icons/lu';

const FormInput = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    return (
        <form action='https://www.google.com/search' method='GET' className='w-full'>
            <label
                htmlFor='q'
                className='rounded-full bg-gray-100 dark:bg-zinc-800 flex items-center px-5 pb-1 h-16 shadow-[inset_0_-6px_0,0_0_0_2px] shadow-slate-300 dark:shadow-zinc-700'>
                <Image aria-hidden priority src='google.svg' width={24} height={24} alt='Google' />
                <input
                    ref={inputRef}
                    type='text'
                    name='q'
                    className='w-full h-full px-4 focus:outline-none'
                    placeholder='Search Google...'
                    autoFocus
                />
                <button className='h-full opacity-50 hover:opacity-100 transition-opacity' aria-label='Search'>
                    <LuSearch size={22} aria-hidden />
                </button>
            </label>
        </form>
    );
};

export default FormInput;
