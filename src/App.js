import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './style.css';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';

export default function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about-us" element={<About />}></Route>
      </Routes>
    </>
  );
}
