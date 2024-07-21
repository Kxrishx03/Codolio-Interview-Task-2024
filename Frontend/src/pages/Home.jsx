import React, { useState } from 'react';
import Month from '../components/month';
import { groupedTransactions } from '../redux/sampleData';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export function Home() {
    const [mIndex, setMIndex] = useState(0);
    const [yIndex, setYIndex] = useState(0);

    console.log(groupedTransactions);
    
    const currentYearArray = groupedTransactions[yIndex] || [];
    const currentYear = currentYearArray.length ? currentYearArray[0][0][0].year : '';
    console.log(currentYear);

    const currentMonthArray = currentYearArray[mIndex] || [];
    console.log(currentMonthArray.length);
    console.log(currentMonthArray);

    const currentMonth = currentMonthArray.length ? currentMonthArray[0][0].month : '';
    console.log(currentMonth);

    function handleNextMonth() {
        setMIndex(prev => {
            if (prev === currentYearArray.length - 1) {
                if (yIndex < groupedTransactions.length - 1) {
                    setYIndex(yIndex + 1);
                    return 0;
                }
                return prev; // Stay at the last month if no more years available
            }
            return prev + 1;
        });
    }

    function handlePrevMonth() {
        setMIndex(prev => {
            if (prev === 0) {
                if (yIndex > 0) {
                    setYIndex(yIndex - 1);
                    return groupedTransactions[yIndex - 1].length - 1;
                }
                return prev; // Stay at the first month if no more previous years available
            }
            return prev - 1;
        });
    }

    const prevDisabled = yIndex === 0 && mIndex === 0;
    const nextDisabled = yIndex === groupedTransactions.length - 1 && mIndex === groupedTransactions[yIndex].length - 1;

    return (
        <div className="flex flex-col items-center bg-neutral-200 w-[100%] ">

            {/* Main content */}
            <div className='flex justify-between items-center my-1.5 bg-white w-10/12 lg:w-8/12 p-2 rounded shadow'>
                <button disabled={prevDisabled} onClick={handlePrevMonth}>
                    <ArrowBackIosIcon /> 
                </button>

                <div className='font-bold'>{currentMonth} {currentYear}</div>
                <button disabled={nextDisabled} onClick={handleNextMonth}>
                    <ArrowForwardIosIcon  />
                </button>
            </div>

            <Month sample={currentMonthArray} />
        </div>
    );
}
