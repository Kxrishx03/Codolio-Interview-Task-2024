import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { useSelector } from 'react-redux';

export function SearchBar() {
    const lightTheme = useSelector((state) => state.themeKey);

    return (
        <div className={`flex items-center w-10/12 lg:w-8/12 rounded mt-4 ${lightTheme ? 'bg-neutral-200' : 'bg-gray-800'}`}>
            <div className={`flex items-center w-6/12 rounded border-none p-2 ${lightTheme ? 'bg-white' : 'bg-gray-600'}`}>
                <input
                    type="text"
                    placeholder="Search by Title"
                    className={`flex-grow border-none outline-none ${lightTheme ? 'bg-transparent text-black' : 'bg-transparent text-white'}`}
                />
                <SearchIcon className={lightTheme ? 'text-black' : 'text-white'} />
            </div>
            
            <select className={`p-2 rounded border-none w-2/12 ml-2 ${lightTheme ? 'bg-white text-black' : 'bg-gray-600 text-white'}`}>
                <option value="type" selected>Type</option>
                <option value="income">Income</option>
                <option value="expense">Expense</option>
            </select>
            <select className={`p-2 rounded border-none w-2/12 ml-2 ${lightTheme ? 'bg-white text-black' : 'bg-gray-600 text-white'}`}>
                <option value="Category" selected>Category</option>
                <option value="Healthcare">Healthcare</option>
                <option value="Shopping">Shopping</option>
                <option value="Food">Food</option>
                <option value="Travel">Travel</option>
                <option value="Investment">Investment</option>
                <option value="Entertainment">Entertainment</option>
                <option value="Education">Education</option>
                <option value="Transportation">Transportation</option>
            </select>
            <select className={`p-2 rounded border-none w-2/12 ml-2 ${lightTheme ? 'bg-white text-black' : 'bg-gray-600 text-white'}`}>
                <option value="Currency" selected>Currency</option>
                <option value="USD">US Dollar (USD)</option>
                <option value="INR">Indian Rupee (INR)</option>
                <option value="JPY">Japanese Yen (JPY)</option>
                <option value="EUR">Euro (EUR)</option>
                <option value="GBP">British Pound (GBP)</option>
            </select>
        </div>
    );
}
