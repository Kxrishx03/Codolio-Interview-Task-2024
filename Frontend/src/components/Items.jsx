import DeleteIcon from '@mui/icons-material/Delete';
export function Item(){
    return (
        <>
            <div className='flex align-center'>
                <h3 className='bg-green-500 pl-2 pt-1 pr-2 pb-1 rounded font-bold'>Food</h3>
                <p className='ml-4 text-center font-bold'>Lunch with Friends</p>
            </div>
            <div className='flex'>
                <p className='font-bold text-red-500 mr-1'>1500</p>
                <DeleteIcon className='text-red-500 font-bold' />
            </div>
        </>
    )
}