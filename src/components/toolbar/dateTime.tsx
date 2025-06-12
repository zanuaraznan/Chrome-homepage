'use client';
import { useDateTime } from '@/utils/hooks/useDateTime';

const DateTime = () => {
    const dateTimeInfo = useDateTime();

    return (
        <div className='flex items-center gap-4'>
            {Object.entries(dateTimeInfo).map(([key, value]) => (
                <span key={key} className='text-xs text-white'>
                    {value}
                </span>
            ))}
        </div>
    );
};

export default DateTime;
