import React, { useEffect, useState } from 'react';
import { Chart } from '../components/Chart';
import { SearchBar } from '../components/SearchBar';
import { useSelector } from 'react-redux';
import { Transaction } from './Transaction';

function Month({ sample }) {
    const lightTheme = useSelector((state) => state.themeKey);
    const [filteredMonth, setFilteredMonth] = useState(sample);
    const [filtervalues, setFilterValues] = useState({});

    let expense = 0;
    let income = 0;
    const expenseCategories = new Map();
    const incomeCategories = new Map();

    useEffect(() => {
        setFilteredMonth(sample);
    }, [sample]);

    useEffect(()=>{
       console.log('changed')
    }, [filteredMonth])

    function filterByType() {
        const filtered = filteredMonth.map(month => 
            month.filter(transaction => transaction.type.toLowerCase() === filtervalues.type.toLowerCase())
        ).filter(month => month.length > 0);
        setFilteredMonth(filtered);
    }

    function filterByCategory() {
        const filtered = filteredMonth.map(month => 
            month.filter(transaction => transaction.category.toLowerCase() === filtervalues.category.toLowerCase())
        ).filter(month => month.length > 0);
        setFilteredMonth(filtered);
    }

    function filterByCurrency() {
        const filtered = filteredMonth.map(month => 
            month.filter(transaction => transaction.currency.toLowerCase() === filtervalues.currency.toLowerCase())
        ).filter(month => month.length > 0);
        setFilteredMonth(filtered);
    }

    function resetFilter() {
        setFilteredMonth(sample);
        setFilterValues({
            category: '',
            currency: '',
            type: ''
        });
    }

    function applyFilter() {
        if (filtervalues.type.length > 0) filterByType();
        if (filtervalues.category.length > 0) filterByCategory();
        if (filtervalues.currency.length > 0) filterByCurrency();
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

    const expenseData = Array.from(expenseCategories, ([name, value]) => ({ name, value }));
    const incomeData = Array.from(incomeCategories, ([name, value]) => ({ name, value }));

    const capitalizeLabel = (text) => text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();

    const incomeLabelFormatter = ({ name, value }) => `${capitalizeLabel(name)}: ${value}`;
    const expenseLabelFormatter = ({ name, value }) => `${capitalizeLabel(name)}: ${value}`;

    return (
        <>
            <div className={`flex flex-col justify-center items-center w-full h-full ${lightTheme ? 'bg-neutral-200 text-black' : 'bg-gray-800 text-white'} `}>
                {/* Chart Section */}
                <div className={`flex flex-col sm:flex-row justify-between items-center w-11/12 sm:w-10/12 lg:w-8/12 ${lightTheme ? 'bg-neutral-200 text-black' : 'bg-gray-800 text-white'} p-2 space-x-0 sm:space-x-4 space-y-4 sm:space-y-0`}>
                    <div className={`flex flex-col items-center ${lightTheme ? 'bg-neutral-200 text-black' : 'bg-gray-800 text-white'} p-4 w-full sm:w-1/2`}>
                        <Chart
                            chartdata={incomeData}
                            colorCombination={false}
                            labelFormatter={incomeLabelFormatter}
                        />
                        <div className="text-green-500 flex justify-between text-center font-bold mt-2 p-2 text-xl bg-green-300 w-full shadow">
                            <div className='ml-2'>INCOME:</div> <div className='mr-2'>${income}</div>
                        </div>
                    </div>
                    <div className={`flex flex-col items-center ${lightTheme ? 'bg-neutral-200 text-black' : 'bg-gray-800 text-white'} p-4 w-full sm:w-1/2`}>
                        <Chart
                            chartdata={expenseData}
                            colorCombination={true}
                            labelFormatter={expenseLabelFormatter}
                        />
                        <div className="text-red-500 flex justify-between text-center font-bold mt-2 p-2 bg-red-300 w-full shadow text-xl">
                           <div className='ml-2'> EXPENSE:</div> <div className='mr-2'> ${expense}</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`flex flex-col justify-center mb-8 items-center w-full ${lightTheme ? 'bg-neutral-200 text-black' : 'bg-gray-800 text-white'} `}>
                <SearchBar resetFilter={resetFilter} filtervalues={filtervalues} setFilterValues={setFilterValues} applyFilter={applyFilter} />
            </div>

            <div className={`flex flex-col justify-center items-center w-full h-full${lightTheme ? 'bg-neutral-200 text-black' : 'bg-gray-700 text-white'} `}>
                {filteredMonth.length > 0 ? filteredMonth.map((day, i) => (
                    <Transaction key={i} day={day} />
                )) : 'nothing to show..' }
            </div>
        </>
    );
}

export default Month;
