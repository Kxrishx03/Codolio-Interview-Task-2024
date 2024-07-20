import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Navbar } from "../components/Navbar";

export function Home() {
    return (
        <div className="flex flex-col items-center bg-neutral-200 w-screen h-screen">
            {/* Navbar component fixed to top with padding */}
            <div className="fixed top-0 left-0 w-full z-10 p-2 bg-white shadow">
                <Navbar />
            </div>

            {/* Main content */}
            <div className="flex flex-col justify-center items-center w-full mt-14">
                <div className='flex justify-around items-center my-1.5 bg-white w-6/12 p-2 rounded shadow'>
                    <ArrowBackIosIcon />
                    <div>June 2024</div>
                    <ArrowForwardIosIcon />
                </div>
            </div>
        </div>
    )
}
