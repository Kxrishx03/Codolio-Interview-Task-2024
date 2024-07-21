import React from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { Navbar } from "../components/Navbar";
import { Chart } from '../components/Chart';
import { SearchBar } from '../components/SearchBar';
import { Transaction } from '../components/Transaction';
import { groupedTransactions } from '../utils/sampleData';
import { Month } from '../components/month';


const data01 = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
    { name: "Group E", value: 278 },
    { name: "Group F", value: 189 }
];

// Custom label formatter functions
const incomeLabelFormatter = ({ name, value }) => `${name}: ${value}`;
const expenseLabelFormatter = ({ name, value }) => `${name}: ${value}`;

export function Home() {
    //Initially lightTheme is used
    const lightTheme = useSelector((state) => state.themeKey);
    const [mIndex, setMIndex] = useState(0);
    const [yIndex, setYIndex] = useState(0);

    // console.log(groupedTransactions);
    
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
        <div className={`flex flex-col items-center w-[100%] ${lightTheme ? 'bg-slate-50 text-black' : 'bg-gray-800 text-white'}`}>
            {/* Navbar component fixed to top with padding */}
            <div className="fixed top-0 left-0 w-full z-10 p-2  shadow ${lightTheme ? 'bg-white text-black' : 'bg-gray-800 text-white'}`">
                <Navbar />
            </div>

            {/* Main content */}
            <div className={`flex flex-col justify-center items-center w-full mt-16 h-full ${lightTheme ? 'bg-neutral-200' : 'bg-gray-800'}`}>
                {/* Date Section */}
                <div className={`flex justify-between items-center my-1.5 w-10/12 lg:w-8/12 p-2 rounded shadow ${lightTheme ? 'bg-white' : 'bg-gray-700'}`}>
                    <button  disabled={prevDisabled} onClick={handlePrevMonth}>
                    <ArrowBackIosIcon />
                    </button>
                    <div className="font-bold cursor-default">{currentMonth} {currentYear}</div>
                    <button disabled={nextDisabled} onClick={handleNextMonth}>
                    <ArrowForwardIosIcon />
                    </button>
                </div>
            </div>
            
            <Month sample={currentMonth} />
        </div>
    );
}
