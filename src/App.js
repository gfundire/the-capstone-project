import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './style.css';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Main from './components/Main';
import DetailsForm from './components/DetailsForm';
import ConfirmedBooking from './components/ConfirmedBooking';
import Orders from './components/Orders';
import Error404 from './components/Error404';

import Login from './components/Login';
import Footer from "./components/Footer";


export default function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about-us" element={<About />}></Route>
        <Route path="/bookings" element={<Main />}></Route>
        <Route path="/details" element={<DetailsForm />}></Route>  
        <Route path="/confirmation" element={<ConfirmedBooking />}></Route>        
        <Route path="/order-online" element={<Orders />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="*" element={<Error404 />}></Route>
      </Routes>
      <Footer/>
    </>
  );
}
