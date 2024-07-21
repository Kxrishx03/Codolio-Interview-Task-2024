import React, { useEffect } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { useSelector } from 'react-redux';

export function SearchBar({ filtervalues, setFilterValues, applyFilter, resetFilter, setData, data }) {
    const lightTheme = useSelector((state) => state.themeKey);

    function handleFilter(e) {
        setFilterValues((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
        console.log(filtervalues);
    }

    useEffect(() => {
        applyFilter();
    }, [data, applyFilter]);

    return (
        <div className={`flex search justify-evenly items-center w-10/12 lg:w-8/12 rounded mt-4 ${lightTheme ? 'bg-neutral-200 text-black' : 'bg-gray-800 text-white'}`}>
            <div className='s-left flex w-full justify-center'>
                <div className={`flex items-center w-8/12 rounded border ${lightTheme ? 'bg-white text-black' : 'bg-gray-700 text-white'} p-2`}>
                    <input
                        onChange={(e) => setData(e.target.value)}
                        type="text"
                        placeholder="Search by Title"
                        className={`flex-grow border-none outline-none bg-transparent ${lightTheme ? 'bg-neutral-200 text-black' : 'bg-gray-700 text-white'}`}
                    />
                    <button onClick={applyFilter}><SearchIcon /></button>
                </div>
                <button onClick={applyFilter} className='h-10 w-2/12 bg-blue-500 mx-1 px-1 rounded'>Apply</button>
                <button onClick={resetFilter} className='h-10 w-2/12 bg-blue-500 mx-1 px-1 rounded'>Reset</button>
            </div>
            <div className='s-right flex w-full justify-center'>
                <select onChange={(e) => handleFilter(e)} value={filtervalues.type} name='type' className={`p-2 f-type rounded border w-4/12 ml-2 ${lightTheme ? 'bg-white text-black' : 'bg-gray-700 text-white'}`}>
                    <option value="">Type</option>
                    <option value="income">Income</option>
                    <option value="expense">Expense</option>
                </select>
                <select onChange={(e) => handleFilter(e)} value={filtervalues.category} name='category' className={`p-2 rounded border w-4/12 ml-2 filter-s ${lightTheme ? 'bg-white text-black' : 'bg-gray-700 text-white'}`}>
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
                <select onChange={(e) => handleFilter(e)} value={filtervalues.currency} name='currency' className={`p-2 rounded border w-4/12 ml-2 filter-s ${lightTheme ? 'bg-white text-black' : 'bg-gray-700 text-white'}`}>
                    <option value="">Currency</option>
                    <option value="USD">USD</option>
                    <option value="INR">INR</option>
                    <option value="JPY">JPY</option>
                    <option value="EUR">EUR</option>
                    <option value="GBP">GBP</option>
                </select>
            </div>
        </div>
    );
}
