import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};

export const ThemeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const saved = localStorage.getItem('learnytics-dark-mode');
        return saved ? JSON.parse(saved) : false;
    });

    const [isDarkModeUnlocked, setIsDarkModeUnlocked] = useState(() => {
        const saved = localStorage.getItem('learnytics-dark-mode-unlocked');
        return saved ? JSON.parse(saved) : false;
    });

    const [coins, setCoins] = useState(() => {
        const saved = localStorage.getItem('learnytics-coins');
        return saved ? JSON.parse(saved) : 80;
    });

    const [dailyClaimed, setDailyClaimed] = useState(() => {
        const saved = localStorage.getItem('learnytics-daily-claimed');
        const lastClaimed = saved ? JSON.parse(saved) : null;

        // Reset daily claim if it's a new day
        if (lastClaimed) {
            const lastClaimedDate = new Date(lastClaimed);
            const today = new Date();
            if (lastClaimedDate.toDateString() !== today.toDateString()) {
                return false;
            }
            return true;
        }
        return false;
    });

    // Persist to localStorage whenever values change
    useEffect(() => {
        localStorage.setItem('learnytics-dark-mode', JSON.stringify(isDarkMode));
    }, [isDarkMode]);

    useEffect(() => {
        localStorage.setItem('learnytics-dark-mode-unlocked', JSON.stringify(isDarkModeUnlocked));
    }, [isDarkModeUnlocked]);

    useEffect(() => {
        localStorage.setItem('learnytics-coins', JSON.stringify(coins));
    }, [coins]);

    useEffect(() => {
        if (dailyClaimed) {
            localStorage.setItem('learnytics-daily-claimed', JSON.stringify(new Date().toISOString()));
        }
    }, [dailyClaimed]);

    const value = {
        isDarkMode,
        setIsDarkMode,
        isDarkModeUnlocked,
        setIsDarkModeUnlocked,
        coins,
        setCoins,
        dailyClaimed,
        setDailyClaimed,
    };

    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
