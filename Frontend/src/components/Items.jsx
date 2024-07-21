import DeleteIcon from '@mui/icons-material/Delete';
import Details from "./details";
import EditIcon from '@mui/icons-material/Edit';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

// Predefined set of colors
const predefinedColors = ['#28a745', '#ffc107', '#007bff', '#dc3545'];

// Function to get a random color from the predefined set
function getRandomColor() {
    return predefinedColors[Math.floor(Math.random() * predefinedColors.length)];
}

// Function to capitalize the first letter of a string
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export function Item({category, note, amount, type}) {
    const lightTheme = useSelector((state) => state.themeKey);
    const [colorMap, setColorMap] = useState({});

    const capitalizedCategory = capitalizeFirstLetter(category);

    useEffect(() => {
        // Check if the category already has an assigned color
        if (!colorMap[capitalizedCategory]) {
            setColorMap(prevMap => ({
                ...prevMap,
                [capitalizedCategory]: getRandomColor()
            }));
        }
    }, [capitalizedCategory, colorMap]);

    function handleItem() {
        document.getElementById('my_modal_1').showModal();
    }

    return (
        <>
            <div className='flex justify-between m-1'>
                <div className='flex align-center'>
                    <h3 className='pl-2 pt-1 pr-2 w-[100px] text-center pb-1 rounded font-bold' style={{ backgroundColor: colorMap[capitalizedCategory] }}>{capitalizedCategory}</h3>
                    <p className='mx-4 text-center font-bold flex items-center'>{note}</p>
                </div>
                <div className='flex items-center'>
                    <p className={`font-bold ${type === 'Income' ? 'text-green-500' : 'text-red-500'} mr-1 flex items-center`}>{amount}</p>
                    <EditIcon className='text-red-500 cursor-pointer mx-2' />
                    <DeleteIcon className='text-red-500 cursor-pointer mx-2' />
                </div>
            </div>

            {/* modal */}
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
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
