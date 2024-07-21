import React from 'react';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../redux/themeSlice';

export function Navbar() {
    const lightTheme = useSelector((state) => state.themeKey);
    const dispatch = useDispatch();

    const handleThemeToggle = () => {
        dispatch(toggleTheme());
    };

    return (
        <div className={`w-full sticky top-0 flex justify-between items-center p-2 ${lightTheme ? 'bg-slate-50 text-black' : 'bg-gray-800 text-white'}`}>
            <h1 className="text-bold text-2xl font-serif cursor-default">Expense Tracker</h1>
            <div onClick={handleThemeToggle} className="cursor-pointer">
                {lightTheme ? <LightModeIcon /> : <DarkModeIcon />}
            </div>
        </div>
    );
}
