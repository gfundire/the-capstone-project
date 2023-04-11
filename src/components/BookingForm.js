import React from 'react';
import Button from './Button';
import './booking-form.css';
import Corousel from './Corousel';

const BookingForm = ({
  times,
  dispatch,
  handleSubmit,
  booking,
  handleBookingData,
  handleOptionChange,
}) => {
  return (
    <>
    <Corousel/>
    <section>
      <h1 className="text-center my-5">Find a Table for Any Occasion</h1>
      <form className="row g-3 mb-5 px-5" onSubmit={handleSubmit}>
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
            name="res_date"
            value={booking.date}
            onChange={dispatch}
            required
          />
        </div>
        <div className="col-12 col-md-6">
          <label htmlFor="res_time" className="form-label">
            *Choose time
          </label>
          <select
            id="res_time"
            name="res_time"
            className="form-select"
            onChange={handleBookingData}
            required
          >
            {times.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
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
            name="guests"
            min="1"
            max="10"
            required
            value={booking.guests}
            onChange={handleBookingData}
          />
        </div>

        <div className="col-12 col-md-6">
          <label htmlFor="occasion" className="form-label">
            *Occasion
          </label>
          <select
            id="occasion"
            name="occasion"
            required
            className="form-select"
            onChange={handleBookingData}
          >
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
              name="seatingOption"
              id="standard"
              value="Standard"
              checked={booking.seatingOption === 'Standard'}
              onChange={handleBookingData}
            />
            <label className="form-check-label" htmlFor="standard">
              Standard
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="seatingOption"
              id="outside"
              value="Outside"
              checked={booking.seatingOption === 'Outside'}
              onChange={handleBookingData}
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
      </section>
    </>
  );
};

export default BookingForm;
