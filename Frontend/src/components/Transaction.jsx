import React from 'react';
import Details from "./details";
import { Item } from "./Items";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useSelector } from 'react-redux';

<<<<<<< HEAD
export function Transaction({day}) {

    // const dayWeek = dayOfWeek(day[0].dateTime)
    const dayWeek = 'mon'

    let dayIncome = 0
    let dayExpense = 0

    for(let i=0; i < day.length; i++){
        if(day[i].type == 'Income'){
            dayIncome+= day[i].amount
        }
        else if(day[i].type == 'Expense'){
            dayExpense+= day[i].amount
        }
    }
=======
export function Transaction() {
    const lightTheme = useSelector((state) => state.themeKey);
>>>>>>> f1fcd86623053bcdf995087ed1ef0d308722651b

    return (
        <>
            <div className={`flex flex-col w-10/12 lg:w-8/12 mt-2 ${lightTheme ? 'text-black' : 'text-white'}`}>
                <div className={`flex justify-between items-center p-2 rounded-t-md shadow-md ${lightTheme ? 'bg-white' : 'bg-gray-700'}`}>
                    <div className="font-bold flex items-center">
<<<<<<< HEAD
                        {day[0].day}
                        <span className="bg-neutral-200 mx-2 px-2 py-1 rounded text-sm font-bold">{dayWeek}</span>
                        <button onClick={() => document.getElementById('my_modal_1').showModal()} className=" px-4 border-2">add</button>
=======
                        10
                        <span className={`mx-2 px-2 py-1 rounded text-sm font-bold ${lightTheme ? 'bg-neutral-200' : 'bg-gray-600'}`}>WED</span>
                        <button onClick={() => document.getElementById('my_modal_1').showModal()} className="px-2 ">
                           <AddCircleIcon className={`${lightTheme ? 'text-neutral-200' : 'text-gray-600'}`} />
                        </button>
>>>>>>> f1fcd86623053bcdf995087ed1ef0d308722651b
                    </div>
                    <div className="flex items-center">
                        <span className="font-bold text-green-600 mr-2"> {dayIncome}</span>
                        <span className="font-bold text-red-600">{dayExpense}</span>
                    </div>
                </div>
<<<<<<< HEAD
                <div className="flex flex-col justify-evenly bg-white mt-1 mb-4 p-2 rounded-b-md shadow-md">
                    {day.map((item, i)=>(
                        <Item key={i} category={item.category} amount={item.amount} note={item.note} type={item.type} />
                    ))}
=======
                <div className={`flex flex-col justify-evenly mt-1 mb-4 p-2 rounded-b-md shadow-md ${lightTheme ? 'bg-white' : 'bg-gray-700'}`}>
                    <Item />
                    <Item />
                    <Item />
>>>>>>> f1fcd86623053bcdf995087ed1ef0d308722651b
                </div>
            </div>

            {/* Modal */}
            <dialog id="my_modal_1" className="modal">
                <div className={`modal-box ${lightTheme ? 'bg-white text-black' : 'bg-gray-800 text-white'}`}>
                    <Details />
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </>
    );
}
