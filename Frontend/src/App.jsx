import { Home } from "./pages/Home";
import { Navbar } from "./components/Navbar";
import { useSelector } from 'react-redux';
import './App.css';

export default function App() {
  const lightTheme = useSelector((state) => state.themeKey);

  console.log('Current theme:', lightTheme);

  return (
    <div className={`${lightTheme ? 'bg-slate-50 text-black' : 'bg-gray-800 text-white'}`}>
        <Navbar />
        <Home />
    </div>
  );
}
