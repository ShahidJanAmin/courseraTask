
import './App.css';
import Home from "./component/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

import ServiceUser from './component/ServiceUser';
import AboutUser from './component/AboutUser';
import ContactUser from './component/ContactUser';
function App() {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className="App overflow-hidden">

      <BrowserRouter>

        <Routes>
          <Route index element={<Home />} />
          <Route path='/services' element={<ServiceUser />} />
           <Route path='/about' element={<AboutUser />} />

          <Route path='/contact' element={<ContactUser />} />  
        </Routes>

      </BrowserRouter>

    </div >
  );
}

export default App;
