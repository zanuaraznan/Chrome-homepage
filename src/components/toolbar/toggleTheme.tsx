'use client';
import { useTheme } from '@/utils/context/themeContext';
import { useEffect, useState } from 'react';
import { LuSunMoon } from 'react-icons/lu';
import { getWeather } from '../../utils/lib/weather';

type WeatherType = {
    time: Date;
    temperature2m: number;
};

const ToggleTheme = () => {
    const { setTheme } = useTheme();
    const [weather, setWeather] = useState<WeatherType | undefined>(undefined);

    useEffect(() => {
        async function fetchWeather() {
            const { weatherData } = await getWeather();
            setWeather(weatherData.current);
        }

        fetchWeather();

        const interval = setInterval(() => {
            fetchWeather();
        }, 1 * 60 * 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <button
            onClick={() => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))}
            aria-label='Light/Dark theme'
            className='group flex items-center gap-2 p-3 rounded-full bg-white dark:bg-zinc-800 duration-300 hover:text-amber-500  dark:hover:text-slate-500'>
            <LuSunMoon size={18} aria-hidden className='transform transition-transform group-hover:scale-120' />
            <span className='text-sm leading-none'>{weather?.temperature2m.toFixed(1) ?? '20.0'} C&deg;</span>
        </button>
    );
};

export default ToggleTheme;
