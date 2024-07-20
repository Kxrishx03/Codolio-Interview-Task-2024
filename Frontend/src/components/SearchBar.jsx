import SearchIcon from '@mui/icons-material/Search';

export function SearchBar() {
    return (
        <div className='flex items-center bg-neutral-200 w-10/12 lg:w-8/12  rounded mt-4'>
            <div className='flex items-center w-6/12 rounded border bg-white p-2'>
                <input
                    type="text"
                    placeholder="Search by Title"
                    className='flex-grow border-none outline-none bg-transparent '
                />
                <SearchIcon />
            </div>
            
            <select className="p-2 rounded border bg-white w-2/12 ml-2">
                <option value="">Type</option>
                {/* Add more options here */}
            </select>
            <select className="p-2 rounded border bg-white w-2/12 ml-2">
                <option value="">Category</option>
                {/* Add more options here */}
            </select>
            <select className="p-2 rounded border bg-white w-2/12 ml-2">
                <option value="">Currency</option>
                {/* Add more options here */}
            </select>
        </div>
    );
}
