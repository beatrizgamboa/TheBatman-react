import './App.css';
import React from 'react';
import Home from './pages/home';
import Contato from './pages/contato/contato';
import Fotos from './pages/fotos/fotos';

import {  BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
 
  return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contato' element={<Contato />} />
        <Route path='/fotos' element={<Fotos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
