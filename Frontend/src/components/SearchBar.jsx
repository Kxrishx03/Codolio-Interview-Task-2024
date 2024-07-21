import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { useSelector } from 'react-redux';


export function SearchBar({filtervalues, setFilterValues, applyFilter, resetFilter}) {
    const lightTheme = useSelector((state) => state.themeKey);
    function handleFilter(e) {
        setFilterValues((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
        console.log(filtervalues)
    }
    return (
        <div className={`flex items-center w-10/12 lg:w-8/12  rounded mt-4 ${lightTheme ? 'bg-neutral-200 text-black' : 'bg-gray800 text-white'} `}>
        <div className={`flex items-center w-6/12 rounded border ${lightTheme ? 'bg-white text-black' : 'bg-gray-700 text-white'} p-2`}>
            <input
                type="text"
                placeholder="Search by Title"
                className={`flex-grow border-none outline-none bg-transparent ${lightTheme ? 'bg-neutral-200 text-black' : 'bg-gray-700 text-white'} `}
            />
            <SearchIcon />
        </div>

        <button onClick={applyFilter} >apply</button>
        <button onClick={resetFilter} >reset</button>
        <select onChange={(e) => handleFilter(e)} value={filtervalues.type} name='type' className={`p-2 rounded border w-2/12 ml-2 ${lightTheme ? 'bg-white text-black' : 'bg-gray-700 text-white'}`}>
            <option value="" selected>Type</option>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
        </select>
        <select onChange={(e) => handleFilter(e)} value={filtervalues.category} name='category' className={`p-2 rounded border w-2/12 ml-2 ${lightTheme ? 'bg-white text-black' : 'bg-gray-700 text-white'}`}>
            <option value="Category" selected>Category</option>
            <option value="Healthcare">Healthcare</option>
            <option value="Shopping">Shopping</option>
            <option value="Food">Food</option>
            <option value="Travel">Travel</option>
            <option value="Investment">Investment</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Education">Education</option>
            <option value="Transportaion">Transportaion</option>
        </select>
        <select onChange={(e) => handleFilter(e)} value={filtervalues.currency} name='currency' className={`p-2 rounded border w-2/12 ml-2 ${lightTheme ? 'bg-white text-black' : 'bg-gray-700 text-white'}`}>
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
