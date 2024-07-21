import React from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useSelector } from 'react-redux';
import { Navbar } from "../components/Navbar";
import { Chart } from '../components/Chart';
import { SearchBar } from '../components/SearchBar';
import { Transaction } from '../components/Transaction';

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
                    <ArrowBackIosIcon />
                    <div className="font-bold cursor-default">June 2024</div>
                    <ArrowForwardIosIcon />
                </div>

                {/* Chart Section */}
                <div className="flex justify-between items-center w-10/12 lg:w-8/12 p-2 space-x-4">
                    <div className={`flex flex-col items-center p-4 w-1/2 ${lightTheme ? 'bg-neutral-200' : 'bg-gray-800'}`}>
                        <Chart
                            chartdata={data01}
                            colorCombination={false}
                            labelFormatter={incomeLabelFormatter}
                        />
                        <div className="text-green-500 text-center justify-between font-bold mt-2 p-2 bg-green-300 w-full shadow">
                            INCOME: ${36860}
                        </div>
                    </div>
                    <div className={`flex flex-col items-center p-4 w-1/2 ${lightTheme ? 'bg-neutral-200' : 'bg-gray-800'}`}>
                        <Chart
                            chartdata={data01}
                            colorCombination={true}
                            labelFormatter={expenseLabelFormatter}
                        />
                        <div className="text-red-500 text-center font-bold mt-2 p-2 bg-red-300 w-full shadow">
                            EXPENSE: ${12236}
                        </div>
                    </div>
                </div>
            </div>
            
            <div className={`flex flex-col justify-center items-center w-full ${lightTheme ? 'bg-neutral-200' : 'bg-gray-800'}`}>
                <SearchBar />
            </div>

            <div className={`flex flex-col justify-center items-center w-full h-full ${lightTheme ? 'bg-neutral-200' : 'bg-gray-800'}`}>
                <Transaction />
                <Transaction />
                <Transaction />
                <Transaction />
                <Transaction />
                <Transaction />
            </div>
        </div>
    );
}
