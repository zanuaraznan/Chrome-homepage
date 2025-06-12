import { bookmarkTabData } from '@/utils/lib/socials';
import clsx from 'clsx';
import Link from 'next/link';
import { twMerge } from 'tw-merge';

const BookmarkTab = () => {
    const baseClassName =
        'flex items-center justify-center rounded-2xl bg-gray-200 dark:bg-zinc-800 h-auto aspect-square transform transition-all duration-300 hover:translate-y-1 active:translate-y-1 shadow-slate-400 dark:shadow-zinc-700 ease-[cubic-bezier(.3,.26,0,1.79)] shadow-[inset_0_-8px_0,0_0_0_2px]';

    const colorMap = {
        white: 'dark:text-white text-zinc-800 dark:hover:shadow-white hover:shadow-zinc-800 dark:active:shadow-white active:shadow-zinc-800',
        pink: 'text-pink-500 hover:shadow-pink-500 active:shadow-pink-500',
        sky: 'text-sky-500 hover:shadow-sky-500 active:shadow-sky-500',
        emerald: 'text-emerald-500 hover:shadow-emerald-500 active:shadow-emerald-500',
        rose: 'text-rose-500 hover:shadow-rose-500 active:shadow-rose-500',
    };

    return (
        <div className='grid grid-cols-3 gap-4 w-full'>
            {bookmarkTabData.map(({ title, tabUrl, icon, color }) => {
                const Icon = icon;
                return (
                    <Link
                        href={tabUrl}
                        key={title}
                        aria-label={title}
                        className={twMerge(clsx(baseClassName, colorMap[color]))}>
                        <Icon size={60} aria-hidden />
                    </Link>
                );
            })}
        </div>
    );
};

export default BookmarkTab;
