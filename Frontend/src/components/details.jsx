import React, { useState,useEffect } from 'react'
import '../css/details.css';
// import { useSelector,useDispatch } from 'react-redux';
// import { addTransaction, setLoading, setError, setSuccess } from "../redux/transactionSlice"

export default function Details() {
  
    const [income, setIncome] = useState({
        date : null,
        title : '',
        notes : '',
        category : '',
        amount : 0
    });


  
    const [flag1, setFlag1] = useState(false)
    function handleIncome(e){
      setIncome((prev)=>({
        ...prev,
        [e.target.name] : e.target.value
      }))
    }

    function handleIncomeSave(e){
        e.preventDefault();
        console.log(income)
    }
    function handleExpenseSave(e){
        e.preventDefault();
        console.log(income)
    }

    function handleIncomeBtn(){
        if(flag1){
            setFlag1(false)
        }
    }
    function handleExpenseBtn(){
        if(!flag1){
            setFlag1(true)
        }
    }

    return (
        <>
            <div className="details w-[100%] overflow-hidden ">
                <div className="detail-title flex w-full justify-evenly p-6">
                    <div className=' cursor-pointer' onClick={handleIncomeBtn} >Income</div>
                    <div className=' cursor-pointer' onClick={handleExpenseBtn} >Expense</div>
                </div>
                <div className={`${flag1 && 'translateIncome' } detail-body flex w-[200%]`}>
                    <form className={`${flag1 && 'translateIncome' } flex flex-col p-6 income w-[100%] `} onSubmit={handleIncomeSave}>
                        <div className="date flex pb-3 w-[100%]">
                            <label className=' w-[10vw]'>Date:</label>
                            <input className=' border-2 border-black' name='date' type="date" value={handleIncome.date} onChange={(e) => handleIncome(e)} />
                        </div>
                        <div className="amount flex pb-3 w-[100%]">
                            <label className=' w-[10vw]'>Amount:</label>
                            <input className=' border-2 text-left border-black' name='amount' type='number' value={handleIncome.amount} onChange={(e) => handleIncome(e)} ></input>
                        </div>
                        <div className="category flex pb-3 w-[100%]">
                            <label className=' w-[10vw]'>Category:</label>
                            <select name='category' value={handleIncome.category} onChange={(e) => handleIncome(e)} >
                                <option value="Salary">Salary</option>
                                <option value="Food">Food</option>
                                <option value="Transport">Transport</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        <div className="title flex pb-3 w-[100%]">
                            <label className=' w-[10vw]'>Title:</label>
                            <input className=' border-2 border-black' name='title' type="text" value={handleIncome.title} onChange={(e) => handleIncome(e)} />
                        </div>
                        <div className="notes pb-3 w-[100%] flex flex-col">
                            <label className=' w-[10vw]'>Notes:</label>
                            <textarea className=' border-2 border-black' name='notes' value={handleIncome.notes} onChange={(e) => handleIncome(e)} ></textarea>
                        </div>

                        <button type='submit' >save</button>
                    </form>

                    <form className={`flex flex-col p-6 income w-[100%] `} onSubmit={handleExpenseSave}>
                        <div className="date flex pb-3 w-[100%]">
                            <label className=' w-[10vw]'>Date:</label>
                            <input className=' border-2 border-black' name='date' type="date" value={handleIncome.date} onChange={(e) => handleIncome(e)} />
                        </div>
                        <div className="amount flex pb-3 w-[100%]">
                            <label className=' w-[10vw]'>Amount:</label>
                            <input className=' border-2 text-left border-black' name='amount' type='number' value={handleIncome.amount} onChange={(e) => handleIncome(e)} ></input>
                        </div>
                        <div className="category flex pb-3 w-[100%]">
                            <label className=' w-[10vw]'>Category:</label>
                            <select name='category' value={handleIncome.category} onChange={(e) => handleIncome(e)} >
                                <option value="Salary">Salary</option>
                                <option value="Food">Food</option>
                                <option value="Transport">Transport</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        <div className="title flex pb-3 w-[100%]">
                            <label className=' w-[10vw]'>Title:</label>
                            <input className=' border-2 border-black' name='title' type="text" value={handleIncome.title} onChange={(e) => handleIncome(e)} />
                        </div>
                        <div className="notes pb-3 w-[100%] flex flex-col">
                            <label className=' w-[10vw]'>Notes:</label>
                            <textarea className=' border-2 border-black' name='notes' value={handleIncome.notes} onChange={(e) => handleIncome(e)} ></textarea>
                        </div>

                        <button type='submit' >save</button>
                    </form>

                </div>
            </div>
        </>
    )
}
