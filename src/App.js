import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Vans from './pages/Vans';

import "./server"
import VanDetails from './pages/VanDetails';

function App() {
  return (
    <>
      <BrowserRouter>
        <header className="w-full flex justify-between items-center py-5 sm:px-10 px-5 bg-orange-50">
          <Link className="site-logo text-3xl font-bold" to="/">
            #VANLIFE
          </Link>
          <nav className="">
            <Link className="text-lg font-bold text-gray-700" to="/about">
              About
            </Link>
            <Link className="text-lg font-bold text-gray-700 ml-5" to="/vans">
              Vans
            </Link>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans />} />
          <Route path={`/vans/:id`} element={<VanDetails />} />
        </Routes>
        <footer className="bg-black  py-6 text-center text-white">
          <p className=" text-xs"> @ 2023 #VANLIFE</p>
        </footer>
      </BrowserRouter>
    </>
  );
}

export default App;
