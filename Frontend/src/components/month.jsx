import React, { useState } from 'react';
import { Chart } from '../components/Chart';
import { SearchBar } from '../components/SearchBar';
import SearchIcon from '@mui/icons-material/Search';

import { Transaction } from './Transaction';

function Month({ sample }) {

    console.log(sample)
    const [filteredMonth, setFilteredMonth] = useState(sample)
    let expense = 0;
    let income = 0;
    const expenseCategories = new Map();
    const incomeCategories = new Map();
    const [filtervalues, setFilterValues] = useState({
        category : '',
        currency : '',
        type : ''
    })

    function handleFilter(e){
        // e.preventDefault()
        setFilterValues((prev)=>({
            ...prev,
            [e.target.name] : e.target.value
        }))
    }

    console.log(filtervalues)

    function filterByType() {
        const filtered = sample.map(month =>
            month.map(day =>
                day.filter(transaction => transaction.type === filtervalues.type  )
            )
        );
        setFilteredMonth(filtered);
        console.log(filtered);
    }
    
    function filterByCategory() {
        const filtered = filteredMonth.map(month =>
            month.map(day =>
                day.filter(transaction => transaction.type.toLowerCase() === filtervalues.type.toLowerCase()  )
            )
        );
        setFilteredMonth(filtered);
        console.log(filtered);
    }
    function filterByCurrency() {
        const filtered = filteredMonth.map(month =>
            month.map(day =>
                day.filter(transaction => transaction.type.toLowerCase() === filtervalues.type.toLowerCase()  )
            )
        );
        setFilteredMonth(filtered);
        console.log(filtered);
    }
    
    for (let i = 0; i < sample.length; i++) {
        for (let j = 0; j < sample[i].length; j++) {
            const transaction = sample[i][j];
            const { type, category, amount } = transaction;

            if (type === 'Expense') {
                expense += amount;
                if (expenseCategories.has(category)) {
                    expenseCategories.set(category, expenseCategories.get(category) + amount);
                } else {
                    expenseCategories.set(category, amount);
                }
            } else if (type === 'Income') {
                income += amount;
                if (incomeCategories.has(category)) {
                    incomeCategories.set(category, incomeCategories.get(category) + amount);
                } else {
                    incomeCategories.set(category, amount);
                }
            }
        }
    }

    // Convert maps to arrays for chart data
    const expenseData = Array.from(expenseCategories, ([name, value]) => ({ name, value }));
    const incomeData = Array.from(incomeCategories, ([name, value]) => ({ name, value }));

    console.log('Expense Categories:', expenseCategories);
    console.log('Income Categories:', incomeCategories);

    // Custom label formatter functions
    const incomeLabelFormatter = ({ name, value }) => `${name}: ${value}`;
    const expenseLabelFormatter = ({ name, value }) => `${name}: ${value}`;

    return (
        <>
            <div className="flex flex-col justify-center items-center bg-neutral-200 w-full mt-16 h-full">
                {/* Date Section */}

                {/* Chart Section */}
                <div className="flex justify-between items-center w-10/12 lg:w-8/12 bg-neutral-200 p-2 space-x-4">
                    <div className="flex flex-col items-center bg-neutral-200 p-4 w-1/2">
                        <Chart 
                            chartdata={incomeData} 
                            colorCombination={false} 
                            labelFormatter={incomeLabelFormatter} 
                        />
                        <div onClick={filterByType} className="text-green-500 text-center justify-between font-bold mt-2 p-2 bg-green-300 w-full shadow">
                            INCOME: ${income}
                        </div>
                    </div>
                    <div className="flex flex-col items-center bg-neutral-200 p-4 w-1/2">
                        <Chart 
                            chartdata={expenseData} 
                            colorCombination={true} 
                            labelFormatter={expenseLabelFormatter} 
                        />
                        <div className="text-red-500 text-center font-bold mt-2 p-2 bg-red-300 w-full shadow">
                            EXPENSE: ${expense}
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex flex-col justify-center items-center bg-neutral-200 w-full'>
                {/* <SearchBar /> */}
                <div className='flex items-center bg-neutral-200 w-10/12 lg:w-8/12  rounded mt-4'>
            <div className='flex items-center w-6/12 rounded border bg-white p-2'>
                <input
                    type="text"
                    placeholder="Search by Title"
                    className='flex-grow border-none outline-none bg-transparent '
                />
                <SearchIcon />
            </div>
            
            <select onClick={(e)=>handleFilter(e)} value={filtervalues.type} name='type' className="p-2 rounded border w-2/12 ml-2">
                {/* <option value="type" selected>Type</option> */}
                <option value="income">Income</option>
                <option value="expense">Expense</option>
            </select>
            <select onClick={handleFilter} value={filtervalues.category} name='category' className="p-2 rounded border w-2/12 ml-2">
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
            <select onClick={handleFilter} value={filtervalues.currency} name='currency' className="p-2 rounded border w-2/12 ml-2">
                <option value="Currency" selected>Currency</option>
                <option value="USD">US Dollar (USD)</option>
                <option value="INR">Indian Rupee (INR)</option>
                <option value="JPY">Japanese Yen (JPY)</option>
                <option value="EUR">Euro (EUR)</option>
                <option value="GBP">British Pound (GBP)</option>
            </select>
        </div>
            </div>

            <div className='flex flex-col justify-center items-center bg-neutral-200 w-full h-full'>
                {filteredMonth.map((day, i) => (
                    <Transaction key={i} day={day} />
                ))}
            </div>
        </>
    );
}

export default Month;
