import DeleteIcon from '@mui/icons-material/Delete';
import Details from "./details";
import EditIcon from '@mui/icons-material/Edit';

export function Item({category, note, amount, type}){

    console.log(amount)

    function handleItem(){
        document.getElementById('my_modal_1').showModal();
    }

    return (
        <>
            <div  className='flex justify-between m-1'>
            <div className='flex align-center'>
<<<<<<< HEAD
                <h3 className='bg-green-500 pl-2 pt-1 pr-2 pb-1 rounded font-bold'>{category}</h3>
                <p className='mx-4 text-center font-bold flex items-center'>{note}</p>
            </div>
            <div className='flex items-center'>
                <p className={`font-bold ${type === 'Income' ? 'text-green-500' : 'text-red-500' } mr-1 flex items-center`}>{amount}</p>
                <DeleteIcon className='text-red-500 font-bold  ' />
=======
                <h3 className='bg-green-500 pl-2 pt-1 pr-2 pb-1 rounded font-bold cursor-default'>Food</h3>
                <p className='mx-4 text-center font-bold flex items-center cursor-default'>Lunch with Friends</p>
            </div>
            <div className='flex items-center'>
                <p className='font-bold text-red-500 mr-1 flex items-center'>1500</p>
                <EditIcon onClick={handleItem} className='text-red-500 font-bold  cursor-pointer hover:bg-gray-300 transition ease duration-500' />
                <DeleteIcon className='text-red-500 font-bold hover:bg-gray-300 transition ease duration-500' />
                
>>>>>>> f1fcd86623053bcdf995087ed1ef0d308722651b
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