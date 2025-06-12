import { useEffect, useState } from 'react';

type dateTimeInfoType = {
    date: string;
    time: string;
};

const useDateTime = () => {
    const [dateTimeInfo, setDateTimeInfo] = useState<dateTimeInfoType>({ date: '', time: '' });

    useEffect(() => {
        const updateTime = () => {
            const time = new Date().toLocaleTimeString('en-US', {
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
            });
            const date = new Date().toISOString().split('T')[0].replace(/-/g, '/');
            setDateTimeInfo({ date, time });
        };

        updateTime();
        const interval = setInterval(updateTime, 1000);

        return () => clearInterval(interval);
    }, []);
    return dateTimeInfo;
};

export { useDateTime };
