import React, { useState, useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import Corousel from './Corousel';
import BookingForm from './BookingForm';
import DetailsForm from './DetailsForm';
import { fetchAPI, submitAPI } from '../utils/api';

const Main = () => {
  const navigate = useNavigate();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [bookingData, setBookingData] = React.useState({
    res_date: '',
    res_time: '',
    guests: '',
    occasion: '',
    seatingOption: '',
  });
  const submitForm = (formData) => {
    const result = submitAPI();
    if (result) {
      navigate('/confirmation');
    }
    return;
  };
  const handleBookingData = (e) => {
    setBookingData({ ...bookingData, [e.target.id]: e.target.value });
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
    setBookingData({ ...bookingData, [e.target.id]: e.target.value });
  };
  const handleOptionChange = (e) => {
    setBookingData({ ...bookingData, seatingOption: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <main>
      <section>
        <Corousel />
        <article>
          {formSubmitted ? (
            <DetailsForm
              booking={bookingData}
              onSubmit={() => submitForm(bookingData)}
            />
          ) : (
            <BookingForm
              times={availableTimes}
              dispatch={handleDateChange}
              handleSubmit={handleSubmit}
              booking={bookingData}
              handleBookingData={handleBookingData}
              handleOptionChange={handleOptionChange}
            />
          )}
        </article>
      </section>
    </main>
  );
};

export default Main;
