import { Item } from "./Items"
export function Transcation(){
    return (
        <div className="flex flex-col w-10/12 lg:w-8/12 mt-2">
            <div className="flex justify-between bg-white p-2 rounded-t-md">
                <div className="font-bold">10 <span className="bg-neutral-200 round font-bold ml-1 pl-2 pr-2 pt-1 pb-1 rounded">WED</span></div>
                <div><span className="font-bold text-green-600">0</span> <span className="font-bold text-red-600">1500</span></div>
            </div>
            <div className="flex justify-between bg-white mt-1 mb-4 p-2 rounded-b-md">
                <Item />
            </div>
        </div>
    )
}