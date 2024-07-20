import Details from "./details";
import { Item } from "./Items";

export function Transaction() {
    return (
        <>
            <div className="flex flex-col w-10/12 lg:w-8/12 mt-2">
                <div className="flex justify-between items-center bg-white p-2 rounded-t-md shadow-md">
                    <div className="font-bold flex items-center">
                        10
                        <span className="bg-neutral-200 mx-2 px-2 py-1 rounded text-sm font-bold">WED</span>
                        <button onClick={() => document.getElementById('my_modal_1').showModal()} className=" px-4 border-2">add</button>
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

    );
}
