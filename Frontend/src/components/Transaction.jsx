import React from 'react';
import Details from "./details";
import { Item } from "./Items";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useSelector } from 'react-redux';

export function Transaction({day}) {
    const lightTheme = useSelector((state) => state.themeKey);

    let dayIncome = 0;
    let dayExpense = 0;

    function getWeekdayFromDateTime(day) {
        const date = new Date(day);
        const dayOfWeek = date.getDay();
        const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        return daysOfWeek[dayOfWeek];
      }
      
      function addWeekdaysToData(data) {
        return data.map(item => ({
          ...item,
          weekday: getWeekdayFromDateTime(item.dateTime)
        }));
      }
      
    const dataWithWeekdays = addWeekdaysToData(day);
    
    for(let i=0; i < day.length; i++){
        if(day[i].type == 'Income'){
            dayIncome+= day[i].amount
        }
        else if(day[i].type == 'Expense'){
            dayExpense+= day[i].amount
        }
    }

    return (
        <>
            <div className={`flex flex-col w-10/12 lg:w-8/12 mb-8 rounded-t-md ${lightTheme ? 'bg-neutral-200 text-black' : 'bg-gray-800 text-white'} `}>
                <div className={`flex justify-between items-center p-2 px-5 rounded-t-md shadow-md ${lightTheme ? 'bg-white text-black' : 'bg-gray-700 text-white'} `}>
                    <div className="font-bold flex items-center">
                        {day[0].day}
                        <span className={`${lightTheme ? 'bg-neutral-200 text-black' : 'bg-gray-700 text-white'}  mx-1 px-2 py-1  rounded text-sm font-bold `}>{dataWithWeekdays[0].weekday}</span>
                        <button onClick={() => document.getElementById('my_modal_1').showModal()} className=" px-1"><AddCircleIcon /></button>
                    </div>
                    <div className="flex items-center">
                        <span className="font-bold text-green-600 mr-2"> {dayIncome}</span>
                        <span className="font-bold text-red-600">{dayExpense}</span>
                    </div>
                </div>
                <div className={`flex flex-col justify-evenly ${lightTheme ? 'bg-white text-black' : 'bg-gray-700 text-white'} mt-1 mb-4 p-2 rounded-b-md `}>
                    {day.map((item, i)=>(
                        <Item key={i} category={item.category} amount={item.amount} note={item.note} type={item.type} />
                    ))}
                </div>
            </div>

            {/* Modal */}
            <dialog id="my_modal_1" className={`${lightTheme ? 'bg-neutral-200 text-black' : 'bg-gray-800 text-white'}`}>
                <div className={`modal-box ${lightTheme ? 'bg-white text-black' : 'bg-gray-800 text-white'}`}>
                    <Details />
                    <div className={`modal-action  ${lightTheme ? 'bg-neutral-200 text-black' : 'bg-gray-600 text-white'}`}>
                        <form method="dialog" className={`${lightTheme ? 'bg-neutral-200 text-black' : 'bg-gray-800 text-white'}`}>
                            <button className={`${lightTheme ? 'bg-neutral-200 text-black' : 'bg-gray-800 text-white'} btn` }>Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </>
    );
}
