import React, { useState, useEffect } from 'react';
import '../css/details.css';
import { useSelector, useDispatch } from 'react-redux';
import { addTransaction, deleteTransaction, setLoading, setError, setSuccess } from "../redux/transactionSlice";
import { sampleTransactions } from '../utils/sampleData';


export default function Details({item}) {
    const lightTheme = useSelector((state) => state.themeKey);
    const dispatch = useDispatch();
    const { transaction } = useSelector((state) => state.transaction);
    console.log(sampleTransactions);
    
    const [income, setIncome] = useState({});
    const [expense, setExpense] = useState({});
    const [flag1, setFlag1] = useState(false);

    function handleIncome(e) {
        setIncome((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    }
    function handleExpense(e) {
        setExpense((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    }

    function handleIncomeSave(e) {
        e.preventDefault();
        const newTransaction = {income, id: Date.now()};
        console.log(newTransaction);
        dispatch(addTransaction(newTransaction));
        document.getElementById('my_modal_2').closeModal()
        document.getElementById('my_modal_1').closeModal()
        
    }

    function handleExpenseSave(e) {
        e.preventDefault();
        const newTransaction = {expense, id: Date.now()};
        console.log(newTransaction);
        dispatch(addTransaction(newTransaction));
        document.getElementById('my_modal_2').closeModal()
        document.getElementById('my_modal_1').closeModal()
       
    }

    function handleIncomeBtn() {
        if (flag1) {
            setFlag1(false);
        }
    }

    function handleExpenseBtn() {
        if (!flag1) {
            setFlag1(true);
        }
    }

    const handleDelete = (id) => () => {
        dispatch(deleteTransaction(id));
    }; 
    console.log(sampleTransactions);
    return (
        <>
            <div className={`details w-full h-full overflow-hidden ${lightTheme ? 'bg-neutral-200 text-black' : 'bg-gray-800 text-white'}`}>
                <div className="detail-title flex w-full justify-evenly ">
                    <div className="cursor-pointer w-1/2 h-full bg-green-300 text-green-600 font-bold text-xl p-4 text-center" onClick={handleIncomeBtn}>INCOME</div>
                    <div className="cursor-pointer w-1/2 h-full bg-red-300 text-red-600 font-bold text-xl p-4 text-center" onClick={handleExpenseBtn}>EXPENSE</div>
                </div>
                <div className={`${lightTheme ? 'bg-neutral-200 text-black' : 'bg-gray-800 text-white'} detail-body flex w-[200%] overflow-y-scroll scrollbar-hide ${flag1 && 'translateIncome'}`}>
                    <form method='dialog' className={`flex flex-col p-6 income w-full ${flag1 && 'translateIncome'}`} onSubmit={handleIncomeSave}>
                        <div className="date flex pb-3 w-full">
                            <label className="w-[10vw]">Date:</label>
                            <input className={`border-2 ${lightTheme ? 'bg-white border-black rounded' : 'bg-gray-800 border-white rounded'}`} name="date" type="date" value={income.date} onChange={handleIncome} />
                        </div>
                        <div className="amount flex pb-3 w-full">
                            <label className="w-[10vw]">Amount:</label>
                            <input className={`border-2 text-left ${lightTheme ? 'bg-white border-black rounded' : 'bg-gray-800 border-white rounded'}`} name="amount" type="number" value={income.amount} onChange={handleIncome} />
                        </div>
                        <div className="category flex pb-3 w-full">
                            <label className="w-[10vw]">Category:</label>
                            <select className={`border-2 ${lightTheme ? 'bg-white border-black rounded' : 'bg-gray-800 border-white rounded'}`} name="category" value={income.category} onChange={handleIncome}>
                                <option value="Salary">Salary</option>
                                <option value="Bonus">Bonus</option>
                                <option value="Rentals">Rentals Money</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        <div className="title flex pb-3 w-full">
                            <label className="w-[10vw]">Title:</label>
                            <input className={`border-2 ${lightTheme ? 'bg-white border-black rounded' : 'bg-gray-800 border-white rounded'}`} name="title" type="text" value={income.title} onChange={handleIncome} />
                        </div>
                        <div className="notes pb-3 w-full flex flex-col">
                            <label className="w-[10vw] mb-3">Notes:</label>
                            <textarea className={`border-2 ${lightTheme ? 'bg-white border-black rounded' : 'bg-gray-800 border-white rounded'}`} name="notes" value={income.notes} onChange={handleIncome}></textarea>
                        </div>
                        <button className={`border-2 ${lightTheme ? 'border-black bg-neutral-200' : 'border-white bg-gray-800'} btn`} type="submit">Save</button>
                    </form>

                    <form method='dialog' className="flex flex-col p-6 income w-full" onSubmit={handleExpenseSave}>
                        <div className="date flex pb-3 w-full">
                            <label className="w-[10vw]">Date:</label>
                            <input className={`border-2 ${lightTheme ? 'bg-white border-black rounded' : 'bg-gray-800 border-white rounded'}`} name="date" type="date" value={income.date} onChange={handleExpense} />
                        </div>
                        <div className="amount flex pb-3 w-full">
                            <label className="w-[10vw]">Amount:</label>
                            <input className={`border-2 text-left ${lightTheme ? 'bg-white border-black rounded' : 'bg-gray-800 border-white rounded'}`} name="amount" type="number" value={income.amount} onChange={handleExpense} />
                        </div>
                        <div className="category flex pb-3 w-full">
                            <label className="w-[10vw]">Category:</label>
                            <select className={`border-2 ${lightTheme ? 'bg-white border-black rounded' : 'bg-gray-800 border-white rounded'}`} name="category" value={income.category} onChange={handleExpense}>
                                <option value="Food">Food</option>
                                <option value="Transport">Transport</option>
                                <option value="Healthcare">Healthcare</option>
                            </select>
                        </div>
                        <div className="title flex pb-3 w-full">
                            <label className="w-[10vw]">Title:</label>
                            <input className={`border-2 ${lightTheme ? 'bg-white border-black rounded' : 'bg-gray-800 border-white rounded'}`} name="title" type="text" value={income.title} onChange={handleExpense} />
                        </div>
                        <div className="notes pb-3 w-full flex flex-col">
                            <label className="w-[10vw] mb-3">Notes:</label>
                            <textarea className={`border-2 ${lightTheme ? 'bg-white border-black rounded' : 'bg-gray-800 border-white rounded'}`} name="notes" value={income.notes} onChange={handleExpense}></textarea>
                        </div>
                        <button className={`border-2 ${lightTheme ? 'border-black bg-neutral-200' : 'border-white bg-gray-800'} btn`} type="submit">Save</button>
                    </form>
                </div>
            </div>
        </>
    );
}
