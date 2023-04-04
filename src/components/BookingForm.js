import React, { useState } from 'react';
import Button from './Button';
import './booking-form.css';

const BookingForm = () => {
  const [availableTimes, setAvailableTimes] = useState('');
  const handleChange = (e) => {
    setAvailableTimes(e.target.value);
    console.log(e.target.value);
  };
  
  return (
    <>
      <h1 className="text-center my-5">Find a Table for Any Occasion</h1>
      <form className="row g-3 mb-5 px-5">
        <div className="col-12 col-md-6">
          <label htmlFor="res_date" className="form-label">
            *Date
          </label>
          <input
            type="date"
            className="form-control"
            placeholder="Date"
            aria-label="Date"
            id="res_date"
            onChange={handleChange}
          />
        </div>
        <div className="col-12 col-md-6">
          <label htmlFor="res_time" className="form-label">
            *Choose time
          </label>
          <select id="res_time" className="form-select" onChange={handleChange}>
            {['', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'].map(
              (time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              )
            )}
          </select>
        </div>
        <div className="col-12 col-md-6">
          <label htmlFor="guests" className="form-label">
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
            onChange={handleChange}
          />
        </div>

        <div className="col-12 col-md-6">
          <label htmlFor="occasion" className="form-label">
            *Ocassion
          </label>
          <select id="occasion" className="form-select" onChange={handleChange}>
            {['', 'Birthday', 'Engagement', 'Anniversary'].map((event) => (
              <option key={event} value={event}>
                {event}
              </option>
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
              value="standard"
              checked={availableTimes==="standard"} 
              onChange={handleChange}  
            />
            <label className="form-check-label" htmlFor="standard">
              Standard
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="outside"
              id="outside"
              value="outside"
              checked={availableTimes==="outside"}
              onChange={handleChange} 
            />
            <label className="form-check-label" htmlFor="outside">
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
