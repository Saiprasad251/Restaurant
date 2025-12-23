import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom"
import './index.css';
import Home from './pages/Home';

import Navbar from './components/layout/Navbar.jsx'

function App() {
  return (
    <div className="">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div >
  );
}
export default App;
