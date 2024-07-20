import React from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import { Navbar } from "../components/Navbar";
import { Chart } from '../components/Chart';
import { SearchBar } from '../components/SearchBar';
import { Transcation } from '../components/Transaction';

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
    return (
        <div className="flex flex-col items-center bg-neutral-200 w-screen h-screen">
            {/* Navbar component fixed to top with padding */}
            <div className="fixed top-0 left-0 w-full z-10 p-2 bg-white shadow">
                <Navbar />
            </div>

            {/* Main content */}
            <div className="flex flex-col justify-center items-center bg-neutral-200  w-full mt-16 h-full">
                {/* Date Section */}
                <div className='flex justify-between items-center my-1.5 bg-white w-10/12 lg:w-8/12 p-2 rounded shadow'>
                    <ArrowBackIosIcon />
                    <div>June 2024</div>
                    <ArrowForwardIosIcon />
                </div>

                {/* Chart Section */}
                <div className="flex justify-between items-center w-10/12 lg:w-8/12 bg-neutral-200 p-2 space-x-4">
                    <div className="flex flex-col items-center bg-neutral-200 p-4 w-1/2">
                        <Chart 
                            chartdata={data01} 
                            colorCombination={false} 
                            labelFormatter={incomeLabelFormatter} 
                            
                        />
                        <div className="text-green-500 text-center justify-between font-bold mt-2 p-2  bg-green-300 w-full shadow">
                            INCOME: ${36860}
                        </div>
                    </div>
                    <div className="flex flex-col items-center bg-neutral-200 p-4 w-1/2">
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
            <div className='flex flex-col justify-center items-center bg-neutral-200 w-full  h-full'>
            <SearchBar />
            </div>
            
            <div className='flex flex-col justify-center items-center bg-neutral-200 w-full  h-full'>
                <Transcation />
            </div>
            

          
        </div>
    );
}
