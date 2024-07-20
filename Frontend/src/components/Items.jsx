import DeleteIcon from '@mui/icons-material/Delete';
import Details from "./details";
import EditIcon from '@mui/icons-material/Edit';

export function Item(){

    function handleItem(){
        document.getElementById('my_modal_1').showModal()
    }

    return (
        <>
            <div onClick={handleItem} className=' cursor-pointer flex justify-between m-1 hover:bg-gray-300 transition ease duration-500'>
            <div className='flex align-center'>
                <h3 className='bg-green-500 pl-2 pt-1 pr-2 pb-1 rounded font-bold'>Food</h3>
                <p className='mx-4 text-center font-bold flex items-center'>Lunch with Friends</p>
            </div>
            <div className='flex items-center'>
                <p className='font-bold text-red-500 mr-1 flex items-center'>1500</p>
                <DeleteIcon className='text-red-500 font-bold  ' />
            </div>
            </div>

            {/* modal  */}

            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <Details/>
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </>
    )
}