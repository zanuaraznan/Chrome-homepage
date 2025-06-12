'use client';

import { useEffect, useState } from 'react';

const useTitleFromAriaLabel = () => {
    const [hasTitles, setHasTitles] = useState<NodeListOf<Element> | null>(null);

    useEffect(() => {
        const els = document.querySelectorAll('[aria-label]');
        setHasTitles(els);
    }, []);

    useEffect(() => {
        if (!hasTitles) return;
        Array.from(hasTitles).forEach((el) => {
            const label = el.getAttribute('aria-label');
            if (label) {
                el.setAttribute('title', label);
            }
        });
    }, [hasTitles]);
};

export default useTitleFromAriaLabel;
