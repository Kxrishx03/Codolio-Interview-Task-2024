import React from 'react';
import Details from "./details";
import { Item } from "./Items";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useSelector } from 'react-redux';

export function Transaction() {
    const lightTheme = useSelector((state) => state.themeKey);

    return (
        <>
            <div className={`flex flex-col w-10/12 lg:w-8/12 mt-2 ${lightTheme ? 'text-black' : 'text-white'}`}>
                <div className={`flex justify-between items-center p-2 rounded-t-md shadow-md ${lightTheme ? 'bg-white' : 'bg-gray-700'}`}>
                    <div className="font-bold flex items-center">
                        10
                        <span className={`mx-2 px-2 py-1 rounded text-sm font-bold ${lightTheme ? 'bg-neutral-200' : 'bg-gray-600'}`}>WED</span>
                        <button onClick={() => document.getElementById('my_modal_1').showModal()} className="px-2 ">
                           <AddCircleIcon className={`${lightTheme ? 'text-neutral-200' : 'text-gray-600'}`} />
                        </button>
                    </div>
                    <div className="flex items-center">
                        <span className="font-bold text-green-600 mr-2">0</span>
                        <span className="font-bold text-red-600">1500</span>
                    </div>
                </div>
                <div className={`flex flex-col justify-evenly mt-1 mb-4 p-2 rounded-b-md shadow-md ${lightTheme ? 'bg-white' : 'bg-gray-700'}`}>
                    <Item />
                    <Item />
                    <Item />
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
