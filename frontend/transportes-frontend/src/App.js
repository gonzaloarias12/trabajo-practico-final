
import './App.css';
import React from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';

import ContactoPage from '../src/components/layout/ContactoPage';
import HomePage from '../src/components/layout/ContactoPage';
import NosotrosPage from '../src/components/layout/NosotrosPage';
import NovedadesPage from '../src/components/layout/NovedadesPage';

function App() {
  return (
    <div className="App">
         <Header></Header>

        <BrowserRouter>
            <Nav/>
            <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/nosotros" element={<NosotrosPage />} />
            <Route path="/novedades" element={<NovedadesPage />} />
            <Route path="/contacto" element={<ContactoPage />} />
          </Routes>
        </BrowserRouter>
          <Footer/>
    </div>
  );
}

export default App;
