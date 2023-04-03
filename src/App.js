import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './style.css';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import BookingForm from "./components/BookingForm";
import Reservations from './components/Reservations';
import Orders from './components/Orders';
import Login from './components/Login';
import Footer from "./components/Footer";


export default function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about-us" element={<About />}></Route>
        <Route path="/bookings" element={<BookingForm />}></Route>
        <Route path="/reservations" element={<Reservations />}></Route>
        <Route path="/order-online" element={<Orders />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
      <Footer/>
    </>
  );
}
