import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { useSelector } from 'react-redux';

export function SearchBar({ filtervalues, setFilterValues, filterByType }) {
    const lightTheme = useSelector((state) => state.themeKey);

    function handleFilter(e) {
        setFilterValues((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    }

    console.log(filtervalues);

    return (
        <div className={`flex flex-col sm:flex-row items-center w-11/12 sm:w-10/12 lg:w-8/12 rounded mt-4 ${lightTheme ? 'bg-neutral-200 text-black' : 'bg-gray-800 text-white'}`}>
            <div className={`flex items-center w-full sm:w-6/12 rounded border ${lightTheme ? 'bg-white text-black' : 'bg-gray-700 text-white'} p-2 mb-2 sm:mb-0 sm:mr-2`}>
                <input
                    type="text"
                    placeholder="Search by Title"
                    className={`flex-grow border-none outline-none ${lightTheme ? 'bg-white text-black' : 'bg-gray-700 text-white'}`}
                />
                <SearchIcon />
            </div>

            <button onClick={filterByType} className="w-full sm:w-auto h-10 p-2 rounded bg-blue-500 text-white mb-2 sm:mb-0 sm:mr-2">Filter</button>

            <select onChange={(e) => handleFilter(e)} value={filtervalues.type} name='type' className={`p-2 rounded border w-full sm:w-auto mb-2 sm:mb-0 sm:mr-2 ${lightTheme ? 'bg-white text-black' : 'bg-gray-700 text-white'}`}>
                <option value="">Type</option>
                <option value="income">Income</option>
                <option value="expense">Expense</option>
            </select>
            <select onChange={(e) => handleFilter(e)} value={filtervalues.category} name='category' className={`p-2 rounded border w-full sm:w-auto mb-2 sm:mb-0 sm:mr-2 ${lightTheme ? 'bg-white text-black' : 'bg-gray-700 text-white'}`}>
                <option value="">Category</option>
                <option value="Healthcare">Healthcare</option>
                <option value="Shopping">Shopping</option>
                <option value="Food">Food</option>
                <option value="Travel">Travel</option>
                <option value="Investment">Investment</option>
                <option value="Entertainment">Entertainment</option>
                <option value="Education">Education</option>
                <option value="Transportation">Transportation</option>
            </select>
            <select onChange={(e) => handleFilter(e)} value={filtervalues.currency} name='currency' className={`p-2 rounded border w-full sm:w-auto ${lightTheme ? 'bg-white text-black' : 'bg-gray-700 text-white'}`}>
                <option value="">Currency</option>
                <option value="USD">USD</option>
                <option value="INR">INR</option>
                <option value="JPY">JPY</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
            </select>
        </div>
    );
}
