import React, { useEffect, useReducer } from 'react';
import Corousel from './Corousel';
import BookingForm from './BookingForm';
import DetailsForm from './DetailsForm';
import { fetchAPI } from '../utils/api';

const Reservations = () => {
  const now = new Date('05/11/2023');
  useEffect(() => {
    const times = fetchAPI(now);
    console.log(times);

    initializeTimes(times);
  }, []);

  const initialState = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  const updateTimes = (state, action) => {
    if (action.type === 'change_time') {
      return state.filter((t) => t !== action.time);
    }
    return state;
  };
  const initializeTimes = (times) => times;
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    initialState,
    initializeTimes
  );

  const handleChange = (e) => {
    dispatch({ type: 'change_time', time: e.target.value });
    console.log(e.target.value);
  };

  return (
    <section>
      <Corousel />
      <article className="container">
        <BookingForm times={availableTimes} dispatch={handleChange} />
        <DetailsForm />
      </article>
    </section>
  );
};

export default Reservations;
