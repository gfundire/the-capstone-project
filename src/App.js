import React, { useState, useReducer } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import './style.css';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import BookingForm from './components/BookingForm';
import Corousel from './components/Corousel';
import DetailsForm from './components/DetailsForm';
import ConfirmedBooking from './components/ConfirmedBooking';
import Orders from './components/Orders';
import Error404 from './components/Error404';
import Login from './components/Login';
import Footer from './components/Footer';

import { fetchAPI, submitAPI } from './utils/api';

export default function App() {
  const navigate = useNavigate();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [bookingData, setBookingData] = useState({
    res_date: '',
    res_time: '',
    guests: '',
    occasion: '',
    seatingOption: '',
  });

  const handleBookingData = (e) => {
    setBookingData({ ...bookingData, [e.target.name]: e.target.value });
  };

  const initialState = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  const updateTimes = (state, action) => {
    if (action.type === 'change_date') {
      const date = new Date(action.date);
      return fetchAPI(date);
    }
    return state;
  };
  const initializeTimes = (times) => times;
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    initialState,
    initializeTimes
  );

  const handleDateChange = (e) => {
    dispatch({ type: 'change_date', date: e.target.value });
    setBookingData({ ...bookingData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/reservations/details');
    setFormSubmitted(true);
  };

  const submitForm = (formData) => {
    const result = submitAPI();
    if (result) {
      navigate('/reservations/confirmation');
    }
    return;
  };

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="reservations">          
          <Route
            path="bookings"
            element={
              <BookingForm
                times={availableTimes}
                dispatch={handleDateChange}
                handleSubmit={handleSubmit}
                booking={bookingData}
                handleBookingData={handleBookingData}
              />
            }
          />
          <Route
            path="details"
            element={
              <DetailsForm
                booking={bookingData}
                onSubmit={() => submitForm(bookingData)}
                setData={setBookingData}
              />
            }
          />
          <Route
            path="/reservations/confirmation"
            element={<ConfirmedBooking />}
          />
        </Route>
        <Route path="/order-online" element={<Orders />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="*" element={<Error404 />} /> */}
      </Routes>
      <Footer />
    </>
  );
}
