import { Item } from "./Items";

export function Transaction() {
    return (
        <div className="flex flex-col w-10/12 lg:w-8/12 mt-2">
            <div className="flex justify-between items-center bg-white p-2 rounded-t-md shadow-md">
                <div className="font-bold flex items-center">
                    10
                    <span className="bg-neutral-200 ml-2 px-2 py-1 rounded text-sm font-bold">WED</span>
                </div>
                <div className="flex items-center">
                    <span className="font-bold text-green-600 mr-2">0</span>
                    <span className="font-bold text-red-600">1500</span>
                </div>
            </div>
            <div className="flex flex-col justify-evenly bg-white mt-1 mb-4 p-2 rounded-b-md shadow-md">
                <Item />
                <Item />
                <Item />
            </div>
        </div>
    );
}
