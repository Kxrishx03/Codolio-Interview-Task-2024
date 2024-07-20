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
            
            <select className="p-2 rounded border w-2/12 ml-2">
                <option value="type" selected>Type</option>
                <option value="income">Income</option>
                <option value="expense">Expense</option>
            </select>
            <select className="p-2 rounded border w-2/12 ml-2">
                <option value="Category" selected>Category</option>
                <option value="Healthcare">Healthcare</option>
                <option value="Shopping">Shopping</option>
                <option value="Food">Food</option>
                <option value="Travel">Travel</option>
                <option value="Investment">Investment</option>
                <option value="Entertainment">Entertainment</option>
                <option value="Education">Education</option>
                <option value="Transportaion">Transportaion</option>
            </select>
            <select className="p-2 rounded border w-2/12 ml-2">
                <option value="Currency" selected>Currency</option>
                <option value="USD">US Dollar (USD)</option>
                <option value="INR">Indian Rupee (INR)</option>
                <option value="JPY">Japanese Yen (JPY)</option>
                <option value="EUR">Euro (EUR)</option>
                <option value="GBP">British Pound (GBP)</option>
            </select>
        </div>
    );
}
