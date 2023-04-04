import React, { useState, useReducer } from 'react';
import Corousel from './Corousel';
import BookingForm from './BookingForm';
import DetailsForm from './DetailsForm';

const Reservations = () => {
  const initialState = [
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00',
  ];
  const updateTimes = (state, action) => {    
    return state;
  };
  const initializeTimes = ()=>initialState;
  const [availableTimes,dispatch] = useReducer(updateTimes,initializeTimes());

  const handleChange = (e) => {
    setAvailableTimes(e.target.value);
    console.log(e.target.value);
  };

  return (
    <section>
      <Corousel />
      <article className="container">
        <BookingForm times={availableTimes} />
        <DetailsForm />
      </article>
    </section>
  );
};

export default Reservations;
