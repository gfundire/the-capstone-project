import React, { useState } from 'react';
import Button from './Button';
import './booking-form.css';

const BookingForm = () => {
  const [availableTimes] = useState([
    null,
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00',
  ]);
  const [occasions] = useState([null, 'Birthday', 'Engagement', 'Anniversary']);

  return (
    <>
      <h1 className="text-center my-5">Find a Table for Any Occasion</h1>
      <form className="row g-3 mb-5 px-5">
        <div className="col-12 col-md-6">
          <label for="res-date" className="form-label">
            *Date
          </label>
          <input
            type="date"
            className="form-control"
            placeholder="Date"
            aria-label="Date"
            id="res-date"
          />
        </div>
        <div className="col-12 col-md-6">
          <label for="res-time" className="form-label">
            *Choose time
          </label>
          <select id="res-time" className="form-select">
            {availableTimes.map((time) => (
              <option key={time}>{time}</option>
            ))}
          </select>
        </div>
        <div className="col-12 col-md-6">
          <label for="guests" className="form-label">
            *Number of Guests
          </label>
          <input
            type="number"
            className="form-control"
            aria-label="Number of Guests"
            placeholder="1"
            id="guests"
            min="1"
            max="10"
          />
        </div>

        <div className="col-12 col-md-6">
          <label for="occasion" className="form-label">
            *Ocassion
          </label>
          <select id="occasion" className="form-select">
            {occasions.map((event) => (
              <option key={event}>{event}</option>
            ))}
          </select>
        </div>
        <div className="col-12">
          <h5>Seating Options</h5>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="standard"
              id="standard"
            />
            <label className="form-check-label" for="standard">
              Standard
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="outside"
              id="outside"
            />
            <label className="form-check-label" for="outside">
              Outside
            </label>
          </div>
        </div>
        <div className="co1-12">
          <Button type="submit" className="btn-lg btn-block col-12">
            Make Your Reservation
          </Button>
        </div>
      </form>
    </>
  );
};

export default BookingForm;
