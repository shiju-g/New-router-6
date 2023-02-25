import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';

function App() {
  return (
    <>
      <BrowserRouter>
        <header className="w-full flex justify-between items-center py-5 px-10 bg-orange-50">
          <Link className="site-logo text-3xl font-bold" to="/">
            #VANLIFE
          </Link>
          <nav className="">
            <Link className="text-lg font-bold text-gray-700" to="/about">
              About
            </Link>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <footer className="bg-black  py-6 text-center text-white">
          <p className=" text-xs"> @ 2022 #VANLIFE</p>
        </footer>
      </BrowserRouter>
    </>
  );
}

export default App;
