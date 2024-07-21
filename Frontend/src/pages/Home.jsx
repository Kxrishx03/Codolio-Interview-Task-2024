import React, { useState } from 'react';
import Month from '../components/month';
import { groupedTransactions } from '../utils/sampleData';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useSelector } from 'react-redux';

export function Home() {
    const lightTheme = useSelector((state) => state.themeKey);
    const [mIndex, setMIndex] = useState(0);
    const [yIndex, setYIndex] = useState(0);

    console.log(groupedTransactions);
    const monthNames = [
        "JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE",
        "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"
    ];

    const currentYearArray = groupedTransactions[yIndex] || [];
    const currentYear = currentYearArray.length ? currentYearArray[0][0][0].year : '';
    const currentMonthArray = currentYearArray[mIndex] || [];
    const currentMonth = currentMonthArray.length ? currentMonthArray[0][0].month : '';

    function handleNextMonth() {
        setMIndex(prev => {
            if (prev === currentYearArray.length - 1) {
                if (yIndex < groupedTransactions.length - 1) {
                    setYIndex(yIndex + 1);
                    return 0;
                }
                return prev; 
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
                return prev; 
            }
            return prev - 1;
        });
    }

    const prevDisabled = yIndex === 0 && mIndex === 0;
    const nextDisabled = yIndex === groupedTransactions.length - 1 && mIndex === groupedTransactions[yIndex].length - 1;

    return (
        <div className={`flex flex-col items-center w-full ${lightTheme ? 'bg-neutral-200 text-black' : 'bg-gray-800 text-white'}`}>

            {/* Main content */}
            <div className={`flex justify-between items-center mt-12 w-11/12 sm:w-10/12 lg:w-8/12 p-2 rounded shadow ${lightTheme ? 'bg-slate-50 text-black' : 'bg-gray-700 text-white'}`}>
                <button disabled={prevDisabled} onClick={handlePrevMonth}>
                    <ArrowBackIosIcon />
                </button>

                <div className='font-bold text-xs sm:text-sm md:text-lg'>{monthNames[currentMonth - 1]} {currentYear}</div>
                <button disabled={nextDisabled} onClick={handleNextMonth}>
                    <ArrowForwardIosIcon />
                </button>
            </div>

            <Month sample={currentMonthArray} />
        </div>
    );
}
