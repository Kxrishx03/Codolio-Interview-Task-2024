import React, { useEffect, useState } from 'react';
import { Chart } from '../components/Chart';
import { SearchBar } from '../components/SearchBar';
import { useSelector } from 'react-redux';
import { Transaction } from './Transaction';

function Month({ sample }) {
    const lightTheme = useSelector((state) => state.themeKey);
    const [filteredMonth, setFilteredMonth] = useState(sample);
    const [data, setData] = useState('');
    console.log(filteredMonth);

    let expense = 0;
    let income = 0;
    const expenseCategories = new Map();
    const incomeCategories = new Map();
    const [filtervalues, setFilterValues] = useState({
        category: '',
        currency: '',
        type: ''
    });

    useEffect(() => {
        setFilteredMonth(sample);
    }, [sample]);

    useEffect(() => {
        console.log('changed');
    }, [filteredMonth]);

    const filterBySearch = (transactions) => {
        console.log(transactions);
        return transactions.map(month =>
            month.filter(transaction =>
                transaction.note.toLowerCase().includes(data.toLowerCase())
            )
        ).filter(month => month.length > 0);
    };

    const filterByType = (transactions) => {
        console.log(transactions);
        return transactions.map(month =>
            month.filter(transaction =>
                transaction.type.toLowerCase().includes(filtervalues.type.toLowerCase())
            )
        ).filter(month => month.length > 0);
    };

    const filterByCategory = (transactions) => {
        console.log(transactions);
        return transactions.map(month =>
            month.filter(transaction =>
                transaction.category.toLowerCase().includes(filtervalues.category.toLowerCase())
            )
        ).filter(month => month.length > 0);
    };

    const filterByCurrency = (transactions) => {
        console.log(transactions);
        return transactions.map(month =>
            month.filter(transaction =>
                transaction.currency.toLowerCase().includes(filtervalues.currency.toLowerCase())
            )
        ).filter(month => month.length > 0);
    };

    function applyFilter() {
        let filtered = filterBySearch(sample);
        filtered = filterByType(filtered);
        filtered = filterByCategory(filtered);
        filtered = filterByCurrency(filtered);
        setFilteredMonth(filtered);
    }

    function resetFilter() {
        setFilteredMonth(sample);
        setFilterValues({
            category: '',
            currency: '',
            type: ''
        });
        setData('');
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

    console.log('Expense Categories:', expenseCategories);
    console.log('Income Categories:', incomeCategories);

    const incomeLabelFormatter = ({ name, value }) => `${name}: ${value}`;
    const expenseLabelFormatter = ({ name, value }) => `${name}: ${value}`;

    return (
        <>
            <div className={`flex justify-center items-center w-full h-full ${lightTheme ? 'bg-neutral-200 text-black' : 'bg-gray-800 text-white'}`}>
                {/* Chart Section */}
                <div className={`flex charts justify-between items-center w-11/12 sm:w-10/12 lg:w-8/12 ${lightTheme ? 'bg-neutral-200 text-black' : 'bg-gray-800 text-white'} p-2 space-x-0 sm:space-x-4 space-y-4 sm:space-y-0`}>
                    <div className={`flex flex-col chrt items-center ${lightTheme ? 'bg-neutral-200 text-black' : 'bg-gray-800 text-white'} p-4 w-full sm:w-1/2`}>
                        <Chart
                            chartdata={incomeData}
                            colorCombination={false}
                            labelFormatter={incomeLabelFormatter}
                        />
                        <div className="text-green-500 text-center font-bold mt-2 p-2 bg-green-300 w-full shadow">
                            INCOME: ${income}
                        </div>
                    </div>
                    <div className={`flex flex-col chrt items-center ${lightTheme ? 'bg-neutral-200 text-black' : 'bg-gray-800 text-white'} p-4 w-full sm:w-1/2`}>
                        <Chart
                            chartdata={expenseData}
                            colorCombination={true}
                            labelFormatter={expenseLabelFormatter}
                        />
                        <div className="text-red-500 text-center font-bold mt-2 p-2 bg-red-300 w-full shadow text-xl">
                            EXPENSE: ${expense}
                        </div>
                    </div>
                </div>
            </div>

            <div className={`flex flex-col justify-center mb-8 items-center w-full ${lightTheme ? 'bg-neutral-200 text-black' : 'bg-gray-800 text-white'}`}>
                <SearchBar data={data} setData={setData} resetFilter={resetFilter} filtervalues={filtervalues} setFilterValues={setFilterValues} applyFilter={applyFilter} />
            </div>

            <div className={`flex flex-col justify-center items-center w-full h-full ${lightTheme ? 'bg-neutral-200 text-black' : 'bg-gray-700 text-white'}`}>
                {filteredMonth.length > 0 ? filteredMonth.map((day, i) => (
                    <Transaction key={i} day={day} />
                )) : 'nothing to show..'}
            </div>
        </>
    );
}

export default Month;
