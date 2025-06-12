'use client';
import { createContext, useContext, useEffect, useState, Dispatch, SetStateAction } from 'react';

type themeMode = 'light' | 'dark' | null;

type ThemeContextType = {
    theme: themeMode;
    setTheme: Dispatch<SetStateAction<themeMode>>;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [theme, setTheme] = useState<'light' | 'dark' | null>(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const stored = localStorage.getItem('theme') as 'light' | 'dark' | null;
        const initial = stored || 'light';
        setTheme(initial);
        document.documentElement.classList.toggle('dark', initial === 'dark');
        localStorage.setItem('theme', initial);
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!mounted || theme === null) return;
        document.documentElement.classList.toggle('dark', theme === 'dark');
        localStorage.setItem('theme', theme);
    }, [theme, mounted]);

    if (!mounted || theme === null) return null;

    return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
};

const useTheme = () => {
    const ctx = useContext(ThemeContext);
    if (!ctx) throw new Error('ThemeContext must be used inside ThemeProvider');
    return ctx;
};

export { ThemeProvider, useTheme };
