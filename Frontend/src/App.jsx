import { Home } from "./pages/Home";
import { Navbar } from "./components/Navbar";

export default function App() {
  return (

    <div className="bg-neutral-200">
      <div className=" sticky top-0 w-full z-10 p-2 bg-white shadow">
        <Navbar />
      </div>
      <Home />
    </div>
  )
}